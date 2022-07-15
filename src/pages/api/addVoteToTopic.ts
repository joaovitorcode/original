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
  const { addUpvote, addDownvote } = req.body

  const db = await connectToDatabase(process.env.MONGODB_URI!)

  const topics = db.collection('topics')

  const upvoteExists = await topics.findOne({ upvotes: addUpvote })
  const downvoteExists = await topics.findOne({ downvotes: addDownvote })

  if (addUpvote && !upvoteExists) {
    await topics.updateOne(
      { _id: new ObjectId(addUpvote || addDownvote) },
      {
        $push: {
          upvotes: addUpvote,
        },
      }
    )
  }

  if (addUpvote && upvoteExists) {
    await topics.updateOne(
      { _id: new ObjectId(addUpvote || addDownvote) },
      {
        $pull: {
          upvotes: addUpvote,
        },
      }
    )
  }

  if (addDownvote && !downvoteExists) {
    await topics.updateOne(
      { _id: new ObjectId(addUpvote || addDownvote) },
      {
        $push: {
          downvotes: addDownvote,
        },
      }
    )
  }

  if (addDownvote && downvoteExists) {
    await topics.updateOne(
      { _id: new ObjectId(addUpvote || addDownvote) },
      {
        $pull: {
          downvotes: addDownvote,
        },
      }
    )
  }

  return res.status(201).json({ message: 'All Right' })
}
