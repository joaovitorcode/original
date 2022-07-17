import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Write } from '../../components/Write'
import { Aside } from '../../components/Aside'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'
import { useRouter } from 'next/router'

const NewTopicPage: NextPage = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const { currentUser } = useAuth()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit() {
    setIsLoading(true)
    await axios.post('/api/addTopic', {
      author: {
        id: currentUser?.uid,
        displayName: currentUser?.displayName,
        photoURL: currentUser?.photoURL,
      },
      title,
      body,
      createdAt: new Date(),
      upvotes: [],
      downvotes: [],
    })
    router.push('/')
    setIsLoading(false)
  }

  return (
    <div>
      <Head>
        <title>New Topic</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            <span className="text-slate-800 dark:text-white font-medium uppercase mx-2 sm:mx-0">
              Write a Topic
            </span>
            <Write
              title={title}
              setTitle={setTitle}
              setBody={setBody}
              handleSubmit={handleSubmit}
              isLoading={isLoading}
            />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default NewTopicPage
