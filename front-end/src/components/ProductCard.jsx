import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../contexts/CartContext/CartContext';

export default function ProductCard({ productDetails }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);
  const { name, price, urlImage, id } = productDetails;

  const modifyCart = () => {
    const findProduct = cart.find((product) => product.id === id);
    if (!quantity && !findProduct) return; // não executa função
    if (!findProduct) return setCart([...cart, { ...productDetails, quantity }]); // add
    const oldCart = cart;
    const newCart = oldCart.filter((product) => product.id !== id);
    if (!quantity) return setCart(newCart); // remove
    setCart([...newCart, { ...productDetails, quantity }]); // atualiza
  };

  const removeProducts = () => {
    if (quantity <= 1) return setQuantity(0);
    setQuantity((prevState) => (prevState - 1));
  };

  const addProducts = () => (setQuantity((prevState) => (prevState + 1)));

  useEffect(() => {
    modifyCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        {(Number(price).toFixed(2).toString()).replace('.', ',')}
      </p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        className="product-card-image"
        src={ urlImage }
        alt={ name }
        style={ { width: '60px' } }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <button
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        type="button"
        onClick={ removeProducts }
      >
        -
      </button>
      <input
        type="number"
        value={ quantity }
        min="0"
        onChange={ ({ target }) => setQuantity(Number(target.value)) }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        data-testid={ `customer_products__button-card-add-item-${id}` }
        type="button"
        onClick={ addProducts }
      >
        +
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  productDetails: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
