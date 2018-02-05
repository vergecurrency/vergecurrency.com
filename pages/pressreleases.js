import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import ServerProps from '../components/ServerProps';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import Moment from 'react-moment';
import 'moment-timezone';

const Pressreleases = function (props) {
  const { t, store } = props;
  const showLoader = store && store.showLoader;

  return (
    <Layout loading={ showLoader }>
      <Subheader t={t} category='press' page='pressreleases' />

      <div className="pressreleases">
        <div className="ribbon ribbon--pressreleases">
          <div className="ribbon-img" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t("pressreleases:ribbon.title", { defaultValue: "Press Releases & Coverage" }) }</h1>
                  <p>{ t("pressreleases:ribbon.text", { defaultValue: "Official press releases from Verge Currencies can be found here." }) }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container white-container--press">
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

        <div className="white-container white-container--pressreleases">
          <div className="container pb pb-xs-0">
            <div className="row center-xs latest pb">
              <div className="col-xs-11 col-sm-10 col-md-8 start-xs">
                <h2>Press releases</h2>

                <div className="row around-xs pt-small pb">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jun 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2018</Moment> - Read</a>
                    </Link>
                  </div>
                </div>
                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jun 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2018</Moment> - Read</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs coverage pt">
              <div className="col-xs-11 col-sm-10 col-md-8 start-xs">
                <h2>Press coverage</h2>

                <div className="row around-xs pt-small pb">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h4>Crypto Watch: Verge (XVG) Price Climbs 800%</h4>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h4>Verge price and how to buy it - what is XVG and is the</h4>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jun 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h4>Crypto Watch: Verge (XVG) Price Climbs 800%</h4>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2018</Moment> - Read</a>
                    </Link>
                  </div>
                </div>
                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h4>Crypto Watch: Verge (XVG) Price Climbs 800%</h4>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h4>Verge price and how to buy it - what is XVG and is the</h4>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jun 2017</Moment> - Read</a>
                    </Link>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h4>Crypto Watch: Verge (XVG) Price Climbs 800%</h4>
                    <Link href="/">
                      <a className="date"><Moment format="MMMM Do YYYY">1 jan 2018</Moment> - Read</a>
                    </Link>
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

export default ServerProps(Extended);
