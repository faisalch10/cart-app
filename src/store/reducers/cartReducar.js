import { ADD_TO_CART, REMOVE_TO_CART } from '../actions/constants';

const initialState = {
  cartItems: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.id === item.id);

      if (existItem) {
        state.cartItems = state.cartItems.map((x) =>
          x.id === existItem.id ? item : x
        );
      } else {
        state.cartItems = [...state.cartItems, item];
      }

      return { cartItems: [...state.cartItems] };
    case REMOVE_TO_CART:
      state.cartItems = state.cartItems.filter(
        (x) => x.id !== action.payload.id
      );
      return {
        cartItems: [...state.cartItems],
      };

    default:
      return state;
  }
};

export default cartReducer;
