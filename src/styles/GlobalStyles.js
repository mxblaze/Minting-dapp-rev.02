import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";

const GlobalStyles = createGlobalStyle`


${
  "" /* 
*{
    outline: 1px solid red !important;
} */
}

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    /* font-family: 'Sora', sans-serif; */
    font-family: "Gwibble", sans-serif;
    overflow-x: hidden;
    background-color:#3F78DC;

}


h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
    text-align :center}
a{
    color: inherit;
    text-decoration:none;
}
`;

export default GlobalStyles;
