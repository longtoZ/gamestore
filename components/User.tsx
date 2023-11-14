'use client'

import React from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import LogoutIcon from '@mui/icons-material/Logout';

const User = () => {
  const { data: session } = useSession()

  return (
    <div className='flex justify-end mt-20'>
        <button onClick={() => signOut()} className='bg-red-500 text-white rounded-lg px-4 py-2 my-2'>
          Log out
          <LogoutIcon/>
        </button>
    </div>
  )
}

export default User