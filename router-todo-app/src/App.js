import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/layout';
import QuoteForm from './components/quotes/QuoteForm';
import QuoteDetail from './pages/QuoteDetail';

const DUMMY_QUOTES = [];

function App() {

  const addQuoteHandler = (newQuotes) => {
    DUMMY_QUOTES.push(newQuotes);
  };

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes quotes={DUMMY_QUOTES}/>
        </Route>

        <Route path="/add-new">
          <QuoteForm onAddQuote={addQuoteHandler}/>
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={DUMMY_QUOTES}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
