import { useSelector, useDispatch } from 'react-redux';
import {
  addItemToCart,
  removeProductFromCart,
} from '../store/actions/cartActions';

const CartPage = () => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityUpdation = (item) => {
    dispatch(addItemToCart(item));
  };

  const handleProductDeletion = (item) => {
    dispatch(removeProductFromCart(item));
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-8'>
          <ul className='list-group'>
            {cartState?.cartItems?.map((item) => {
              return (
                <li
                  className='list-group-item d-flex justify-content-between align-items-center'
                  key={item.id}
                >
                  <span>{item.name}</span>
                  <span>
                    <button
                      onClick={() => {
                        // * Only run when product quantity is 1
                        if (item.quantity < 2) {
                          return;
                        }

                        handleQuantityUpdation({
                          ...item,
                          quantity: item.quantity - 1,
                        });
                      }}
                      className='btn btn-dark'
                    >
                      -
                    </button>
                    <span className='mx-3'>{item.quantity}</span>
                    <button
                      className='btn btn-dark'
                      onClick={() => {
                        handleQuantityUpdation({
                          ...item,
                          quantity: item.quantity + 1,
                        });
                      }}
                    >
                      +
                    </button>
                  </span>
                  <span
                    role='button'
                    onClick={() => handleProductDeletion(item)}
                  >
                    <i className='bi bi-trash text-danger'></i>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='col-md-4'>
          <div>
            <h2>
              Subtotal (
              {cartState?.cartItems.reduce(
                (acc, item) => acc + item.quantity,
                0
              )}
              ) items
            </h2>
            $
            {cartState?.cartItems
              .reduce((acc, item) => acc + item.quantity * item.price, 0)
              .toFixed(2)}
          </div>
          <button className='btn btn-dark' type='button'>
            Proceed To Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
