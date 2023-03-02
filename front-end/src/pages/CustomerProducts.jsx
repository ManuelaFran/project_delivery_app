import React, { useContext } from 'react';
import Navbar from '../components/NavBar';
import CartContext from '../contexts/ProductsContext/CartContext';
import ProductCard from '../components/ProductCard';

export default function CustomerProducts() {
  const { products } = useContext(CartContext);
  return (
    <div>
      <Navbar />
      { products.map((product) => (<ProductCard
        key={ product.id }
        productDetails={ product }
      />))}
    </div>
  );
}
