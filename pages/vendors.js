import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';
import { LatestVendors } from '../components/Vendors';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function VendorsPage(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.vendors.title', { defaultValue: 'Vendors - VergeCurrency.com' })}</title>
      </Head>
      <div className="themed-container__gray themed-container__gray--roadmap">
        <div className="container">
          <div className="intro pt pb">
            <div className="row center-xs middle-xs">
              <div className="col-xs-10 col-sm-6">
                <h6>{t('vendors:body.header', { defaultValue: 'Vendors using Verge' })}</h6>
                <h2>{t('common:vendors.text1', { defaultValue: 'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.' })}</h2>
              </div>
            </div>
          </div>

          <LatestVendors />

          <div className="row center-xs pt">
            <div className="col-xs-10">
              <div className="row start-xs between-xs">
                <div className="col-xs-12 col-sm-8 pb-xs">
                  <h3>
                  {t('common:vendors.text2', { defaultValue: 'Get started today and accept Verge in your store!' })}
                  </h3>
                </div>
                <div className="col-xs-12 col-sm-4 end-sm">
                  <Link href="https://vergecurrency.com/developers/verge-vendor-integration/">
                    <a href="https://vergecurrency.com/developers/verge-vendor-integration/" className="btn btn-primary">{t('common:vendors.text3', { defaultValue: 'Accept Verge today' })}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'vendors'], { i18n, wait: process.browser })(VendorsPage);

export default Extended;
