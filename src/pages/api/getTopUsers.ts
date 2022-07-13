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
  const db = await connectToDatabase(process.env.MONGODB_URI!)

  const users = db.collection('users')

  users
    .find({})
    .sort({ countVotes: 'desc' })
    .toArray((err, result) => {
      if (err) throw err
      return res.status(201).json({ users: result })
    })
}
