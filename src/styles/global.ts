import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: Work Sans;
        height: 100%;
    }

    svg {
        color: ${({ theme }) => theme.colors["base-brand-red"]};
    }
`;
