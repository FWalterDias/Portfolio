import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouts } from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from "./styles/themes";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainRouts />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
