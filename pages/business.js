import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function Business(props) {
  const { t } = props;

  return (
    <Layout>
      <Subheader t={t} category="get" page="business" />

      <div className="business">
        <div className="ribbon ribbon--business">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t('business:ribbon.title', { defaultValue: 'Accept Verge in your Store' }) }</h1>
                  <p>{ t('business:ribbon.text', { defaultValue: 'Receive payments in XVG. Completely free with low fees and quick transactions.' }) }</p>
                  <Link href="/get-verge">
                    <a href="/get-verge" className="btn btn-white">{t('business:ribbon.buttonPrimary', { defaultValue: 'Accept Verge today' })}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container themed-container__linen themed-container__linen--press">
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

        <div className="themed-container themed-container--business">
          <div className="container">
            <div className="row center-xs middle-xs accept pb">
              <div className="col-xs-11 col-sm-6 col-md-5 start-xs">
                <h6>{t('business:accept.super', { defaultValue: 'Accept Verge Currency' })}</h6>
                <h2>{t('business:accept.title', { defaultValue: 'Powering real world vendors that accept Verge Currency' })}</h2>

                <p>{t('business:accept.text-1', { defaultValue: 'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.' })}</p>
                <p>{t('business:accept.text-2', { defaultValue: 'Get started today and accept Verge in your store.' })}</p>

                <Link href="/">
                  <a href="/" className="btn btn-primary">{t('business:accept.buttonPrimary', { defaultValue: 'Accept Verge today' })}</a>
                </Link>
                <Link href="/">
                  <a href="/" className="btn btn-tertiary">{t('business:accept.buttonTertiary', { defaultValue: 'See all vendors' })}</a>
                </Link>
              </div>

              <div className="col-xs-11 col-sm-5 col-md-6 col-lg-5 col-lg-offset-1 center-xs">
                <div className="row end-sm">
                  <div className="col-xs-12 col-sm-5 col-lg-6 pt-xs">
                    <img className="img-responsive" src="/static/img/vendors/app-left.png" alt="Verge App" />
                  </div>
                  <div className="col-xs-12 col-sm-5 col-sm-offset-1 col-lg-6 col-lg-offset-0 pt-xs">
                    <img className="img-responsive" src="/static/img/vendors/app-right.png" alt="Verge App" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs vendors pt pb">
              <div className="col-xs-11 col-sm-11 center-xs">
                <h6>{t('business:vendors.latest', { defaultValue: 'Latest vendors' })}</h6>

                <div className="row center-xs between-xs middle-xs pt-small pb pb-xs-0">
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.nexwave.ca">
                        <a href="https://www.nexwave.ca" target="_blank" rel="noopener noreferrer">
                          <img src="/static/img/vendors/latest/Nexwave.png" alt="Nexwave" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.alwayshodl.com">
                        <a href="https://www.alwayshodl.com" target="_blank" rel="noopener noreferrer">
                          <img src="/static/img/vendors/latest/HODL.jpg" alt="HODL" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <img src="/static/img/vendors/latest/CryptoVfx.png" alt="CryptoVFX" />
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.snel.com">
                        <a href="https://www.snel.com" target="_blank" rel="noopener noreferrer">
                          <img src="/static/img/vendors/latest/Snel.png" alt="Snel" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <Link href="https://www.snel.com">
                        <a href="https://www.snel.com" target="_blank" rel="noopener noreferrer">
                          <img src="/static/img/vendors/latest/PMC.png" alt="PMC" />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="col-xs-6 col-sm-2 center-xs pb-xs">
                    <div className="vendors--logo">
                      <img src="/static/img/vendors/latest/RenoSportsBar.jpg" alt="RenoSportsBar" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs pt pb">
              <div className="col-xs-12">
                <div className="container themed-container__blue themed-container__blue--business">
                  <div className="row center-xs">
                    <div className="col-xs-8">
                      <h2>{t('business:bluecontainer.big', { defaultValue: 'Low fees, quick transactions, high volume in circulation, and multiplatform support are the ingredients that make Verge perfectly positioned for mass adoption.  The choice is yours, the choice going mainstream.' })}</h2>
                      <p>{t('business:bluecontainer.small', { defaultValue: 'Start accepting Verge on your store or webshop today.' })}</p>
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
                        <a href="/" className="btn btn-primary">{t('business:benefits.buttonPrimary', { defaultValue: 'Accept Verge today' })}</a>
                      </Link>
                    </div>
                  </div>
                  <div className="row around-xs start-sm pt">
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.anonimity.title', { defaultValue: 'Anonymity' })}</h6>
                      <p>{t('business:benefits.anonimity.text', { defaultValue: 'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated. The Core QT wallet has built-in TOR integration as well as SSL encryption which adds an extra level of security.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.privacy.title', { defaultValue: 'Privacy is our standard' })}</h6>
                      <p>{t('business:benefits.privacy.text', { defaultValue: 'Dual-Key Stealth Addressing and Ring Confidential Transacitons(in development) enables our users to be able to send and receive payments safely and privately.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.community.title', { defaultValue: 'Community driven' })}</h6>
                      <p>{t('business:benefits.community.text', { defaultValue: 'Verge is an open source project with an active team of developers from all over the world. The development team is always in close contact with the community. Verge is not a private company funded through an ICO or premining.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.adoption.title', { defaultValue: 'Mass adoption' })}</h6>
                      <p>{t('business:benefits.adoption.text', { defaultValue: 'Low fees, quick transactions, high volume in circulation, and multiplatform support are the ingredients that make Verge perfectly positioned for mass adoption.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.anonimity.title', { defaultValue: 'Anonymity' })}</h6>
                      <p>{t('business:benefits.anonimity.text', { defaultValue: 'Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated. The Core QT wallet has built-in TOR integration as well as SSL encryption which adds an extra level of security.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.privacy.title', { defaultValue: 'Privacy is our standard' })}</h6>
                      <p>{t('business:benefits.privacy.text', { defaultValue: 'Dual-Key Stealth Addressing and Ring Confidential Transacitons(in development) enables our users to be able to send and receive payments safely and privately.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm pb-small">
                      <h6>{t('business:benefits.community.title', { defaultValue: 'Community driven' })}</h6>
                      <p>{t('business:benefits.community.text', { defaultValue: 'Verge is an open source project with an active team of developers from all over the world. The development team is always in close contact with the community. Verge is not a private company funded through an ICO or premining.' })}</p>
                    </div>
                    <div className="col-xs-12 col-sm-4 col-md-3 center-xs start-sm">
                      <h6>{t('business:benefits.adoption.title', { defaultValue: 'Mass adoption' })}</h6>
                      <p>{t('business:benefits.adoption.text', { defaultValue: 'Low fees, quick transactions, high volume in circulation, and multiplatform support are the ingredients that make Verge perfectly positioned for mass adoption.' })}</p>
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

const Extended = translate(['common', 'business'], { i18n, wait: process.browser })(Business);

export default Extended;
