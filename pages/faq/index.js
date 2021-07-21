import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';
import Head from 'next/head';

function FAQ_General(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.faq.index.title', { defaultValue: 'Frequently Asked Questions - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="faq">
              <h1>{t('faq:general:subheader', { defaultValue: 'General' })}</h1>
              <h2>{t('faq:general:whatisverge:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:whatisverge:answer') }} />
              <h2>{t('faq:general:mission:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:mission:answer') }} />
              <h2>{t('faq:general:createdverge:question')}</h2>
              <p>{t('faq:general:createdverge:answer')}</p>
              <h2>{t('faq:general:opensource:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:opensource:answer') }} />
              <h2>{t('faq:general:getverge:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:getverge:answer') }} />
              <h2>{t('faq:general:techdoc:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:techdoc:answer') }} />
              <h2>{t('faq:general:premine:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:premine:answer') }} />
              <h2>{t('faq:general:supply:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:supply:answer') }} />
              <h2>{t('faq:general:highsupply:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:highsupply:answer') }} />
              <h2>{t('faq:general:burning:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:burning:answer') }} />
              <h2>{t('faq:general:inflation:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:inflation:answer') }} />
              <h2>{t('faq:general:transactionfee:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:transactionfee:answer') }} />
              <h2>{t('faq:general:transactionspeed:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:transactionspeed:answer') }} />
              <h2>{t('faq:general:transactioncap:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:transactioncap:answer') }} />
              <h2>{t('faq:general:maxsupply:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:maxsupply:answer') }} />
              <h2>{t('faq:general:atomicswaps:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:atomicswaps:answer') }} />
              <h2>{t('faq:general:vergebusiness:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:vergebusiness:answer') }} />
              <h2>{t('faq:general:vergecurrencyproject:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:vergecurrencyproject:answer') }} />
              <h2>{t('faq:general:funded:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:funded:answer') }} />
              <h2>{t('faq:general:publicledger:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:publicledger:answer') }} />
              <h2>{t('faq:general:wheretolearnmore:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:wheretolearnmore:answer') }} />
              <h2>{t('faq:general:milestones:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:milestones:answer') }} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['faq', 'common'], { i18n, wait: process.browser })(FAQ_General);

export default Extended;
