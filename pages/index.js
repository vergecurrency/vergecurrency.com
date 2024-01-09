import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import Head from 'next/head';

import { translate, Interpolate } from 'react-i18next';

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

import { HomeExchanges } from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
//import Coinchart from '../components/Coinchart';
import { Mentions } from '../components/Mentions';
import { HomeVendors } from '../components/Vendors';
import Wallets from '../components/Wallets';
import WalletsBtn from '../components/WalletsBtn';
import { PartnerInfo } from '../components/Partners';
import { SponsorsInfo } from '../components/Sponsors';
import { mentioned_in } from '../components/Mentions';

import 'moment-timezone';

import Layout from '../components/Layout';
import i18n from '../i18n';
import CurrentYearRoadmap from './CurrentMilestones';

function Home(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.home.title', {
            defaultValue:
              'Verge Currency',
          })}
        </title>
        <link rel="image_src" href="/static/img/press/logo/verge-logo.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/static/img/icons/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/static/img/icons/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/img/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/img/icons/favicon-16x16.png" />
        <link rel="icon" type="image/ico" href="/static/img/favicon.ico" />
        <link rel="apple-touch-startup-image" media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)" href="/static/img/icons/apple-launch-1284x2778.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)" href="/static/img/icons/apple-launch-1170x2532.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-828x1792.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)" href="/static/img/icons/apple-launch-1125x2436.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)" href="/static/img/icons/apple-launch-1242x2688.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-750x1334.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)" href="/static/img/icons/apple-launch-1242x2208.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-1620x2160.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-1536x2048.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-1668x2224.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-1668x2388.png" />
        <link rel="apple-touch-startup-image" media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)" href="/static/img/icons/apple-launch-2048x2732.png" />
      </Head>
      <div className="home">
        <div className="ribbon">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                <img src='./static/img/frontpagefaces.png'></img>
                  <h1
                    style={{ fontSize: '180%' }}
                    dangerouslySetInnerHTML={{
                      __html: t('home:ribbon.title', { 
                        defaultValue:
                        'A secure and user-friendly digital currency.<br />'
                      }),
                    }}
                  />
                  <p>
                    {t('home:ribbon.text1', {
                      defaultvalue: 'Built for everyday transactions.',
                    })}
                  </p>
                  <WalletsBtn />
                  <Link href="/get-verge" prefetch>
                    <a
                      href="/get-verge"
                      className="btn btn-secondary"
                      name="Get Started with Verge"
                    >
                      {t('home:ribbon.text2', {
                        defaultvalue: 'Get started with Verge',
                      })}
                    </a>
                  </Link>
                  <p className="blackpaper">
                    Read the
                    {' '}
                    <a
                      href="/static/blackpaper/verge-blackpaper-v5.0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>Verge Blockchain Blackpaper</i>
                    </a>
                    {' '}
                  </p>
                  <p className="blackpaper">
                    Read the
                    {' '}
                    <a
                      href="/static/whitepaper/XVGETH_Whitepaper_v1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i>Verge ERC-20 Token Whitepaper</i>
                    </a>
                    {' '}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
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
                            'A <span>digital currency</span> designed <br>for everyday use.',
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
                            'Simple and effortless payments via iOS and Android app.',
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
				<div className="col-xs-12 col-sm-4 start-xs pb-xs reason">
                  <div className="reason--inner">
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.fourth.header', {
                          defaultvalue:
                            'One Team, Two Chains, <br>& <span>Unlimited Usecases.',
                        }),
                      }}
                    />
                    <p
                      dangerouslySetInnerHTML={{
                        __html: t('common:USPs.fourth.text', {
                          defaultvalue:
                            'Introducing the latest addition to the Verge ecosystem, the Verge ERC-20 token on Ethereum. Expanding the possibilities for everyday people to use Verge, without any hassle!',
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
                  <div className="col-xs-12 col-md">
                  </div>
                </div>
              </div>
            </div>

            <div className="row center-xs intro pt pb-large">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>
                  {t('home:intro.span', {
                    defaultvalue: "Blockchain Solutions for Everyday use.",
                  })}
                </h6>
                <h2>
                  {t('home:intro.h2', {
                    defaultvalue:
                      'Verge provides the security of blockchain based payments to everyday users with easy to use software tailored to real life needs and applications.',
                  })}
                </h2>
                <p>
                  {t('home:intro.p', {
                    defaultvalue: 'We strive to make blockchain payments effortless and convenient.',
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
                          defaultvalue: 'EVERYDAY USE',
                        })}
                      </h6>
                      <p>
                        {t('home:benefits.benefit_1.text', {
                          defaultvalue:
                            'Verge provides an easy to use platform which enables everyday users to be able to transact quickly and efficiently across a blockchain based network.',
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
                            'Low fees, quick transactions, high volume in circulation, and multiplatform support, are the ingredients that make Verge perfectly positioned for mass adoption.',
                        })}
                      </p>
                    </div>
                    <div className="col-xs-12 col-md-6 pt-xs">
                      <h6>
                        {t('home:benefits.benefit_4.title', {
                          defaultvalue: 'SECURITY',
                        })}
                      </h6>
                      <p>
                        {('Our network provides world class features to ensure our users are able to send and receive payments quickly, safely, and securely.')}
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
                      `hidden-xs benefits--${
                        i18n.language === 'ar'
                        || i18n.language === 'fa'
                        || i18n.language === 'ku'
                          ? 'imgsrtl'
                          : 'imgs'}`
                    }
                  >
                    <LazyLoad height={430}>
                      <img
                        src="../static/img/benefits-desktop.png"
                        srcSet="
                          ../static/img/benefits-desktop.png 1x,
                          ../static/img/benefits-desktop@2x.png 2x
                        "
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
                    <div className="col-xs-12 col-lg-12">
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
                          'Our mission is to <span>empower people</span> around the world by bringing blockchain transactions into <span>everyday life</span>. Verge makes it possible to engage in direct transactions quickly, efficiently and <span>securely</span>.',
                      }),
                    }}
                  />
                  <p>
                    {t('home:mission.text2', {
                      defaultValue:
                        'With Verge, businesses and individuals have flexible options for sending and receiving payments securely and efficiently all around the world in a matter of seconds.',
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

            <div className="themed-container__dark themed-container__dark--home business-tile-bgnd">
              <div className="row center-xs power-to-the-people">
                <div className="col-xs-10 col-sm-10 col-md-8 start-xs">
                  <h6>
                    {t('home:business.header', {
                      defaultValue: 'Upgrade your business',
                    })}
                  </h6>
                  <h3
                    dangerouslySetInnerHTML={{
                      __html: t('home:business.text1', {
                        defaultValue:
                          'Try our <span>Micro Merchant</span> solution and manage payments your way, or our valued payment processing partners can help <span>automate acceptance</span> with their own integration solutions.',
                      }),
                    }}
                  />
                  <p>
                    {t('home:business.text2', {
                      defaultValue:
                        'Any business, from SME\'s to Multinationals, from brick and mortar retailers to online businesses can benefit from accepting Verge Currency.',
                    })}
                  </p>
                  <Link href="https://vergecurrency.business">
                    <a
                      href="https://vergecurrency.business"
                      target="_blank"
                      className="btn btn-white"
                      name="Verge for Business"
                    >
                      {t('home:business.button1', {
                        defaultValue: 'Explore Verge for Business',
                      })}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <SponsorsInfo t={t} />

            <div className="row center-xs pt-large pb">
              <div className="col-xs-11 start-xs exchanges bb">
                <div className="start-sm pb-small">
                      <h6>
                          {t('home:mentions.intro', {
                              defaultValue: 'Mentioned In',
                          })}
                      </h6>
                    <Mentions t={t} />
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
                              title="Facebook"
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
                              title="GitHub"
                            >
                              <FontAwesomeIcon icon={faGithub} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://t.me/officialxvg">
                            <a
                              href="https://t.me/officialxvg"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--telegram"
                              name="Telegram link"
                              title="Telegram"
                            >
                              <FontAwesomeIcon icon={faTelegram} size="2x" />
                            </a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.youtube.com/vergecurrencyofficial">
                            <a
                              href="https://www.youtube.com/vergecurrencyofficial"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="social__link social__link--youtube"
                              name="Youtube link"
                              title="Youtube"
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
                              title="Reddit"
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
                              title="Twitter"
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
                              title="Discord"
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

const Extended = translate(['common', 'home', 'milestones'], {
  i18n,
  wait: process.browser,
})(Home);

export default Extended;
