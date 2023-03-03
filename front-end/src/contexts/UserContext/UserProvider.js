import axios from 'axios';
import { object } from 'prop-types';
import React, { useState, useMemo, useCallback } from 'react';
import LoginContext from './UserContext';

const NUMBER_5 = 5;
const NUMBER_12 = 12;

function UserProvider({ children }) {
  const [client, setClient] = useState({
    status: '',
    user: '',
    error: '',
  });

  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
    valid: false,
  });

  const validateEmail = useCallback(
    () => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(registerInfo.email),
    [registerInfo],
  );
  const validateName = useCallback(
    () => registerInfo.name.length >= NUMBER_12,
    [registerInfo],
  );
  const validatePassWord = useCallback(
    () => registerInfo.password.length >= NUMBER_5,
    [registerInfo],
  );

  const validateRegister = useCallback(
    () => validateEmail() && validateName() && validatePassWord(),
    [validateEmail, validateName, validatePassWord],
  );

  const handleRegisterInfoChange = useCallback(
    (event) => {
      const { name, value } = event.target;
      if (validateRegister()) {
        setRegisterInfo((prevState) => ({
          ...prevState,
          [name]: value,
          valid: true,
        }));
      } else {
        setRegisterInfo((prevState) => ({
          ...prevState,
          [name]: value,
          valid: false,
        }));
      }
    },
    [validateRegister],
  );

  const handleRegister = useCallback(async () => {
    try {
      const { name, email, password } = registerInfo;
      const response = await axios.post('http://localhost:3001/user/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      setClient({
        status: response.status,
        user: response.data,
        error: '',
      });
    } catch (error) {
      setClient({
        status: error.status,
        user: '',
        error: error.message,
      });
    }
  }, [registerInfo]);

  const handlerLogin = useCallback(async ({ email, password }) => {
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email,
        password,
      });
      localStorage.setItem('user', JSON.stringify(response.data));
      setClient({
        status: response.status,
        user: response.data,
        error: '',
      });
    } catch (error) {
      console.log(error.message);
      setClient({
        status: error.status,
        user: '',
        error: error.message,
      });
    }
  }, []);

  const memoizedValue = useMemo(
    () => ({
      handlerLogin,
      registerInfo,
      handleRegisterInfoChange,
      handleRegister,
      client,
    }),
    [
      handlerLogin,
      registerInfo,
      handleRegisterInfoChange,
      handleRegister,
      client,
    ],
  );

  return (
    <LoginContext.Provider value={ memoizedValue }>
      {children}
    </LoginContext.Provider>
  );
}

UserProvider.propTypes = {
  children: object,
}.isrequired;

export default UserProvider;
