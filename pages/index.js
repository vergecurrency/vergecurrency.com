import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

import Layout from '../components/Layout';
import { HomeExchanges } from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import { Mentions } from '../components/Mentions';
import { LatestVendors } from '../components/Vendors';
import Wallets from '../components/Wallets';
import WalletsBtn from '../components/WalletsBtn';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faTelegram,
  faYoutube, faReddit, faTwitter, faDiscord,
} from '@fortawesome/fontawesome-free-brands';
import { faPlay } from '@fortawesome/fontawesome-free-solid';

import 'moment-timezone';

import { translate, Interpolate } from 'react-i18next';
import i18n from '../i18n';

function Home(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.home.title', { defaultValue: 'Verge - Secure and anonymous cryptocurrency, built with a focus on privacy - VergeCurrency.com' })}</title>
      </Head>
      <div className="home">
        <div className="ribbon">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1 dangerouslySetInnerHTML={{ __html: t('home:ribbon.title') }} />
                  <p>{t('home:ribbon.text')}</p>
                  <WalletsBtn />
                  <Link href="/donate">
                    <a href="/donate" className="btn btn-secondary" name="Donate now">DONATE NOW</a>
                  </Link>
                  <p className="blackpaper">Read the <Link href="/static/blackpaper/Verge-Anonymity-Centric-CryptoCurrency.pdf"><a href="/static/blackpaper/Verge-Anonymity-Centric-CryptoCurrency.pdf" target="_blank" rel="noopener noreferrer" name="blackpaper"><i>Blackpaper</i></a></Link> of Verge Currency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container__dark themed-container__dark--home">
          <div className="row center-xs">
            <div className="col-xs-9 col-sm-10">
              <div className="row between-xs">
                <div className="col-xs-12 col-sm-4 start-xs pb-xs reason">
                  <div className="reason--inner">
                    <h3 dangerouslySetInnerHTML={{ __html: t('common:USPs.first.header') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('common:USPs.first.text') }} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs pb-xs reason">
                  <div className="reason--inner">
                    <h3 dangerouslySetInnerHTML={{ __html: t('common:USPs.second.header') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('common:USPs.second.text') }} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <div className="reason--inner">
                    <h3 dangerouslySetInnerHTML={{ __html: t('common:USPs.third.header') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('common:USPs.third.text') }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--home">
          <div className="container">
            <div className="row center-xs mentions pb">
              <div className="col-xs-11">
                <div className="row between-md middle-md">
                  <div className="col-xs-12 col-md-2">
                    <h6>{t('home:mentioned.mentioned_in')}</h6>
                  </div>
                  <div className="col-xs-12 col-md">
                    <Mentions />
                  </div>
                </div>
              </div>
            </div>

            <div className="row center-xs intro pt pb-large">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('home:intro.span')}</h6>
                <h2>{t('home:intro.h2')}</h2>
                <p>{t('home:intro.p')}</p>
              </div>
            </div>

            <div className="themed-container__blue themed-container__blue--benefits">
              <div className="row center-xs">
                <div className="col-xs-10 col-sm-5 col-md-6 col-lg-7">
                  <div className="row start-xs benefits">
                    <div className="col-xs-12 col-md-6 pb pb-xs-0">
                      <h6>{t('home:benefits.benefit_1.title')}</h6>
                      <p>{t('home:benefits.benefit_1.text')}</p>
                    </div>
                    <div className="col-xs-12 col-md-6 pt-xs pb pb-xs-0">
                      <h6>{t('home:benefits.benefit_2.title')}</h6>
                      <p>{t('home:benefits.benefit_2.text')}</p>
                    </div>
                    <div className="col-xs-12 col-md-6 pb pb-xs-0 pt-xs">
                      <h6>{t('home:benefits.benefit_3.title')}</h6>
                      <p>{t('home:benefits.benefit_3.text')}</p>
                    </div>
                    <div className="col-xs-12 col-md-6 pt-xs">
                      <h6>{t('home:benefits.benefit_4.title')}</h6>
                      <p>{t('home:benefits.benefit_4.text')}</p>
                    </div>
                  </div>
                  <h6 className="center-xs start-sm">
                    <Link href={t('home:benefits.link:url')}>
                      <a href={t('home:benefits.link:url')} className="benefits--url">{t('home:benefits.link.title')}</a>
                    </Link>
                  </h6>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 hidden-xs">
                  <div className="benefits--imgs hidden-xs">
                    <LazyLoad height={430}>
                      <img src="../static/img/benefits-desktop.png" alt="Benefits desktop" />
                    </LazyLoad>
                    <LazyLoad height={385}>
                      <img src="../static/img/benefits-mobile.png" alt="Benefits mobile" />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            </div>

            <div className="wallets">
              <div className="row center-xs pt-large pb-large">
                <div className="col-xs-9 col-sm-10 center-xs">
                  <div className="row center-xs start-md">
                    <div className="col-xs-12 col-lg-10">
                      <div className="start-sm pb-small">
                        <h6>
                          <Link href={t('home:wallets.link.url')}>
                            <a href={t('home:wallets.link.url')} className="wallets--url">{t('home:wallets.link.title')}</a>
                          </Link>
                        </h6>
                        <h2>
                          <Interpolate i18nKey="home:wallets.header" br={<span> <br className="hidden-xs" /></span>} />
                        </h2>
                      </div>
                      <Wallets />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="themed-container__dark themed-container__dark--home">
              <div className="row center-xs power-to-the-people">
                <div className="col-xs-10 col-sm-10 col-md-8 start-xs">
                  <h6>Empowering people</h6>
                  <h3>Our mission is to <span>empower people</span> around the world by bringing blockchain transactions into <span>everyday life</span>. Verge makes it possible to engage in direct transactions quickly, efficiently and <span>privately</span>.</h3>
                  <p>With Verge, businesses and individuals have flexible options for sending and receiving payments. With the flip of a switch, we offer helpful integrations and tools that enable them to handle large scale transactions between merchants and small scale private payments.</p>
                  <Link href="/get-verge">
                    <a href="/get-verge" className="btn btn-white" name="Get Verge">Get Verge today</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row center-xs pt-large pb">
              <div className="col-xs-10 start-xs exchanges bb">
                <div className="start-sm pb-small">
                  <h6>
                    <Link href="/get-verge">
                      <a href="/get-verge" className="exchanges--url">See more exchanges</a>
                    </Link>
                  </h6>
                  <h2>Trade Verge on the most popular exchanges. <span className="hidden-xs"><br /></span>We’re proud to be listed on:</h2>
                </div>

                <HomeExchanges />

                <Cointicker />
              </div>
              <div className="col-xs-10 center-xs end-sm pt-small">
                <h6>
                  <Link href="/get-verge">
                    <a href="/get-verge" className="exchanges--url" name="See chart">See chart here</a>
                  </Link>
                </h6>
              </div>
            </div>

            <div className="themed-container__blue themed-container__blue--home">
              <div className="container">
                <div className="row center-xs middle-xs vendors">
                  <div className="col-xs-10 col-sm-6 col-md-5 start-xs">
                    <h6>{t('home:vendors.super', { defaultValue: 'Accept Verge Currency' })}</h6>
                    <h2>{t('home:vendors.title', { defaultValue: 'Powering real world vendors that accept Verge Currency' })}</h2>

                    <p>{t('home:vendors.text-1', { defaultValue: 'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.' })}</p>
                    <p>{t('home:vendors.text-2', { defaultValue: 'Get started today and accept Verge in your store.' })}</p>

                    <Link href="/developers/verge-vendor-integration">
                      <a href="/get-verge" className="btn btn-primary btn-primary--on-white-bg" name="Accept Verge Today">{t('home:vendors.buttonPrimary', { defaultValue: 'Accept Verge today' })}</a>
                    </Link>
                    <Link href="/vendors">
                      <a href="/vendors" className="btn btn-tertiary" name="See all vendors">{t('home:vendors.buttonTertiary', { defaultValue: 'See all vendors' })}</a>
                    </Link>
                  </div>

                  <div className="col-xs-11 col-sm-4 col-md-5 end-xs">
                    <LazyLoad height={375}>
                      <img className="vendors--img" src="../static/img/vendors/vendor-story.png" alt="Vendor Story" />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            </div>

            <div className="vendors--list">
              <div className="row pt-large pb-large center-xs middle-xs">
                <div className="col-xs-10">
                  <h2>Latest vendors to accept Verge</h2>
                  <h6>
                    <Link href="/vendors">
                      <a href="/vendors" className="vendors--url" name="See vendors">See all vendors here</a>
                    </Link>
                  </h6>

                  <LatestVendors />
                </div>
              </div>
            </div>

            <div className="container themed-container__linen themed-container__linen--home">
              <div className="row center-xs roadmap">
                <div className="col-xs-10 col-sm-8 col-md-6 start-xs center-lg">
                  <h2>
                    A roadmap with great features to come.<br />
                    Join us while we&apos;re still growing!
                  </h2>
                  <div className="row start-xs center-sm">
                    <div className="col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-12 col-lg-9 start-xs">
                      <ul className="roadmap__timeline roadmap__timeline--home pb">
                        <li className="roadmap__item roadmap__item--done">
                          <h3>&quot;Black&quot; Paper v3.0</h3>
                          <span>Released</span> 4 June 2017
                        </li>
                        <li className="roadmap__item roadmap__item--done">
                          <h3>Core Wallet 4.0 Release Stage 2</h3>
                          Tor Integration & Optional Stealth Addressing<br />
                          <span>Released</span> 1 January 2018
                        </li>
                        <li className="roadmap__item roadmap__item--done">
                          <h3>New website</h3>
                          New look, guides, updated roadmap, list of official core members, blog with official news, mobile friendly<br />
                          <span>Released</span> 24 March 2018
                        </li>
                        <li className="roadmap__item roadmap__item--planned">
                          <h3>Merchandise Online Store</h3>
                          Verge branded apparel that can be purchased with XVG and BTC.<br />
                          <b>Q1</b>
                        </li>
                        <li className="roadmap__item roadmap__item--planned">
                          <h3>RingCT integration</h3>
                          <b>Q2</b>
                        </li>
                        <li className="roadmap__item roadmap__item--planned">
                          <h3>I2P Android Wallet</h3>
                          Anonymous mobile transactions over the I2P network<br />
                          <b>Q2</b>
                        </li>
                      </ul>
                      <h6>
                        <Link href="/roadmap">
                          <a href="/roadmap" name="Full roadmap here">Full roadmap here</a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="blog">
              <div className="row pt pb center-xs middle-xs">
                <div className="col-xs-10 col-sm-8">
                  <h6>
                    <Link href="/blog">
                      <a href="/blog" className="spaced" name="Go to blog">Go to the blog</a>
                    </Link>
                  </h6>

                  <h2>
                    Check out our blog and to find out what is <span className="hidden-xs"><br /></span>
                    happening with Verge.
                  </h2>

                </div>
              </div>
            </div> */}
            <div className="press">
              {/* <div className="row center-xs previous">
                <div className="col-xs-11 start-xs">
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
              </div> */}

              <div className="row center-xs social">
                <div className="col-xs-11 center-xs">
                  <div className="row around-xs pt">
                    <div className="col-xs-12 col-sm-5 start-xs">
                      <h4>Get social with Verge. Be a part of the Verge community.</h4>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-5 col-md-offset-2 col--full-height">
                      <div className="row start-xs center-sm between-md pb-xs">
                        <div className="pt-xs social__icon">
                          <Link href="https://www.facebook.com/VERGEcurrency">
                            <a href="https://www.facebook.com/VERGEcurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--facebook" name="Facebook link"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://github.com/vergecurrency?tab=repositories">
                            <a href="https://github.com/vergecurrency?tab=repositories" target="_blank" rel="noopener noreferrer" className="social__link social__link--github" name="GitHub link"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://t.me/VERGExvg">
                            <a href="https://t.me/VERGExvg" target="_blank" rel="noopener noreferrer" className="social__link social__link--telegram" name="Telegram link"><FontAwesomeIcon icon={faTelegram} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ">
                            <a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank" rel="noopener noreferrer" className="social__link social__link--youtube" name="Youtube link"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.reddit.com/r/vergecurrency/">
                            <a href="https://www.reddit.com/r/vergecurrency/" target="_blank" rel="noopener noreferrer" className="social__link social__link--reddit" name="Reddit link"><FontAwesomeIcon icon={faReddit} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.twitter.com/vergecurrency">
                            <a href="https://www.twitter.com/vergecurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--twitter" name="Twitter link"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://discord.gg/vergecurrency">
                            <a href="https://discord.gg/vergecurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--discord" name="Discord link"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
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
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'home'], { i18n, wait: process.browser })(Home);

export default Extended;
