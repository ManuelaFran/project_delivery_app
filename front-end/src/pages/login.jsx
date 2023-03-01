// import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const [password, setPassword] = useState('');

  const verifyEmail = () => (/\S+@\S+\.\S+/).test(email);

  const verifyPassword = () => password.length > Number('6');

  const verifyInputs = () => {
    if (verifyEmail() && verifyPassword()) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    verifyInputs();
    // eslint-disable-next-line
    }, [email, password]);

  const handleInput = ({ target }) => {
    const { value, name } = target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  //   function handleRegister() {
  //     history.push('/register');
  //   }

  return (
    <div className="Login">
      <form className="login-form">
        <h1>App de Delivery</h1>
        <label htmlFor="email">
          <span>Login</span>
          <input
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
          type="submit"
          className="login-btn"
          data-testid="common_login__button-login"
        >
          Login
        </button>
        <button
          className="cadastrar"
          data-testid="common_login__button-register"
          // onClick={ () => handleRegister() }
          type="submit"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

// Login.propTypes = {
//   history: PropTypes.shape({
//     push: PropTypes.func,
//   }),
// }.isRequired;

export default Login;
