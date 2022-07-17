import Link from 'next/link'
import { HiArrowUp } from 'react-icons/hi'
import { User } from './User'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth'

interface UserProps {
  _id: string
  displayName: string
  photoURL: string
  countVotes: number
}

export function Aside() {
  const [users, setUsers] = useState([])
  const { currentUser } = useAuth()

  useEffect(() => {
    axios
      .get('/api/getTopUsers')
      .then(response => setUsers(response.data.users))
  }, [])

  return (
    <div className="hidden xl:inline-block">
      {currentUser && (
        <Link href="/topic/new">
          <a className="w-full block text-center py-3 bg-brand hover:bg-white dark:hover:bg-slate-800 text-white hover:text-brand border border-brand rounded transition-colors mb-6">
            Start new Topic
          </a>
        </Link>
      )}
      <aside className="bg-white dark:bg-slate-800 sm:shadow-md p-4 flex flex-col items-start gap-6">
        <span className="w-full flex justify-between">
          <span className="text-slate-600 dark:text-slate-300 font-medium">
            Top users
          </span>
          <HiArrowUp size={20} className="text-brand" />
        </span>
        {users.map((user: UserProps) => (
          <User key={user._id} user={user} />
        ))}
        {currentUser && (
          <>
            <div className="w-full border-t border-slate-300" />
            {users.map(
              (user: UserProps) =>
                user._id.includes(currentUser.uid) && (
                  <User key={user._id} user={user} />
                )
            )}
          </>
        )}
      </aside>
    </div>
  )
}
