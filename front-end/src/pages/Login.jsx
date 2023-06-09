import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext/UserContext';
import '../style/login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { client, handlerLogin, setClient } = useContext(UserContext);

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
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setClient({
        user,
      });
      navigate('/customer/products');
    }
    // eslint-disable-next-line
  }, [email, password, client]);

  const clickLogin = () => {
    if (email === 'adm@deliveryapp.com' && password === '--adm2@21!!--') {
      navigate('/admin/manage');
    }
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
        <h1 className="title">OverDelivery</h1>
        <label htmlFor="email">
          <span>Login</span>
          <input
            value={ email }
            type="text"
            id="email"
            data-testid="common_login__input-email"
            name="email"
            onChange={ handleInput }
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          <span>Senha</span>
          <input
            value={ password }
            id="password"
            type="password"
            onChange={ handleInput }
            data-testid="common_login__input-password"
            name="password"
            placeholder="**********"
          />
        </label>
        <button
          disabled={ isButtonDisabled }
          onClick={ clickLogin }
          type="button"
          className="login-btn"
          data-testid="common_login__button-login"
        >
          LOGIN
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
      <span data-testid="common_login__element-invalid-email">{client.error}</span>
    </div>
  );
}

export default Login;
