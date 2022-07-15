import { Dispatch, SetStateAction } from 'react'
import { HiArrowUp, HiArrowDown } from 'react-icons/hi'

interface VoteButtonsProps {
  value: number
  setChangeVote: Dispatch<SetStateAction<number>>
}

export function VoteButtons({ value, setChangeVote }: VoteButtonsProps) {
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setChangeVote(1)}>
        <HiArrowUp size={20} className="text-slate-600 dark:text-slate-300" />
      </button>
      <span className="text-slate-600 dark:text-slate-300">{value}</span>
      <button onClick={() => setChangeVote(-1)}>
        <HiArrowDown size={20} className="text-slate-600 dark:text-slate-300" />
      </button>
    </div>
  )
}
