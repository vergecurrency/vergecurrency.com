import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Layout = function (props) {
  const { t } = props;

  return (
    <div>
      <div id="layout">
        <Head>
          <link rel="stylesheet" href="static/css/bootstrap-reboot.css" type="text/css" />
          <link rel="stylesheet" href="static/css/responsive-display.css" type="text/css" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
        </Head>

        <Header t={t} />

        {props.children}

        <Footer t={t} />
      </div>

      <style jsx>{`
        #layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          overflow: hidden; // gg
        }

        .container-fluid {
          flex-grow: 1;
        }
      `}</style>
    </div>
  )
};

const Extended = translate(['header', 'footer', 'common'], { i18n, wait: process.browser })(Layout);

Extended.getInitialProps = async ({ req }) => (
  (true === (req && !process.browser)) ? i18n.getInitialProps(req, ['common', 'header', 'footer']) : {}
);

export default Extended;
