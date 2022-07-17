import type { GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../../../components/Header'
import { Nav } from '../../../components/Nav'
import { Write } from '../../../components/Write'
import { Aside } from '../../../components/Aside'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/router'

const EditTopicPage: NextPage = ({ data }: any) => {
  const [title, setTitle] = useState(data.topic.title)
  const [body, setBody] = useState(data.topic.body)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit() {
    setIsLoading(true)
    await axios.patch(`/api/editTopicById/${data.topic._id}`, {
      title,
      body,
    })
    router.push('/')
    setIsLoading(false)
  }

  return (
    <div>
      <Head>
        <title>Edit Topic</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            <span className="text-slate-800 dark:text-white font-medium uppercase mx-2 sm:mx-0">
              Edit a Topic
            </span>
            <Write
              title={title}
              setTitle={setTitle}
              body={body}
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

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const response = await axios.get(
    `http://localhost:3000/api/getTopicById/${context.params?.id}`
  )

  return {
    props: {
      data: response.data,
    },
  }
}

export default EditTopicPage
