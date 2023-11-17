import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainRouts } from './Routes';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/globalStyle';
import theme from "./styles/themes";
import { ErrorProvider } from "./contexts/ShowError";
import { ModalProvider } from "./contexts/Modalcontext";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorProvider>
      <ModalProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <MainRouts />
          </ThemeProvider>
        </BrowserRouter>
      </ModalProvider>
    </ErrorProvider>
  </React.StrictMode>,
)
