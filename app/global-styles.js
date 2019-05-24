import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Montserrat', Helvetica, Arial, sans-serif;
    font-family: 'Roboto', sans-serif;
  }

  #app {
    background-color: lavender;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;

export default GlobalStyle;
