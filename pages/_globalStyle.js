import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    color: #333333;
    background-color: #ededed;
    height: auto;
    font-size: 14px;
  }
  h1{
    font-size: 36px;
  }
  h2{
    font-size: 22px;
  }
  a{
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
    font-weight: 400;

    &:focus {
      outline: none;
    }
  }
  &:lang(en) {
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
