import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { VoteButtons } from './VoteButtons'

interface AnswerProps {
  answer: {
    _id: string
    author: {
      id: string
      displayName: string
      photoURL: string
    }
    topicId: string
    body: string
    createdAt: string
    upvotes: string
    downvotes: string
  }
}

export function Answer({ answer }: AnswerProps) {
  const router = useRouter()
  const [styleProps, setStyleProps] = useState('')

  useEffect(() => {
    if (
      router.pathname === '/user/[id]' ||
      router.pathname === '/answer/[id]'
    ) {
      setStyleProps('bg-white dark:bg-slate-900 shadow-md p-6')
    } else {
      setStyleProps('border-t border-slate-300 pt-4')
    }
  }, [router.pathname])

  return (
    <article className={`flex flex-col gap-4 ${styleProps}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {answer.author && (
            <Image
              src={answer.author.photoURL}
              width="32px"
              height="32px"
              className="rounded-full"
            />
          )}
          <p className="ml-2 text-slate-600 dark:text-slate-300 font-medium">
            {answer.author.displayName}
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-300">{answer.createdAt}</p>
      </div>
      <div className="ml-10 flex flex-col gap-4">
        <p className="text-slate-600 dark:text-slate-300">{answer.body}</p>
        <div className="flex items-center justify-center flex-wrap sm: sm:items-center sm:justify-between">
          <VoteButtons />
          <div className="flex items-center gap-4 justify-between mt-4 w-full sm:w-auto sm:mt-0">
            <button className="hover:text-brand dark:text-white dark:hover:text-brand">
              Share
            </button>
            <button className="hover:text-brand dark:text-white dark:hover:text-brand">
              Report
            </button>
            <button className="hover:text-brand dark:text-white dark:hover:text-brand">
              Remove
            </button>
          </div>
        </div>
      </div>
    </article>
  )
}
