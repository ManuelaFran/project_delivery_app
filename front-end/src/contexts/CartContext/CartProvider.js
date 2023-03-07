import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';
import UserContext from '../UserContext/UserContext';

function CartProvider({ children }) {
  const { client } = useContext(UserContext);
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);
  const [finishedOrder, setFinishedOrder] = useState({
    userId: 0,
    sellerId: 0,
    totalPrice: 0,
    deliveryAddress: '',
    deliveryNumber: 0,
    products: [],
  });
  const [finishSale, setFinishSale] = useState({});

  useEffect(() => { // calcula valor e salva no estado
    const modifyValue = () => {
      if (!cart.length) return setCartValue(0);
      const amount = cart.map((product) => (product.price * product.quantity));
      const totalValue = amount.reduce((acc, curr) => acc + curr);
      setCartValue(totalValue);
    };

    modifyValue();
  }, [cart]);

  useEffect(() => {
    const cartLocalstorage = () => { // Pega carrinho do local
      const getCart = localStorage.getItem('cart');
      const validCart = getCart === null ? [] : JSON.parse(getCart);
      setCart(validCart);
    };

    cartLocalstorage();
  }, []);

  useEffect(() => {
    setFinishedOrder({
      userId: client.user.id,
      products: [...cart],
      totalPrice: cartValue,
      ...finishedOrder,
    });
  }, [client, cartValue, cart, finishedOrder]);

  const handlerFinishOrder = useCallback(async () => {
    const headers = { headers: { authorization: client.user.token } };
    const response = await axios.post('http://localhost:3001/sale/create', finishedOrder, headers);
    setFinishSale(response.data);
  }, [client.user.token, finishedOrder]);

  const contextValue = React.useMemo(
    () => ({
      products,
      setProducts,
      cart,
      setCart,
      cartValue,
      setFinishedOrder,
      finishedOrder,
      handlerFinishOrder,
      finishSale,
    }),
    [
      products,
      cart,
      cartValue,
      setFinishedOrder,
      finishedOrder,
      handlerFinishOrder,
      finishSale,
    ],
  );

  return (
    <CartContext.Provider
      value={ contextValue }
    >
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default CartProvider;
