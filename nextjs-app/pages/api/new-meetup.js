import {MongoClient} from 'mongodb';

export const PASSWORD = 'sYSAnRGm4EG1J6c6';
export const MONGOURL = `mongodb+srv://meetups-database:${PASSWORD}@cluster0.8ja6b.mongodb.net/MyMeetups?retryWrites=true&w=majority`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(MONGOURL);

    const database = client.db();


    const collection = database.collection('meetups');

    const result = await collection.insertOne(data);

    await client.close();

    res.status(201).json({message: 'Meet up insert'});
  }
}