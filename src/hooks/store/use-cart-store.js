import { delay } from "../../modules/time"
import slugify from "../../modules/string/slugfy"
import {ScrollToTopControlller} from "../router";

export const goToProduct = ({
  dispatch,
  setPageProduct,
  history,
}) => {

  const setGoToProduct = (product) => {

    const {
      name,
      color_slug
    } = product

    dispatch(setPageProduct(product))

    window.scroll({
      top: 0,
      left: 0,
    });

    history.push(`product/${slugify(name)}?color=${color_slug}`)
  }

  return[null, setGoToProduct]

}




