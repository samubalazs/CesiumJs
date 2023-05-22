'use client'
import { useEffect } from 'react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Button from '../button/Button'

const Login: React.FC = () => {
  const router = useRouter()
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.user) router.push('/locations')
    // else router.push('/')
  }, [session])

  const handleSignIn = () => {
    signIn()
  }

  const handleSignOut = () => {
    signOut()
  }

  return (
    <>
      {session ? (
        <div className="flex items-center gap-2">
          {session.user && <span>Welcome {session.user.name}</span>}
          <Button displayText="Sign Out" handleClick={handleSignOut} />
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <span className="sm:truncate-none block max-w-[105px] truncate rounded py-2 pl-3 pr-4 text-blue-400 sm:max-w-full md:max-w-xs md:bg-transparent md:p-0">
            Please log in with your Google account
          </span>
          <Button displayText="Sign In" handleClick={handleSignIn} />
        </div>
      )}
    </>
  )
}

export default Login
