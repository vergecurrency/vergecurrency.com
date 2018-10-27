import { translate, Interpolate } from 'react-i18next';

import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import Wallets from '../components/Wallets';
import WalletsBtn from '../components/WalletsBtn';
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
                  <h1>{t('wallets:body.header1', { defaultValue: 'Download our Wallet' })}</h1>
                  <p dangerouslySetInnerHTML={{ __html: t('wallets:body.text1', { defaultValue: 'Download our latest Core wallet to store <span className="hidden-xs"><br /></span> your Verge Currency with.' }) }} />
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
              <h2 dangerouslySetInnerHTML={{ __html: t('wallets:body.text2', { defaultValue: 'Download our latest Core Wraith Wallets for <span className="hidden-xs"><br /></span> Windows, Linux and OSX or store your Verge on <span className="hidden-xs"><br /></span> your mobile with our Tor wallet.' }) }} />
              <p dangerouslySetInnerHTML={{ __html: t('wallets:body.text3', { defaultValue: 'Our core wallet is secure, easy and fast. Transactions in <span className="hidden-xs"><br /></span> less than 30 seconds.' }) }} />
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
                    <p>{t('common:wraith.text1')} {' '} {t('common:wraith.text2')} </p>
                  </div>
                </div>
                <h6 className="center-xs start-sm">
                  <Link href={t('home:benefits.link:url')}>
                    <a href={t('home:benefits.link:url')} className="benefits--url">
                      {t('home:benefits.link.title')}
                    </a>
                  </Link>
                </h6>
              </div>
              <div className="col-sm-5 col-md-4 col-lg-3 hidden-xs">
                <div className={"hidden-xs benefits--" + (i18n.language=='ar' || i18n.language=='fa' || i18n.language=='ku' ? 'imgsrtl' : 'imgs')}>
                  <img src="../static/img/benefits-desktop.png" alt="Benefits desktop" />
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
                  <div className="col-xs-12 col-lg-10">
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
          <div className="row center-xs middle-xs pt-large pb-large intro">
            <div className="col-xs-10 col-sm-6">
              <span className="spaced">{t('common:wraith.title', { defaultValue: 'WRAITH PROTOCOL' })}</span>
              <div className="pt-xs">
                <h2>
                 {t('common:wraith.text1', { defaultValue: 'Wraith Protocol is a technology upgrade package that enables our users to be able to send and receive payments privately across our blockchain by enabling stealth addressing services.' })} &nbsp;
                 {t('common:wraith.text2', { defaultValue: 'Additionally this update removes our QT wallet users off of clearnet and migrates everyone to SSL enabled Tor.' })} &nbsp;
                 {t('common:wraith.text3', { defaultValue: 'Through this system, users now have an additional layer of base IP obfuscation as well as the option to utilize stealth addressing services for their transactions.' })} &nbsp;
                 {t('common:wraith.text4', { defaultValue: 'Wraith Protocol allows for complete anonymity to be maintained while providing a safe and secure method of sending and receiving Verge coins.' })}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'wallets', 'home'], { i18n, wait: process.browser })(WalletsPage);

export default Extended;
