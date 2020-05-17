import {cartActionApp} from "../constants/store";

// cartActionApp,
/**
 *
 * @param {Object} product
 * @returns {{payload: *, type: string}}
 */
export const addCartItem = (product) => ({
  type: cartActionApp.ADD_ITEM,
  payload: product
})

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const openCart = () => ({
  type: cartActionApp.SET_CART_TOGGLE_STATUS,
  payload: true,
})

/**
 *
 * @returns {{payload: boolean, type: string}}
 */
export const closeCart = () => ({
  type: cartActionApp.SET_CART_TOGGLE_STATUS,
  payload: false,
})
