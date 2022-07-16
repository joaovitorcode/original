import Image from 'next/image'
import { useState } from 'react'

interface UserProps {
  styleProps?: boolean
  user?: any
}

export function User(props: UserProps) {
  const [styleProps] = useState('bg-white dark:bg-slate-800 shadow-md p-6')

  return (
    <div
      className={`w-full flex items-center justify-between ${
        props.styleProps && styleProps
      }`}
    >
      <div className="flex items-center">
        {props.user?.photoURL && (
          <Image
            src={props.user?.photoURL}
            width="32px"
            height="32px"
            className="rounded-full"
          />
        )}
        <p className="ml-2 text-slate-600 dark:text-slate-300 font-medium">
          {props.user?.displayName}
        </p>
      </div>
      <span className="text-gray-600 dark:text-slate-300">
        {props.user?.countVotes}
      </span>
    </div>
  )
}
