import { productUseCases as puc } from 'domain/useCases/productUseCases'
import { productRepositoryImpl } from 'data/repository/productRespositoryImpl'

export class Factory {
  static productUseCases() {
    const impl = productRepositoryImpl
    return puc(impl)
  }
}
