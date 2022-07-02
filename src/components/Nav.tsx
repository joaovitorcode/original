import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  HiOutlineHome,
  HiOutlineExclamation,
  HiOutlineUser,
} from 'react-icons/hi'

export function Nav() {
  const router = useRouter()
  const [styleProps] = useState('text-brand bg-brand bg-opacity-10')

  return (
    <nav>
      <Link href="/">
        <a
          className={`w-full px-4 py-3 text-start flex text-slate-600 hover:text-brand hover:bg-brand hover:bg-opacity-10 ${
            router.pathname === '/' && styleProps
          }`}
        >
          <HiOutlineHome size={24} className="mr-2" />
          Home
        </a>
      </Link>
      <Link href="/user/1">
        <a
          className={`w-full px-4 py-3 text-start flex text-slate-600 hover:text-brand hover:bg-brand hover:bg-opacity-10 ${
            router.pathname === '/user/[id]' && styleProps
          }`}
        >
          <HiOutlineUser size={24} className="mr-2" />
          Profile
        </a>
      </Link>
      <Link href="/danger">
        <a
          className={`w-full px-4 py-3 text-start flex text-slate-600 hover:text-brand hover:bg-brand hover:bg-opacity-10 ${
            router.pathname === '/danger' && styleProps
          }`}
        >
          <HiOutlineExclamation size={24} className="mr-2" />
          Danger
        </a>
      </Link>
    </nav>
  )
}
