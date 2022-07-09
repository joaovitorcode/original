import { FcGoogle } from 'react-icons/fc'

interface GoogleButtonProps {
  styleProps?: string
  onClick: () => void
}

export function GoogleButton(props: GoogleButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`sm:w-auto h-10 px-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-600 shadow rounded transition-colors flex items-center gap-2 ${props.styleProps}`}
    >
      <FcGoogle size={20} /> Sign in with Google
    </button>
  )
}
