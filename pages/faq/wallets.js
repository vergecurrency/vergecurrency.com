import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function FAQ_wallets(props) {
  const { t } = props;
  return (
    <Layout>
      <div className="learnmore pt-large">
        <div className="container">
          <Content>
            <div className="faq">
              <h1>{t('faq:wallets:subheader', { defaultValue: 'Wallets' })}</h1>
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
              <h2>{t('faq:wallets:backup:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:backup:answer') }} />
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:backup:answer2') }} />
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:backup:answer3') }} />
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:backup:answer4') }} />
              <h2>{t('faq:wallets:longsync:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:longsync:answer') }} />
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:longsync:answer2') }} />
              <h2>{t('faq:wallets:torandroidnoconnection:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:wallets:torandroidnoconnection:answer') }} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['faq'], { i18n, wait: process.browser })(FAQ_wallets);

export default Extended;
