import type { NextPage, GetServerSidePropsContext } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Topic } from '../../components/Topic'
import { Aside } from '../../components/Aside'
import axios from 'axios'

const TopicPage: NextPage = ({ data }: any) => {
  const router = useRouter()

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
            <Topic topic={data.topic} />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const id = context.params?.id

  const response = await axios.get(
    `http://localhost:3000/api/getTopicById/${id}`
  )

  return {
    props: {
      data: response.data,
    },
  }
}

export default TopicPage
