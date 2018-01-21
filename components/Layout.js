import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Layout = ({ t, initialI18nStore }, props) => (
  <div>
    <Head>
      <link rel="stylesheet" href="static/bootstrap-reboot.css" type="text/css" />
      <link rel="stylesheet" href="static/responsive-display.css" type="text/css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
    </Head>

    <Header t={t} />
    
    <div className="container">
      {props.children}
    </div>

    <Footer t={t} />

    <style jsx>{`
      div:not(.container) {
        display: flex
        flex-direction: column
        min-height: 100vh
      }

      .container {
        flex-grow: 1
      }
    `}</style>
  </div>
);

const Extended = translate(['header', 'footer', 'common'], { i18n, wait: process.browser })(Layout);

Extended.getInitialProps = async ({ req }) => (
  (true === (req && !process.browser)) ? i18n.getInitialProps(req, ['common', 'header', 'footer']) : {}
);

export default Extended;
