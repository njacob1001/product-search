import { ProductOperations } from 'domain/productOperations'
import { getProductDetailApi, getProductsApi } from 'data/remote/productApi'

export const productRepositoryImpl: ProductOperations = {
  getProducts: async (keyword: string) => getProductsApi(keyword, 4),
  getProduct: async (id: string) => getProductDetailApi(id),
}
