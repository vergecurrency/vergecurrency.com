import Head from 'next/head';

import { translate } from 'react-i18next';

import Layout from '../components/Layout';

import i18n from '../i18n';

import { Sponsors } from '../components/Sponsors-2020';

function Meetup(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.meetup.title', { defaultValue: 'The Third Verge Meetup... TBA! - VergeCurrency.com' })}</title>
        <meta key="description" name="description" content={t('common:meta.meetup.description', { defaultValue: 'TBA' })} />
      </Head>
      <div className="meetup pt-large pb">
        <div className="ribbon ribbon--meetup20">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-11 col-sm-10 text-center">
                <div className="ribbon-txt">
                  <h1>
                    Stay tuned for
                  </h1>
                  <h1>`The Third Verge Meetup`</h1>
                  <p>
                    We are in the process of planning our third official Verge meetup.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row center-xs middle-xs pt">
            <div className="col-xs-11 meetup--programme">
              <h3>
                Check out our previous Meetup's
              </h3>
              <a style={{ display: 'block', margin: '20px' }} href="/meetup-2019">
                <code>[2019] Rotterdam, Netherlands</code>
              </a>
              <a style={{ display: 'block', margin: '20px' }} href="/meetup-2018">
                <code>[2018] Amsterdam, Netherlands</code>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['meetup-2020', 'common'], { i18n, wait: process.browser })(Meetup);

export default Extended;
