import {cartActionApp} from "../constants/store";
import {addOneBySky, removeOneBySky, removeAllBySku} from "../modules/redux/cart/helpers";

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

    case cartActionApp.ADD_ITEM_BY_SKU:
      return {
        ...state,
        items: addOneBySky(payload,state.items)
      }

    case cartActionApp.REMOVE_ITEM_BY_SKU:
      return {
        ...state,
        items: removeOneBySky(payload,state.items)
      }

    case cartActionApp.REMOVE_ALL_BY_SKU:
      return {
        ...state,
        items: removeAllBySku(payload, state.items)
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
