import React from 'react';
import classes from './MainNavigation.module.css';
import {Link} from 'react-router-dom';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <Link to='/'><h1>ReactQuotes</h1></Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to='/quotes'>All Quotes</Link>
          </li>
          <li>
            <Link to='/add-new'>Add New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;