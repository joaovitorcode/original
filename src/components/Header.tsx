import Image from 'next/image'
import { GoogleButton } from './GoogleButton'

export function Header() {
  return (
    <header className="w-full h-20 bg-white shadow-md">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between">
        <Image src="/logo.svg" alt="logo" width="121px" height="35px" />
        <GoogleButton />
      </div>
    </header>
  )
}
