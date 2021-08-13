import React from "react";
import App from "next/app";
import withReduxSaga from "next-redux-saga";

import GlobalStyle from "./_globalStyle";
import wrapper from "../config/store";

class MainApp extends App {
  static getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    };
    return { pageProps };
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyle />
        <Component {...pageProps} />
      </>
    );
  }
}

export default wrapper.withRedux(withReduxSaga(MainApp));
