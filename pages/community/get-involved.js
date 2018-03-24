import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function GetInvolved(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.get-involved.title', { defaultValue: 'Get Involved - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <p><em>You’ve been trying to have your voice heard among the thousands of Verge supporters.</em></p>
              <p><em>You have ideas and suggestions which you believe will strengthen Verge and its mission to reach mass adoption.</em></p>
              <p><em>You would love to see Verge reach new heights in success and raise to a new level of awareness.</em></p>
              <p>We’ve realized the value of our community is what makes Verge so special, but we had no way to hear your thoughts in an organized fashion, and so we’ve provided an option to be able to better hear what it is you have to say and share.</p>
              <p>Make it as lean and mean as possible. Time in cryptocurrency is valuable and things move quickly. We are asking for your best:</p>
              <ol>
                <li>Five Line Pitch (In five sentences describe the problem, solution and target market)</li>
                <li><b>WHAT</b> and <b>WHO</b> do <i>YOU</i> need to create this?</li>
                <li>How are other cryptocurrencies doing this at the moment?</li>
                <li>How can the core team do to faciliate or help achieve this?</li>
              </ol>
              <p>You can send your Pitch and/or C.V. to: <b>contact@vergecurrency.com</b></p>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(GetInvolved);

export default Extended;
