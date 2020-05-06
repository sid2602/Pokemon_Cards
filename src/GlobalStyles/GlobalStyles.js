import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    ${normalize}

    body{
        overflow-x: hidden;
        padding: 0;
        margin: 0;
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