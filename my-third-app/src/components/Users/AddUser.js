import React, {useState} from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card';

const AddUser = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    e.preventDefault();
    setAge(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      age: age,
      id: Math.round(Math.random() * 1000),
    };
    props.onSaveUser(user);
  };

  return (
      <Card>
        <form onSubmit={formSubmit}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" onChange={nameHandler}/>

          <label htmlFor="age">Age:</label>
          <input id="age" type="text" onChange={ageHandler}/>

          <Button type="submit">ADD USER</Button>
        </form>
      </Card>
  );
};

export default AddUser;