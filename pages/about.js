import Head from 'next/head';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function About(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.about.title', { defaultValue: 'About' })}</title>
      </Head>
      <div className="about">
        <div className="ribbon ribbon--about">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>{t('about:body.header', { defaultValue: 'About Verge' })}</h1>
                  <p dangerouslySetInnerHTML={{ __html: t('common:texts.grassroots', { defaultValue: 'The grassroots culture is what makes Verge <span className="hidden-xs"><br /></span> unique and dynamic.' }) }} />
                </div>
              </div>
            </div>
          </div>
        </div>
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

const Extended = translate(['common', 'about', 'faq'], { i18n, wait: process.browser })(About);

export default Extended;
