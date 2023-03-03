import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/GlobalContext/GlobalContext';

function Login() {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { resultLogin, handlerLogin } = useContext(AppContext);

  const verifyEmail = () => /\S+@\S+\.\S+/.test(email);

  const verifyPassword = () => password.length > Number('5');

  const verifyInputs = () => {
    if (verifyEmail() && verifyPassword()) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    verifyInputs();
    if (resultLogin.token) {
      navigate('/customer/products');
    }
    // eslint-disable-next-line
  }, [email, password, resultLogin]);

  const clickLogin = () => {
    setEmail('');
    setPassword('');
    handlerLogin({ email, password });
  };

  const handleInput = ({ target }) => {
    const { value, name } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  function handleRegister() {
    navigate('/register');
  }

  return (
    <div className="Login">
      <form className="login-form">
        <h1>App de Delivery</h1>
        <label htmlFor="email">
          <span>Login</span>
          <input
            value={ email }
            type="text"
            id="email"
            data-testid="common_login__input-email"
            name="email"
            onChange={ handleInput }
            placeholder="E-mail"
          />
        </label>
        <label htmlFor="password">
          <span>Password</span>
          <input
            value={ password }
            id="password"
            type="password"
            onChange={ handleInput }
            data-testid="common_login__input-password"
            name="password"
            placeholder="Senha"
          />
        </label>
        <button
          disabled={ isButtonDisabled }
          onClick={ clickLogin }
          type="button"
          className="login-btn"
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          className="cadastrar"
          data-testid="common_login__button-register"
          onClick={ handleRegister }
          type="submit"
        >
          Ainda não tenho conta
        </button>
      </form>
      <span data-testid="common_login__element-invalid-email">{resultLogin.error}</span>
    </div>
  );
}

export default Login;
