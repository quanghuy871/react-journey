import React, {useState} from 'react';
import './App.css';
import Header from './Component/Layout/Header';
import Meals from './Component/Meals/Meals';
import Cart from './Component/Cart/Cart';
import {CartContextProvider} from './store/cart-context';

function App() {
  const [modalShow, setModalShow] = useState(false);

  const modalShowHandler = () => {
    setModalShow(true);
  };

  const modalCLoseHandler = () => {
    setModalShow(false);
  };

  return (
    <CartContextProvider>
      {modalShow && <Cart isModalClose={modalCLoseHandler}/>}
      <Header isModalShow={modalShowHandler}/>
      <main>
        <Meals/>
      </main>
    </CartContextProvider>
  );
}

export default App;
