import type { AppProps } from 'next/app'
import AuthProvider from '../providers/AuthProvider'
import { ThemeProvider } from 'next-themes'
import 'normalize.css'
import '@/styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ThemeProvider attribute="class">
        <div className={`flex justify-center p-20`}>
          <Header />
          <main
            id="content"
            role="main"
            className="relative m-10 flex flex-col"
          >
            <Component {...pageProps} />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </AuthProvider>
  )
}
