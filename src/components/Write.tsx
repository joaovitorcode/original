import { useState } from 'react'

interface CommentProps {
  styleProps?: boolean
}

export function Write(props: CommentProps) {
  const [styleProps] = useState('border-t border-slate-300 pt-4')

  return (
    <div
      className={`flex flex-col gap-2 mx-2 sm:mx-0 ${
        props.styleProps && styleProps
      }`}
    >
      <input
        type="text"
        placeholder="Type something..."
        className="border border-slate-300 dark:border-slate-600 p-3 rounded dark:bg-slate-800 dark:text-white"
      />
      <div className="w-full flex items-center justify-between">
        <span className="text-slate-600 dark:text-slate-300 text-sm">
          max. 0/1.000
        </span>
        <button className="py-1 px-3 bg-brand hover:bg-white dark:hover:bg-slate-900 text-white hover:text-brand border border-brand rounded transition-colors">
          Published
        </button>
      </div>
    </div>
  )
}
