import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing: border-box;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    ul, ol {
        list-style: none;
    }  

    button {
        all: unset;
        cursor: pointer;
    }

    input {
        all: unset;
    }

    html,
    body {
        width: auto;
        max-width: 390px;
        height: 100%;
        margin: 0 auto;
        padding:0;
        background-color: #fff;
        position: relative;
        box-shadow: 0 0 20px #0000000d;
    }
`;

export default GlobalStyles;
