import React from 'react';
import classes from './MeetupDetails.module.css'

function MeetupDetail(props) {
  return (
    <div className={classes.wrapper}>
      <img className={classes.img} src={props.image} alt={props.title}/>
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </div>
  );
}

export default MeetupDetail;