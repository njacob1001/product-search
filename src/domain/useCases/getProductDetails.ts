import { ProductOperations } from 'domain/productOperations'

export const findProductDetails = (productOperations: ProductOperations) => async (productId: string) => {
  const products = await productOperations.getProduct(productId)
  return products
}
