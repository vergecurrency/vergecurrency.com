import Head from 'next/head';

import Layout from '../components/Layout';
import { translate } from 'react-i18next';
import i18n from '../i18n';

const WHALE_DONATORS = [
  'Dini',
  'Kaution17',
  'Rénier Britz',
  '(KR) Jong Chan Lee',
  'Danblockchain',
  'ahmetakkaya',
  'wit_sec_birb',
  'zorospain',
  'Nate L.',
  'Gray Matter Group',
  'Jody31',
];

const DOLPHIN_DONATORS = [
  'Kie',
  'VergeLife',
  'satish',
  'Wallie',
  'BIO9000',
  'KraToZz',
  'TBechs',
  'clava',
  'Snarf',
  'BlueManRising',
  'Christian Forner',
  '4ever',
  'Darren',
  'John Schmansky',
  'Avichai Peretz',
  'Hawk',
  'yeicripto',
  'Piropig',
  'Binance',
  'JakeJames37',
  'Candace Hart',
  'mammothine',
  'Empire Exterminators',
  'Sachin Bhatt',
  'hi',
  'KRYPTOKID2U',
  'Bruno Rubio',
  'Rhino97X',
  'nesstopher',
  'Ok',
  'CryptoChristus',
  'Hepterso',
  'wolny-finansowo',
  'JimmyB',
  'GoldPerson',
  'Louie',
  'Supatoll',
  'Velaru.com',
  'Kipruto Hatton',
  'noodles',
  'Daperre',
  'ElTejon119',
  'Mk3pete',
  'Dolphin daniel',
  'VergeCoin @Verge5034',
  'Kevinjansie13',
  'Scdc2012',
  'Yilo0711',
  'Z Man',
  'DarKsidE555',
  'XVGYoda',
  'Julio Jimenez',
  'Mendo',
  'Crypt0kid',
  'Muzahid',
  'Foodmandoo',
  'DragonKingz',
  'Nieuwenhuis, E.',
  'Nono',
  'VictorAlfonso',
  'Xvg_bullant',
  'n0n00b',
  'HS',
  'Cryptofuture68_wvh',
  'KryptoKing80',
  'AdizAvatar',
  'Durkjan',
  'JanginLeejiwon',
  'Crypto Senf',
  'robertbent',
  'Domonkosbrn',
  'Robertv1979',
  'drkn8t',
  'Robert Gasso',
  'XVG Clown Fish',
  'cjbaker5',
  'euGenius Vision',
  'u4ric',
  '$XVGHODLER',
  'jockser',
  'MCNR',
];

function PartnershipDonationMentions(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.partnership_donation_mentions.title', {
            defaultValue: 'Partnership Donation Mentions - VergeCurrency.com',
          })}
        </title>
      </Head>
      <div>
        <div className="themed-container__gray themed-container__gray--pdr">
          <div className="container">
            <img src="/static/img/partnership-donations/ribbon.png" className="img-responsive" alt="Ribbon" />
            <h2 className="pdr-title">
              Verge Partnership Donation<br />Website Mentions
            </h2>
            <h3 className="pdr-subtitle">
              Thanks to everyone who donated to the Partnership!
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

        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'partnership-donation-mentions'], {
  i18n,
  wait: process.browser,
})(PartnershipDonationMentions);

export default Extended;
