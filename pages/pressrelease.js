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

const Pressrelease = function (props) {
  const { t, store } = props;
  const showLoader = store && store.showLoader;

  return (
    <Layout loading={ showLoader }>
      <Subheader t={t} category='press' page='pressrelease' />

      <div className="pressrelease">
        <div className="white-container white-container--pressrelease">
          <div className="container pb pb-xs-0">
            <div className="row center-xs">
              <div className="col-xs-11 col-sm-8">
                <div className="start-xs">
                  <div className="date-container">
                    {t('date.label', { defaultValue: 'Press release' })}
                    <span className="hidden-xs">|</span>
                    <Moment format="MMMM Do YYYY" className="date">{ one.date }</Moment>
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
                    <div className="col-xs-12 col-sm-10 image-container image-container--pressrelease" style={{ backgroundImage: `url(${ one.post.image })` }} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-11 col-sm-8">
                <div className="start-xs pb bb">
                  <Content />
                </div>
                <div className="between-sm pt-small">
                  <div className="row start-xs share">
                    <div className="col-xs-12 col-sm-4">
                      <strong>Share the release</strong>
                    </div>
                    <div className="col-xs-12 col-sm-8 end-sm">
                      Facebook
                      Twitter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="gray-container gray-container--pressrelease mb-0">
          <div className="container">
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Previous press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                    <h4>Update on Wraith. The release of Verge Core..</h4>
                    <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                    <h4>Update on Wraith. The release of Verge Core..</h4>
                    <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                    <h4>Update on Wraith. The release of Verge Core..</h4>
                    <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
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

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Pressrelease);

export default ServerProps(Extended);
