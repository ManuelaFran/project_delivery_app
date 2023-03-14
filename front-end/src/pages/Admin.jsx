import React, { useContext } from 'react';
import UserContext from '../contexts/UserContext/UserContext';
import '../style/admin.css';

function Admin() {
  const {
    handleRegisterWithRole,
    handleRegisterInfoChange,
    registerInfo,
    handleRole,
  } = useContext(UserContext);

  return (
    <div className="cadastrar-admin">
      <h1>Cadastro novo usuário</h1>
      <form
        onSubmit={ handleRegisterWithRole }
      >
        <label htmlFor="name">
          <span className="span-admin">Nome</span>
          <input
            value={ registerInfo.name }
            onChange={ handleRegisterInfoChange }
            type="text"
            id="name"
            name="name"
            placeholder="Nome e sobrenome"
            data-testid="admin_manage__input-name"
          />
        </label>

        <label htmlFor="email">
          <span className="span-admin">Email</span>
          <input
            value={ registerInfo.email }
            onChange={ handleRegisterInfoChange }
            type="email"
            name="email"
            id="email"
            placeholder="seu-email@site.com.br"
            data-testid="admin_manage__input-email"
          />
        </label>

        <label htmlFor="password">
          <span className="span-admin">Senha</span>
          <input
            value={ registerInfo.password }
            onChange={ handleRegisterInfoChange }
            type="password"
            name="password"
            id="password"
            placeholder="**********"
            data-testid="admin_manage__input-password"
          />
        </label>

        <label htmlFor="role">
          <span className="span-admin">Tipo</span>
          <select
            value={ registerInfo.role }
            onChange={ handleRole }
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
          className="btn-admin"
          disabled={ !registerInfo.valid }
          type="submit"
          data-testid="admin_manage__button-register"
        >
          Cadastrar
        </button>
      </form>
      <span data-testid="admin_manage__element-invalid-register" />
      <h2> Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th className="span-admin"> Item </th>
            <th className="span-admin"> Nome </th>
            <th className="span-admin"> E-mail </th>
            <th className="span-admin"> Tipo </th>
            <th className="span-admin"> Excluir </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-testid="admin_manage__element-user-table-item-number-" />
            <td data-testid="admin_manage__element-user-table-name-" />
            <td data-testid="admin_manage__element-user-table-email-" />
            <td data-testid="admin_manage__element-user-table-role-" />
            <button
              type="button"
              data-testid="admin_manage__element-user-table-remove-"
            >
              Excluir
            </button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Admin;
