import React, {useEffect, useState} from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';

const AvailableMeals = (props) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      const res = await fetch('https://meals-e7310-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json');
      const data = await res.json();
      const mealsArr = [];

      for (const key in data) {
        mealsArr.push({
          id: key,
          name: data[key].name,
          description: data[key].description,
          price: data[key].price,

        });
      }
      setMeals(mealsArr);
      setLoading(false);
    };
    fetchMeals();
  });

  const mealList = meals.map(el => <MealItem key={el.id} id={el.id} name={el.name} description={el.description} price={el.price}/>);
  return (
    <section className={classes.meals}>
      <Card>
        {!loading && <p>Loading...</p>}
        {loading && <ul>{mealList}</ul>}
      </Card>
    </section>
  );
};

export default AvailableMeals;