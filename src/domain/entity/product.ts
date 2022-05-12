interface Price {
  currency: string
  amount: number
  decimals: number
}

export interface Product {
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
