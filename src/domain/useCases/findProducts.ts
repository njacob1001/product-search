import { ProductOperations } from 'domain/productOperations'

export const findProducts = (productOperations: ProductOperations) => async (keyword: string) => {
  const products = await productOperations.getProducts(keyword, 4)
  return products
}
