import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #ADC178;
    -webkit-font-smoothing: antialiased;
    max-width: 100%;
    height: 100vh;
    display: flex;
   
    justify-content: center;
    @media all and (display-mode: fullscreen) {
    display: none;
  }
}

  button {
    cursor: pointer;
  }
`;
