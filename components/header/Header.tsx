import React from 'react'

import ArcadiaLogo from '@/components/assets/ArcadiaLogo'
import Login from '@/components/login/Login'
import Link from 'next/link'

export type HeaderProps = {
  theme: string
}

const Header: React.FC<HeaderProps> = ({ theme }) => {
  return (
    <header className="relative top-0 flex-shrink-0 rounded-lg bg-white shadow dark:bg-gray-800">
      <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between p-2">
          <a href="https://arcadia.dev/" className="hidden md:block">
            <ArcadiaLogo theme={theme} />
          </a>
          <div className="flex w-auto">
            <ul className="flex rounded-lg border border-gray-100 p-1 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
              <li>
                <Link
                  href="/"
                  className="block rounded bg-blue-400 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-400 md:dark:text-blue-400"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-400 md:dark:hover:bg-transparent md:dark:hover:text-blue-400"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          <Login />
        </div>
      </nav>
    </header>
  )
}

export default Header
