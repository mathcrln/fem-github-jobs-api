import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body {

  }
  
  body {
    font-size: 16px;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }`;
