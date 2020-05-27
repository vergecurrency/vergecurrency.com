import Head from 'next/head';

import Layout from '../components/Layout';
import { translate } from 'react-i18next';
import i18n from '../i18n';
import CurrentMilestones from './CurrentMilestones';

function Milestones(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.milestones.title', {
            defaultValue: 'Milestones - VergeCurrency.com',
          })}
        </title>
      </Head>
      <div className="roadmap">
        <div className="themed-container__gray themed-container__gray--roadmap">
          <div className="container">
            <div className="row center-xs roadmap">
              <div className="col-xs-11 col-sm-10 col-lg-8 start-xs center-sm">
                <h6>{t('milestones:body.title', { defaultValue: 'Milestones' })}</h6>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t('milestones:body.text1', {
                      defaultValue:
                        "We have achieved some really exciting milestones so far.<br /> Join us and be part of our future developments!",
                    }),
                  }}
                />
                <br />
                <p>
                  {t('milestones:body.text2', {
                    defaultValue:
                      'As an open-source community and volunteer-driven project, we are constantly implementing, reviewing and re-evaluating technologies and features to make Verge into one of the best Currencies out there.',
                  })}
                </p>
                <p>
                  {t('milestones:body.text3', {
                    defaultValue:
                      'To that end, it doesn\'t make sense to be setting roadmaps which might be irrelevant by the time they\'re published, so instead see what we have achieved so far!',
                  })}
                </p>

                <div className="row start-xs center-sm pt">
                  <div className="col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs">
                    <ul className="roadmap__timeline">
                      {/*<li className="roadmap__year roadmap__year--current">*/}
                      {/*  <span>/!*2018*!/</span>*/}
                      {/*</li>*/}
                      <CurrentMilestones />
                      {/*<li className="roadmap__year roadmap__year--next">*/}
                      {/*  <span>/!*2019*!/</span>*/}
                      {/*</li>*/}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'milestones'], {
  i18n,
  wait: process.browser,
})(Milestones);

export default Extended;
