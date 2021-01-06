import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }
  
  body {
    font-size: 16px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }`;
