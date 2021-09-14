import { AppProps } from "next/dist/next-server/lib/router/router";
import withReduxSaga from "next-redux-saga";
import wrapper from "@/store/configureStore";
import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";
import GlobalStyle from "@/styles/GlobalStyle";
import LayoutComponents from "@/components/Layout";

const isNonLayoutList = ["/login", "/register"];

const App = ({ Component, pageProps, router }: AppProps) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {isNonLayoutList.indexOf(router?.pathname) !== -1 ? (
          <Component {...pageProps} />
        ) : (
          <LayoutComponents>
            <Component {...pageProps} />
          </LayoutComponents>
        )}
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(withReduxSaga(App));
