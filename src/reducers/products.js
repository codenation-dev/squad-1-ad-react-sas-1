import { productionActionTypes } from '../constants/store';

const INITIAL_STATE = {
  products: [
  ]
};

export const productsReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case productionActionTypes.SET_PRODUCTS:

      return {
        ...state,
        products: [...payload.products]
      }

    default:
      return state;
  }
}



