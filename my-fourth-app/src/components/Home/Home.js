import React, {useContext} from 'react';

import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './Home.module.css';
import AuthContext from '../Store/Auth-Context';

const Home = (props) => {
  const ctx = useContext(AuthContext);

  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={ctx.onLogout}>Log Out</Button>
    </Card>
  );
};

export default Home;
