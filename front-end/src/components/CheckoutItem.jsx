import React, { useContext } from 'react';
import { object } from 'prop-types';
import CartContext from '../contexts/CartContext/CartContext';
import saveLocalStorage from '../utils/saveLocalStorage';
// Remove itens do carrinho Reqs 17, 18, 19
export default function CheckoutItem(props) {
  const { itemDetails: { id, name, quantity, price }, index, page } = props;
  const { cart, setCart } = useContext(CartContext);

  const removeItem = () => { // Remove item do carrinho e da chave cart do localstorage
    const oldCart = cart;
    const newCart = oldCart.filter((product) => product.id !== id);
    setCart(newCart);
    saveLocalStorage('cart', newCart);
  };

  return (
    <div className="checkout-item">
      <p
        className="checkout-item-index"
        data-testid={ `${page}__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </p>
      <p
        className="checkout-item-name"
        data-testid={ `${page}__element-order-table-name-${index}` }
      >
        {name}
      </p>
      <p
        className="checkout-item-quantity"
        data-testid={ `${page}__element-order-table-quantity-${index}` }
      >
        {quantity}
      </p>
      <p className="checkout-item-price">
        {'R$ '}
        <span
          data-testid={
            `${page}__element-order-table-unit-price-${index}`
          }
        >
          {Number(price).toFixed(2).replace('.', ',')}
        </span>
      </p>
      <p className="checkout-item-total">
        {'R$ '}
        <span
          data-testid={ `${page}__element-order-table-sub-total-${index}` }
        >
          {(Number(price) * quantity).toFixed(2).replace('.', ',')}
        </span>
      </p>
      { page === 'customer_checkout' && (
        <button
          type="button"
          className="checkout-btn-remove"
          data-testid={ `${page}__element-order-table-remove-${index}` }
          onClick={ removeItem }
        >
          Remover
        </button>
      )}
    </div>
  );
}

CheckoutItem.propTypes = {
  children: object,
}.isrequired;
