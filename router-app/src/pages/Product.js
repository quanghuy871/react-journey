import React from 'react';
import {Link} from 'react-router-dom';

function Product() {
  return (
    <div>
      <h1>Product page</h1>
      <ul>
        <li><Link to='product/burger'>Burger</Link></li>
        <li><Link to='product/french-fries'>French Fries</Link></li>
        <li><Link to='product/coke'>Coke</Link></li>
      </ul>
    </div>
  );
}

export default Product;