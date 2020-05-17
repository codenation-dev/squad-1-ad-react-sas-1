/**
 *
 * @param {String}value
 * @return {function(...[*]=)}
 */
import {toLowerCase} from "../string/helpers";

export const matchProduct = (value) => product => {
  const {
    name
  } = product
  return toLowerCase(name).includes(toLowerCase(value))
}
