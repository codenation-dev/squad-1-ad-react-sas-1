import {productionActionTypes} from "../constants/store";

// globalActionApp,
/**
 *
 * @param {Array} products
* @returns {{payload: *, type: string}}
 */
export const setProducts = (products) => ({
  type: productionActionTypes.SET_PRODUCTS,
  payload: products
})
