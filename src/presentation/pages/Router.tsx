import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProductDetailsPage } from './ProductDetails'
import { SearchProductPage } from './SearchProduct'
import { ResultsPage } from './Results'

export const Router: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<SearchProductPage />} />
        <Route path="items">
          <Route index element={<ResultsPage />} />
          <Route path=":id" element={<ProductDetailsPage />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
