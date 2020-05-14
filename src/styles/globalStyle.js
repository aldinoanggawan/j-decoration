import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
    }

    .container {
        width: 95%;
        max-width: 550px;
        margin: 0 auto;
    }
`

export default GlobalStyle
