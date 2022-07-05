import { ReactNode, useState } from 'react'
import Image from 'next/image'
import { VoteButtons } from './VoteButtons'
import { ReportModal } from './ReportModal'
import { toast } from 'react-toastify'

interface TopicProps {
  children?: ReactNode
}

export function Topic({ children }: TopicProps) {
  const [isOpen, setIsOpen] = useState(false)
  const notify = () => toast.success('Link copied with successfully!')

  return (
    <article className="bg-white dark:bg-slate-900 shadow-md p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            width="32px"
            height="32px"
            className="rounded-full"
          />
          <p className="ml-2 text-slate-600 dark:text-slate-300 font-medium">
            João Vitor
          </p>
        </div>
        <p className="text-slate-600 dark:text-slate-300">01 Jul 2022</p>
      </div>
      <h1 className="text-2xl font-medium dark:text-white">
        How to learn javascript?
      </h1>
      <p className="text-slate-600 dark:text-slate-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper,
        libero vitae cursus lacinia, sapien sapien commodo lorem, a tincidunt
        nunc felis vel nibh. In et lacus faucibus, ornare arcu id, auctor felis.
      </p>
      <div className="flex flex-wrap justify-center sm:items-center sm:justify-between">
        <VoteButtons />
        <div className="flex items-center justify-between gap-4 mt-4 w-full sm:w-auto sm:mt-0">
          <button className="hover:text-brand dark:hover:text-brand dark:text-white">
            Reply
          </button>
          <button
            onClick={notify}
            className="hover:text-brand dark:hover:text-brand dark:text-white"
          >
            Share
          </button>
          <button
            onClick={() => setIsOpen(true)}
            className="hover:text-brand dark:hover:text-brand dark:text-white"
          >
            Report
          </button>
          <button className="hover:text-brand dark:hover:text-brand dark:text-white">
            Edit
          </button>
          <button className="hover:text-brand dark:hover:text-brand dark:text-white">
            Remove
          </button>
        </div>
      </div>
      {children && <div className="flex flex-col gap-4">{children}</div>}
      {isOpen && <ReportModal setIsOpen={setIsOpen} />}
    </article>
  )
}
