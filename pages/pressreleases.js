import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Presskit = function (props) {
  const { t } = props;

  return (
    <Layout>
      <Subheader t={t} />

      <div className="pressreleases">
        <div className="white-container white-container--pressreleases">
          <div className="container pb">
            <div className="row center-xs">
              <div className="col-xs-8">
                <div className="start-xs">
                  <div className="date-container">
                    Press release | <span class="date">September 29, 2017</span>
                  </div>
                  <h1>VergeCurrency Listing on Binance Exchange</h1>
                  <p>Verge getting on Binance Exchange</p>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-12">
                <div className="container">
                  <div className="row center-xs">
                    <div className="col-xs-10 gray-container gray-container--presskit">

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-8">
                <div className="start-xs">
                  <p>
                    VergeCurrency Team is very excited to announce that $XVG will be listed on Binance on the upcoming Monday, October 2nd.
                  </p>
                  <h2>About Binance</h2>
                  <p>
                    Binance is setting a new gold standard in cryptocurrency trading, based on its scalable and highly-redundant architecture. We believe that they will take the lead in this area now and into the future. As of today, Binance is already one of the biggest cryptocurrency exchanges by trading volume in the world.
                  </p>
                  <p>
                    The team behind Binance is excellent, working hard to deliver superior trading experience to its users. Some of the many benefits Binance provides are:
                  </p>
                  <p>
                    - Safety stability ensured by multi-tier & multi-cluster system architecture;<br />
                    - High performance (Binance is able to process over 1,4 mln of orders per second);<br />
                    - Great liquidity;<br />
                    - Multiplatform support (Web, Android, iOS, HTML5, PC, Mac);<br />
                    - Multilingual support (English, Spanish, Russian, Japanese, Korean, Chinese).
                  </p>
                  <p>
                    With $XVG listing as the first and highly important step, we at VergeCurrency are looking forward to a mutually beneficial partnership in the time to come!
                  </p>
                  <h2>What is Verge?</h2>
                  <p>
                    For those who are new to VergeCurrency, below is a brief introduction. More details can be found in the previous blog post “What is Verge?”, as well as on our website.
                  </p>
                  <p>
                    Verge is a cryptocurrency that focuses on total anonymity and privacy for its users.
                  </p>
                  <p>
                    Whereas Bitcoin succeeded in the mission of creating a decentralised cryptocurrency, VergeCurrency brings it further by making transactions completely anonymous. The currency is virtually untraceable and the users of VergeCurrency can make instant anonymous transactions.
                  </p>
                  <p>
                    How is this possible? VergeCurrency implements highly advanced blockchain technology built on top of services such as Tor and I2P that hides your personal data, such as IP-addresses and geolocation. With the future implementation of RSK technology, Verge will offer smart contracts functionality, while maintaining total confidentiality of the users, thus being the only cryptocurrency on the market combining such features.
                  </p>
                  <p>
                    VergeCurrency is script based and makes it very easy to implement on an exchange.
                  </p>
                  <p>
                    Transaction speeds are ultra-fast compared to other coins. Simple Payment Verification (SPV) technology allows average transaction confirmation times to drop to ~5 seconds. Also, there is a tipping bot cooked into the algorithm which helps translate the effectiveness of merging low fees, ultra-fast transaction speeds into a high-volume coin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['presskit'], { i18n, wait: process.browser })(Presskit);

export default Extended;
