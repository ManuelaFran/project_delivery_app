import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NavCustomerProducts from './NavCustomerProducts';

export default function Navbar() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
    token: '',
  });

  useEffect(() => {
    const data = localStorage.getItem('user');
    setUser(JSON.parse(data));
  }, []);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();// limpa localStorage depois do logout
    navigate('/');
  };

  return (
    <nav>
      {/* {user.role === 'customer' && <NavCustomerProducts />} */}
      {/* {role === 'seller' && <NavSellerOrder />} */}
      {/* {role === 'admin' && <NavManage />} */}
      <p
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {/* {`${user.name}`} */}

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
