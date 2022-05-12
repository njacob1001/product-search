import { ProductsDetailResponse } from 'data/remote/dto/productDetailResponse'
import { ProductsResponse } from 'data/remote/dto/productsResponse'

export interface ProductOperations {
  getProducts(keyword: string, limit: number): Promise<ProductsResponse>
  getProduct(id: string): Promise<ProductsDetailResponse>
}
