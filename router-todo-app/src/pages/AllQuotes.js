import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';

function AllQuotes(props) {
  return (
    <div>
      {props.quotes.length === 0 ? <NoQuotesFound/> : <QuoteList quotes={props.quotes}/>}
    </div>
  );
}

export default AllQuotes;