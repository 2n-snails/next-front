import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

const globalStyle = css`
  ${reset};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" !important;
    line-height: 1.5;
  }

  a {
    color: #232529;
    text-decoration: none;
  }

  h2,
  p {
    margin: 0;
  }

  button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
`;

export default GlobalStyle;
