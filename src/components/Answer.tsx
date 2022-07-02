import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { VoteButtons } from './VoteButtons'

export function Answer() {
  const router = useRouter()
  const [styleProps, setStyleProps] = useState('')

  useEffect(() => {
    if (
      router.pathname === '/user/[id]' ||
      router.pathname === '/answer/[id]'
    ) {
      setStyleProps('bg-white shadow-md p-6')
    } else {
      setStyleProps('border-t border-slate-300 pt-4')
    }
  }, [router.pathname])

  return (
    <article className={`flex flex-col gap-4 ${styleProps}`}>
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
      <div className="ml-10 flex flex-col gap-4">
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          semper, libero vitae cursus lacinia, sapien sapien commodo lorem, a
          tincidunt nunc felis vel nibh. In et lacus faucibus, ornare arcu id,
          auctor felis.
        </p>
        <div className="flex items-center justify-between">
          <VoteButtons />
          <div className="flex items-center gap-4">
            <button className="hover:text-brand">Share</button>
            <button className="hover:text-brand">Report</button>
            <button className="hover:text-brand">Remove</button>
          </div>
        </div>
      </div>
    </article>
  )
}
