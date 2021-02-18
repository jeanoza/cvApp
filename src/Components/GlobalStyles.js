import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset}
    a{
        text-decoration:none;
        color:inherit;
    }
    * {
        box-sizing:border-box;
    }
    body{
        font-family: -apple-system, 'Arial', 'American Typewriter', 'Palatino', 'Courier', BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color:#FAFAFA;
        color:rgba(20,20,20,0.8);
        font-size:14px;
    }
`;

export default GlobalStyle;
