/**
 * Remove um item no cart com base no seu sku
 * @param {String}sku
 * @param {Array}items
 */
export const removeOneBySky = (sku, items) =>{
  let finded = false

  return items.filter(product =>{
    if(product.selected.sku === sku && finded === false){
      finded = true
      return false
    } else {
      return true
    }
  })
}

/**
 * Remove todos os itens no cart com base no seu sku
 * @param {String}sku
 * @param {Array}items
 */
export const removeAllBySku = (sku, items) => {
  return items.filter(product => product.selected.sku !== sku)
}

/**
 * Duplica um item no cart com base no seu sku
 * @param {String}sku
 * @param {Array}items
 */
export const addOneBySky = (sku, items) => {
  const product = items.find(product => product.selected.sku === sku)

  return [...items, product]
}
