import Image from 'next/image'
import { useState } from 'react'

interface UserProps {
  styleProps?: boolean
}

export function User(props: UserProps) {
  const [styleProps] = useState('bg-white shadow-md p-6')

  return (
    <div
      className={`w-full flex items-center justify-between ${
        props.styleProps && styleProps
      }`}
    >
      <div className="flex items-center">
        <Image
          src="/avatar.png"
          width="32px"
          height="32px"
          className="rounded-full"
        />
        <p className="ml-2 text-slate-600 font-medium">João Vitor</p>
      </div>
      <span className="text-gray-600">10.2k</span>
    </div>
  )
}
