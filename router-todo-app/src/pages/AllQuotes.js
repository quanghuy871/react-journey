import React from 'react';
import QuoteList from '../components/quotes/QuoteList';
import NoQuotesFound from '../components/quotes/NoQuotesFound';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import '../index.css';

function AllQuotes(props) {
  if (props.isLoading) {
    return (
      <div className="spinner-center">
        <LoadingSpinner/>
      </div>
    );
  }

  return (
    <div>
      {props.quotes.length !== 0 ? <QuoteList quotes={props.quotes}/> : <NoQuotesFound/>}
    </div>
  );
}

export default AllQuotes;