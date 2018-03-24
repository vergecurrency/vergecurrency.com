import Head from 'next/head';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function About(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.about.title', { defaultValue: 'About - VergeCurrency.com' })}</title>
      </Head>
      <div className="about">
        <div className="ribbon ribbon--about">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>About Verge</h1>
                  <p>
                    The grassroots culture is what makes Verge <span className="hidden-xs"><br /></span>
                    unique and dynamic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="intro pt-large pb-large pb-xs-0">
          <div className="row center-xs middle-xs">
            <div className="col-xs-10 col-sm-6">
              <h2>
                Verge Currency is a 100% open source project
                and the global Verge Community represents the man power driving it forward.
                Verge is not a company, there was no ICO held upon
                the launch and no pre-mining took place.
              </h2>
              <p>
                Below are just some of the most active community members who form the Core Team.
              </p>
            </div>
          </div>
        </div> */}
        <div className="intro pt-large pb-large">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12 col-sm-8">
              <h2>{t('faq:general:whatisverge:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:whatisverge:answer') }} />
              <h2>{t('faq:general:mission:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:mission:answer') }} />
              <h2>{t('faq:general:createdverge:question')}</h2>
              <p>{t('faq:general:createdverge:answer')}</p>
              <h2>{t('faq:general:opensource:question')}</h2>
              <p dangerouslySetInnerHTML={{ __html: t('faq:general:opensource:answer') }} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'about'], { i18n, wait: process.browser })(About);

export default Extended;
