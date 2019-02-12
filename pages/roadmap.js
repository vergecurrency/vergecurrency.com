import Head from 'next/head';

import Layout from '../components/Layout';
import { translate } from 'react-i18next';
import i18n from '../i18n';
import CurrentYearRoadmap from './CurrentYearRoadmap';

function Roadmap(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.roadmap.title', {
            defaultValue: 'Roadmap - VergeCurrency.com',
          })}
        </title>
      </Head>
      <div className="roadmap">
        <div className="themed-container__gray themed-container__gray--roadmap">
          <div className="container">
            <div className="row center-xs roadmap">
              <div className="col-xs-11 col-sm-8 col-lg-6 start-xs center-sm">
                <h6>{t('roadmap:body.title', { defaultValue: 'Roadmap' })}</h6>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: t('roadmap:body.text1', {
                      defaultValue:
                        "A roadmap with great features to come.<br /> Join us while we're still growing!",
                    }),
                  }}
                />
                <p>
                  {t('roadmap:body.text2', {
                    defaultValue:
                      'As an open-source community and volunteer-driven project, our roadmap is meant as a general guideline for how we are developing Verge into one of the best cryptocurrency options out there.',
                  })}
                </p>
                <p>
                  {t('roadmap:body.text3', {
                    defaultValue:
                      'In the spirit of transparency and in good faith to the community, we want this roadmap to be made public. However, please keep in mind that this roadmap is subject to change based on priorities, unplanned developments and new ideas.',
                  })}
                </p>

                <div className="row start-xs center-sm pt">
                  <div className="col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs">
                    <ul className="roadmap__timeline">
                      <li className="roadmap__year roadmap__year--current">
                        <span>{/*2018*/}</span>
                      </li>
                      <CurrentYearRoadmap />
                      <li className="roadmap__year roadmap__year--next">
                        <span>{/*2019*/}</span>
                      </li>

                      {/*<li className="roadmap__item roadmap__item--planned">
                        <h3>Tor I2P Electrum Wallet</h3>
                      </li>
                      <li className="roadmap__item roadm
                      ap__item--planned">
                        <h3>Test Tor I2P Electrum Wallet</h3>
                      </li>*/}
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

const Extended = translate(['common', 'roadmap'], {
  i18n,
  wait: process.browser,
})(Roadmap);

export default Extended;
