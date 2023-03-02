import axios from 'axios';
import { object } from 'prop-types';
import React, { useState, useMemo, useCallback } from 'react';
import LoginContext from './LoginContext';

function LoginProvider({ children }) {
  const [resultLogin, setResultLogin] = useState({
    status: '',
    token: '',
    error: '',
  });

  const handlerLogin = useCallback(async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      localStorage.setItem('token', response.data.token);
      setResultLogin({
        status: response.status,
        token: response.data.token,
        error: '',
      });

      console.log(response);
    } catch (error) {
      setResultLogin({
        status: '',
        response: '',
        error: error.message,
      });
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      resultLogin,
      handlerLogin,
    }),
    [resultLogin, handlerLogin],
  );

  return (
    <LoginContext.Provider value={ memoizedValue }>{children}</LoginContext.Provider>
  );
}

LoginProvider.propTypes = {
  children: object,
}.isrequired;

export default LoginProvider;
