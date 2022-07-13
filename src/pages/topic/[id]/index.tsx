import type { NextPage, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../../../components/Header'
import { Nav } from '../../../components/Nav'
import { Topic } from '../../../components/Topic'
import { Write } from '../../../components/Write'
import { Answer } from '../../../components/Answer'
import { Aside } from '../../../components/Aside'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useAuth } from '../../../hooks/useAuth'

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
  upvotes: string
  downvotes: string
}

const TopicPage: NextPage = ({ topicProps, answersProps }: any) => {
  const router = useRouter()
  const [value, setValue] = useState('')
  const [publish, setPublish] = useState(false)
  const { currentUser } = useAuth()
  const topic = topicProps.topic
  const answers = answersProps.answers

  useEffect(() => {
    async function handleSubmit() {
      await axios.post('/api/addAnswer', {
        author: {
          id: currentUser?.uid,
          displayName: currentUser?.displayName,
          photoURL: currentUser?.photoURL,
        },
        topicId: router.query.id,
        body: value,
        createdAt: new Date(),
        upvotes: 0,
        downvotes: 0,
      })
    }

    if (publish) handleSubmit()
  }, [publish])

  return (
    <div>
      <Head>
        <title>Topic: {router.query.id}</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            <Topic topic={topic}>
              <Write setValue={setValue} setPublish={setPublish} />
              {answers.map((answer: AnswerProps) => (
                <Answer key={answer._id} answer={answer} />
              ))}
            </Topic>
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id

  const topic = await axios.get(`http://localhost:3000/api/getTopicById/${id}`)

  const answers = await axios.get(
    `http://localhost:3000/api/getAllAnswersByTopicId/${id}`
  )

  return {
    props: {
      topicProps: topic.data,
      answersProps: answers.data,
    },
  }
}

export default TopicPage