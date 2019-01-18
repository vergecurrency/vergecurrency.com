import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function FAQ_wallets(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.faq.wallets.title', { defaultValue: 'FAQ - Wallets - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="faq">
              <h1>{t('faq:wallets:subheader', { defaultValue: 'Wallets' })}</h1>
              <h2>{t('faq:wallets:help:question')}</h2>
              {t('faq:wallets:help:answer') } 
              <br />
              <a href="https://verge.zendesk.com" target="_blank">
                Verge Zendesk
              </a>
              <h2>{t('faq:wallets:whichwallet:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:whichwallet:answer') }} />
              <h2>{t('faq:wallets:electrum:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:electrum:answer') }} />
              <h2>{t('faq:wallets:electrumwallet:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:electrumwallet:answer') }} />
              <h2>{t('faq:wallets:qt:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:qt:answer') }} />
              <h2>{t('faq:wallets:qtwallet:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:qtwallet:answer') }} />
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:qtwallet:answer2') }} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['faq', 'common'], { i18n, wait: process.browser })(FAQ_wallets);

export default Extended;
