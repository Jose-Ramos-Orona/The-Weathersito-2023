import { createGlobalStyle } from "styled-components";
import "@fontsource/permanent-marker";

const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
}

body {
  font-family: permanent marker, sans-serif;
  color: #212121;
  background-color: papayawhip;
}

button,
textarea,
select {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
    
  
}

ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

a {
  text-decoration: none;
}

:focus-visible {
  outline: none;
}

`;

export default GlobalStyles;
