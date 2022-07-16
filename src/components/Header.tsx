import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { GoogleButton } from './GoogleButton'
import { MdMenu } from 'react-icons/md'
import { Nav } from '../components/Nav'
import { ToggleColorModoButton } from '../components/ToggleColorModoButton'
import { useAuth } from '../hooks/useAuth'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { currentUser, signInWithGoogle, signOut } = useAuth()

  return (
    <header className="w-full h-16 bg-white dark:bg-slate-800 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl h-full flex items-center justify-between mx-4 xl:mx-auto">
        <Image src="/logo.svg" alt="logo" width="121px" height="35px" />
        <div className="flex gap-4 items-center">
          <ToggleColorModoButton />
          <div className="hidden sm:block">
            {currentUser ? (
              <button
                onClick={signOut}
                className="w-full h-10 sm:w-auto px-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 shadow rounded transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <GoogleButton onClick={signInWithGoogle} />
            )}
          </div>
          <button className="xl:hidden dark:text-white">
            <MdMenu onClick={() => setIsOpen(!isOpen)} size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full bg-white dark:bg-slate-800 shadow-md pb-4">
          <Nav className="lg:hidden" />

          <Link href="/topic/new">
            <a className="block text-center py-3 bg-brand hover:bg-white dark:hover:bg-slate-900 text-white hover:text-brand border border-brand rounded transition-colors mx-4 mt-4">
              Start new Topic
            </a>
          </Link>
          <div className="sm:hidden mx-4 mt-4">
            {currentUser ? (
              <button
                onClick={signOut}
                className="w-full h-12 sm:w-auto px-2 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 shadow rounded transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <GoogleButton
                onClick={signInWithGoogle}
                styleProps="w-full h-12 justify-center"
              />
            )}
          </div>
        </div>
      )}
    </header>
  )
}
