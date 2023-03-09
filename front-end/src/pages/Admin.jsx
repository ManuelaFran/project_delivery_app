import React, { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext/UserContext';

function Admin() {
  const [nome, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Vendedor');
  const [isButtonDisabled, setButtonDisabled] = useState(true);
  const { handleRegisterWithRole } = useContext(UserContext);

  const verifyName = () => nome.length > Number('11');
  const verifyEmail = () => /\S+@\S+\.\S+/.test(email);
  const verifyPassword = () => password.length > Number('5');
  const verifyRole = () => role.length > Number('0');

  const verifyInputs = () => {
    if (verifyName() && verifyEmail() && verifyPassword() && verifyRole) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  };

  useEffect(() => {
    verifyInputs();
  });

  const handleInput = ({ target }) => {
    const { value, name } = target;
    if (name === 'nome') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
    if (name === 'role') setRole(value);
  };

  return (
    <div>
      <h1>Cadastro novo usuário</h1>
      <form>
        <label htmlFor="name">
          <input
            value={ nome }
            onChange={ handleInput }
            type="text"
            id="name"
            name="nome"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
          />
        </label>

        <label htmlFor="email">
          <input
            value={ email }
            onChange={ handleInput }
            type="email"
            name="email"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>

        <label htmlFor="password">
          <input
            value={ password }
            onChange={ handleInput }
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            data-testid="admin_manage__input-password"
          />
        </label>

        <label htmlFor="role">
          <select
            value={ role }
            onChange={ handleInput }
            name="role"
            id="role"
            data-testid="admin_manage__select-role"
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </select>
        </label>

        <button
          disabled={ isButtonDisabled }
          onSubmit={ handleRegisterWithRole }
          type="submit"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>
      <span data-testid="admin_manage__element-invalid-register" />
    </div>
  );
}

export default Admin;
