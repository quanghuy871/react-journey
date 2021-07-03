import React, {useEffect, useState} from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userInformation = localStorage.getItem('isLoggedIn');
    if (userInformation === '1') setIsLoggedIn(true);
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const logInHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  return (
    <AuthContext.Provider value={
      {
        isLoggedIn: isLoggedIn,
        onLogout: logOutHandler,
        onLogin: logInHandler,
      }
    }>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;