import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'
import { Topic } from '../components/Topic'
import { Aside } from '../components/Aside'
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

const Home: NextPage = ({ data }: any) => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            {data.topics.map((topic: TopicProps) => (
              <Topic key={topic._id} topic={topic} />
            ))}
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  const response = await axios.get('/api/getAllTopics')

  return {
    props: {
      data: response.data,
    },
  }
}

export default Home
