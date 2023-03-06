import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

function CartProvider({ children }) {
  const [products, setProducts] = useState();
  const [cart, setCart] = useState([]);
  const [cartValue, setCartValue] = useState(0);

  const contextValue = React.useMemo(() => ({
    products, setProducts, cart, setCart, cartValue,
  }), [products, cart, cartValue]);

  useEffect(() => { // calcula valor e salva no estado
    const modifyValue = () => {
      if (!cart.length) return setCartValue(0);
      const amount = cart.map((product) => (product.price * product.quantity));
      const totalValue = amount.reduce((acc, curr) => acc + curr);
      setCartValue(totalValue);
    };

    modifyValue();
  }, [cart]);

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
