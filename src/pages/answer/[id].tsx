import type { GetServerSidePropsContext, NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { Header } from '../../components/Header'
import { Nav } from '../../components/Nav'
import { Answer } from '../../components/Answer'
import { Aside } from '../../components/Aside'
import axios from 'axios'

const AnswerPage: NextPage = ({ data }: any) => {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Answer: {router.query.id}</title>
      </Head>

      <div className="w-full h-full">
        <Header />
        <div className="max-w-7xl mx-auto py-6 grid lg:grid-cols-[1fr_768px] xl:grid-cols-[1fr_768px_1fr] sm:gap-6 top-16">
          <Nav className="hidden lg:inline-block" />
          <main className="flex flex-col gap-6">
            <Answer answer={data.answer} />
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
    `http://localhost:3000/api/getAnswerById/${id}`
  )

  return {
    props: {
      data: response.data,
    },
  }
}

export default AnswerPage
