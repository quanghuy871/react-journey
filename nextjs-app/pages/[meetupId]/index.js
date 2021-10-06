import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetails';
import {MongoClient, ObjectId} from 'mongodb';
import {MONGOURL} from '../api/new-meetup';

function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      description={props.meetupData.description}
      address={props.meetupData.address}
    />
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(MONGOURL);

  const database = client.db();

  const collection = database.collection('meetups');

  const meetup = await collection.find({}, {_id: 1}).toArray();

  client.close();

  return {
    fallback: true,
    paths: meetup.map(el => ({
      params: {
        meetupId: el._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  const client = await MongoClient.connect(MONGOURL);

  const database = client.db();

  const collection = database.collection('meetups');

  const meetup = await collection.findOne({_id: ObjectId(context.params.meetupId)});

  client.close();

  return {
    props: {
      meetupData: {
        id: meetup._id.toString(),
        image: meetup.image,
        title: meetup.title,
        description: meetup.description,
        address: meetup.address,
      },
    },
  };
}

export default MeetupDetails;