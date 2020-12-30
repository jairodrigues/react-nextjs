import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.backgroud};
    }

    h1 {
      font: 400 20px Poppins, sans-serif;
      font-weight: 600;
    }

    h3 {
      color:${props => props.theme.colors.text};
      font: 400 18px Poppins, sans-serif;
    }
/*
    p {
      font: 400 14px Poppins, sans-serif;
    } */
`
