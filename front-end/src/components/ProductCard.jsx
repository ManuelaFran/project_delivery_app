import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function ProductCard({ productDetails }) {
  const [quantity, setQuantity] = useState(0);
  const { name, price, urlImage, id } = productDetails;
  const removeProducts = () => {
    setQuantity((prevState) => (
      prevState - 1
    ));
  };
  const addProducts = () => {
    setQuantity((prevState) => (
      prevState + 1
    ));
  };

  return (
    <div>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
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
        onChange={ ({ target }) => setQuantity(target.value) }
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
  productDetails: PropTypes.objectOf({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.number,
    urlImage: PropTypes.string,
  }).isRequired,
};
