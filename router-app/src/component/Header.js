import React from 'react';
import classes from './Header.module.css';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li><Link to='/welcome'>Welcome</Link></li>
          <li><Link to='/product'>Product</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;