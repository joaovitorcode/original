import { useState, Dispatch, SetStateAction } from 'react'
import TextareaAutosize from 'react-textarea-autosize'

interface CommentProps {
  styleProps?: boolean
  title?: string
  setTitle?: Dispatch<SetStateAction<string>>
  body?: string
  setBody: Dispatch<SetStateAction<string>>
  handleSubmit: () => void
  isLoading: boolean
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
      <TextareaAutosize
        value={props.body}
        onChange={event => props.setBody(event.target.value)}
        placeholder="Body..."
        className="border border-slate-300 dark:border-slate-600 p-3 rounded dark:bg-slate-800 dark:text-white"
      />
      <div className="w-full flex items-center justify-end">
        <button
          disabled={props.isLoading}
          onClick={props.handleSubmit}
          className="py-1 px-3 bg-brand hover:bg-white dark:hover:bg-slate-800 text-white hover:text-brand border border-brand rounded transition-colors disabled:bg-slate-300 disabled:border-slate-300 disabled:text-white disabled:dark:bg-slate-600 disabled:dark:border-slate-600 disabled:dark:text-slate-300"
        >
          Publish
        </button>
      </div>
    </div>
  )
}
