import { IconOptions } from '@/typings/icons'
import * as React from 'react'
import SunIcon from './SunIcon'
import MoonIcon from './MoonIcon'
import FeatureIcon from './FeatureIcon'

type IconHandlerProps = {
  iconName: string
  iconOptions?: IconOptions
}

type IconMap = {
  [key: string]: React.FC<IconOptions>
}

const IconHandler: React.FC<IconHandlerProps> = ({ iconName, iconOptions }) => {
  const iconMap: IconMap = {
    sun: SunIcon,
    moon: MoonIcon,
    featureIcon: FeatureIcon,
  }
  const { fill, width, height } = { ...iconOptions }

  const SelectedIcon = iconMap[iconName]

  if (!SelectedIcon) {
    console.warn(`Icon "${iconName}" is not found.`)
    return null
  }

  return (
    <SelectedIcon
      {...{ fill: fill ?? 'black', width: width, height: height }}
    />
  )
}

export default IconHandler
