import classes from './ProfileForm.module.css';
import {useRef} from 'react';
import {useSelector} from 'react-redux';

const ProfileForm = () => {
  const newPassword = useRef();
  const token = useSelector(state => state.token);

  const changePasswordHandler = async (e) => {
    e.preventDefault();
    const newPasswordEntered = newPassword.current.value;

    await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCEFzQrHM2tqqq0qWemOkfmBr0-F2hF4uk',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          idToken: token,
          password: newPasswordEntered,
          returnSecureToken: true,
        }),
      });
  };

  return (
    <form onSubmit={changePasswordHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input ref={newPassword} type='password' id='new-password'/>
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
