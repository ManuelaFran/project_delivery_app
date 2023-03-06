import React from 'react';
import { Link } from 'react-router-dom';

export default function NavSellerOrder() {
  return (
    <div className="navbar-customer">
      {' '}
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        className="navbar-pedidos"
        to="/seller/orders"
      >
        {' '}
        Pedidos
        {' '}
      </Link>
      {' '}
    </div>
  );
}
