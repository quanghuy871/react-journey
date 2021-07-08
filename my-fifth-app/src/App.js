import React, {Fragment} from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';

function App() {
  return (
    <Fragment>
      <Cart/>
      <Header/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
