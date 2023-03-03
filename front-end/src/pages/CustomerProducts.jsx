import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/NavBar';
import CartContext from '../contexts/ProductsContext/CartContext';
import ProductCard from '../components/ProductCard';

export default function CustomerProducts() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const { products, setProducts, cartValue } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = async () => { // adiciona compra e redireciona
    navigate('/customer/checkout');
  };

  useEffect(() => { // receber produtos
    const getAllProducts = async () => {
      const data = localStorage.getItem('user');
      setUser(JSON.parse(data));
      const headers = { headers: { authorization: data.token } };
      const allProducts = await axios.get('http://localhost:3001/products', headers);
      setProducts(allProducts.data);
      setLoading(false);
    };

    getAllProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Navbar />
      { loading
        ? <h1>Loading...</h1>
        : (products.map((product) => (
          <ProductCard
            key={ product.id }
            productDetails={ product }
          />)))}

      <button
        type="button"
        data-testid="customer_products__button-cart"
        className="cart-btn"
        disabled={ !cartValue }
        onClick={ handleCheckout }
      >
        {!cartValue
          ? <p>Carrinho vazio</p>
          : (
            <p data-testid="customer_products__checkout-bottom-value">
              Ver carrinho: R$
              <span>
                {cartValue.toFixed(2).toString().replace('.', ',')}
              </span>
            </p>)}

      </button>
    </div>
  );
}
