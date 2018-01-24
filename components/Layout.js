import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import stylesheet from '../static/scss/global.scss'

const Layout = function (props) {
  const { t } = props;

  return (
    <div>
      <Head>
        <title>VergeCurrency.com</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <link rel='shortcut icon' type='image/x-icon' href='../static/img/favicon.ico' />
        <link rel="stylesheet" href="static/css/bootstrap-reboot.css" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css" type="text/css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" type="text/css" />
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      </Head>

      <div id="layout">
        <Header t={t} />

        {props.children}

        <Footer t={t} />
      </div>

      <style jsx>{`
        #layout {
          overflow: hidden;
        }
      `}</style>
    </div>
  )
};

const Extended = translate(['header', 'footer', 'common'], { i18n, wait: process.browser })(Layout);

export default Extended;
