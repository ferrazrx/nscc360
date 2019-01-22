import React from 'react'
import App, { Container } from 'next/app'
import Meta from "../components/Meta";

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    pageProps.query = ctx.query;
    pageProps.pathname = ctx.pathname;

    return { pageProps }
  }

  render () {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
            <title>NSCC 360°</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}