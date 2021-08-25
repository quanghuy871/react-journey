import React, {Fragment} from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import { updateCart} from './store/index';

let init = true;

function App() {
  const dispatch = useDispatch();
  const toggle = useSelector(state => state.showToggle);
  const cart = useSelector(state => state.items);
  const notification = useSelector(state => state.notification);

  useEffect(() => {
    const sendRequest = async () => {
      dispatch(updateCart.showNotification({
        status: 'Sending',
        title: 'Pending...',
        message: 'Your request is sending',
      }));

      const res = await fetch('https://order-9ede6-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if (!res.ok) {
        throw new Error();
      }

      dispatch(updateCart.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Your request has been sent',
      }));
    };

    if (init) {
      init = false;
      return;
    }

    sendRequest().catch(err => {
      dispatch(updateCart.showNotification({
        status: 'error',
        title: 'Error',
        message: err,
      }));
    });

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
