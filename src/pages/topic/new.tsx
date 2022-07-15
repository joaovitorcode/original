import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Write } from '../../components/Write'
import { Aside } from '../../components/Aside'
import axios from 'axios'
import { useAuth } from '../../hooks/useAuth'

const NewTopicPage: NextPage = () => {
  const [value, setValue] = useState('')
  const [publish, setPublish] = useState(false)
  const { currentUser } = useAuth()

  useEffect(() => {
    async function handleSubmit() {
      await axios.post('/api/addTopic', {
        author: {
          id: currentUser?.uid,
          displayName: currentUser?.displayName,
          photoURL: currentUser?.photoURL,
        },
        title: '',
        body: value,
        createdAt: new Date(),
        upvotes: [],
        downvotes: [],
      })
    }

    if (publish) handleSubmit()
  }, [publish])

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
            <Write setValue={setValue} setPublish={setPublish} />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default NewTopicPage
