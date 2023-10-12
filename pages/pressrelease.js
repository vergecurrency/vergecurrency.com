import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faTelegram,
  faYoutube, faReddit, faTwitter, faDiscord,
} from '@fortawesome/fontawesome-free-brands';

import Moment from 'react-moment';
import 'moment-timezone';

import markdown from 'markdown-in-js';
import one from '../static/pressreleases/one.json';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const CurrentUrl = 'https://vergecurrency.com/blog/'; // TODO: Determine correct url -- Component Mount
const TwitterStatus = `${one.summary} ${CurrentUrl}`; // TODO: Implement truncate on post title

function Pressrelease(props) {
  const { t } = props;

  // TODO: Dynamic history
  return (
    <Layout>
      <Subheader t={t} category="press" page="pressrelease" />

      <div className="pressrelease press">
        <div className="themed-container themed-container--pressrelease">
          <div className="container pb pb-xs-0">
            <div className="row center-xs pb-small">
              <div className="col-xs-11 col-sm-8">
                <div className="start-xs">
                  <div className="date-container">
                    {t('date.label', { defaultValue: 'Press release' })}
                    <span className="hidden-xs"> | </span>
                    <Moment format="YYYY/MM/DD" className="date">{ one.date }</Moment>
                  </div>
                  <h1>{ one.post.heading }</h1>
                  <p>{ one.post.subheading }</p>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-12 col-sm-10 themed-container__image themed-container__image--pressrelease" style={{ backgroundImage: `url( ${one.post.image})` }} />
            </div>
            <div className="row center-xs pt-small">
              <div className="col-xs-11 col-sm-8">
                <div className="start-xs pb bb">
                  <Content />
                </div>
                <div className="between-sm pt-small">
                  <div className="row start-xs share">
                    <div className="col-xs-12 col-sm-4">
                      <strong>{t('pressreleases:share-release', { defaultValue: 'Share the release' })}</strong>
                    </div>
                    <div className="col-xs-12 col-sm-8 end-sm">
                      <Link href={`https://www.facebook.com/sharer/sharer.php?u=${CurrentUrl}`}>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${CurrentUrl}`}>Facebook</a>
                      </Link>
                      <Link href={`https://twitter.com/home?status=${TwitterStatus}`}>
                        <a href={`https://twitter.com/home?status=${TwitterStatus}`}>Twitter</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container__gray themed-container__gray--pressrelease mb-0">
          <div className="container">
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Previous press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <Moment format="YYYY/MM/DD" className="date">2018-01-01</Moment>
                    <h4>Update on Wraith. The release of Verge Core..</h4>
                    <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <Moment format="YYYY/MM/DD" className="date">2018-01-01</Moment>
                    <h4>Update on Wraith. The release of Verge Core..</h4>
                    <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <Moment format="YYYY/MM/DD" className="date">2018-01-01</Moment>
                    <h4>Update on Wraith. The release of Verge Core..</h4>
                    <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row center-xs social">
              <div className="col-xs-11 center-xs">
                <div className="row around-xs pt">
                  <div className="col-xs-12 col-sm-5 start-xs">
                    <h4>Get social with Verge. Be a part of the Verge community.</h4>
                  </div>
                  <div className="col-xs-12 col-sm-7 col-md-5 col-md-offset-2 col--full-height">
                    <div className="row start-xs center-sm between-md pb-xs">
                      <div className="pt-xs social__icon">
                        <Link href="https://www.facebook.com/VERGEcurrency" target="_blank">
                          <a href="https://www.facebook.com/VERGEcurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                        </Link>
                      </div>
                      <div className="pt-xs social__icon">
                        <Link href="https://github.com/vergecurrency?tab=repositories" target="_blank">
                          <a href="https://github.com/vergecurrency?tab=repositories" target="_blank" rel="noopener noreferrer" className="social__link social__link--github"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                        </Link>
                      </div>
                      <div className="pt-xs social__icon">
                        <Link href="https://t.me/officialxvg" target="_blank">
                          <a href="https://t.me/officialxvg" target="_blank" rel="noopener noreferrer" className="social__link social__link--telegram"><FontAwesomeIcon icon={faTelegram} size="2x" /></a>
                        </Link>
                      </div>
                      <div className="pt-xs social__icon">
                        <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank">
                          <a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank" rel="noopener noreferrer" className="social__link social__link--youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                        </Link>
                      </div>
                      <div className="pt-xs social__icon">
                        <Link href="https://www.reddit.com/r/vergecurrency/" target="_blank">
                          <a href="https://www.reddit.com/r/vergecurrency/" target="_blank" rel="noopener noreferrer" className="social__link social__link--reddit"><FontAwesomeIcon icon={faReddit} size="2x" /></a>
                        </Link>
                      </div>
                      <div className="pt-xs social__icon">
                        <Link href="https://www.twitter.com/vergecurrency" target="_blank">
                          <a href="https://www.twitter.com/vergecurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                        </Link>
                      </div>
                      <div className="pt-xs social__icon">
                        <Link href="https://discord.gg/vergecurrency" target="_blank">
                          <a href="https://discord.gg/vergecurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--discord"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
                        </Link>
                      </div>
                    </div>
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

Transaction speeds are ultra-fast compared to other coins. Simple Payment Verification (SPV) technology allows average transaction confirmation times to drop to ~5 seconds. Also, there is a tipping bot cooked into the algorithm which helps translate the effectiveness of merging low fees, ultra-fast transaction speeds into a high-volume coin.`;

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Pressrelease);

export default Extended;
