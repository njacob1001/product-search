import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductDetailsPage } from './ProductDetails'
import { SearchProductPage } from './SearchProduct'

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<SearchProductPage />} />
        <Route path="items" element={<ProductDetailsPage />} />
        <Route path="item/:id" element={<ProductDetailsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
