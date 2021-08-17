import Counter from './components/Counter';
import {Fragment} from 'react';
import Auth from './components/Auth';
import Header from './components/Header';
import {useSelector} from 'react-redux';
import UserProfile from './components/UserProfile';

function App() {
  const login = useSelector(state => state.auth.authentication);

  return (
    <Fragment>
      <Header/>
      {!login && <Auth/>}
      {login && <UserProfile/>}
      <Counter/>
    </Fragment>
  );
}

export default App;
