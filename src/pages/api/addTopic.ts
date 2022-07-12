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
  const { author, title, body, createdAt, upvotes, downvotes } = req.body

  const db = await connectToDatabase(process.env.MONGODB_URI!)

  const topics = db.collection('topics')

  await topics.insertOne({
    author,
    title,
    body,
    createdAt,
    upvotes,
    downvotes,
  })

  return res.status(201).json({ message: 'All Right' })
}
