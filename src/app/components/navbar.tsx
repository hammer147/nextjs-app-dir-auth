import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

import Link from 'next/link'
import { LoginButton, LogoutButton, ProfileButton, RegisterButton } from '@/app/components/buttons'

export default async function Navbar() {
  const session = await getServerSession(authOptions)

  return (
    <nav className='sticky top-0 flex justify-between bg-slate-600 p-4 drop-shadow-xl md:flex-row'>
      {session ? (
        <>
          <LogoutButton />
          <ProfileButton />
        </>
      ) : (
        <>
          <LoginButton />
          <RegisterButton />
        </>
      )}
    </nav>
  )
}

// note that if we protect every page via middleware, we can remove the ternary above