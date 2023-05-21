import type { AppProps } from 'next/app'
import AuthProvider from '../providers/AuthProvider'
import 'normalize.css'
import '@/styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import SunIcon from '@/components/assets/SunIcon'
import IconHandler from '@/components/assets/IconHandler'

export default function App({ Component, pageProps }: AppProps) {
  const modeOptions = [
    { name: 'sun', text: 'light' },
    { name: 'moon', text: 'dark' },
  ]
  return (
    <AuthProvider>
      <div className="flex justify-center p-20">
        <Header />
        <main
          id="content"
          role="main"
          className="relative m-10 flex shrink-0 flex-grow flex-col"
        >
          <Component {...pageProps} />
        </main>
        <div className="top-35 fixed right-10 rounded bg-gray-100 p-5 duration-100 dark:bg-slate-700">
          {modeOptions.map((mode) => (
            <button>
              <IconHandler iconName={mode.name} />
            </button>
          ))}
        </div>
        <Footer />
      </div>
    </AuthProvider>
  )
}
