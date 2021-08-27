import React from 'react';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';
import {useParams, Route, Link} from 'react-router-dom';

function QuoteDetail(props) {
  const params = useParams();
  const quote = props.quotes.find(el => String(el.id) === params.quoteId);

  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}`} exact>
        <Link to={`/quotes/${params.quoteId}/comments`}>Comments</Link>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments/>
      </Route>
    </div>
  );
}

export default QuoteDetail;