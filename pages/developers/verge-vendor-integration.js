import React from 'react';

import Link from 'next/link';
import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function Vendor_Integration(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.verge-vendor-integration.title', { defaultValue: 'Verge Vendor Integration - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>{t('vendor-integration:title', { defaultValue: 'Verge Vendor Integration' })}</h1>
              <h2>{t('vendor-integration:netcents:title', { defaultValue: 'NetCents - Verge\'s Preferred Payment Processor' })}</h2>
              <p>{t('vendor-integration:netcents:text', { defaultValue: 'NetCents Technology Inc, the transactional hub for all cryptocurrency payments, equips forward-thinking businesses with the technology to seamlessly integrate cryptocurrency processing into their payment model without taking on the risk or volatility of the crypto market.' })}</p>
              <p>
                {t('vendor-integration:netcents:text2', { defaultValue: 'An overview can be read here: ' })}
                <Link href="/static/docs/NetCents.pdf">
                <a target="_blank" rel="noopener noreferrer" href="/static/docs/NetCents.pdf">
                NetCents PDF
                </a>
              </Link>
              </p>
              <p>{t('vendor-integration:netcents:text3', { defaultValue: 'For more information, check out NetCents\' video below:' })}</p>
              <video width="100%" src="https://net-cents.com/60aef2bfedd0f3f7d8163b3c438884de.mp4" controls />
              <p />
              {t('vendor-integration:netcents:text4', { defaultValue: 'Click link below to register at NetCents:' })}
              <br />
              <Link href="https://net-cents.com/business/register?code=NC-0FADD2">
                <a target="_blank" rel="noopener noreferrer" href="https://net-cents.com/business/register?code=NC-0FADD2">
                https://net-cents.com/business/register?code=NC-0FADD2
                </a>
              </Link>
              <p />
              <p>{t('vendor-integration:netcents:text5', { defaultValue: 'Using Verge with NetCents on a PAX A920:' })}</p>
<iframe width="100%" height="469" src="https://www.youtube.com/embed/GxH9b8Tklbc"> </iframe>              <p />
<p>{t('vendor-integration:netcents:text6', { defaultValue: 'Using Verge with NetCents on a Exadigm N5 Terminal:' })}</p>
<iframe width="100%" height="469" src="https://www.youtube.com/embed/xJTv2GHSs1g"> </iframe>              <p />
              <br />            
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
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/vergecurrency/verge-python">
                  https://github.com/vergecurrency/verge-python
                </a>
              </Link>
              <h2 className="pt-small">{t('vendor-integration:graphics:title', { defaultValue: 'Graphics' })}</h2>
              <p>{t('vendor-integration:graphics:text', { defaultValue: 'Here Vendors can find necessary graphics and logos if required for integration into their websites' })}</p>
              <Link href="https://github.com/vergecurrency/verge-graphics/tree/master/Verge-Vendor-Icons">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/vergecurrency/verge-graphics/tree/master/Verge-Vendor-Icons">
                  https://github.com/vergecurrency/verge-graphics/tree/master/Verge-Vendor-Icons
                </a>
              </Link>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['vendor-integration', 'common'], { i18n, wait: process.browser })(Vendor_Integration);

export default Extended;
