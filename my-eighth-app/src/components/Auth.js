import classes from './Auth.module.css';
import {useRef} from 'react';
import {login} from '../store/index';
import {useDispatch} from 'react-redux';

const Auth = () => {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const userLogin = (e) => {
    e.preventDefault();
    if (email.current.value !== '') {
      dispatch(login());
      email.current.value = '';
      password.current.value = '';
    }
  };

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={userLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input ref={email} type='email' id='email'/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input ref={password} type='password' id='password'/>
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
