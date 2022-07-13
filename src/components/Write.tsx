import { useState, Dispatch, SetStateAction } from 'react'

interface CommentProps {
  styleProps?: boolean
  value?: string
  setValue: Dispatch<SetStateAction<string>>
  setPublish: Dispatch<SetStateAction<boolean>>
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
        value={props.value}
        onChange={event => props.setValue(event.target.value)}
        type="text"
        placeholder="Type something..."
        className="border border-slate-300 dark:border-slate-600 p-3 rounded dark:bg-slate-800 dark:text-white"
      />
      <div className="w-full flex items-center justify-between">
        <span className="text-slate-600 dark:text-slate-300 text-sm">
          max. 0/1.000
        </span>
        <button
          onClick={() => props.setPublish(true)}
          className="py-1 px-3 bg-brand hover:bg-white dark:hover:bg-slate-900 text-white hover:text-brand border border-brand rounded transition-colors"
        >
          Publish
        </button>
      </div>
    </div>
  )
}
