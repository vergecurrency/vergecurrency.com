import Link from 'next/link';

import Layout from '../components/Layout';
import Exchanges from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import Mentions from '../components/Mentions';

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faApple } from '@fortawesome/fontawesome-free-brands'
import { faPlay } from '@fortawesome/fontawesome-free-solid'

import fetch from 'isomorphic-unfetch';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Home = function (props) {
  const { t } = props;

  return (
    <Layout>
      <div className="home">
        <div className="ribbon">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1 dangerouslySetInnerHTML={{ __html: t("home:ribbon.title") }}></h1>
                  <p>{t("home:ribbon.text")}</p>
                  <Link href="/wallets">
                    <a className="btn btn-primary btn-wallet"><FontAwesomeIcon icon={ faApple } /> {t("home:ribbon.buttonPrimary")}</a>
                  </Link>
                  <Link href="/">
                    <a className="btn btn-secondary btn-video"><FontAwesomeIcon icon={ faPlay } /> {t("home:ribbon.buttonSecondary")}</a>
                  </Link>
                  <p className="blackpaper">Read the <a href="#"><i>Blackpaper</i></a> of Verge Currency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container--blue themed-container--blue--home">
          <div className="row center-xs">
            <div className="col-xs-9 col-sm-10">
              <div className="row between-xs">
                <div className="col-xs-12 col-sm-4 start-xs reason pb-xs">
                  <h3 dangerouslySetInnerHTML={{ __html: t("home:USPs.first.header") }}></h3>
                  <p>{t("home:USPs.first.text")}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason pb-xs">
                  <h3 dangerouslySetInnerHTML={{ __html: t("home:USPs.second.header") }}></h3>
                  <p>{t("home:USPs.second.text")}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3 dangerouslySetInnerHTML={{ __html: t("home:USPs.third.header") }}></h3>
                  <p>{t("home:USPs.third.text")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--home">
          <div className="container">
            <div className="row center-xs mentions">
              <div className="col-xs-11 col-sm-11 center-xs">
                <h6>{t("home:mentioned.mentioned_in")}</h6>
                <Mentions />
              </div>
            </div>

            <div className="row center-xs middle-xs pt pb-lg intro">
              <div className="col-xs-9 col-sm-6">
                <span className="spaced">{t("home:intro.span")}</span>
                <div className="pt-xs">
                  <h2>{t("home:intro.h2")}</h2>
                  <p>{t("home:intro.p")}</p>
                </div>
              </div>
            </div>
            <div className="benefits"> {/* TODO: refactor into themed container */}
              <div className="row center-xs start-sm pt-lg pb-lg">
                <div className="col-xs-9 col-md-3 col-md-offset-1">
                  <div className="benefits--item">
                    <h6>{t("home:benefits.benefit_1.title")}</h6>
                    <p>{t("home:benefits.benefit_1.text")}</p>
                  </div>
                  <div className="benefits--item pt-lg">
                    <h6>{t("home:benefits.benefit_1.title")}</h6>
                    <p>{t("home:benefits.benefit_1.text")}</p>
                  </div>
                  <h6>
                    <Link href={t("home:benefits.link:url")}>
                      <a className="benefits--url spaced">{t("home:benefits.link.title")}</a>
                    </Link>
                  </h6>
                </div>
                <div className="col-xs-9 col-md-3 col-md-offset-1">
                  <div className="benefits--item">
                    <h6>{t("home:benefits.benefit_3.title")}</h6>
                    <p>{t("home:benefits.benefit_3.text")}</p>
                  </div>
                  <div className="benefits--item pt-lg">
                    <h6>{t("home:benefits.benefit_4.title")}</h6>
                    <p>{t("home:benefits.benefit_4.text")}</p>
                  </div>
                </div>
                <div className="col-md-4 benefits--imgs hidden-xs">
                  <img src="../static/img/benefits-desktop.png" />
                  <img src="../static/img/benefits-mobile.png" />
                </div>
              </div>
            </div>
            <div className="wallets pt-lg pb-lg">
              <div className="row center-xs start-sm">
                <div className="col-sm-6 col-xs-9 start-xs">
                  <h6>
                    <Link href={t("home:wallets.link.url")}>
                      <a className="wallets--url spaced">{t("home:wallets.link.title")}</a>
                    </Link>
                  </h6>
                  <h2>{t("home:wallets.header")}</h2>
                </div>
              </div>
              <div className="row center-xs start-sm">
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__android wallets--icon__android--tor"></span>
                    <span className="wallets--text">
                      <h4>Tor Android Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__apple"></span>
                    <span className="wallets--text">
                      <h4>OSX Electrum Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs wallets--item__disabled">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__apple"></span>
                    <span className="wallets--text">
                      <h4>Apple iOS Wallet</h4>
                      <span>Available soon!</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__apple wallets--icon__apple--tor"></span>
                    <span className="wallets--text">
                      <h4>OSX Tor Electrum Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__windows"></span>
                    <span className="wallets--text">
                      <h4>Windows Electrum Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__windows wallets--icon__windows--tor"></span>
                    <span className="wallets--text">
                      <h4>Windows Tor Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__linux"></span>
                    <span className="wallets--text">
                      <h4>Linux Electrum Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
                <div className="col-xs-9 col-md-3 wallets--item start-xs">
                  <a href="#">
                    <span className="wallets--icon wallets--icon__linux wallets--icon__linux--tor"></span>
                    <span className="wallets--text">
                      <h4>Linux Tor Electrum Wallet</h4>
                      <span>Download here</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="themed-container--dark themed-container--dark--home">
              <div className="row center-xs power-to-the-people">
                <div className="col-xs-10 col-sm-10 col-md-8 start-xs">
                  <h6>Empowering people</h6>
                  <h3>Our mission is to <span>empower people</span> around the world by bringing blockchain transactions into <span>everyday life</span>. Verge makes it possible to engage in direct transactions quickly, efficiently and <span>privately</span>.</h3>
                  <p>With Verge, businesses and individuals have flexible options for sending and receiving payments. With the flip of a switch, we offer helpful integrations and tools that enable them to handle large scale transactions between merchants and small scale private payments.</p>
                  <Link href="/get-verge">
                    <a className="btn btn-secondary">Get Verge</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="exchanges pt-lg pb-lg">
              <div className="row">
                <div className="col-sm-6 col-xs-12">
                  <h6>
                    <Link href="/exchanges">
                      <a className="wallets--url spaced">See more exchanges</a>
                    </Link>
                  </h6>
                  <h2>Trade Verge on the most popular exchanges. <br />
                  We’re proud to be listed on:</h2>
                </div>
              </div>
              <Exchanges />
              <Cointicker />
            </div>
            <div className="vendors">
              <div className="row pt-xlg pb-xlg">
                <div className="col-md-5 col-md-offset-1">
                  <div className="vendors--story">
                    <h6>Accept Verge Currency</h6>
                    <h2>Powering real world vendors that accept Verge Currency</h2>
                    <p>All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.<br /><br />
                    Get started today and accept Verge in your store.</p>
                    <Link href="/vendors">
                      <a className="btn btn-primary btn-primary--on-white-bg">Accept Verge Today</a>
                    </Link>
                    <Link href="/vendors">
                      <a className="btn btn-tertiary">See all vendors</a>
                    </Link>
                  </div>
                </div>
                <div className="col-md-6 vendors--imgs">
                  <img src="../static/img/vendors/vendor-story.png" />
                </div>
              </div>
            </div>
            <div className="vendors--list">
              <div className="row pt-lg pb-lg center-xs middle-xs">
                <div className="col-xs-12">
                  <h2>Latest vendors to accept Verge</h2>
                  <h6>
                    <Link href="/vendors">
                      <a className="spaced">See all vendors here</a>
                    </Link>
                  </h6>
                </div>
                <div className="col-xs-12 pt"></div> {/*odd solution - fix this later */}
                <div className="col-md">
                  Nexwave
                </div>
                <div className="col-md">
                  HODL
                </div>
                <div className="col-md">
                  Crypto VFX
                </div>
                <div className="col-md">
                  Snel.com
                </div>
                <div className="col-md">
                  PMC
                </div>
                <div className="col-md">
                  RRRRR
                </div>
              </div>
            </div>
            <div className="roadmap">
              <div className="row pt pb">
                <div className="col-sm-8 col-sm-offset-4">
                  <h2>A roadmap with great features to come.<br />
                  Join us while we're still growing!</h2>
                  <ul className="roadmap--timeline">
                    <li className="done">
                      <h3>"Black" Paper v3.0</h3>
                      <span>Released</span> 4 June 2017
                    </li>
                    <li className="done">
                      <h3>Test servers deployed</h3>
                      <span>Released</span> 10 Aug 2017
                    </li>
                    <li className="planned">
                      <h3>I2P Android Wallet</h3>
                      Test servers <br />
                      Anonymous mobile transactions over the I2P network
                    </li>
                  </ul>

                  <h6>
                    <Link href="/roadmap">
                      <a className="spaced pt">Full roadmap here</a>
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <div className="blog">
              <div className="row pt pb center-xs middle-xs">
                <div className="col-sm-8">
                  <h6>
                    <Link href="/blog">
                      <a className="spaced">Go to the blog</a>
                    </Link>
                  </h6>

                  <h2>Check out our blog and to find out what is<br />
                  happening with Verge.</h2>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
  );
}

const Extended = translate(['home'], { i18n, wait: process.browser })(Home);

export default Extended;
