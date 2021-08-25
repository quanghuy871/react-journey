import {useState} from 'react';

import classes from './Comments.module.css';
import NewCommentForm from './NewCommentForm';
import CommentItem from './CommentItem';

const DUMMY_COMMENTS = [];

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const addCommentHandler = (comment) => {
    DUMMY_COMMENTS.push(comment);
    setIsAddingComment(false);
    console.log(DUMMY_COMMENTS);
  };

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddComment={addCommentHandler}/>}
      {DUMMY_COMMENTS.length === 0 && <p>Comments...</p>}
      {DUMMY_COMMENTS.map(el => <CommentItem text={el.text}/>)}
    </section>
  );
};

export default Comments;
