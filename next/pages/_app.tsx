import { AppProps } from "next/dist/next-server/lib/router/router";
import withReduxSaga from "next-redux-saga";
import Header from "../components/Header/Header";
import wrapper from "../store/configureStore";
import GlobalStyle from "../styles/GlobalStyle";

const app = ({ Component, pageProps }:AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

export default wrapper.withRedux(withReduxSaga(app));
