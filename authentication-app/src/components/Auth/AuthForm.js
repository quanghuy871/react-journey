import {useState, useRef} from 'react';

import classes from './AuthForm.module.css';
import {useDispatch} from 'react-redux';
import {login} from '../../store/index';
import {useHistory} from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const emailEntered = useRef();
  const passwordEntered = useRef();
  const dispatch = useDispatch();
  const history = useHistory();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const SignUpHandler = async (e) => {
    e.preventDefault();
    const email = emailEntered.current.value;
    const password = passwordEntered.current.value;
    let url, errorMessage;

    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCEFzQrHM2tqqq0qWemOkfmBr0-F2hF4uk';
      errorMessage = 'Wrong Email or Password';
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCEFzQrHM2tqqq0qWemOkfmBr0-F2hF4uk';
      errorMessage = 'Email is already exist';
    }

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      });

      if (!res.ok) {
        throw new Error(errorMessage);
      }

      const data = await res.json();
      dispatch(login(data.idToken));
      history.replace('/');
    } catch (e) {
      alert(e);
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={SignUpHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input ref={emailEntered} type='email' id='email' required/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input ref={passwordEntered} type='password' id='password' required/>
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
