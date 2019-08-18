import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function FAQ_privacy(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.faq.privacy.title', { defaultValue: 'FAQ - Privacy - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="faq">
              <h1>{t('faq:privacy:subheader', { defaultValue: 'Privacy' })}</h1> 
              <h2>{t('faq:privacy:vergeanon:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:privacy:vergeanon:answer') }} />
              <h2>{t('faq:privacy:whytor:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:privacy:whytor:answer') }} />
              <h2>{t('faq:privacy:vergemasternode:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:privacy:vergemasternode:answer') }} />
              <h2>{t('faq:privacy:torandroidnoconnection:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:privacy:torandroidnoconnection:answer') }} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['faq', 'common'], { i18n, wait: process.browser })(FAQ_privacy);

export default Extended;
