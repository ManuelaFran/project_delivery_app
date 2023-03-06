import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/NavBar';
import CartContext from '../contexts/CartContext/CartContext';
import ProductCard from '../components/ProductCard';
import UserContext from '../contexts/UserContext/UserContext';

export default function CustomerProducts() {
  const [loading, setLoading] = useState(true);
  const [productsError, setProductsError] = useState('');
  const { client } = useContext(UserContext);
  const { products, setProducts, cartValue } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    // adiciona compra e redireciona
    navigate('/customer/checkout');
  };

  useEffect(() => {
    // receber produtos
    const getAllProducts = async () => {
      const headers = { headers: { authorization: client.user.token } };
      try {
        const allProducts = await axios.get(
          'http://localhost:3001/product',
          headers,
        );
        setProducts(allProducts.data);
        setLoading(false);
      } catch (error) {
        setProductsError(error.message);
      }
    };
    getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [client]);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        products?.map((product) => (
          <ProductCard key={ product.id } productDetails={ product } />
        ))
      )}
      {productsError !== '' && <span>{productsError}</span>}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        className="cart-btn"
        disabled={ !cartValue }
        onClick={ handleCheckout }
      >
        {/* {!cartValue ? (
          <p>Carrinho vazio</p>
        ) : (
          <p data-testid="customer_products__checkout-bottom-value">
            <span>{cartValue.toFixed(2).toString().replace('.', ',')}</span>
          </p>
        )} */}
        {!cartValue
          ? <p />
          : (
            <p data-testid="customer_products__checkout-bottom-value">
              <span>
                {cartValue.toFixed(2).toString().replace('.', ',')}
              </span>
            </p>)}
      </button>
    </div>
  );
}
