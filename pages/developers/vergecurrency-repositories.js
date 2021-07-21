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
              <h1>{t('verge-repos:title', { defaultValue: 'Verge Currency Repositories' })}</h1>
              <h2>{t('verge-repos:primary', { defaultValue: 'Primary Repository' })}</h2>
              <Link href="https://github.com/vergecurrency/VERGE">
                <a href="https://github.com/vergecurrency/VERGE" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/VERGE</a>
              </Link>
              <h2>{t('verge-repos:core-installers', { defaultValue: 'Verge Core Installers' })}</h2>
              <Link href="https://github.com/vergecurrency/verge-core-installers">
                <a href="https://github.com/vergecurrency/verge-core-installers" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-core-installers</a>
              </Link>
              <h2>{t('verge-repos:blackpaper', { defaultValue: 'Verge Blackpaper' })}</h2>
              <Link href="https://github.com/vergecurrency/Verge-Blackpaper">
                <a href="https://github.com/vergecurrency/Verge-Blackpaper" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/Verge-Blackpaper</a>
              </Link>
              <h2>{t('verge-repos:electrum-via-tor', { defaultValue: 'Verge Electrum via Tor' })}</h2>
              <Link href="https://github.com/vergecurrency/electrum-xvg-tor">
                <a href="https://github.com/vergecurrency/electrum-xvg-tor" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/electrum-xvg-tor</a>
              </Link>
              <h2>{t('verge-repos:electrum-via-clearnet', { defaultValue: 'Verge Electrum via clearnet' })}</h2>
              <Link href="https://github.com/vergecurrency/electrum-xvg">
                <a href="https://github.com/vergecurrency/electrum-xvg" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/electrum-xvg</a>
              </Link>
              <h2>{t('verge-repos:website', { defaultValue: 'Verge Website' })}</h2>
              <Link href="https://github.com/vergecurrency/vergecurrency.com">
                <a href="https://github.com/vergecurrency/vergecurrency.com" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/vergecurrency.com</a>
              </Link>
              <h2>{t('verge-repos:graphics', { defaultValue: 'Verge Graphics' })}</h2>
              <Link href="https://github.com/vergecurrency/verge-graphics">
                <a href="https://github.com/vergecurrency/verge-graphics" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-graphics</a>
              </Link>
              <h2>{t('verge-repos:vendor-integration', { defaultValue: 'Verge Vendor Integration' })}</h2>
              <Link href="https://github.com/vergecurrency/nodejs-verge">
                <a href="https://github.com/vergecurrency/nodejs-verge" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/nodejs-verge</a>
              </Link><br />
              <Link href="https://github.com/vergecurrency/verge-ruby">
                <a href="https://github.com/vergecurrency/verge-ruby" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-ruby</a>
              </Link><br />
              <Link href="https://github.com/vergecurrency/verge-python">
                <a href="https://github.com/vergecurrency/verge-python" target="_blank" rel="noopener noreferrer">https://github.com/vergecurrency/verge-python</a>
              </Link>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['verge-repos', 'common'], { i18n, wait: process.browser })(VergeCurrency_Repositories);

export default Extended;
