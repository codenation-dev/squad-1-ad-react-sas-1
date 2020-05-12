import {globalActionApp} from "../constants/store";

/**
 *
 * @param {boolean} status
 * @returns {{payload: *, type: string}}
 */
export const setLoading = (status) => ({
  type: globalActionApp.LOADING,
  payload: status,
})
