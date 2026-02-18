import Head from 'next/head';
import Link from 'next/link';
import { translate } from 'react-i18next';
import Layout from '../components/Layout';
import { Exchanges } from '../components/Exchanges';
import i18n from '../i18n';

function GetVerge(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.get-verge.title', {
            defaultValue: 'Get Verge - VergeCurrency.com',
          })}
        </title>

        {/* Widget CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://letsexchange.io/widget_lets.css"
        />

        {/* Widget JS */}
        <script
          src="https://letsexchange.io/init_widget.js"
          defer
        />
      </Head>

      <br />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://letsexchange.io/widget_lets.css"
      />

      <div className="get-verge pt-large pb">
        <div
          className="lets-widget"
          id="lets_widget_ZfdAVgTUKOueeKY4"
          style={{
            maxWidth: '480px',
            height: '480px',
            margin: '0 auto',
          }}
        >
		    <h4 style={{ textAlign: 'center' }}>
            Here you can buy XVG (or any cryptocurrency) with Paypal Coin (from
            the Paypal App), Bitcoin, Ethereum, and more! or swap any crypto
            for a different crypto or even bridge cross chain!
          </h4>
          <iframe
            src="https://letsexchange.io/v2/widget?affiliate_id=ZfdAVgTUKOueeKY4&is_iframe=true"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="clipboard-read; clipboard-write"
          />
        </div>

        {/* NEW SWAPSPACE WIDGET */}
        <div
          className="iframe-container"
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >

          <iframe
            src="https://swapspace.co/widget/e690ba97ac5620dc27d4101c"
            frameBorder="0"
            width="404px"
            height="536px"
            style={{
              width: '404px',
              height: '536px',
              borderRadius: '20px',
              maxWidth: '100%',
            }}
          />
        </div>
		{/* NEW STEALTHEX WIDGET */}
        <div
          className="iframe-container"
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
		<iframe id="stealthex-widget" src="https://stealthex.io/widget/preview" style="border: none; border-radius: 10px; overflow: hidden; width: 100%; max-width: 680px; height: 330px; box-shadow: 0px 0px 32px 0px rgba(0, 0, 0, 0.06)"></iframe>
</div>
        <div className="container">
          <div className="row center-xs middle-xs pt pb">
            <p className="mb">
              <a
                href="https://coinmarketcap.com/currencies/verge/"
                rel="noopener noreferrer"
                target="_blank"
              >
                {t('get-verge:body.intro3', {
                  defaultValue:
                    'Visit Coinmarketcap for an additional list of market pairs.',
                })}
              </a>
            </p>

            <div className="col-xs-10">
              <h2>
                {t('get-verge:body.intro', {
                  defaultValue: 'Trade Verge on the most popular exchanges.',
                })}
              </h2>
              <h3>
                {t('get-verge:body.intro2', {
                  defaultValue: 'We’re proud to be listed on:',
                })}
              </h3>
              <Exchanges />
              <span className="hidden-xs">
                <br />
              </span>

              <h3>
                {t('home:getverge.text6', { defaultValue: 'Exchange Disclaimer:' })}
                {' '}
                <span className="hidden-xs">
                  <br />
                </span>
              </h3>
              <h4>
                {t('home:getverge.text7', {
                  defaultValue: (
                    <i>
                      Verge Currency provides the exchange information listed
                      herein for informational purposes only. Verge Currency is
                      not liable for any third-party transactions between
                      cryptocurrency purchasers or sellers. Buyers and investors
                      are to seek independent financial advice from a professional.
                      Do your own research.
                    </i>
                  ),
                })}
              </h4>

              <br /><br />

              <h3>
                {t('home:getverge.text8', {
                  defaultValue: 'Verge Network and Statistic Overviews:',
                })}
                {' '}
                <span className="hidden-xs">
                  <br />
                </span>
              </h3>
              <h4
                dangerouslySetInnerHTML={{
                  __html: `
                    ${t('home:getverge.text9', {defaultValue: 'Network and Proof of Work stats! <a href="https://vergecurrency.network/" target="_blank">https://vergecurrency.network/</a>'})}<br />
                    ${t('home:getverge.text10', {defaultValue: 'List of most swap sites! <a href="https://www.bestchange.com/bitcoin-to-verge.html" target="_blank">https://www.bestchange.com/bitcoin-to-verge.html</a>'})}<br />
                    ${t('home:getverge.text11', {defaultValue: 'Almost all hashrate stats and almost every pool’s hashrate! <a href="https://miningpoolstats.stream/" target="_blank">https://miningpoolstats.stream/</a>'})}<br />
                  `
                }}
              />
            </div>
          </div>

          {/* Placeholder for Coinchart component */}
          {/* <Coinchart /> */}

          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10 col-sm-6">
              <h6>
                {t('get-verge:body.title2', {
                  defaultValue: 'Blockchain Solutions for Everyday use',
                })}
              </h6>
              <h2>
                {t('get-verge:body.delivers', {
                  defaultValue:
                    'Verge provides the security of blockchain based payments to everyday users with easy to use software tailored to real life needs and applications.',
                })}
              </h2>
              <p>
                {t('get-verge:body.privacy', {
                  defaultValue:
                    'We strive to make blockchain payments effortless and convenient.',
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(
  ['home', 'common', 'get-verge'],
  { i18n, wait: process.browser }
)(GetVerge);

export default Extended;
