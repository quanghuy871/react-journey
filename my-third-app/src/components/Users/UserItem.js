import React from 'react';

const UserItem = props => {
  return (
      <div>
        <h3>{props.name}</h3>
        <p>{props.age}</p>
      </div>
  );
};

export default UserItem;