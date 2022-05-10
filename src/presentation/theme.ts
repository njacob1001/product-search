import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`
  body {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #app {
    width: 100vw;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`
