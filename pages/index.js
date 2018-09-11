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
      </Head>
      <div className="home">
        <div className="ribbon">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1 dangerouslySetInnerHTML={{ __html: t('home:ribbon.title') }} />
                  <p>{t('home:ribbon.text1')}</p>
                  <WalletsBtn />
                  <Link href="/get-started" prefetch>
                    <a href="/get-started" className="btn btn-secondary" name="Get Started with Verge">
                    {t('home:ribbon.text2')}
                    </a>
                  </Link>
                  <p className="blackpaper">
                    Read the{' '}
                    <a
                      href="/static/blackpaper/Verge-Anonymity-Centric-CryptoCurrency.pdf"
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
        <div className="themed-container themed-container--home pt">
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
                      <p>{t('common:wraith.text1')} &nbsp; {t('common:wraith.text2')}</p>
                    </div>
                  </div>
                  <h6 className="center-xs start-sm">
                    <Link href={t('home:benefits.link:url')}>
                      <a href={t('home:benefits.link:url')} className="benefits--url">
                        {t('home:benefits.link.title')}
                      </a>
                    </Link>
                  </h6>
                </div>
                <div className="col-sm-5 col-md-4 col-lg-3 hidden-xs">
                  <div className="benefits--imgs hidden-xs">
                    <LazyLoad height={430}>
                      <img src="../static/img/benefits-desktop.png" alt="Benefits desktop" />
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
                          <Link href={t('home:wallets.link.url')}>
                            <a href={t('home:wallets.link.url')} className="wallets--url">
                              {t('home:wallets.link.title')}
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
                  <h6>{t('home:mission.header', { defaultValue: 'Empowering people' })}</h6>
                  <h3 dangerouslySetInnerHTML={{ __html: t('home:mission.text1', { defaultValue: 'Our mission is to <span>empower people</span> around the world by bringing blockchain transactions into <span>everyday life</span>. Verge makes it possible to engage in direct transactions quickly, efficiently and <span>privately</span>.' }) }} />
                  <p>
                  {t('home:mission.text2', { defaultValue: 'With Verge, businesses and individuals have flexible options for sending and receiving payments. With the flip of a switch, we offer helpful integrations and tools that enable them to handle large scale transactions between merchants and small scale private payments.' })}
                  </p>
                  <Link href="/get-verge">
                    <a href="/get-verge" className="btn btn-white" name="Get Verge">
                    {t('home:getverge.text1', { defaultValue: 'Get Verge today' })}
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="row center-xs pt-large pb">
              <div className="col-xs-10 start-xs exchanges bb">
                <div className="start-sm pb-small">
                  <h6>
                    <Link href="/get-verge">
                      <a href="/get-verge" className="exchanges--url">
                      {t('home:getverge.text2', { defaultValue: 'See more exchanges' })}
                      </a>
                    </Link>
                  </h6>
                  <h2>
                  {t('home:getverge.text3', { defaultValue: 'Trade Verge on the most popular exchanges.' })}
                    {' '}
                    <span className="hidden-xs">
                      <br />
                    </span>{t('home:getverge.text4', { defaultValue: 'We\’re proud to be listed on:' })}
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
                      {t('home:getverge.text5', { defaultValue: 'See chart here' })}
                    </a>
                  </Link>
                </h6>
              </div>
            </div>

            <div className="themed-container__blue themed-container__blue--home">
              <div className="container">
                <div className="row center-xs middle-xs vendors">
                  <div className="col-xs-10 col-sm-6 col-md-5 start-xs">
                    <h6>{t('home:vendors.super', { defaultValue: 'Accept Verge Currency' })}</h6>
                    <h2>
                      {t('home:vendors.title', {
                        defaultValue: 'Powering real world vendors that accept Verge Currency',
                      })}
                    </h2>

                    <p>
                      {t('home:vendors.text1', {
                        defaultValue:
                          'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.',
                      })}
                    </p>
                    <p>
                      {t('home:vendors.text2', { defaultValue: 'Get started today and accept Verge in your store.' })}
                    </p>

                    <Link href="/developers/verge-vendor-integration">
                      <a
                        href="/developers/verge-vendor-integration"
                        className="btn btn-primary btn-primary--on-white-bg"
                        name="Accept Verge Today"
                      >
                        {t('home:vendors.buttonPrimary', { defaultValue: 'Accept Verge today' })}
                      </a>
                    </Link>
                    <Link href="/vendors">
                      <a href="/vendors" className="btn btn-tertiary" name="See all vendors">
                        {t('home:vendors.buttonTertiary', { defaultValue: 'See all vendors here' })}
                      </a>
                    </Link>
                  </div>

                  <div className="col-xs-11 col-sm-4 col-md-5 end-xs">
                    <LazyLoad height={375}>
                      <img
                        className="vendors--img"
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
                  <h2>{t('home:vendors.text3', { defaultValue: 'Latest vendors to accept Verge' })}</h2>
                  <h6>
                    <Link href="/vendors">
                      <a href="/vendors" className="vendors--url" name="See vendors">
                      {t('home:vendors.buttonTertiary', { defaultValue: 'See all vendors here' })}
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
                <h2 dangerouslySetInnerHTML={{ __html: t('roadmap:body.text1', { defaultValue: 'A roadmap with great features to come.<br /> Join us while we\'re still growing!' }) }} />
                <p>
                {t('roadmap:body.text2', { defaultValue: 'As an open-source community and volunteer-driven project, our roadmap is meant as a general guideline for how we are developing Verge into one of the best cryptocurrency options out there.' })}
                </p>
                <p>
                {t('roadmap:body.text3', { defaultValue: 'In the spirit of transparency and in good faith to the community, we want this roadmap to be made public. However, please keep in mind that this roadmap is subject to change based on priorities, unplanned developments and new ideas.' })}
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
                          {t('home:roadmap.text1', { defaultValue: 'Full roadmap here' })}                            
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
                      <h4>{t('home:social.header', { defaultValue: 'Get social with Verge. Be a part of the Verge community.' })}</h4>
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

const Extended = translate(['common', 'home', 'roadmap'], { i18n, wait: process.browser })(Home);

export default Extended;
