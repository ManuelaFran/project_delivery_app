import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavCustomerProducts from './NavCustomerProducts';
import UserContext from '../contexts/UserContext/UserContext';

export default function Navbar() {
  const { client } = useContext(UserContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();// limpa localStorage depois do logout
    navigate('/');
  };

  return (
    <nav>
      {user.role === 'customer' && <NavCustomerProducts />}
      {/* {role === 'seller' && <NavSellerOrder />} */}
      {/* {role === 'admin' && <NavManage />} */}
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {`${client.user.name}`}

      </p>
      <button
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ handleLogout }
      >
        Sair
      </button>

    </nav>
  );
}
