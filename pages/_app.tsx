import { AppProps } from "next/dist/next-server/lib/router/router";
import withReduxSaga from "next-redux-saga";
import wrapper from "@/store/configureStore";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <div id="root-modal" />
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(withReduxSaga(App));
