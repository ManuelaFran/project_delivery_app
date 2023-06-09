import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import NavCustomerProducts from './NavCustomerProducts';
import UserContext from '../contexts/UserContext/UserContext';
import NavSellerOrder from './NavSellerOrder';
import NavManage from './NavManage';
import '../style/products.css';

export default function Navbar() {
  const { client, setClient } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();// limpa localStorage depois do logout
    setClient({
      status: '',
      user: '',
      error: '',
    });

    navigate('/');
  };

  return (
    <nav>
      {client.user.role === 'customer' && <NavCustomerProducts />}
      {client.user.role === 'seller' && <NavSellerOrder />}
      {client.user.role === 'admin' && <NavManage />}
      <p
        className="client-name"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {`${client.user.name}`}
      </p>
      <button
        className="btn-logout"
        data-testid="customer_products__element-navbar-link-logout"
        type="button"
        onClick={ handleLogout }
      >
        Sair
      </button>

    </nav>
  );
}
