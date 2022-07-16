import type { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Aside } from '../../components/Aside'
import { User } from '../../components/User'
import { Topic } from '../../components/Topic'
import { Answer } from '../../components/Answer'
import { useState } from 'react'
import axios from 'axios'

interface TopicProps {
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

interface AnswerProps {
  _id: string
  author: {
    id: string
    displayName: string
    photoURL: string
  }
  topicId: string
  body: string
  createdAt: string
  upvotes: Array<string>
  downvotes: Array<string>
}

const UserPage: NextPage = ({ userProps, topicsProps, answersProps }: any) => {
  const [toggle, setToggle] = useState('topics')
  const [styleProps] = useState('bg-brand bg-opacity-10 text-brand')
  const router = useRouter()
  const topics = topicsProps.topics
  const answers = answersProps.answers

  function handleToggle(choice: string) {
    setToggle(choice)
  }

  return (
    <div>
      <Head>
        <title>User: {router.query.id}</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            <User user={userProps.user} styleProps />
            <div className="flex justify-between items-center mx-2 sm:mx-0">
              <span className="text-slate-800 dark:text-slate-400 font-medium uppercase">
                Publications
              </span>
              <div className="flex gap-4">
                <button
                  onClick={() => handleToggle('topics')}
                  className={`text-slate-600 dark:text-slate-400 hover:bg-brand hover:bg-opacity-10 hover:text-brand py-2 px-3 rounded ${
                    toggle === 'topics' && styleProps
                  }`}
                >
                  Topics
                </button>
                <button
                  onClick={() => handleToggle('answers')}
                  className={`text-slate-600 dark:text-slate-400 hover:bg-brand hover:bg-opacity-10 hover:text-brand py-2 px-3 rounded ${
                    toggle === 'answers' && styleProps
                  }`}
                >
                  Answers
                </button>
              </div>
            </div>
            {toggle === 'topics'
              ? topics.map((topic: TopicProps) => (
                  <Topic key={topic._id} topic={topic} />
                ))
              : answers.map((answer: AnswerProps) => (
                  <Answer key={answer._id} answer={answer} />
                ))}
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id

  const user = await axios.get(`http://localhost:3000/api/getUserById/${id}`)
  const topics = await axios.get(
    `http://localhost:3000/api/getAllTopicsByAuthorId/${id}`
  )
  const answers = await axios.get(
    `http://localhost:3000/api/getAllAnswersByAuthorId/${id}`
  )

  return {
    props: {
      userProps: user.data,
      topicsProps: topics.data,
      answersProps: answers.data,
    },
  }
}

export default UserPage
