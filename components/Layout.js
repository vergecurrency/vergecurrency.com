import React, { Component } from 'react';

import Head from 'next/head';
import Router from 'next/router';

import Header from './Header';
import Footer from './Footer';
import Preloader from './Preloader';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import stylesheet from '../static/scss/global.scss';

const timer = (predicate, fn) => timeout => {
  if (predicate) setTimeout(fn, timeout);
}

class Layout extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: props && props.loading
    }
  }

  render() {
    const { loading } = this.state;
    const { t } = this.props;

    const updateState = () => this.setState({ loading: false });
    const clearLoaderAfter = timer(loading, updateState);

    clearLoaderAfter(3000);

    return loading? (
      <div>
        <Head>
          <title>VergeCurrency.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="../static/img/favicon.ico" />

          <style type="text/css">
            @import url(/static/css/bootstrap-reboot.css);
            @import url(https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css);
          </style>
          <style type="text/css">{
              stylesheet
          }</style>
        </Head>

        <Preloader />
      </div>
    ) : (
      <div id="layout">
        <Head>
          <title>VergeCurrency.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="../static/img/favicon.ico" />

          <style type="text/css">
            @import url(/static/css/bootstrap-reboot.css);
            @import url(https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css);
          </style>
          <style type="text/css">{
              stylesheet
          }</style>
        </Head>

        <Header t={t} />

        {this.props.children}

        <Footer t={t} />
      </div>
    );
  };
}

const Extended = translate(['header', 'footer', 'common'], { i18n, wait: process.browser })(Layout);

Extended.getInitialProps = async ({req}) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['header', 'footer', 'home']);
  return {};
};

export default Extended;
