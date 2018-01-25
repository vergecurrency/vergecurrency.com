import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Home = function (props) {
  const { t } = props;

  return (
    <Layout>
      <div className="ribbon">
        <div className="ribbon-img" />

        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-sm-9 col-md-6 text-center">
              <div className="ribbon-txt">
                <h1 dangerouslySetInnerHTML={{ __html: t("home:ribbon:title") }}></h1>
                <p>{t("home:ribbon.text")}</p>
                <Link href="/">
                  <a className="btn btn-primary btn-wallet">{t("home:ribbon.buttonPrimary")}</a>
                </Link>
                <Link href="/">
                  <a className="btn btn-secondary btn-video">{t("home:ribbon.buttonSecondary")}</a>
                </Link>
                <p className="blackpaper">Read the <a href="#"><i>Blackpaper</i></a> of Verge Currency</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container white-container white-container--home">
        <div className="row center-xs">
          <div className="col-xs-9 col-sm-10">
            <div className="row between-xs">
              <div className="col-xs-12 col-sm-4 start-xs reason">
                <h3 dangerouslySetInnerHTML={{ __html: t("home:USPs:first.header") }}></h3>
                <p>{t("home:USPs:first.text")}</p>
              </div>
              <div className="col-xs-12 col-sm-4 start-xs reason">
                <h3 dangerouslySetInnerHTML={{ __html: t("home:USPs:second.header") }}></h3>
                <p>{t("home:USPs:second.text")}</p>
              </div>
              <div className="col-xs-12 col-sm-4 start-xs reason">
                <h3 dangerouslySetInnerHTML={{ __html: t("home:USPs:third.header") }}></h3>
                <p>{t("home:USPs:third.text")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container pt pb">
        <div className="row center-xs">
          <div className="col-md col-sm-4 col-xs-6">
              Mentioned in:
          </div>
          <div className="col-md col-sm-4 col-xs-6">
              Forbes
          </div>
          <div className="col-md col-sm-4 col-xs-6">
              Guardian
          </div>
          <div className="col-md col-sm-4 col-xs-6">
              the Sun
          </div>
          <div className="col-md col-sm-4 col-xs-6">
              USA Commerce
          </div>
          <div className="col-md col-sm-4 col-xs-6">
              The Motley Fool
          </div>
          <div className="col-md col-sm-4 col-xs-6">
              Weetnietmeer
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['home'], { i18n, wait: process.browser })(Home);

export default Extended;
