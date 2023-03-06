import React from 'react';
import { Link } from 'react-router-dom';

export default function NavManage() {
  return (
    <div className="navbar-customer">
      {' '}
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/admin/manage"
      >
        {' '}
        Gerenciar Usuários
        {' '}
      </Link>
      {' '}
    </div>
  );
}
