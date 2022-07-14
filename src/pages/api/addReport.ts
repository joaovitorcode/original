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
  const { subjectURL, createdAt, moderated, reported } = req.body

  const db = await connectToDatabase(process.env.MONGODB_URI!)

  const reports = db.collection('reports')

  const report = await reports.findOne({ subjectURL })

  if (!report) {
    await reports.insertOne({
      subjectURL,
      createdAt,
      moderated,
      reported,
    })
  }

  return res.status(201).json({ message: 'All Right' })
}
