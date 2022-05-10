import { Router } from 'presentation/pages/Router'
import { GlobalStyled } from 'presentation/theme'
import './index.css'

export const App = () => {
  return (
    <>
      <Router />
      <GlobalStyled />
    </>
  )
}
