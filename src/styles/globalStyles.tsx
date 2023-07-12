import { createGlobalStyle } from 'styled-components';
import "@fontsource/poppins";

const GlobalStyle = createGlobalStyle`
  /* Variables de colores */
  :root {
    --color-general-background: #302e3a;
    --color-primary-dark: #211f27;

    --color-border-input: #2E3852;
    --color-border-input-focus: #596da0;
    --pink: #bc3a80;
    --white: #fff;
    --black: #000;

    --color-button-background: #1761a6;
    --color-button-hover: #2080d8;
    --color-button-focus: #2695ff;

    --color-circle-pink: rgba(65, 44, 65, 1);
    --color-circle-blue: rgba(48, 48, 71, 1);

    --font-family: 'Poppins';
    --font-size: 1.2rem;
  }

  /* Estilos generales */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--white);
    list-style: none;
    text-decoration: none;

  }

  body {
    background-color: var(--color-general-background);

  }



`;

export default GlobalStyle;
