import { delay } from "../../modules/time"
import slugify from "../../modules/string/slugfy"

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
    history.push(`product/${slugify(name)}?color=${color_slug}`)
  }

  return[null, setGoToProduct]

}




