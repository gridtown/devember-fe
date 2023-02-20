import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'ClimateCrisisKR-1979';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2212@1.0/ClimateCrisisKR-1979.woff2') format('woff2');
  font-weight: 900;
  font-style: normal;
 }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #0E0909;
  }
  &::-webkit-scrollbar-thumb {
    background-color: white;
    border-radius: 10px;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* overflow: hidden; */
  }
  p {
    margin:0;
    padding:0;
  }
  h1 {
    margin:0;
    padding:0;
  }
  button{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
  }
`;

export default GlobalStyle;
