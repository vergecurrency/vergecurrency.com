import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';
import Content from '../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function Donate(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.donate.title', { defaultValue: 'Donate - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>{t('donate:body.header', { defaultValue: 'Donate to Support Development' })}</h1>
              <h3>
                {t('donate:body.intro', { defaultValue: 'Verge Community,' })}
              </h3>
              <p>
                {t('donate:body.text1', { defaultValue: 'At Verge we are always striving to achieve new heights and deliver products or software implementations that are requested by the community.,' })}
                {' '}
                {t('donate:body.text2', { defaultValue: 'Listening to our community members and taking in feedback is not only one of the core founding principles of Verge, but it is inherent in our open-source nature.,' })}
                {' '}
                {t('donate:body.text3', { defaultValue: 'Verge is continuously looking to grow and improve to ensure that you, the user of our product, are getting the best possible experience you can.,' })}
              </p>
              <p>
                {t('donate:body.text4', { defaultValue: 'As many of you are aware, no one on the Verge staff is paid to do the work they do and generally anything that requires a payment comes from members of the Core Team’s own income.,' })}
              </p>
              <p>
                {t('donate:body.text5', { defaultValue: '100% of the donations we receive will be used specifically and only for Verge related needs.,' })}
              </p>
              <p>
                {t('donate:body.text6', { defaultValue: 'Here are some examples of needs that your donations will be used for:,' })}
                <ul>
                  <li>{t('donate:body.expense1', { defaultValue: 'Servers for websites, Insight API and wallets, both mobile and desktop,' })}</li>
                  <li>{t('donate:body.expense2', { defaultValue: 'Marketing & Advertisement,' })}</li>
                  <li>{t('donate:body.expense3', { defaultValue: 'Development assistance,' })}</li>
                </ul>
              </p>

              <h3>{t('donate:body.donate', { defaultValue: 'Please help us and donate to Verge at this Verge address:,' })}</h3>

              <h4>DHe3mTNQztY1wWokdtMprdeCKNoMxyThoV</h4>
              <p>
                <Link href="https://verge-blockchain.info/address/DHe3mTNQztY1wWokdtMprdeCKNoMxyThoV">
                  <a href="https://verge-blockchain.info/address/DHe3mTNQztY1wWokdtMprdeCKNoMxyThoV" target="_blank" rel="noopener noreferrer">
                    View on verge-blockchain.info
                  </a>
                </Link>
              </p>
              <p>
                <Link href="https://prohashing.com/explorer/Verge/DHe3mTNQztY1wWokdtMprdeCKNoMxyThoV">
                  <a href="https://prohashing.com/explorer/Verge/DHe3mTNQztY1wWokdtMprdeCKNoMxyThoV" target="_blank" rel="noopener noreferrer">
                    View on prohashing.com
                  </a>
                </Link>
              </p>
              <p>
                <img src="/static/img/qrcode_donations_xvg.png" alt="verge donation address QR code" />
              </p>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'donate'], { i18n, wait: process.browser })(Donate);

export default Extended;
