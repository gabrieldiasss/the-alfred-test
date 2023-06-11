import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    html {
        @media (max-width: 1440px) {
            font-size: 93.75%; // 15px
        }

        @media (max-width: 720px) {
            font-size: 87.5%; // 14px
        }

        @media(max-width: 400px) {
            font-size: 81.125%;
        }

        @media(max-width: 350px) {
            font-size: 75%;
        }
    }

    html, body {
        font-family: Work Sans;
        height: 100vh;
    }
`
