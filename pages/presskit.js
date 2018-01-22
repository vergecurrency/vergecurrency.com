import fetch from 'isomorphic-unfetch';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Presskit = function (props) {
  const { t, initialI18nStore } = props;

  return (
    <Layout>
      <Ribbon
        title={t("presskit:ribbon.title")}
        text={t("presskit:ribbon.text")}
        buttonPrimary={t("presskit:ribbon.buttonPrimary")}
      />
    </Layout>
  );
}

const Extended = translate(['header', 'footer', 'common', 'presskit', 'ribbon'], { i18n, wait: process.browser })(Presskit);

Extended.getInitialProps = async ({ req }) => (
  (true === (req && !process.browser)) ? i18n.getInitialProps(req, ['common', 'header', 'footer', 'presskit', 'ribbon']) : {}
);

export default Extended;
