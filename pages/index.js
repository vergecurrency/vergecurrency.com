import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

import Layout from '../components/Layout';
import { HomeExchanges } from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import { Mentions } from '../components/Mentions';
import { HomeVendors } from '../components/Vendors';
import Wallets from '../components/Wallets';
import WalletsBtn from '../components/WalletsBtn';
import { PartnerInfo } from '../components/Partners';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faTelegram,
  faYoutube,
  faReddit,
  faTwitter,
  faDiscord,
} from '@fortawesome/fontawesome-free-brands';

import 'moment-timezone';

import { translate, Interpolate } from 'react-i18next';
import i18n from '../i18n';
import CurrentYearRoadmap from './CurrentYearRoadmap';

function Home(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.home.title', {
            defaultValue:
              'Verge - Secure and anonymous cryptocurrency, built for everyday use - VergeCurrency.com',
          })}
        </title>
        <link rel='image_src' href='/static/img/press/logo/verge-logo.png' />        
      </Head>
      <div className="home">
        <div className="ribbon">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: t('home:ribbon.title', {
                        defaultValue:
                          'Privacy is our <i>standard</i>.<br />A secure and anonymous<br />cryptocurrency.',
                      }),
                    }}
                  />
                  <p>
                    {t('home:ribbon.text1', {
                      defaultvalue: 'Built for everyday use.',
                    })}
                  </p>
                  <WalletsBtn />
                  <Link href="/get-started" prefetch>
                    <a
                      href="/get-started"
                      className="btn btn-secondary"
                      name="Get Started with Verge"
                    >
                      {t('home:ribbon.text2', {
                        defaultvalue: 'Get started with Verge',
                      })}
                    </a>
                  </Link>
                  <p className="blackpaper">
                    Read the{' '}
                    <a
                      href="/static/blackpaper/verge-blackpaper-v5.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>Blackpaper</i>
                    </a>{' '}
                    of Verge Currency
                  </p>
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
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.first.header', {
                          defaultvalue:
                            'A <span>cryptocurrency</span> designed <br>for everyday use.',
                        }),
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.first.text', {
                          defaultvalue:
                            'Improving upon the original Bitcoin block&shy;chain and aims to fulfill its initial purpose.',
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs pb-xs reason">
                  <div className="reason--inner">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.second.header', {
                          defaultvalue:
                            'Bringing <span>blockchain</span> <br>into everyday life.',
                        }),
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.second.text', {
                          defaultvalue:
                            'Verge currency makes it possible to engage in direct transactions.',
                        }),
                      }}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <div className="reason--inner">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.third.header', {
                          defaultvalue:
                            'Open Source Development <br>& <span>Community Driven.</span>',
                        }),
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.third.text', {
                          defaultvalue:
                            "Verge is not a private company funded by pre-mined coins or ICO's.",
                        }),
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--home pt">
          <div className="container">
            <div className="row center-xs mentions pb">
              <div className="col-xs-11">
                <div className="row between-md middle-md">
                  <div className="col-xs-12 col-md-2">
                    <h6>
                      {t('home:mentioned.mentioned_in', {
                        defaultvalue: 'Mentioned in',
                      })}
                    </h6>
                  </div>
                  <div className="col-xs-12 col-md">
                    <Mentions />
                  </div>
                </div>
              </div>
            </div>

            <div className="row center-xs intro pt pb-large">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>
                  {t('home:intro.span', {
                    defaultvalue: "Delivers what others can't",
                  })}
                </h6>
                <h2>
                  {t('home:intro.h2', {
                    defaultvalue:
                      'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated and transactions are completely untraceable.',
                  })}
                </h2>
                <p>
                  {t('home:intro.p', {
                    defaultvalue: 'We care about your privacy. Do you?',
                  })}
                </p>
              </div>
            </div>

            <div className="themed-container__blue themed-container__blue--benefits">
              <div className="row center-xs">
                <div className="col-xs-10 col-sm-5 col-md-6 col-lg-7">
                  <div className="row start-xs benefits">
                    <div className="col-xs-12 col-md-6 pb pb-xs-0">
                      <h6>
                        {t('home:benefits.benefit_1.title', {
                          defaultvalue: 'ANONYMITY',
                        })}
                      </h6>
                      <p>
                        {t('home:benefits.benefit_1.text', {
                          defaultvalue:
                            'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated. The Core QT wallet has built-in TOR integration as well as SSL encryption which adds an extra level of security.',
                        })}
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6 pt-xs pb pb-xs-0">
                      <h6>
                        {t('home:benefits.benefit_2.title', {
                          defaultvalue: 'COMMUNITY DRIVEN',
                        })}
                      </h6>
                      <p>
                        {t('home:benefits.benefit_2.text', {
                          defaultvalue:
                            'Verge is an open source project with an active team of developers from all over the world. The development team is always in close contact with the community. Verge is not a private company funded through an ICO or premining.',
                        })}
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6 pb pb-xs-0 pt-xs">
                      <h6>
                        {t('home:benefits.benefit_3.title', {
                          defaultvalue: 'MASS ADOPTION',
                        })}
                      </h6>
                      <p>
                        {t('home:benefits.benefit_3.text', {
                          defaultvalue:
                            'Low fees, quick transactions, high volume in circulation, multiplatform support, Wraith Protocol are the ingredients that make Verge perfectly positioned for mass adoption.',
                        })}
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6 pt-xs">
                      <h6>
                        {t('home:benefits.benefit_4.title', {
                          defaultvalue: 'PRIVACY IS OUR STANDARD',
                        })}
                      </h6>
                      <p>
                        {t('common:wraith.text1', {
                          defaultvalue:
                            'Wraith Protocol is a technology upgrade package that enables our users to be able to send and receive payments privately across our blockchain by enabling stealth addressing services.',
                        })}{' '}
                        {t('common:wraith.text2', {
                          defaultvalue:
                            'Additionally this update removes our QT wallet users off of clearnet and migrates everyone to SSL enabled Tor.',
                        })}
                      </p>
                    </div>
                  </div>
                  <h6 className="center-xs start-sm">
                    <Link href="/benefits">
                      <a href="/benefits" className="benefits--url">
                        {t('home:benefits.link.title', {
                          defaultValue: 'Expand Benefits',
                        })}
                      </a>
                    </Link>
                  </h6>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 hidden-xs">
                  <div
                    className={
                      'hidden-xs benefits--' +
                      (i18n.language == 'ar' ||
                      i18n.language == 'fa' ||
                      i18n.language == 'ku'
                        ? 'imgsrtl'
                        : 'imgs')
                    }
                  >
                    <LazyLoad height={430}>
                      <img
                        src="../static/img/benefits-desktop.png"
                        alt="Benefits desktop"
                      />
                    </LazyLoad>
                    <LazyLoad height={385}>
                      <img
                        src="../static/img/benefits-mobile.png"
                        srcSet="
                          ../static/img/benefits-mobile.png 1x,
                          ../static/img/benefits-mobile@2x.png 2x
                        "
                        alt="Benefits mobile"
                      />
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
                          <Link href="/wallets">
                            <a href="/wallets" className="wallets--url">
                              {t('home:wallets.link.title', {
                                defaultvalue: 'Read about wallets',
                              })}
                            </a>
                          </Link>
                        </h6>
                        <h2>
                          <Interpolate
                            i18nKey="home:wallets.header"
                            br={
                              <span>
                                {' '}
                                <br className="hidden-xs" />
                              </span>
                            }
                          />
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
                  <h6>
                    {t('home:mission.header', {
                      defaultValue: 'Empowering people',
                    })}
                  </h6>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: t('home:mission.text1', {
                        defaultValue:
                          'Our mission is to <span>empower people</span> around the world by bringing blockchain transactions into <span>everyday life</span>. Verge makes it possible to engage in direct transactions quickly, efficiently and <span>privately</span>.',
                      }),
                    }}
                  />
                  <p>
                    {t('home:mission.text2', {
                      defaultValue:
                        'With Verge, businesses and individuals have flexible options for sending and receiving payments. With the flip of a switch, we offer helpful integrations and tools that enable them to handle large scale transactions between merchants and small scale private payments.',
                    })}
                  </p>
                  <Link href="/get-verge">
                    <a
                      href="/get-verge"
                      className="btn btn-white"
                      name="Get Verge"
                    >
                      {t('home:getverge.text1', {
                        defaultValue: 'Get Verge today',
                      })}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <PartnerInfo t={t} />

            <div className="row center-xs pt-large pb">
              <div className="col-xs-10 start-xs exchanges bb">
                <div className="start-sm pb-small">
                  <h6>
                    <Link href="/get-verge">
                      <a href="/get-verge" className="exchanges--url">
                        {t('home:getverge.text2', {
                          defaultValue: 'See more exchanges',
                        })}
                      </a>
                    </Link>
                  </h6>
                  <h2>
                    {t('home:getverge.text3', {
                      defaultValue:
                        'Trade Verge on the most popular exchanges.',
                    })}{' '}
                    <span className="hidden-xs">
                      <br />
                    </span>
                    {t('home:getverge.text4', {
                      defaultValue: 'We’re proud to be listed on:',
                    })}
                  </h2>
                </div>

                <HomeExchanges />

                <Cointicker />
              </div>
              <div className="col-xs-10 center-xs end-sm pt-small">
                <h6>
                  <Link href="https://coinmarketcap.com/currencies/verge/">
                    <a
                      href="https://coinmarketcap.com/currencies/verge/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                      name="See chart"
                    >
                      {t('home:getverge.text5', {
                        defaultValue: 'See chart here',
                      })}
                    </a>
                  </Link>
                </h6>
              </div>
            </div>

            <div className="themed-container__blue themed-container__blue--home">
              <div className="container">
                <div className="row center-xs middle-xs vendors">
                  <div className="col-xs-10 col-sm-6 col-md-5 start-xs">
                    <h6>
                      {t('home:vendors.super', {
                        defaultValue: 'Accept Verge Currency',
                      })}
                    </h6>
                    <h2>
                      {t('home:vendors.title', {
                        defaultValue:
                          'Powering real world vendors that accept Verge Currency',
                      })}
                    </h2>

                    <p>
                      {t('common:vendors.text1', {
                        defaultValue:
                          'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.',
                      })}
                    </p>
                    <p>
                      {t('common:vendors.text2', {
                        defaultValue:
                          'Get started today and accept Verge in your store.',
                      })}
                    </p>

                    <Link href="/developers/verge-vendor-integration">
                      <a
                        href="/developers/verge-vendor-integration"
                        className="btn btn-primary btn-primary--on-white-bg"
                        name="Accept Verge Today"
                      >
                        {t('common:vendors.text3', {
                          defaultValue: 'Accept Verge today',
                        })}
                      </a>
                    </Link>
                    <Link href="/vendors">
                      <a
                        href="/vendors"
                        className="btn btn-tertiary"
                        name="See all vendors"
                      >
                        {t('home:vendors.buttonTertiary', {
                          defaultValue: 'See all vendors here',
                        })}
                      </a>
                    </Link>
                  </div>

                  <div className="col-xs-11 col-sm-4 col-md-5 end-xs">
                    <LazyLoad height={375}>
                      <img
                        className={
                          'vendors--' +
                          (i18n.language == 'ar' ||
                          i18n.language == 'fa' ||
                          i18n.language == 'ku'
                            ? 'imgrtl'
                            : 'img')
                        }
                        src="../static/img/vendors/vendor-story.png"
                        srcSet="
                          ../static/img/vendors/vendor-story.png 1x,
                          ../static/img/vendors/vendor-story@2x.png 2x
                        "
                        alt="Vendor Story"
                      />
                    </LazyLoad>
                  </div>
                </div>
              </div>
            </div>

            <div className="vendors--list">
              <div className="row pt-large pb-large center-xs middle-xs">
                <div className="col-xs-10">
                  <h2>
                    {t('home:vendors.text3', {
                      defaultValue: 'Latest vendors to accept Verge',
                    })}
                  </h2>
                  <h6>
                    <Link href="/vendors">
                      <a
                        href="/vendors"
                        className="vendors--url"
                        name="See vendors"
                      >
                        {t('home:vendors.buttonTertiary', {
                          defaultValue: 'See all vendors here',
                        })}
                      </a>
                    </Link>
                  </h6>

                  <HomeVendors />
                </div>
              </div>
            </div>

            <div className="container themed-container__linen themed-container__linen--home">
              <div className="row center-xs roadmap">
                <div className="col-xs-10 col-sm-8 col-md-6 start-xs center-lg">
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
                  <br />
                  <div className="row start-xs center-sm">
                    <div className="col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-12 col-lg-9 start-xs">
                      <ul className="roadmap__timeline roadmap__timeline--home pb">
                        <CurrentYearRoadmap start={2} maxLength={5} />
                      </ul>
                      <h6>
                        <Link href="/roadmap">
                          <a href="/roadmap" name="Full roadmap here">
                            {t('home:roadmap.text1', {
                              defaultValue: 'Full roadmap here',
                            })}
                          </a>
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="press">
              <div className="row center-xs social">
                <div className="col-xs-11 center-xs">
                  <div className="row around-xs pt">
                    <div className="col-xs-12 col-sm-5 start-xs">
                      <h4>
                        {t('home:social.header', {
                          defaultValue:
                            'Get social with Verge. Be a part of the Verge community.',
                        })}
                      </h4>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-5 col-md-offset-2 col--full-height">
                      <div className="row start-xs center-sm between-md pb-xs">
                        <div className="pt-xs social__icon">
                          <Link href="https://www.facebook.com/VERGEcurrency">
                            <a
                              href="https://www.facebook.com/VERGEcurrency"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--facebook"
                              name="Facebook link"
                            >
                              <FontAwesomeIcon icon={faFacebook} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://github.com/vergecurrency?tab=repositories">
                            <a
                              href="https://github.com/vergecurrency?tab=repositories"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--github"
                              name="GitHub link"
                            >
                              <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://t.me/VERGExvg">
                            <a
                              href="https://t.me/VERGExvg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--telegram"
                              name="Telegram link"
                            >
                              <FontAwesomeIcon icon={faTelegram} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ">
                            <a
                              href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--youtube"
                              name="Youtube link"
                            >
                              <FontAwesomeIcon icon={faYoutube} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.reddit.com/r/vergecurrency/">
                            <a
                              href="https://www.reddit.com/r/vergecurrency/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--reddit"
                              name="Reddit link"
                            >
                              <FontAwesomeIcon icon={faReddit} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.twitter.com/vergecurrency">
                            <a
                              href="https://www.twitter.com/vergecurrency"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--twitter"
                              name="Twitter link"
                            >
                              <FontAwesomeIcon icon={faTwitter} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://discord.gg/vergecurrency">
                            <a
                              href="https://discord.gg/vergecurrency"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--discord"
                              name="Discord link"
                            >
                              <FontAwesomeIcon icon={faDiscord} size="2x" />
                            </a>
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

const Extended = translate(['common', 'home', 'roadmap'], {
  i18n,
  wait: process.browser,
})(Home);

export default Extended;
