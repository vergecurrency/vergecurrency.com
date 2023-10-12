import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import MediumPosts from '../components/Medium';
import { FullMentions } from '../components/Mentions';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faTelegram,
  faYoutube, faReddit, faTwitter, faDiscord,
} from '@fortawesome/fontawesome-free-brands';
import 'moment-timezone';
import { translate } from 'react-i18next';
import i18n from '../i18n';

function Pressreleases(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.pressreleases.title', { defaultValue: 'Pressreleases - VergeCurrency.com' })}</title>
      </Head>
      <div className="pressreleases press">
        <div className="ribbon ribbon--pressreleases">
          <div className="ribbon-img" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t('pressreleases:ribbon.title', { defaultValue: 'Press Releases & Coverage' }) }</h1>
                  <p>{ t('pressreleases:ribbon.text', { defaultValue: 'Official press releases from Verge Currency can be found here.' }) }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container themed-container--press">
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

        <div className="themed-container themed-container--pressreleases">
          <div className="container pb pb-xs-0">
            <div className="row center-xs previous pb pt">
              <div className="col-xs-11 start-xs">
                <h2>{t('pressreleases:body.releases', { defaultValue: 'Press Releases' })}</h2>

                <MediumPosts />
              </div>
            </div>
            <div className="row center-xs coverage">
              <div className="col-xs-11 col-sm-10 col-md-8 start-xs">
                <h2>{t('pressreleases:body.coverage', { defaultValue: 'Press Coverage' })}</h2>

                <FullMentions />
              </div>
            </div>
            <div className="row center-xs pt pb">
              <div className="col-xs-12">
                <div className="container themed-container__blue themed-container__blue--pressreleases">
                  <div className="row center-xs">
                    <div className="col-xs-8">
                      <h2>{t('common:texts.open', { defaultValue: 'Verge Currency is a 100% open-source project, and the global Verge Community represents the manpower driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place. All contributors, including the Core Team, are unpaid volunteers who donate their time and energy into the project because they are passionate and believe in Verge.' })}</h2>
                      <p>{t('common:texts.use', { defaultValue: 'Verge is a secure and anonymous cryptocurrency, built for everyday use.' })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row center-xs social">
                <div className="col-xs-11 center-xs">
                  <div className="row around-xs pt">
                    <div className="col-xs-12 col-sm-5 start-xs">
                      <h4>{t('pressreleases:body.social', { defaultValue: 'Get social with Verge. Be a part of the Verge community.' })}</h4>
                    </div>
                    <div className="col-xs-12 col-sm-7 col-md-5 col-md-offset-2 col--full-height">
                      <div className="row start-xs center-sm between-md pb-xs">
                        <div className="pt-xs social__icon">
                          <Link href="https://www.facebook.com/VERGEcurrency" target="_blank">
                            <a href="https://www.facebook.com/VERGEcurrency" className="social__link social__link--facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://github.com/vergecurrency?tab=repositories" target="_blank">
                            <a href="https://github.com/vergecurrency?tab=repositories" className="social__link social__link--github"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://t.me/officialxvg" target="_blank">
                            <a href="https://t.me/officialxvg" className="social__link social__link--telegram"><FontAwesomeIcon icon={faTelegram} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank">
                            <a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" className="social__link social__link--youtube"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.reddit.com/r/vergecurrency/" target="_blank">
                            <a href="https://www.reddit.com/r/vergecurrency/" className="social__link social__link--reddit"><FontAwesomeIcon icon={faReddit} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.twitter.com/vergecurrency" target="_blank">
                            <a href="https://www.twitter.com/vergecurrency" className="social__link social__link--twitter"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://discord.gg/vergecurrency" target="_blank">
                            <a href="https://discord.gg/vergecurrency" className="social__link social__link--discord"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
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

const Extended = translate(['common', 'pressreleases'], { i18n, wait: process.browser })(Pressreleases);

export default Extended;
