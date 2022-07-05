import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import { GoogleButton } from './GoogleButton'
import { MdMenu } from 'react-icons/md'
import { Nav } from '../components/Nav'
import { ToggleColorModoButton } from '../components/ToggleColorModoButton'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full h-16 bg-white dark:bg-slate-900 shadow-md sticky top-0 z-10">
      <div className="max-w-7xl h-full flex items-center justify-between mx-4 xl:mx-auto">
        <Image src="/logo.svg" alt="logo" width="121px" height="35px" />
        <div className="flex gap-4">
          <ToggleColorModoButton />
          <button className="xl:hidden dark:text-white">
            <MdMenu onClick={() => setIsOpen(!isOpen)} size={24} />
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="w-full bg-white dark:bg-slate-900 shadow-md pb-4">
          <Nav className="lg:hidden" />
          <Link href="/topic/new">
            <a className="block text-center py-3 bg-brand hover:bg-white dark:hover:bg-slate-900 text-white hover:text-brand border border-brand rounded transition-colors mx-4 mt-4">
              Start new Topic
            </a>
          </Link>
        </div>
      )}
    </header>
  )
}
