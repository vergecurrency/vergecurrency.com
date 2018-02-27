import { translate, Interpolate } from 'react-i18next';

import Link from 'next/link';
import Layout from '../components/Layout';
import Wallets from '../components/Wallets';
import WalletsBtn from '../components/WalletsBtn';
import i18n from '../i18n';

function WalletsPage(props) {
  const { t } = props;

  const handleScrollToElement = () => {
    const allWallets = document.getElementById('wallets');
    window.scrollTo(0, allWallets.offsetTop);
  };

  return (
    <Layout>
      <div className="wallet">
        <div className="ribbon ribbon--wallets">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>Download our Wallet</h1>
                  <p>
                    Download our latest Core wallet to store <br />
                    your Verge Currency with.
                  </p>
                  <WalletsBtn t={t} />
                  <button
                    onClick={() => handleScrollToElement()}
                    onKeyDown={() => handleScrollToElement()}
                    className="btn btn-white"
                  >
                    See all our wallets
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row center-xs middle-xs pt-lg pb-lg intro">
            <div className="col-xs-9 col-sm-6">
              <span className="spaced">Wallets</span>
              <div className="pt-xs">
                <h2>
                  Download our latest Core Wraith Wallets for<br />
                  Windows, Linux and OSX or store your Verge on<br />
                  your mobile with our Tor wallet.
                </h2>
                <p>Our core wallet is secure, easy and fast. Transactions in<br /> less than 30 seconds.</p>
              </div>
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
                    <p>{t('home:benefits.benefit_4.text')}</p>
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
                <div className="benefits--imgs hidden-xs">
                  <img src="../static/img/benefits-desktop.png" alt="Benefits desktop" />
                  <img src="../static/img/benefits-mobile.png" alt="Benefits mobile" />
                </div>
              </div>
            </div>
          </div>

          <div className="wallets">
            <div className="row center-xs pt-lg pb">
              <div className="col-xs-9 col-sm-10 center-xs">
                <div className="row center-xs start-md">
                  <div className="col-xs-12 col-lg-10">
                    <div className="start-sm pb-small">
                      <h6>Wallets for all platforms</h6>
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

          <div className="guide">
            <div className="row center-xs middle-xs pt pb">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/R48e1mp_5qA"
                title="Verge YouTube video"
              />
            </div>
          </div>
          <div className="row center-xs middle-xs pt pb-lg intro">
            <div className="col-xs-9 col-sm-6">
              <span className="spaced">WRAITH PROTOCOL</span>
              <div className="pt-xs">
                <h2>
                  Wraith Protocol is a technology that allows the user to seamlessly
                  switch between public And private ledgers on the Verge Blockchain.
                  For the first time, users are now free to choose which ledger they want to utilize.
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'wallets'], { i18n, wait: process.browser })(WalletsPage);

export default Extended;
