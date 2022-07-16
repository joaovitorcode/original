import { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'
import { VoteButtons } from './VoteButtons'
import { ReportModal } from './ReportModal'
import { toast } from 'react-toastify'
import axios from 'axios'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { useAuth } from '../hooks/useAuth'

interface TopicProps {
  children?: ReactNode
  topic?: {
    _id: string
    author: {
      id: string
      displayName: string
      photoURL: string
    }
    title: string
    body: string
    createdAt: string
    upvotes: Array<string>
    downvotes: Array<string>
  }
}

export function Topic({ children, topic }: TopicProps) {
  const [isOpen, setIsOpen] = useState(false)
  const notify = () => toast.success('Link copied with successfully!')
  const votes = topic?.upvotes.length! - topic?.downvotes.length!
  const [changeVote, setChangeVote] = useState(0)
  const { currentUser } = useAuth()

  async function handleSubmit() {
    await axios.delete(
      `http://localhost:3000/api/removeTopicById/${topic?._id}`
    )
  }

  useEffect(() => {
    if (changeVote === 1) {
      axios
        .patch(`/api/addVoteToTopic`, {
          addUpvote: topic?._id,
          authorId: currentUser?.uid,
        })
        .then(response => console.log(response))
    }
    if (changeVote === -1) {
      axios
        .patch(`/api/addVoteToTopic`, {
          addDownvote: topic?._id,
          authorId: currentUser?.uid,
        })
        .then(response => console.log(response))
    }
  }, [changeVote])

  return (
    <article className="bg-white dark:bg-slate-800 shadow-md p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {topic?.author && (
            <Image
              src={topic.author.photoURL}
              width="32px"
              height="32px"
              className="rounded-full"
            />
          )}
          <p className="ml-2 text-slate-600 dark:text-slate-300 font-medium">
            {topic?.author.displayName}
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-300">{topic?.createdAt}</p>
      </div>
      <h1 className="text-2xl font-medium dark:text-white">
        How to learn javascript?
      </h1>
      <p className="text-slate-600 dark:text-slate-300">{topic?.body}</p>
      <div className="flex flex-wrap justify-center sm:items-center sm:justify-between">
        <VoteButtons value={votes} setChangeVote={setChangeVote} />
        <div className="flex items-center justify-between gap-4 mt-4 w-full sm:w-auto sm:mt-0">
          <button className="hover:text-brand dark:hover:text-brand dark:text-white">
            Reply
          </button>
          <CopyToClipboard text={`http://localhost:3000/topic/${topic?._id}`}>
            <button
              onClick={notify}
              className="hover:text-brand dark:hover:text-brand dark:text-white"
            >
              Share
            </button>
          </CopyToClipboard>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:text-brand dark:hover:text-brand dark:text-white"
          >
            Report
          </button>
          <button className="hover:text-brand dark:hover:text-brand dark:text-white">
            Edit
          </button>
          <button
            onClick={handleSubmit}
            className="hover:text-brand dark:hover:text-brand dark:text-white"
          >
            Remove
          </button>
        </div>
      </div>
      {children && <div className="flex flex-col gap-4">{children}</div>}
      {isOpen && (
        <ReportModal
          setIsOpen={setIsOpen}
          subjectURL={`http://localhost:3000/topic/${topic?._id}`}
        />
      )}
    </article>
  )
}
