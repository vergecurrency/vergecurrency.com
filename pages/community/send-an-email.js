import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function SendAnEmail(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.send-an-email.title', { defaultValue: 'Send An Email - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>Send an email</h1>
              <p>contact@vergecurrency.com</p>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(SendAnEmail);

export default Extended;
