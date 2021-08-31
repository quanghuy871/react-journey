import React, {Fragment} from 'react';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';
import {useHistory, useLocation} from 'react-router-dom';

const sortAsc = (quotes, asc) => {
  return quotes.sort((a, b) => {
    if (asc) {
      return a.id > b.id ? 1 : -1;
    } else {
      return a.id < b.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const isSorting = () => queryParams.get('sort') === 'asc';

  const newArr = sortAsc(props.quotes, isSorting());

  const sortList = () => {
    history.push(`${location.pathname}?sort=${isSorting() ? 'desc' : 'asc'}`);
  };

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={sortList}>Sort {isSorting ? 'Descending' : 'Ascending'}</button>
      </div>

      <ul className={classes.list}>
        {newArr.map((quote, index) => (
          <QuoteItem
            key={index}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
