import React from 'react'

import ArcadiaLogo from '@/components/assets/ArcadiaLogo'
import Login from '@/components/login/Login'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="relative top-0 rounded-lg bg-white shadow dark:bg-gray-800">
      <nav className="fixed left-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a href="https://arcadia.dev/">
            <ArcadiaLogo />
          </a>
          <div className="flex w-auto items-center justify-between">
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
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
