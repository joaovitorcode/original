import { useState } from 'react'

interface CommentProps {
  styleProps?: boolean
}

export function Write(props: CommentProps) {
  const [styleProps] = useState('border-t border-slate-300 pt-4')

  return (
    <div className={`flex flex-col gap-2 ${props.styleProps && styleProps}`}>
      <input
        type="text"
        placeholder="Type something..."
        className="border border-slate-300 p-3 rounded"
      />
      <div className="w-full flex items-center justify-between">
        <span className="text-slate-600 text-sm">max. 0/1.000</span>
        <button className="py-1 px-3 bg-brand hover:bg-white text-white hover:text-brand border border-brand rounded transition-colors">
          Published
        </button>
      </div>
    </div>
  )
}
