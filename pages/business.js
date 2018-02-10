import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import Moment from 'react-moment';
import 'moment-timezone';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'

const Business = function (props) {
  const { t } = props;

  return (
    <Layout>
      <Subheader t={t} category='get' page='business' />

      <div className="business">
        <div className="ribbon ribbon--business">
          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t('business:ribbon.title', { defaultValue: 'Accept Verge in your Store' }) }</h1>
                  <p>{ t('business:ribbon.text', { defaultValue: 'Receive payments in XVG. Completely free with low fees and quick transactions.' }) }</p>
                  <Link href="/">
                    <a className="btn btn-white">{t("business:ribbon.buttonPrimary", { defaultValue: 'Accept Verge today' } )}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container linen-container linen-container--press">
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

        <div className="white-container white-container--business">
          <div className="container pb pb-xs-0">
            <div className="row center-xs latest pb">
              <div className="col-xs-11 col-sm-10 col-lg-12 start-xs">
                <h3>Accept Verge Currency</h3>
                <h2>Powering real world vendors that accept Verge Currency</h2>

                <p>All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.</p>
                <p>Get started today and accept Verge in your store.</p>

                <Link href="/">
                  <a className="btn btn-primary">{t("business:accept.buttonPrimary", { defaultValue: 'Accept Verge today' } )}</a>
                </Link>
                <Link href="/">
                  <a className="btn btn-secondary">{t("business:accept.buttonSecondary", { defaultValue: 'See all vendors' } )}</a>
                </Link>
              </div>
            </div>
            <div className="row center-xs vendors pt pb">
              <div className="col-xs-11 col-sm-10 col-md-8 start-xs">
                <h3>Latest vendors</h3>

                <div className="row around-xs pt-small pb pb-xs-0">
                  <div className="col-xs-4 col-sm-3 col-md-2 start-xs pb-xs">
                    <div className="row">
                      <div className="col-xs-12 vendors--logo">
                        <img src="/static/img/coverage/Business_Insider.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-3 col-md-2 start-xs pb-xs">
                    <div className="row">
                      <div className="col-xs-12 vendors--logo">
                        <img src="/static/img/coverage/Forbes.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-3 col-md-2 start-xs pb-xs">
                    <div className="row">
                      <div className="col-xs-12 vendors--logo">
                        <img src="/static/img/coverage/Huffington_Post.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row around-xs pt-small pt-xs-0">
                  <div className="col-xs-4 col-sm-3 col-md-2 start-xs pb-xs">
                    <div className="row">
                      <div className="col-xs-12 vendors--logo">
                        <img src="/static/img/coverage/Mashable.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-3 col-md-2 start-xs pb-xs">
                    <div className="row">
                      <div className="col-xs-12 vendors--logo">
                        <img src="/static/img/coverage/TechChrunch.svg" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xs-4 col-sm-3 col-md-2 start-xs pb-xs">
                    <div className="row">
                      <div className="col-xs-12 vendors--logo">
                        <img src="/static/img/coverage/VVY_Tech_Savvy.png" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs pt pb">
              <div className="col-xs-12">
                <div className="container blue-container blue-container--business">
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
              <div className="row center-xs previous">
                <div className="col-xs-11 center-xs">
                  <div className="pb-small">
                    <Link href="/blog">
                      <a className="to-blog">Go to the blog</a>
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
                          <Link href="https://www.facebook.com/VERGEcurrency">
                            <a target="_blank" className="social__link social__link--facebook"><FontAwesomeIcon icon={ ["fab","facebook"] } size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://github.com/vergecurrency?tab=repositories">
                            <a target="_blank" className="social__link social__link--github"><FontAwesomeIcon icon={ ["fab","github"] } size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://t.me/VERGExvg">
                            <a target="_blank" className="social__link social__link--telegram"><FontAwesomeIcon icon={ ["fab","telegram"] } size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ">
                            <a target="_blank" className="social__link social__link--youtube"><FontAwesomeIcon icon={ ["fab","youtube"] } size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.reddit.com/r/vergecurrency/">
                            <a target="_blank" className="social__link social__link--reddit"><FontAwesomeIcon icon={ ["fab","reddit"] } size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://www.twitter.com/vergecurrency">
                            <a target="_blank" className="social__link social__link--twitter"><FontAwesomeIcon icon={ ["fab","twitter"] } size="2x" /></a>
                          </Link>
                        </div>
                        <div className="pt-xs social__icon">
                          <Link href="https://discord.gg/vergecurrency">
                            <a target="_blank" className="social__link social__link--discord"><FontAwesomeIcon icon={ ["fab","discord"] } size="2x" /></a>
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

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Business);

export default Extended;
