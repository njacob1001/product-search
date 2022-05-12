import { ProductOperations } from 'domain/productOperations'
import { findProducts } from './findProducts'
import { findProductDetails } from './getProductDetails'

export const productUseCases = (productOperations: ProductOperations) => ({
  findProducts: findProducts(productOperations),
  findProductDetails: findProductDetails(productOperations),
})
