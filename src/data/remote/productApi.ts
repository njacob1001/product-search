import { httpGet } from 'platform/http'
import { ProductsDetailResponse } from './dto/productDetailResponse'
import { ProductsResponse } from './dto/productsResponse'

export const getProductsApi = async (keyword: string, limit: number) => {
  return httpGet<ProductsResponse>('api/items', { search: keyword, limit })
}

export const getProductDetailApi = async (productId: string) => {
  return httpGet<ProductsDetailResponse>('api/items/' + productId)
}
