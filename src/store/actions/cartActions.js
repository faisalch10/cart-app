import { ADD_TO_CART, REMOVE_TO_CART } from './constants';

export const addItemToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const removeProductFromCart = (item) => {
  return {
    type: REMOVE_TO_CART,
    payload: item,
  };
};
