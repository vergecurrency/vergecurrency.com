import Head from 'next/head';
import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function Social(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.social.title', { defaultValue: 'Social - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <img src="https://media.discordapp.net/attachments/417250713291194368/418822151521566720/IMG_20180301_182816_834.jpg?width=675&height=663" className="img-responsive" />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(Social);

export default Extended;
