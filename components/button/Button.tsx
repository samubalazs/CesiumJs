import React, { MouseEvent } from 'react'

type ButtonProps = {
  displayText: string
  handleClick: () => void
}

const Button: React.FC<ButtonProps> = ({ displayText, handleClick }) => {
  const buttonClasses =
    'rounded-lg border border-blue-400 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-400 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700'

  const handleButtonClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    handleClick()
  }

  return (
    <button className={buttonClasses} onClick={handleButtonClick}>
      {displayText}
    </button>
  )
}

export default Button
