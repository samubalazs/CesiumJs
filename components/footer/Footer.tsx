import React from 'react'
import IconHandler from '../assets/IconHandler'
import { useTheme } from 'next-themes'

export type FooterProps = {
  theme: string
  handleThemeChange: (mode: string) => void
}

const Footer: React.FC = () => {
  const modeOptions = [
    { name: 'sun', text: 'light' },
    { name: 'moon', text: 'dark' },
  ]
  const { theme, setTheme } = useTheme()

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    mode: string,
  ) => {
    e.preventDefault()
    mode == 'light' ? setTheme('light') : setTheme('dark')
  }

  return (
    <footer className="border-1 fixed bottom-0 mx-auto flex w-[100vw] max-w-screen-xl flex-wrap items-center justify-between rounded-t-lg border border-blue-400 bg-white p-4 py-6 text-gray-900 dark:bg-gray-900">
      <div className="top-35 fixed flex gap-5 rounded bg-gray-300 p-2 duration-100">
        {modeOptions.map((mode) => (
          <button
            key={mode.name}
            onClick={(e) => onButtonClick(e, mode.text)}
            className="h-5 w-5 rounded-full leading-9"
          >
            <IconHandler
              iconName={mode.name}
              iconOptions={{
                fill: theme && theme === mode.text ? 'blue' : 'black',
              }}
            />
          </button>
        ))}
      </div>
    </footer>
  )
}

export default Footer
