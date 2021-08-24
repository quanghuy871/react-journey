import React, {Fragment} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {sendCartData} from './store/index';

let init = true;

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.showToggle);
  const cart = useSelector(state => state.items);
  const notification = useSelector(state => state.notification);

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }

    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  return (
    <Fragment>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message}/>}
      <Layout>
        {toggle && <Cart/>}
        <Products/>
      </Layout>
    </Fragment>
  );
}

export default App;
