import axios from 'axios'

export const getSpeceficProductDetail = async productId => {
  const {
    data: { product: product }
  } = await axios.get(`/api/products/${productId}`)
  return product
    ? product
    : 'params depend on uuid : to fix '
}
