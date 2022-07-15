import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db } from 'mongodb'

let cachedDb: Db

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb
  }

  const client = await MongoClient.connect(uri)

  const db = client.db(process.env.MONGODB_NAME!)

  cachedDb = db

  return db
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req

  const regexUrl = url?.match(/([^/]+$)/)![0]

  const db = await connectToDatabase(process.env.MONGODB_URI!)

  // Remove user data
  const users = db.collection('users')
  await users.deleteOne({ _id: regexUrl })

  // Remove user topics
  const topics = db.collection('topics')
  topics.deleteMany({ 'author.id': regexUrl })

  // Remove user answers
  const answers = db.collection('answers')
  answers.deleteMany({ 'author.id': regexUrl })

  // Remove user votes in topics collection
  await topics.updateOne(
    { 'author.id': regexUrl },
    {
      $pull: {
        upvotes: regexUrl,
        downvotes: regexUrl,
      },
    }
  )

  // Remove user votes in answer collection
  await answers.updateOne(
    { 'author.id': regexUrl },
    {
      $pull: {
        upvotes: regexUrl,
        downvotes: regexUrl,
      },
    }
  )

  return res.status(201).json({ message: 'All Right' })
}
