import { ReactNode } from 'react'
import Image from 'next/image'
import { VoteButtons } from './VoteButtons'

interface TopicProps {
  children?: ReactNode
}

export function Topic({ children }: TopicProps) {
  return (
    <article className="bg-white shadow-md p-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            width="32px"
            height="32px"
            className="rounded-full"
          />
          <p className="ml-2 text-slate-600 font-medium">João Vitor</p>
        </div>
        <p className="text-slate-600">01 Jul 2022</p>
      </div>
      <h1 className="text-2xl font-medium">How to learn javascript?</h1>
      <p className="text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper,
        libero vitae cursus lacinia, sapien sapien commodo lorem, a tincidunt
        nunc felis vel nibh. In et lacus faucibus, ornare arcu id, auctor felis.
      </p>
      <div className="flex items-center justify-between">
        <VoteButtons />
        <div className="flex items-center gap-4">
          <button className="hover:text-brand">Reply</button>
          <button className="hover:text-brand">Share</button>
          <button className="hover:text-brand">Report</button>
          <button className="hover:text-brand">Edit</button>
          <button className="hover:text-brand">Remove</button>
        </div>
      </div>
      {children && <div className="flex flex-col gap-4">{children}</div>}
    </article>
  )
}
