import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function FAQ_mining(props) {
  const { t } = props;
  return (
    <Layout>
      <div className="learnmore pt-large">
        <div className="container">
          <Content>
            <div className="faq">
              <h1>{t('faq:mining:subheader', { defaultValue: 'Mining' })}</h1>
              <h2>{t('faq:mining:proof:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:mining:proof:answer') }} />
              <h2>{t('faq:mining:algorithms:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:mining:algorithms:answer') }} />
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['faq'], { i18n, wait: process.browser })(FAQ_mining);

export default Extended;
