import { translate, Interpolate } from 'react-i18next';

import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Wallets from '../components/Wallets';
import WalletsBtn from '../components/WalletsBtn';
import { ISO20022WalletInfo } from '../components/ISO20022Wallets';
import { ColdStorageWalletInfo } from '../components/ColdStorageWallets';
import { ThirdPartyWalletInfo } from '../components/3rdPartyWallets';
import i18n from '../i18n';

function WalletsPage(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.wallets.title', { defaultValue: 'Wallets - VergeCurrency.com' })}</title>
      </Head>
      <div>
        <div className="ribbon ribbon--wallets">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>{t('wallets:body.header1', { defaultValue: 'Download our primary vergePay Wallet' })}</h1>
                  <p dangerouslySetInnerHTML={{ __html: t('wallets:body.text1', { defaultValue: 'Download our latest vergePay wallet to store <span className="hidden-xs"><br /></span> your Verge Currency with.' }) }} />
                  <WalletsBtn t={t} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container wallet">
          <div className="row center-xs middle-xs pt-large pb-large">
            <div className="col-xs-10 col-sm-6">
              <h6>{t('wallets:body.header2', { defaultValue: 'Wallets' })}</h6>
              <h2 dangerouslySetInnerHTML={{ __html: t('wallets:body.text2', { defaultValue: 'Download one of our latest vergePay wallets <span className="hidden-xs"><br /></span>for your preferred platform.' }) }} />
              <p dangerouslySetInnerHTML={{ __html: t('wallets:body.text3', { defaultValue: 'Our vergePay wallets are extensively tested, secured, and easy to use.' }) }} />
            </div>
          </div>

          <div className="themed-container__blue themed-container__blue--benefits">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-5 col-md-6 col-lg-7">
                <div className="row start-xs benefits">
                  <div className="col-xs-12 col-md-6 pb pb-xs-0">
                    <h6>{t('home:benefits.benefit_1.title')}</h6>
                    <p>{t('home:benefits.benefit_1.text')}</p>
                  </div>
                  <div className="col-xs-12 col-md-6 pt-xs pb pb-xs-0">
                    <h6>{t('home:benefits.benefit_2.title')}</h6>
                    <p>{t('home:benefits.benefit_2.text')}</p>
                  </div>
                  <div className="col-xs-12 col-md-6 pb pb-xs-0 pt-xs">
                    <h6>{t('home:benefits.benefit_3.title')}</h6>
                    <p>{t('home:benefits.benefit_3.text')}</p>
                  </div>
                  <div className="col-xs-12 col-md-6 pt-xs">
                    <h6>{t('home:benefits.benefit_4.title')}</h6>
                    <p>{('Dual-Key Stealth Addressing enable our users to be able to send and receive payments safely and privately.')}</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3 hidden-xs">
                <div className={`hidden-xs benefits--${i18n.language === 'ar' || i18n.language === 'fa' || i18n.language === 'ku' ? 'imgsrtl' : 'imgs'}`}>
                  <img
                    src="../static/img/benefits-desktop.png"
                    srcSet="
                          ../static/img/benefits-desktop.png 1x,
                          ../static/img/benefits-desktop@2x.png 2x
                        "
                    alt="Benefits desktop"
                  />
                  <img
                    src="../static/img/benefits-mobile.png"
                    srcSet="
                          ../static/img/benefits-mobile.png 1x,
                          ../static/img/benefits-mobile@2x.png 2x
                        "
                    alt="Benefits mobile"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="wallets">
            <div className="row center-xs pt-large pb-large">
              <div className="col-xs-10 center-xs">
                <div className="row center-xs start-md">
                  <div className="col-xs-12 col-lg-12">
                    <div className="start-sm pb-small">
                      <h6>{t('wallets:body.header3', { defaultValue: 'Wallets for all platforms' })}</h6>
                      <h2>
                        <Interpolate i18nKey="home:wallets.header" br={<span> <br className="hidden-xs" /></span>} />
                      </h2>
                    </div>
                    <Wallets />
                  </div>
                </div>
              </div>
            </div>
          </div>

		      <ISO20022WalletInfo t={t} />
          <ColdStorageWalletInfo t={t} />
          <ThirdPartyWalletInfo t={t} />

        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'wallets', 'home'], { i18n, wait: process.browser })(WalletsPage);

export default Extended;
