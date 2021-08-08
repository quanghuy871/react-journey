import React, {useEffect} from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = (props) => {
  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch('https://my-project-8b94b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const data = res.json();
    };
  }, []);

  const mealList = DUMMY_MEALS.map(el => <MealItem key={el.id} id={el.id} name={el.name} description={el.description} price={el.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;