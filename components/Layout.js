import React from 'react';

import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import stylesheet from '../static/scss/global.scss';

class Layout extends React.Component {
  render() {
    const { t } = this.props;

    return (
      <div id="layout">
        <Head>
          <title>VergeCurrency.com</title>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
          <link rel="shortcut icon" type="image/x-icon" href="../static/img/favicon.ico" />

          <style type="text/css">
            @import url(/static/css/bootstrap-reboot.css);
            @import url(https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css);
          </style>
          <style type="text/css">
            {
              stylesheet
            }
          </style>
        </Head>

        <Header t={t} />

        {this.props.children}

        <Footer t={t} />
      </div>
    );
  }
}

const Extended = translate(['header', 'footer', 'common'], { i18n, wait: process.browser })(Layout);

Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['header', 'footer', 'home']);
  return {};
};

export default Extended;
