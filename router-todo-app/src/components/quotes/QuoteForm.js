import React, {useRef, useState} from 'react';
import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import useHttp from '../../hooks/use-Http';
import {useHistory, useLocation} from 'react-router-dom';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const {loading, sendRequest} = useHttp();
  const history = useHistory();
  const location = useLocation();

  const submitFormHandler = async (event) => {
    event.preventDefault();
    setLoading(loading);
    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const id = Math.round(Math.random() * 10000);
    const newQuotes = {id: id, author: enteredAuthor, text: enteredText};

    await sendRequest({
      url: 'https://quotes-6a80a-default-rtdb.asia-southeast1.firebasedatabase.app/quotes.json',
      method: 'POST',
      body: newQuotes,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setLoading(false);
    authorInputRef.current.value = '';
    textInputRef.current.value = '';
    // history.push(`${location.pathname}`);
    props.onAddQuote(newQuotes);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {isLoading && (
          <div className={classes.loading}>
            <LoadingSpinner/>
          </div>
        )}

        <div className={classes.control}>
          <label htmlFor='author'>Author</label>
          <input type='text' id='author' ref={authorInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='text'>Text</label>
          <textarea id='text' rows='5' ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className='btn'>Add Quote</button>
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
