import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  *,*::before,*::after{
    margin:0;
    padding:0;
    font-size:inherit;
    box-sizing:inherit;
  }
  
  html{
    font-size :62.5%;
  }

  body{
    box-sizing:border-box ;
  }
`;

export default Global;
