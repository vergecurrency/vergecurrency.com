import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function FAQ_legal(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.faq.legal.title', { defaultValue: 'FAQ - Legal - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="faq">
              <h1>{t('faq:legal:subheader', { defaultValue: 'Legal' })}</h1>
              {/* <h2>{t('faq:legal:statement')}</h2> */}
              <p dangerouslySetInnerHTML={{ __html: t('faq:legal:statement') }} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['faq', 'common'], { i18n, wait: process.browser })(FAQ_legal);

export default Extended;
