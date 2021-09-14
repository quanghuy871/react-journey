import {MongoClient} from 'mongodb';

const PASSWORD = 'FbTMJ6NrsHRxm6BR';
const MONGOURL = `mongodb+srv://meetup-database:${PASSWORD}@cluster1.3pv3r.mongodb.net/meetups?retryWrites=true&w=majority`;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const client = await MongoClient.connect(MONGOURL);

    const database = client.db();

    const collection = database.collection('meetups');

    const result = await collection.insertOne(data);

    console.log(result);

    await client.close();

    res.status(201).json({message: 'Meet up insert'});
  }
}