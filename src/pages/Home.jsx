import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart } from '../store/actions/cartActions';

const ITEMS = [
  {
    id: 1,
    name: 'Playstation 5',
    price: 455,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Macbook Pro 2023',
    price: 2000,
    quantity: 1,
  },
  {
    id: 3,
    name: 'HP Victus 15',
    price: 300,
    quantity: 1,
  },
];

const HomePage = () => {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cart);

  return (
    <div className='container text-center'>
      <div className='row'>
        {ITEMS.map((item, index) => {
          const isProductAlreadyAddedIntoCart = cartState.cartItems.find(
            (i) => i.id === item.id
          );
          return (
            <div className='col-lg-4' key={item.id}>
              <h4>{item.name}</h4>
              <h3>${item.price}</h3>
              <button
                onClick={() => dispatch(addItemToCart(item))}
                className='btn btn-dark'
                disabled={isProductAlreadyAddedIntoCart}
              >
                {isProductAlreadyAddedIntoCart
                  ? 'Added Into Cart'
                  : 'Add To Cart'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
