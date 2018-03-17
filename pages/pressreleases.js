import React from 'react';

import Link from 'next/link';

import Layout from '../components/Layout';
import MediumPosts from '../components/Medium';
import { FullMentions } from '../components/Mentions';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faTelegram,
  faYoutube, faReddit, faTwitter, faDiscord,
} from '@fortawesome/fontawesome-free-brands';

import Moment from 'react-moment';
import 'moment-timezone';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import LogoBusinessInsider from '../static/img/coverage/Business_Insider.svg';
import LogoForbes from '../static/img/coverage/Forbes.svg';
import LogoHuffingtonPost from '../static/img/coverage/Huffington_Post.svg';
import LogoMashable from '../static/img/coverage/Mashable.svg';
import LogoTechChrunch from '../static/img/coverage/TechChrunch.svg';

function Pressreleases(props) {
  const { t } = props;

  return (
    <Layout>
      <div className="pressreleases press">
        <div className="ribbon ribbon--pressreleases">
          <div className="ribbon-img" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t('pressreleases:ribbon.title', { defaultValue: 'Press Releases & Coverage' }) }</h1>
                  <p>{ t('pressreleases:ribbon.text', { defaultValue: 'Official press releases from Verge Currencies can be found here.' }) }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container themed-container--press">
          <div className="row center-xs">
            <div className="col-xs-9 col-sm-10">
              <div className="row between-xs">
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3>{t('common:reason-1.title', { defaultValue: 'A cryptocurrency designed for everyday use.' })}</h3>
                  <p>{t('common:reason-1.text', { defaultValue: 'Improving upon the original Bitcoin blockchain and aims to fulfill its initial purpose.' })}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3>{t('common:reason-2.title', { defaultValue: 'Bringing blockchain into everyday life.' })}</h3>
                  <p>{t('common:reason-2.text', { defaultValue: 'Verge currency makes it possible to engage in direct transactions.' })}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3>{t('common:reason-3.title', { defaultValue: 'Open Source Development & Community Driven.' })}</h3>
                  <p>{t('common:reason-3.text', { defaultValue: 'Verge is not a private company funded by pre-mined coins or ICO\'s.' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="themed-container themed-container--pressreleases">
          <div className="container pb pb-xs-0">
            <div className="row center-xs latest pb">
              <div className="col-xs-11 col-sm-10 col-md-8 start-xs">
                <h2>Press releases</h2>

                <MediumPosts />
              </div>
            </div>
            <div className="row center-xs coverage pt pb">
              <div className="col-xs-11 col-sm-10 col-md-8 start-xs">
                <h2>Press coverage</h2>

                <FullMentions />
              </div>
            </div>
            <div className="row center-xs pt pb">
              <div className="col-xs-12">
                <div className="container themed-container__blue themed-container__blue--pressreleases">
                  <div className="row center-xs">
                    <div className="col-xs-8">
                      <h2>Verge Currency is a 100% open source project and the global Verge Community represents the man power driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place.</h2>
                      <p>Verge is a secure and anonymous cryptocurrency, built with a focus on privacy.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row pt center-xs previous">
                <div className="col-xs-11 center-xs">
                  <div className="pb-small">
                    <Link href="/blog">
                      <a href="/blog" className="to-blog">Go to the blog</a>
                    </Link>
                  </div>

                  <div className="row center-xs previous">
                    <div className="col-xs-11 col-sm-7 center-xs">
                      <h3>
                        Check out our blog and to find out what is happening with Verge.
                      </h3>
                    </div>
                  </div>
                  <div className="row around-xs pt">
                    <div className="col-xs-12 col-sm-4 start-xs pb-xs">
                      <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                      <h4>Update on Wraith. The release of Verge Core..</h4>
                      <p>In order to hopefully bring some clarity, after talking with the lead developer Sunerok and some of the other Verge developer.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 start-xs pb-xs">
                      <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                      <h4>Meet the Verge Team and Our Future Vision</h4>
                      <p>We have been extremely busy over the last few months and it’s finally time to introduce the team and share our future vision.</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 start-xs">
                      <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                      <h4>Verge Moves Towards Decentralized Future</h4>
                      <p>Recently we have witnessed an increasing number of problems related to centralised crypto-exchanges.</p>
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
                            <a href="https://www.facebook.com/VERGEcurrency" className="social__link social__link--facebook"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://github.com/vergecurrency?tab=repositories" target="_blank">
                            <a href="https://github.com/vergecurrency?tab=repositories" className="social__link social__link--github"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://t.me/VERGExvg" target="_blank">
                            <a href="https://t.me/VERGExvg" className="social__link social__link--telegram"><FontAwesomeIcon icon={faTelegram} size="2x" /></a>
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

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Pressreleases);

export default Extended;
