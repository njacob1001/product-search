interface Author {
  name: string
  lastname: string
}

interface Price {
  currency: string
  amount: number
  decimals: number
}

interface ProductDetail {
  id: string
  title: string
  price: Price
  picture: string
  condition: string
  free_shipping: string
  sold_quantity: string
  description: string
}

export interface ProductsDetailResponse {
  author: Author
  item: ProductDetail[]
}
