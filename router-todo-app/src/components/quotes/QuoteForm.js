import React, {useRef} from 'react';

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;
    const id = Math.round(Math.random() * 10000);

    props.onAddQuote({id: id, author: enteredAuthor, text: enteredText});
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        {props.isLoading && (
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
          <button  className='btn'>Add Quote</button>
        </div>
      </form>

      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Card>
  );
};

export default QuoteForm;
