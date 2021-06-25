import React from 'react';
import Card from '../UI/Card';
import UserItem from './UserItem';

const UserList = props => {

  const list = props.users.map(el => {
    return <UserItem key={el.id} name={el.name} age={el.age}/>;
  });

  return (
      <Card>
        <div>
          {list}
        </div>
      </Card>
  );
};

export default UserList;