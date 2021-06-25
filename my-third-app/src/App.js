import React, {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

const state = [];

function App() {
  const [users, setUser] = useState(state);

  const saveUser = (user) => {
    setUser((preUser) => {
      return [user, ...preUser];
    });
  };

  return (
      <div className="App">
        <AddUser onSaveUser={saveUser}/>
        <UserList users={users}/>
      </div>
  );
}

export default App;
