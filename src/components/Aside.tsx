import Link from 'next/link'
import { HiArrowUp } from 'react-icons/hi'
import { User } from './User'

export function Aside() {
  return (
    <div>
      <Link href="/topic/new">
        <a className="w-full block text-center py-3 bg-brand hover:bg-white text-white hover:text-brand border border-brand rounded transition-colors mb-6">
          Start new Topic
        </a>
      </Link>
      <aside className="bg-white shadow-md p-4 flex flex-col items-start gap-6">
        <span className="w-full flex justify-between">
          <span className="text-slate-600 font-medium">Top users</span>
          <HiArrowUp size={20} className="text-brand" />
        </span>
        <User />
        <User />
        <User />
        <User />
        <User />
        <Link href="/top-users">
          <a className="text-brand">View more</a>
        </Link>
        <div className="w-full border-t border-slate-300" />
        <User />
      </aside>
    </div>
  )
}
