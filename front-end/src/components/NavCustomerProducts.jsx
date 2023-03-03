import React from 'react';
import { Link } from 'react-router-dom';

export default function NavCustomerProducts() {
  return (
    <div className="navbar-customer">
      {' '}
      <Link
        data-testid="customer_products__element-navbar-link-products"
        className="navbar-product"
        to="/customer/products"
      >
        {' '}
        Produtos
        {' '}
      </Link>
      {' '}
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        className="navbar-meus-pedidos"
        to="/customer/orders"
      >
        {' '}
        Meus Pedidos
        {' '}
      </Link>
      {' '}
    </div>

  );
}
