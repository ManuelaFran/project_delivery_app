import React from 'react';
import { Link } from 'react-router-dom';

export default function NavCustomerProducts() {
  return (
    <>
      <Link
        data-testid="customer_products__element-navbar-link-products"
        to="/customer/products"
      >
        Produtos
      </Link>
      <Link
        data-testid="customer_products__element-navbar-link-orders"
        to="/customer/orders"
      >
        Meus Pedidos
      </Link>
    </>
  );
}
