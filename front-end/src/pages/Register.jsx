import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../contexts/GlobalContext/GlobalContext';

const CREATESTATUS = 201;

function Register() {
  const {
    registerInfo,
    handleRegisterInfoChange,
    handleRegister,
    resultRegister,
  } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (resultRegister.status === CREATESTATUS) {
      navigate('/customer/products');
    }
  });

  return (
    <div>
      <form action="">
        <label htmlFor="name">
          Nome
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Seu nome"
            data-testid="common_register__input-name"
            value={ registerInfo.name }
            onChange={ handleRegisterInfoChange }
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="seu-email@site.com.br"
            data-testid="common_register__input-email"
            value={ registerInfo.email }
            onChange={ handleRegisterInfoChange }
          />
        </label>

        <label htmlFor="password">
          Senha
          <input
            id="password"
            name="password"
            type="password"
            placeholder="**********"
            data-testid="common_register__input-password"
            value={ registerInfo.password }
            onChange={ handleRegisterInfoChange }
          />
        </label>

        <button
          disabled={ !registerInfo.valid }
          onClick={ handleRegister }
          type="button"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      <span data-testid="common_register__element-invalid_register">
        {resultRegister.error}
      </span>
    </div>
  );
}

export default Register;
