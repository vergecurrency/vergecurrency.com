import React from 'react'

import Link from 'next/link'

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function Vendor_Integration(props) {
  const { t } = props;

  return (
    <Layout>
      <div className="learnmore pt-lg">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>{t('vendor-integration:title', { defaultValue: 'Verge Vendor Integration' })}</h1>
              <h2>{t('vendor-integration:coinpayments:title', { defaultValue: 'CoinPayments Cart plugins' })}</h2>
              <p>{t('vendor-integration:coinpayments:text', { defaultValue: 'CoinPayments offers a wide array of cart modules for most of the popular ecommerce solutions available.' })}</p>
              <Link href="https://www.coinpayments.net/merchant-tools-plugins">
                <a target="_blank" rel="noopener noreferrer" href="https://www.coinpayments.net/merchant-tools-plugins">
                  https://www.coinpayments.net/merchant-tools-plugins
                </a>
              </Link>
              <h2 className="pt-small">{t('vendor-integration:nodejs:title', { defaultValue: 'Node.js' })}</h2>
              <h3>{t('vendor-integration:nodejs:text', { defaultValue: 'The purpose of this repository is:' })}</h3>
              <ul>
                <li>{t('vendor-integration:nodejs:point-1', { defaultValue: 'Provide a one-stop resource for the Node.js developer to get started with VERGE integration.' })}</li>
                <li>{t('vendor-integration:nodejs:point-2', { defaultValue: 'Prevent would-be VERGE web developers worrying whether a VERGE client will work out of the box, or have to construct their own.' })}</li>
                <li>{t('vendor-integration:nodejs:point-3', { defaultValue: 'Promote Node.js development of VERGE web apps.' })}</li>
                <li>{t('vendor-integration:nodejs:point-4', { defaultValue: 'Identify and address any incompatibilities with the VERGE APIs that exist now, and/or in the future.' })}</li>
              </ul>
              <Link href="https://github.com/vergecurrency/nodejs-verge">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/vergecurrency/nodejs-verge">
                  https://github.com/vergecurrency/nodejs-verge
                </a>
              </Link>
              <h2 className="pt-small">{t('vendor-integration:python:title', { defaultValue: 'Python' })}</h2>
              <p>{t('vendor-integration:python:text', { defaultValue: 'This repository contains a set of Python libraries that allows easy access to the Verge Peer-to-Peer cryptocurrency client API.' })}</p>
              <Link href="https://github.com/vergecurrency/verge-python">
                <a target="_blank" href="https://github.com/vergecurrency/verge-python">
                  https://github.com/vergecurrency/verge-python
                </a>
              </Link>
              <h2 className="pt-small">{t('vendor-integration:graphics:title', { defaultValue: 'Graphics' })}</h2>
              <p>{t('vendor-integration:graphics:text', { defaultValue: 'Here Vendors can find necessary graphics and logos if required for integration into their websites' })}</p>
              <Link href="https://github.com/vergecurrency/verge-graphics/tree/master/Verge-Vendor-Icons">
                <a target="_blank" href="https://github.com/vergecurrency/verge-graphics/tree/master/Verge-Vendor-Icons">
                  https://github.com/vergecurrency/verge-graphics/tree/master/Verge-Vendor-Icons
                </a>
              </Link>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
};

const Extended = translate(['vendor-integration'], { i18n, wait: process.browser })(Vendor_Integration);

export default Extended;
