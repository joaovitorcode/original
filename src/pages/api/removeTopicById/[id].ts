import { NextApiRequest, NextApiResponse } from 'next'
import { MongoClient, Db, ObjectId } from 'mongodb'

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

  const topics = db.collection('topics')

  await topics.deleteOne({ _id: new ObjectId(regexUrl) })

  return res.status(201).json({ message: 'All Right' })
}
