import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function MeetupForm() {
  const newMeetUpHandler = () => {

  };

  return (
    <NewMeetupForm onAddMeetup={newMeetUpHandler}/>
  );
}

export default MeetupForm;