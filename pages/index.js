import fetch from 'isomorphic-unfetch';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Home = function (props) {
  const { t, initialI18nStore } = props;

  return (
    <Layout>
      <Ribbon
        title={t("home:ribbon.title")}
        text={t("home:ribbon.text")}
        buttonPrimary={t("home:ribbon.buttonPrimary")}
        buttonSecondary={t("home:ribbon.buttonSecondary")}
      />
    </Layout>
  );
}

const Extended = translate(['header', 'footer', 'common', 'home', 'ribbon'], { i18n, wait: process.browser })(Home);

Extended.getInitialProps = async ({ req }) => (
  (true === (req && !process.browser)) ? i18n.getInitialProps(req, ['common', 'header', 'footer', 'home', 'ribbon']) : {}
);

export default Extended;
