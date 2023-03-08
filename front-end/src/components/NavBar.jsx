import React, { useContext } from 'react';
import NavCustomerProducts from './NavCustomerProducts';
import UserContext from '../contexts/UserContext/UserContext';
import NavSellerOrder from './NavSellerOrder';
import NavManage from './NavManage';

export default function Navbar() {
  const { client, setClient } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem('user');// limpa localStorage depois do logout
    setClient({
      status: '',
      user: '',
      error: '',
    });
  };

  return (
    <nav>
      {client.user.role === 'customer' && <NavCustomerProducts />}
      {client.user.role === 'seller' && <NavSellerOrder />}
      {client.user.role === 'admin' && <NavManage />}
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
