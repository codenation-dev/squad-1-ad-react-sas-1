import {cartActionApp} from "../constants/store";

const INITIAL_STATE = {
  items: [],
  open: false
};

export const cartReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case cartActionApp.ADD_ITEM:
      return {
        ...state,
        items: [ ...state.items, payload]
      }

    case cartActionApp.SET_CART_TOGGLE_STATUS:
      return {
        ...state,
        open: !!payload
      }

    default:
      return state;
  }
};
