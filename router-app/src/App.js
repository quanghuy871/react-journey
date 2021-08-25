import './App.css';
import Header from './component/Header';
import React, {Fragment} from 'react';
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Fragment>
      <Header/>
      <main>
        <Switch>
          <Route path='/welcome'>
            <Welcome/>
          </Route>
          <Route path='/product' exact>
            <Product/>
          </Route>
          <Route path='/product/:productId'>
            <ProductDetail/>
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
