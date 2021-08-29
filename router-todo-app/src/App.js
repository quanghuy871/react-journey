import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/layout';
import QuoteForm from './components/quotes/QuoteForm';
import QuoteDetail from './pages/QuoteDetail';
import useHttp from './hooks/use-Http';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const dataTransform = (data) => {
    const quotesArr = [];

    for (const newData in data) {
      quotesArr.push({
        id: newData.id,
        author: newData.author,
        text: newData.text,
      });
    }

    setQuotes(quotesArr);
  };

  const {loading, error, sendRequest} = useHttp({
    url: 'https://quotes-6a80a-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json',
    method: 'POST',
  }, dataTransform);

  const AddQuoteHandler = (newQuotes) => {
    sendRequest(newQuotes);
    setLoading(loading);
  };

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes quotes={quotes}/>
        </Route>

        <Route path="/add-new">
          <QuoteForm isLoading={isLoading} onAddQuote={AddQuoteHandler}/>
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={quotes}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
