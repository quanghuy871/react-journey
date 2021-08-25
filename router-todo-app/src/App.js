import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/layout';
import QuoteForm from './components/quotes/QuoteForm';
import QuoteDetail from './pages/QuoteDetail';
import {useEffect} from 'react';

const DUMMY_QUOTES = [];

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [loading]);

  const addQuoteHandler = (newQuotes) => {
    DUMMY_QUOTES.push(newQuotes);
    setLoading(!loading);
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
          <QuoteForm isLoading={loading} onAddQuote={addQuoteHandler}/>
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={DUMMY_QUOTES}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
