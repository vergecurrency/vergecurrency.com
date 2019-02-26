import Head from 'next/head';

import Layout from '../components/Layout';

import { Exchanges } from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import Coinchart from '../components/Coinchart';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function GetVerge(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.get-verge.title', { defaultValue: 'Get Verge - VergeCurrency.com' })}</title>
      </Head>
      <div className="get-verge pt-large pb">
        <div className="container">
          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10">
              <h6>{t('get-verge:body.title', { defaultValue: 'Get Verge' })}</h6>
              <h2 className="mb">{t('get-verge:body.intro', { defaultValue: 'Trade Verge on the most popular exchanges. We’re proud to be listed on:' })}</h2>

              <Exchanges />
                    <span className="hidden-xs">
                      <br />
                    </span>
                  <h3>
                    {t('home:getverge.text6', {
                      defaultValue:
                        'Exchange Disclaimer:',
                    })}{' '}
                    <span className="hidden-xs">
                      <br />
                    </span>
                  </h3>    
                  <h4>
                    {t('home:getverge.text7', {
                      defaultValue: <i>Verge Currency provides the exchange information listed herein for informational purposes only. Verge Currency is not liable for any third-party transactions between cryptocurrency purchasers or sellers. Buyers and investors are to seek independent financial advice from a professional. Do your own research.</i>,
                    })}
                  </h4>
            </div>
          </div>

          <Coinchart />

          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10 col-sm-6">
              <h6>{t('get-verge:body.title2', { defaultValue: 'DELIVERS WHAT OTHERS CAN\’T' })}</h6>
              <h2>
                {t('get-verge:body.delivers', { defaultValue: 'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated and transactions are completely untraceable.' })}
              </h2>
              <p>{t('get-verge:body.privacy', { defaultValue: 'We care about your privacy. Do you?' })}</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['home', 'common', 'get-verge'], { i18n, wait: process.browser })(GetVerge);

export default Extended;
