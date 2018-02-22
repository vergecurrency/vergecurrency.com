import Link from 'next/link';

import Layout from '../components/Layout';
import Exchanges from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import Mentions from '../components/Mentions';
import Vendors from '../components/Vendors';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/fontawesome-free-brands';
import { faPlay } from '@fortawesome/fontawesome-free-solid';

import { translate, Interpolate } from 'react-i18next';
import i18n from '../i18n';

function Home(props) {
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
                  <h1 dangerouslySetInnerHTML={{ __html: t('home:ribbon.title') }} />
                  <p>{t('home:ribbon.text')}</p>
                  <Link href="/wallets">
                    <a href="/wallets" className="btn btn-primary btn-wallet"><FontAwesomeIcon icon={faApple} /> {t('home:ribbon.buttonPrimary')}</a>
                  </Link>
                  <Link href="/">
                    <a href="/" className="btn btn-secondary btn-video"><FontAwesomeIcon icon={faPlay} /> {t('home:ribbon.buttonSecondary')}</a>
                  </Link>
                  <p className="blackpaper">Read the <a href="/"><i>Blackpaper</i></a> of Verge Currency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container--dark themed-container--dark--home">
          <div className="row center-xs">
            <div className="col-xs-9 col-sm-10">
              <div className="row between-xs">
                <div className="col-xs-12 col-sm-4 start-xs reason pb-xs">
                  <h3 dangerouslySetInnerHTML={{ __html: t('home:USPs.first.header') }} />
                  <p>{t('home:USPs.first.text')}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason pb-xs">
                  <h3 dangerouslySetInnerHTML={{ __html: t('home:USPs.second.header') }} />
                  <p>{t('home:USPs.second.text')}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3 dangerouslySetInnerHTML={{ __html: t('home:USPs.third.header') }} />
                  <p>{t('home:USPs.third.text')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--home">
          <div className="container">
            <div className="row center-xs mentions pb">
              <div className="col-xs-11">
                <h6>{t('home:mentioned.mentioned_in')}</h6>
                <Mentions />
              </div>
            </div>

            <div className="row center-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('home:intro.span')}</h6>
                <h2>{t('home:intro.h2')}</h2>
                <p>{t('home:intro.p')}</p>
              </div>
            </div>

            <div className="themed-container--blue themed-container--blue--home">
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
                <div className="col-sm-5 col-md-4 col-md-3 col-lg-3 hidden-xs">
                  <div className="benefits--imgs hidden-xs">
                    <img src="../static/img/benefits-desktop.png" alt="Benefits desktop" />
                    <img src="../static/img/benefits-mobile.png" alt="Benefits mobile" />
                  </div>
                </div>
              </div>
            </div>

            <div className="wallets">
              <div className="row center-xs">
                <div className="col-xs-9 col-sm-10 center-xs">
                  <div className="row center-xs start-md">
                    <div className="col-xs-12 col-lg-10">
                      <div className="start-sm pb-small">
                        <h6>
                          <Link href={t('home:wallets.link.url')}>
                            <a href={t('home:wallets.link.url')} className="wallets--url spaced">{t('home:wallets.link.title')}</a>
                          </Link>
                        </h6>
                        <h2>
                          <Interpolate i18nKey="home:wallets.header" br={<span> <br className="hidden-xs" /></span>} />
                        </h2>
                      </div>
                      <div className="row center-xs start-sm">
                        <div className="col-xs-12 col-sm-6 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__android wallets--icon__android--tor" />
                            <span className="wallets--text">
                              <h4>Tor Android Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__apple" />
                            <span className="wallets--text">
                              <h4>OSX Electrum Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 wallets--item start-xs wallets--item__disabled">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__apple" />
                            <span className="wallets--text">
                              <h4>Apple iOS Wallet</h4>
                              <span>Available soon!</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__apple wallets--icon__apple--tor" />
                            <span className="wallets--text">
                              <h4>OSX Tor Electrum Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__windows" />
                            <span className="wallets--text">
                              <h4>Windows Electrum Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__windows wallets--icon__windows--tor" />
                            <span className="wallets--text">
                              <h4>Windows Tor Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__linux" />
                            <span className="wallets--text">
                              <h4>Linux Electrum Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                        <div className="col-xs-12 col-sm-5 col-md-4 wallets--item start-xs">
                          <a href="/">
                            <span className="wallets--icon wallets--icon__linux wallets--icon__linux--tor" />
                            <span className="wallets--text">
                              <h4>Linux Tor Electrum Wallet</h4>
                              <span>Download here</span>
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
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
                    <a href="/get-verge" className="btn btn-secondary">Get Verge</a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="exchanges">
              <div className="row center-xs">
                <div className="col-xs-9 col-sm-10 center-xs">
                  <div className="row center-xs start-md">
                    <div className="col-xs-12 col-lg-10">
                      <div className="start-sm pb-small">
                        <h6>
                          <Link href="/exchanges">
                            <a href="/exchanges" className="wallets--url spaced">See more exchanges</a>
                          </Link>
                        </h6>
                        <h2>Trade Verge on the most popular exchanges. <br />We’re proud to be listed on:</h2>
                      </div>

                      <Exchanges />
                    </div>
                  </div>
                </div>

                <Cointicker />
              </div>
            </div>

            <div className="themed-container--blue themed-container--blue--home">
              <div className="container">
                <div className="row center-xs middle-xs vendors pb">
                  <div className="col-xs-11 col-sm-6 col-md-5 start-xs">
                    <h6>{t('home:vendors.super', { defaultValue: 'Accept Verge Currency' })}</h6>
                    <h2>{t('home:vendors.title', { defaultValue: 'Powering real world vendors that accept Verge Currency' })}</h2>

                    <p>{t('home:vendors.text-1', { defaultValue: 'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.' })}</p>
                    <p>{t('home:vendors.text-2', { defaultValue: 'Get started today and accept Verge in your store.' })}</p>

                    <Link href="/get-verge">
                      <a href="/get-verge" className="btn btn-primary btn-primary--on-white-bg">{t('home:vendors.buttonPrimary', { defaultValue: 'Accept Verge today' })}</a>
                    </Link>
                    <Link href="/vendors">
                      <a href="/vendors" className="btn btn-tertiary">{t('home:vendors.buttonTertiary', { defaultValue: 'See all vendors' })}</a>
                    </Link>
                  </div>

                  <div className="col-xs-11 col-sm-4 col-md-5 end-xs">
                    <img className="vendors--img" src="../static/img/vendors/vendor-story.png" alt="Vendor Story" />
                  </div>
                </div>
              </div>
            </div>

            <div className="vendors--list">
              <div className="row pt-lg pb-lg center-xs middle-xs">
                <div className="col-xs-12">
                  <h2>Latest vendors to accept Verge</h2>
                  <h6>
                    <Link href="/vendors">
                      <a href="/vendors" className="spaced">See all vendors here</a>
                    </Link>
                  </h6>
                </div>
                <div className="col-xs-12 pt" /> {/*odd solution - fix this later */}
                <Vendors />
              </div>
            </div>

            <div className="roadmap">
              <div className="row pt pb">
                <div className="col-sm-8 col-sm-offset-4">
                  <h2>
                    A roadmap with great features to come.<br />
                    Join us while we&apos;re still growing!
                  </h2>
                  <ul className="roadmap--timeline">
                    <li className="done">
                      <h3>&quot;Black&quot; Paper v3.0</h3>
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
                      <a href="/roadmap" className="spaced pt">Full roadmap here</a>
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
                      <a href="/blog" className="spaced">Go to the blog</a>
                    </Link>
                  </h6>

                  <h2>
                    Check out our blog and to find out what is<br />
                    happening with Verge.
                  </h2>

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
