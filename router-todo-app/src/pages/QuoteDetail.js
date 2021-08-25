import React from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import {useParams} from 'react-router-dom';

function QuoteDetail(props) {
  const params = useParams();
  const quote = props.quotes.find(el => String(el.id) === params.quoteId);

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Comments/>
    </div>
  );
}

export default QuoteDetail;