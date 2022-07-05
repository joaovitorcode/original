import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Topic } from '../../components/Topic'
import { Aside } from '../../components/Aside'

const TopicPage: NextPage = () => {
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
            <Topic />
          </main>
          <Aside />
        </div>
      </div>
    </div>
  )
}

export default TopicPage
