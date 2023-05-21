import Image from 'next/image'

export type LogoProps = {
  theme: string
}

const ArcadiaLogo: React.FC<LogoProps> = ({ theme }) => {
  return (
    <Image
      src={theme === 'light' ? '/logo_01.png' : '/logo_02.png'}
      alt="Arcadia"
      width="160"
      height="64"
    />
  )
}

export default ArcadiaLogo
