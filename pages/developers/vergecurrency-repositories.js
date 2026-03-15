import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function VergeCurrency_Repositories(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.vergecurrency-repositories.title', { defaultValue: 'Verge Currency Repositories - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>{t('verge-repos:title', { defaultValue: 'Verge Currency Code Repositories' })}</h1>
              <h2>{t('verge-repos:primary', { defaultValue: 'Verge Core Source Code' })}</h2>
              <a href="https://github.com/vergecurrency/VERGE" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge</a>
			  <h2>{t('verge-repos:website', { defaultValue: 'Verge Website' })}</h2>
              <a href="https://github.com/vergecurrency/vergecurrency.com" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/vergecurrency.com</a>
			  <h2>{t('verge-repos:core-installers', { defaultValue: 'Verge Android Wallet' })}</h2>
              <a href="https://github.com/vergecurrency/tordroid" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/tordroid</a>
              <h2>{t('verge-repos:blackpaper', { defaultValue: 'Verge iOS Wallet' })}</h2>
              <a href="https://github.com/vergecurrency/vIOS" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/vIOS</a>
              <h2>{t('verge-repos:electrum-via-tor', { defaultValue: 'Verge Android Wallet' })}</h2>
              <a href="https://github.com/vergecurrency/electrum-xvg-tor" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/electrum-xvg-tor</a>
              <h2>{t('verge-repos:graphics', { defaultValue: 'Verge Graphics' })}</h2>
              <a href="https://github.com/vergecurrency/verge-graphics" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-graphics</a>
              <h2>{t('verge-repos:vendor-integration', { defaultValue: 'Verge libraries for Node.js, Ruby, PHP, Python, and Coinlib (Flutter)' })}</h2>
              <a href="https://github.com/vergecurrency/nodejs-verge" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/nodejs-verge</a><br />
              <a href="https://github.com/vergecurrency/verge-ruby" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-ruby</a><br />
			  <a href="https://github.com/vergecurrency/php-verge" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/php-verge</a><br />
              <a href="https://github.com/vergecurrency/verge-python" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-python</a><br />
			  <a href="https://github.com/vergecurrency/coinlib" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/coinlib</a>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['verge-repos', 'common'], { i18n })(VergeCurrency_Repositories);

export default Extended;
