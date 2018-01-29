import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import ServerProps from '../components/ServerProps';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import Moment from 'react-moment';
import 'moment-timezone';

import markdown from 'markdown-in-js';
import one from '../static/pressreleases/one';

const Pressreleases = function (props) {
  const { t, store } = props;
  const showLoader = store && store.showLoader;

  return (
    <Layout loading={ showLoader }>
      <Subheader t={t} items={props.items} />

      <div className="pressreleases">
        <div className="white-container white-container--pressreleases">
          <div className="container pb">
            <div className="row center-xs">
              <div className="col-xs-8">
                <div className="start-xs">
                  <div className="date-container">
                    {t('date.label', { defaultValue: 'Press release' })} | <span className="date"><Moment format="MMMM Do YYYY">{ one.date }</Moment></span>
                  </div>
                  <h1>{ one.post.heading }</h1>
                  <p>{ one.post.subheading }</p>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-12">
                <div className="container">
                  <div className="row center-xs">
                    <div className="col-xs-10 gray-container gray-container--pressreleases" style={{ backgroundImage: `url(${ one.post.image })` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-8">
                <div className="start-xs">
                  <Content />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

Pressreleases.getInitialProps = () => {
  const Subnavigation_Items = [
    {
      'link': '/our-team',
      'i18':  'submenu.ourTeam',
      'name': 'Verge Team'
    },
    {
      'link': '/history',
      'i18':  'submenu.history',
      'name': 'History'
    },
    {
      'link': '/key-tech',
      'i18':  'submenu.keyTech',
      'name': 'Key Tech'
    },
    {
      'link': '/press-releases',
      'i18':  'submenu.pressReleases',
      'name': 'Press Releases'
    },
    {
      'link': '/presskit',
      'i18':  'submenu.presskit',
      'name': 'Presskit'
    }
  ];

  return {
    items: Subnavigation_Items,
    post: {
      date: new Date(2017, 8, 29, 12, 30, 13),
      heading: 'VergeCurrency Listing on Binance Exchange',
      subheading: 'Verge getting on Binance Exchange',
      image: 'https://placehold.it/1920x1080'
    }
  }
}

const Content = () => markdown`
VergeCurrency Team is very excited to announce that $XVG will be listed on Binance on the upcoming Monday, October 2nd.

About Binance
-------------

Binance is setting a new gold standard in cryptocurrency trading, based on its scalable and highly-redundant architecture. We believe that they will take the lead in this area now and into the future. As of today, Binance is already one of the biggest cryptocurrency exchanges by trading volume in the world.

The team behind Binance is excellent, working hard to deliver superior trading experience to its users. Some of the many benefits Binance provides are:

- Safety stability ensured by multi-tier & multi-cluster system architecture;
- High performance (Binance is able to process over 1,4 mln of orders per second);
- Great liquidity;
- Multiplatform support (Web, Android, iOS, HTML5, PC, Mac);
- Multilingual support (English, Spanish, Russian, Japanese, Korean, Chinese).

With $XVG listing as the first and highly important step, we at VergeCurrency are looking forward to a mutually beneficial partnership in the time to come!

What is Verge?
--------------

For those who are new to VergeCurrency, below is a brief introduction. More details can be found in the previous blog post “What is Verge?”, as well as on our website.

Verge is a cryptocurrency that focuses on total anonymity and privacy for its users.

Whereas Bitcoin succeeded in the mission of creating a decentralised cryptocurrency, VergeCurrency brings it further by making transactions completely anonymous. The currency is virtually untraceable and the users of VergeCurrency can make instant anonymous transactions.

How is this possible? VergeCurrency implements highly advanced blockchain technology built on top of services such as Tor and I2P that hides your personal data, such as IP-addresses and geolocation. With the future implementation of RSK technology, Verge will offer smart contracts functionality, while maintaining total confidentiality of the users, thus being the only cryptocurrency on the market combining such features.

VergeCurrency is script based and makes it very easy to implement on an exchange.

Transaction speeds are ultra-fast compared to other coins. Simple Payment Verification (SPV) technology allows average transaction confirmation times to drop to ~5 seconds. Also, there is a tipping bot cooked into the algorithm which helps translate the effectiveness of merging low fees, ultra-fast transaction speeds into a high-volume coin.`

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Pressreleases);

export default ServerProps(Extended);
