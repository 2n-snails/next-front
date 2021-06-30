import { AppProps } from "next/dist/next-server/lib/router/router";
import Header from "../components/Header";
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

export default wrapper.withRedux(app);
