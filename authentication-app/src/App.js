import {Switch, Route, Redirect} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import {useSelector} from 'react-redux';

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <Layout>
      <Switch>
        {
          isLoggedIn &&
          <Route path='/' exact>
            <HomePage/>
          </Route>
        }
        <Route path='/auth'>
          <AuthPage/>
        </Route>
        {
          isLoggedIn &&
          <Route path='/profile'>
            <UserProfile/>
          </Route>
        }

        <Route path='*'>
          <Redirect to='/auth'/>
        </Route>

      </Switch>
    </Layout>
  );
}

export default App;
