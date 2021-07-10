import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }

  * {
    box-sizing: border-box;
    align-itmes: center;
    justify-content: center;
    margin: 5;
    padding: 5;
    font-family: 'Abel', sans-serif;
  }

  body {
    margin: 5;
    align-itmes: center;
    justify-content: center;
    padding: 5;
    
    h1 {
      font-size: 2rem;
      width: 100vw;
      margin: 5;
      padding: 5;
      align-itmes: center;
      justify-content: center;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin: 5;
      padding: 5;
    }

    p {
      font-size: 1rem;
      margin: 5;
    padding: 5;
      color: var(--white);
    }
  }
`;
