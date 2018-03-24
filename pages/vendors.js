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
      <div className="vendors pt-large pb">
        <div className="container">
          <div className="intro pt pb">
            <div className="row center-xs middle-xs">
              <div className="col-xs-10 col-sm-6">
                <h6>Vendors using Verge</h6>
                <h2>Vendors proudly accept Verge Currency as a method of payment for their services.</h2>
              </div>
            </div>
          </div>

          <LatestVendors />

          <div className="row center-xs pt">
            <div className="col-xs-10">
              <div className="row start-xs between-xs">
                <div className="col-xs-12 col-sm-8 pb-xs">
                  <h3>
                    Are you interested in Verge Currency? <span className="hidden-xs"><br /></span>
                    Start accepting Verge today!
                  </h3>
                </div>
                <div className="col-xs-12 col-sm-4 end-sm">
                  <Link href="/get-verge">
                    <a href="/get-verge" className="btn btn-primary">Accept Verge today</a>
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

const Extended = translate(['common'], { i18n, wait: process.browser })(VendorsPage);

export default Extended;
