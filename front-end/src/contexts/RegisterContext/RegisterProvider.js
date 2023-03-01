import axios from 'axios';
import { object } from 'prop-types';
import React, { useState, useMemo, useCallback } from 'react';
import RegisterContext from './RegisterContext';

const NUMBER_5 = 5;
const NUMBER_12 = 12;

function RegisterProvider({ children }) {
  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
    valid: false,
  });

  const [resultRegister, setResultRegister] = useState({
    status: '',
    response: '',
    error: '',
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
        setRegisterInfo((prevState) => ({ ...prevState, [name]: value, valid: true }));
      } else {
        setRegisterInfo((prevState) => ({ ...prevState, [name]: value, valid: false }));
      }
    },
    [validateRegister],
  );

  const handleRegister = useCallback(async () => {
    try {
      const { name, email, password } = registerInfo;
      const response = await axios.post('', { name, email, password });
      setResultRegister({
        status: response.status,
        response: response.data,
        error: '',
      });
    } catch (error) {
      setResultRegister({
        status: '',
        response: '',
        error: error.message,
      });
    }
  }, [registerInfo]);

  const memoizedValue = useMemo(
    () => ({
      registerInfo,
      handleRegisterInfoChange,
      handleRegister,
      resultRegister,
    }),
    [registerInfo, handleRegisterInfoChange, handleRegister, resultRegister],
  );

  return (
    <RegisterContext.Provider value={ memoizedValue }>
      {children}
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: object,
}.isrequired;

export default RegisterProvider;
