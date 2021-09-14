import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUP = [
  {
    id: 'm1',
    title: 'First meet up',
    image: 'https://menback.com/wp-content/uploads/2021/06/luan-don-750x422.jpg',
    address: 'Sample',
  },
  {
    id: 'm2',
    title: 'Second meet up',
    image: 'https://menback.com/wp-content/uploads/2021/06/dong-ho-bigben-london-750x500.jpg',
    address: 'Sample',
  },
];

function Home(props) {
  return (
    <div>
      <MeetupList meetups={props.meetup}/>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      meetup: DUMMY_MEETUP,
    },
  };
}

export default Home;