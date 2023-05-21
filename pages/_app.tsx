import type { AppProps } from 'next/app'
import AuthProvider from '../providers/AuthProvider'
import 'normalize.css'
import '@/styles/globals.css'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import IconHandler from '@/components/assets/IconHandler'
import { useEffect, useRef, useState } from 'react'
import Button from '@/components/button/Button'

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('light')
  const rootRef = useRef(null)
  const handleThemeChange = (mode: string) => {
    setTheme(mode)
  }

  return (
    <AuthProvider>
      <div
        className={`flex justify-center p-20 ${theme === 'dark' ? 'dark' : ''}`}
        ref={rootRef}
      >
        <Header theme={theme} />
        <main id="content" role="main" className="relative m-10 flex flex-col">
          <Component {...pageProps} />
        </main>

        <Footer
          theme={theme}
          handleThemeChange={(mode) => handleThemeChange(mode)}
        />
      </div>
    </AuthProvider>
  )
}
