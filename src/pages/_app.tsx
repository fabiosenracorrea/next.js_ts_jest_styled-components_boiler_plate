import React from 'react';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';

import GlobalStyle, { theme } from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
