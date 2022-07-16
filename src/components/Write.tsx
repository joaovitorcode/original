import { useState, Dispatch, SetStateAction } from 'react'

interface CommentProps {
  styleProps?: boolean
  title?: string
  setTitle?: Dispatch<SetStateAction<string>>
  body?: string
  setBody: Dispatch<SetStateAction<string>>
  handleSubmit: () => void
}

export function Write(props: CommentProps) {
  const [styleProps] = useState('border-t border-slate-300 pt-4')

  return (
    <div
      className={`flex flex-col gap-2 mx-2 sm:mx-0 ${
        props.styleProps && styleProps
      }`}
    >
      {typeof props.title === 'string' && (
        <input
          value={props.title}
          onChange={event => props.setTitle!(event.target.value)}
          type="text"
          placeholder="Title..."
          className="border border-slate-300 dark:border-slate-600 p-3 rounded dark:bg-slate-800 dark:text-white"
        />
      )}
      <input
        value={props.body}
        onChange={event => props.setBody(event.target.value)}
        type="text"
        placeholder="Body..."
        className="border border-slate-300 dark:border-slate-600 p-3 rounded dark:bg-slate-800 dark:text-white"
      />
      <div className="w-full flex items-center justify-between">
        <span className="text-slate-600 dark:text-slate-300 text-sm">
          max. 0/1.000
        </span>
        <button
          onClick={props.handleSubmit}
          className="py-1 px-3 bg-brand hover:bg-white dark:hover:bg-slate-800 text-white hover:text-brand border border-brand rounded transition-colors"
        >
          Publish
        </button>
      </div>
    </div>
  )
}
