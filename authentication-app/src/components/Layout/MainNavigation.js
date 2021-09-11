import {Link} from 'react-router-dom';

import classes from './MainNavigation.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../../store/index';

const MainNavigation = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const dispatch = useDispatch();

  const logOutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        <ul>
          {
            !isLoggedIn &&
            <li>
              <Link to='/auth'>Login</Link>
            </li>
          }
          {
            isLoggedIn &&
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
          }

          {
            isLoggedIn &&
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          }
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
