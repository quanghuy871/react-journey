import React, {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import mealImage from '../../assets/meals.jpeg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton isModalShow={props.isModalShow}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="image"/>
      </div>
    </Fragment>
  );
};

export default Header;