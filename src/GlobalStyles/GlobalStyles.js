import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}

    *{
        box-sizing: border-box;
    }

    body{
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        font-family: 'Roboto', sans-serif;

    }

    a{
        text-decoration: none;
        color: black;
    }

    ul{
        list-style-type:none;
    }
`;

export default GlobalStyles;