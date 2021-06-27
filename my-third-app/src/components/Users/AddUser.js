import React, {useState, Fragment, useRef} from 'react';
import Button from '../UI/Button/Button';
import Card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const AddUser = props => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState('');
  const enteredName = useRef();
  const enteredAge = useRef();

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const ageHandler = (e) => {
    setAge(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length === 0 || age.trim().length === 0) {
      setError(
          {
            title: 'Invalid Input',
            message: 'Content must be greater than 0',
          },
      );
      return;
    }

    const user = {
      name: name,
      age: age,
      id: Math.round(Math.random() * 1000),
    };
    props.onSaveUser(user);
    enteredName.current.value = '';
    enteredAge.current.value = '';
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
      <Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
        <Card>
          <form onSubmit={formSubmit}>
            <label htmlFor="username">Username:</label>
            <input ref={enteredName} id="username" type="text" onChange={nameHandler}/>

            <label htmlFor="age">Age:</label>
            <input ref={enteredAge} id="age" type="text" onChange={ageHandler}/>

            <Button type="submit">ADD USER</Button>
          </form>
        </Card>
      </Fragment>
  );
};

export default AddUser;
