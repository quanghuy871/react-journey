import React from 'react';
import MeetupList from '../components/meetups/MeetupList';
import {MongoClient} from 'mongodb';

function Home(props) {
  return (
    <div>
      <MeetupList meetups={props.meetups}/>
    </div>
  );
}

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://meetup-database:FbTMJ6NrsHRxm6BR@cluster1.3pv3r.mongodb.net/meetups?retryWrites=true&w=majority');

  const database = client.db();

  const collection = database.collection('meetups');

  const meetups = await collection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(el => ({
        id: el._id.toString(),
        title: el.title,
        image: el.image,
        address: el.address,
      })),
    },
    revalidate: 1,
  };
}

export default Home;