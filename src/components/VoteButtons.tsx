import { HiArrowUp, HiArrowDown } from 'react-icons/hi'

export function VoteButtons() {
  return (
    <div className="flex items-center gap-4">
      <button>
        <HiArrowUp size={20} className="text-slate-600 dark:text-slate-300" />
      </button>
      <span className="text-slate-600 dark:text-slate-300">56</span>
      <button>
        <HiArrowDown size={20} className="text-slate-600 dark:text-slate-300" />
      </button>
    </div>
  )
}
