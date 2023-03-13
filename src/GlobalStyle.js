import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *,
    ::after,
    ::before {
        box-sizing: inherit;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: ${({theme}) => theme.color.mercury};
        color: ${({theme}) => theme.color.slategray};
        letter-spacing: 0.05em;
        word-break: break-word;
    }

    button {
        cursor: pointer;
    }   
`;