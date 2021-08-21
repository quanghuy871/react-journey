import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_ITEMS = [
  {
    title: 'Burger',
    price: 6,
    description: 'This is a first product - amazing!',
  },

  {
    title: 'French Fries',
    price: 5,
    description: 'This is a second product - amazing!',
  },

  {
    title: 'Chicken Fries',
    price: 4,
    description: 'This is a third product - amazing!',
  },

  {
    title: 'Coke',
    price: 2,
    description: 'This is a fourth product - amazing!',
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map(el => <ProductItem
          title={el.title}
          price={el.price}
          description={el.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
