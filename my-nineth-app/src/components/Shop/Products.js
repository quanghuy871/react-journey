import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  {
    title: 'Burger',
    price: 6,
    quantity: 1,
    description: 'This is a first product - amazing!',
    id: 'm1',
  },

  {
    title: 'French Fries',
    price: 5,
    quantity: 1,
    description: 'This is a second product - amazing!',
    id: 'm2',
  },

  {
    title: 'Chicken Fries',
    price: 4,
    quantity: 1,
    description: 'This is a third product - amazing!',
    id: 'm3',
  },

  {
    title: 'Coke',
    price: 2,
    quantity: 1,
    description: 'This is a fourth product - amazing!',
    id: 'm4',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map(el => <ProductItem
          key={el.id}
          id={el.id}
          title={el.title}
          price={el.price}
          description={el.description}
          quantity={el.quantity}
        />)}
      </ul>
    </section>
  );
};

export default Products;
