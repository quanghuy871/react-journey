import classes from './Header.module.css';
import {useSelector, useDispatch} from 'react-redux';
import {logout} from '../store/index';

const Header = () => {
  const login = useSelector(state => state.auth.authentication);
  const dispatch = useDispatch();

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {login && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={() => dispatch(logout())}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
