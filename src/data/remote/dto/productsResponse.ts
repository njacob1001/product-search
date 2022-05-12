interface Price {
  currency: string
  amount: number
  decimals: number
}

interface ProductSearchResponse {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  freeShiping: boolean
  soldQuantity: number
  description: string
  city: string
}

interface Author {
  name: string
  lastname: string
}

export interface ProductsResponse {
  author: Author
  categories: string[]
  items: ProductSearchResponse[]
}
