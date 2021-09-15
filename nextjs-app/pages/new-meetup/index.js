import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {useRouter} from 'next/router';

function MeetupForm() {
  const router = useRouter();

  const newMeetUpHandler = async (meetupdata) => {
    const res = await fetch('/api/new-meetup', {
      method: 'POST',
      body: JSON.stringify(meetupdata),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    console.log(data);
    router.push('/');
  };

  return (
    <NewMeetupForm onAddMeetup={newMeetUpHandler}/>
  );
}

export default MeetupForm;