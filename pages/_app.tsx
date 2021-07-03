import { AppProps } from "next/dist/next-server/lib/router/router";
import withReduxSaga from "next-redux-saga";
import wrapper from "@/store/configureStore";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <div id="root-modal" />
    </>
  );
};

export default wrapper.withRedux(withReduxSaga(App));
