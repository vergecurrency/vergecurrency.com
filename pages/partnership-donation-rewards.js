import Head from 'next/head';

import Layout from '../components/Layout';
import { translate } from 'react-i18next';
import i18n from '../i18n';

const WHALE_DONATORS = [
  'x',
];

const DOLPHIN_DONATORS = [
  'y',
];

function PartnershipDonationRewards(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.partnership_donation_rewards.title', {
            defaultValue: 'Partnership Donation Rewards - VergeCurrency.com',
          })}
        </title>
      </Head>
      <div>
        <div className="themed-container__gray themed-container__gray--pdr">
          <div className="container">
            <img src="/static/img/partnership-donations/ribbon.png" className="img-responsive" alt="Ribbon" />
            <h2 className="pdr-title">
              Verge Partnership Donation<br />Contest Rewards
            </h2>
            <h3 className="pdr-subtitle">
              Thanks to everyone who donated to the Partnership.
            </h3>
          </div>
          <div className="container">
            <div className="row text-center pt-large">
              <h2 className="col-xs-12">Whale Donators</h2>
            </div>
            <div className="row">
              {WHALE_DONATORS.map(donator => (
                <div className="col-xs-12 col-md-4 pt-small">
                  <div className="card">
                    <div className="card-body text-center">
                      <h2>{donator}</h2>
                      <p className="text-muted">THANK YOU!</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="container">
            <div className="row text-center pt-large">
              <h2 className="col-xs-12">Dolphin Donators</h2>
            </div>
            <div
              className="row"
              style={{
                justifyContent: 'center',
              }}
            >
              {DOLPHIN_DONATORS.map(donator => (
                <div className="col-xs-12 col-md-3 pt-small">
                  <div className="card">
                    <div className="card-body text-center">
                      <h3>{donator}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/*<div className="container text-center">*/}
          {/*<div className="row pt-xlarge justify-content-center">*/}
          {/*<h5 className="mindgeek-partnership-title">MINDGEEK PARTNERSHIP</h5>*/}
          {/*</div>*/}
          {/*<div className="row justify-content-center">*/}
          {/*<h2>*/}
          {/*Read more about the partnership*/}
          {/*<br />*/}
          {/*with Mindgeek here*/}
          {/*</h2>*/}
          {/*</div>*/}
          {/*<div className="row justify-content-center pt-small">*/}
          {/*<a href="/" className="btn btn-lg btn-primary">Partnerships</a>*/}
          {/*</div>*/}
          {/*</div>*/}
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'partnership-donation-rewards'], {
  i18n,
  wait: process.browser,
})(PartnershipDonationRewards);

export default Extended;
