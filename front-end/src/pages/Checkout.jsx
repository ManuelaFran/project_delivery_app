import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutItem from '../components/CheckoutItem';
import Navbar from '../components/NavBar';
import CartContext from '../contexts/CartContext/CartContext';
import UserContext from '../contexts/UserContext/UserContext';

// Reqs 20 e 21
export default function Checkout() {
  // const [loading, setLoading] = useState(true);
  const {
    cartValue,
    cart,
    setFinishedOrder,
    finishedOrder,
    finishSale,
  } = useContext(CartContext);
  const { handlerSellers, sellers } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (finishSale.id) {
      navigate(`/customer/orders/${finishSale.id}`);
    }
  }, [finishSale, navigate]);

  useEffect(() => {
    handlerSellers();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerSeller = ({ target }) => {
    setFinishedOrder({ ...finishedOrder, sellerId: target.id });
  };

  const handlerAddress = ({ target }) => {
    setFinishedOrder({ ...finishedOrder, deliveryAddress: target.value });
  };

  const handlerNumber = ({ target }) => {
    setFinishedOrder({ ...finishedOrder, deliveryNumber: target.value });
  };

  return (
    <div>
      <h3>Finalizar pedido</h3>
      <Navbar />
      { cart.map((item, index) => (<CheckoutItem
        key={ `${item.id}-checkout` }
        index={ index }
        itemDetails={ item }
        page="customer_checkout"
      />)) }
      <h3>
        {'R$ '}
        <span
          data-testid="customer_checkout__element-order-total-price"
        >
          {cartValue.toFixed(2).replace('.', ',')}
        </span>
      </h3>
      <div>
        <h3>Detalhes e Endereço de entrega</h3>
        <label htmlFor="seller_name">
          P. Vendedora Responsável:
          <select
            name="sellers"
            id="seller_name"
            data-testid="customer_checkout__select-seller"
            onChange={ handlerSeller }
            value={ sellers }
          >
            {sellers.length > 0 && sellers.map((chooseSeller) => (
              <option
                key={ chooseSeller.id }
                value={ chooseSeller.id }
              >
                {chooseSeller.name}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="order_address">
          Endereço
          <input
            type="text"
            id="order_address"
            data-testid="customer_checkout__input-address"
            onChange={ handlerAddress }
            value={ finishedOrder.deliveryAddress }
          />
        </label>
        <label htmlFor="order_address_number">
          Número
          <input
            type="number"
            id="order_address_number"
            data-testid="customer_checkout__input-address-number"
            onChange={ handlerNumber }
            value={ finishedOrder.deliveryNumber }
          />
        </label>
        <button type="button" data-testid="customer_checkout__button-submit-order">
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}
