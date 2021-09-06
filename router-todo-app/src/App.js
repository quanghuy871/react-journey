import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import Layout from './components/layout/layout';
import QuoteForm from './components/quotes/QuoteForm';
import QuoteDetail from './pages/QuoteDetail';
import useHttp from './hooks/use-Http';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const {sendRequest} = useHttp();

  useEffect(() => {
    console.log('EFFECT WORK');
    const dataTransform = (data) => {
      const quotesArr = [];

      for (const newData in data) {
        quotesArr.push({
          id: data[newData].id,
          author: data[newData].author,
          text: data[newData].text,
        });

      }
      setLoading(false);
      setQuotes(quotesArr);
    };

    sendRequest({
      url: 'https://quotes-6a80a-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json',
    }, dataTransform);
  }, [sendRequest]);

  const AddQuoteHandler = (newQuotes) => {
    console.log('App works');

    setQuotes((prevQuotes) => prevQuotes.concat(newQuotes));
  };

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes'/>
        </Route>

        <Route path="/quotes" exact>
          <AllQuotes isLoading={isLoading} quotes={quotes}/>
        </Route>

        <Route path="/add-new">
          <QuoteForm onAddQuote={AddQuoteHandler}/>
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetail quotes={quotes}/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
