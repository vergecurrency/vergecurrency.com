import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import { translate } from 'react-i18next';
import i18n from '../i18n';

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

        <div className="container themed-container--linen themed-container--linen--press">
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

        <div className="themed-container themed-container--business">
          <div className="container">
            <div className="row center-xs middle-xs accept pb">
              <div className="col-xs-11 col-sm-6 col-md-5 start-xs">
                <h6>Accept Verge Currency</h6>
                <h2>Powering real world vendors that accept Verge Currency</h2>

                <p>All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.</p>
                <p>Get started today and accept Verge in your store.</p>

                <Link href="/">
                  <a className="btn btn-primary">{t("business:accept.buttonPrimary", { defaultValue: 'Accept Verge today' } )}</a>
                </Link>
                <Link href="/">
                  <a className="btn btn-tertiary">{t("business:accept.buttonTertiary", { defaultValue: 'See all vendors' } )}</a>
                </Link>
              </div>

              <div className="col-xs-11 col-sm-5 col-md-6 col-lg-5 col-lg-offset-1 center-xs">
                <div className="row end-sm">
                  <div className="col-xs-12 col-sm-5 col-lg-6 pt-xs">
                    <img className="img-responsive" src="/static/img/vendors/app-left.png" />
                  </div>
                  <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-lg-6 col-lg-offset-0 pt-xs">
                    <img className="img-responsive" src="/static/img/vendors/app-right.png" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs vendors pt pb">
              <div className="col-xs-11 col-sm-11 center-xs">
                <h6>Latest vendors</h6>

                <div className="row center-xs between-xs middle-xs pt-small pb pb-xs-0">
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.nexwave.ca">
                        <a target="_blank">
                          <img src="/static/img/vendors/latest/Nexwave.png" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.alwayshodl.com">
                        <a target="_blank">
                          <img src="/static/img/vendors/latest/HODL.jpg" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <img src="/static/img/vendors/latest/CryptoVfx.png" />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.snel.com">
                        <a target="_blank">
                          <img src="/static/img/vendors/latest/Snel.png" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.snel.com">
                        <a target="_blank">
                          <img src="/static/img/vendors/latest/PMC.png" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <img src="/static/img/vendors/latest/RenoSportsBar.jpg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs pt pb">
              <div className="col-xs-12">
                <div className="container themed-container--blue themed-container--blue--business">
                  <div className="row center-xs">
                    <div className="col-xs-8">
                      <h2>Low fees, quick transactions, high volume in circulation, multiplatform support, Wraith protocol are the ingredients that make Verge perfectly positioned for mass adoption. Transact on the public ledger for everyday purchases or stay private if you wish so. The choice is yours, the choice going mainstream.</h2>
                      <p>Start accepting Verge on your store or webshop today.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container">
              <div className="row center-xs benefits">
                <div className="col-xs-11 center-xs">
                  <div className="row center-xs middle-xs previous">
                    <div className="col-xs-12 col-sm-7 col-lg-6 center-xs start-sm first-sm pt-xs">
                      <h3>{t('business:benefits.header', { defaultValue: 'The benefits of accepting Verge as a payment method are many. Some of them:' })}</h3>
                    </div>
                    <div className="col-xs-12 col-sm-5 col-lg-6 center-xs end-sm first-xs pb-xs">
                      <Link href="/">
                        <a className="btn btn-primary">{t("business:benefits.buttonPrimary", { defaultValue: 'Accept Verge today' } )}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="row around-xs start-sm pt">
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.anonimity.title', { defaultValue: 'Anonymity' })}</h6>
                      <p>{t('business:benefits.anonimity.text', { defaultValue: 'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated. The Core QT wallet has built-in TOR integration as well as SSL encryption which adds an extra level of security.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.privacy.title', { defaultValue: 'Privacy as a choice' })}</h6>
                      <p>{t('business:benefits.privacy.text', { defaultValue: 'Wraith Protocol is a technology that allows the user to choose between public and private ledgers on the same blockchain. Users are free to choose which ledger they want to utilize for each transaction.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.community.title', { defaultValue: 'Community driven' })}</h6>
                      <p>{t('business:benefits.community.text', { defaultValue: 'Verge is an open source project with an active team of developers from all over the world. The development team is always in close contact with the community. Verge is not a private company funded through an ICO or premining.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.adoption.title', { defaultValue: 'Mass adoption' })}</h6>
                      <p>{t('business:benefits.adoption.text', { defaultValue: 'Low fees, quick transactions, high volume in circulation, multiplatform support, Wraith protocol are the ingredients that make Verge perfectly positioned for mass adoption. Transact on the public ledger for everyday purchases or stay private if you wish so.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.anonimity.title', { defaultValue: 'Anonymity' })}</h6>
                      <p>{t('business:benefits.anonimity.text', { defaultValue: 'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated. The Core QT wallet has built-in TOR integration as well as SSL encryption which adds an extra level of security.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.privacy.title', { defaultValue: 'Privacy as a choice' })}</h6>
                      <p>{t('business:benefits.privacy.text', { defaultValue: 'Wraith Protocol is a technology that allows the user to choose between public and private ledgers on the same blockchain. Users are free to choose which ledger they want to utilize for each transaction.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.community.title', { defaultValue: 'Community driven' })}</h6>
                      <p>{t('business:benefits.community.text', { defaultValue: 'Verge is an open source project with an active team of developers from all over the world. The development team is always in close contact with the community. Verge is not a private company funded through an ICO or premining.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm">
                      <h6>{t('business:benefits.adoption.title', { defaultValue: 'Mass adoption' })}</h6>
                      <p>{t('business:benefits.adoption.text', { defaultValue: 'Low fees, quick transactions, high volume in circulation, multiplatform support, Wraith protocol are the ingredients that make Verge perfectly positioned for mass adoption. Transact on the public ledger for everyday purchases or stay private if you wish so.' })}</p>
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
