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
        <script src="https://www.universe.com/embed2.js" data-state="" />
      </Head>
      <div className="meetup pt-large pb">
        <div className="ribbon ribbon--meetup20">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-11 col-sm-10 text-center">
                <div className="ribbon-txt">
                  <h1>
                    Stay tuned for <br /><br />The Third Verge Meetup in
                    {' '}
                    2020
                  </h1>
                  <p>
                    We are in the process of planning our third official Verge meet-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row center-xs middle-xs pt">
            <div className="col-xs-11 bb meetup--programme">
              <h2>
                Check out our previous Meet-ups
              </h2>
              <br />
              <p>
              <a href="/meetup-2019">2019, in Rotterdam, Netherlands</a>
              </p>
              <br />
              <p>
              <a href="/meetup-2018">2018, in Amsterdam, Netherlands</a>
              </p>
            </div>
          </div>
        </div>


      </div>
      <div className="meetup--bottom20" />
    </Layout>
  );
}

const Extended = translate(['meetup-2020', 'common'], { i18n, wait: process.browser })(Meetup);

export default Extended;
