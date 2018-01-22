import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Home = function (props) {
  const { t, initialI18nStore } = props;

  return (
    <Layout>
      <div className="ribbon">
        <div className="ribbon-img" />

        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-sm-9 col-md-6 text-center">
              <div className="ribbon-txt">
                <h1>{t("home:ribbon.title")}</h1>
                <p>{t("home:ribbon.text")}</p>
                <Link href="/">
                  <a className="btn btn-primary">{t("home:ribbon.buttonPrimary")}</a>
                </Link>
                <Link href="/">
                  <a className="btn btn-secondary">{t("home:ribbon.buttonSecondary")}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
      h1, a {
        font-family: "Avenir Next", Arial, sans-serif;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        color: blue;
        text-decoration: none;
      }

      a:hover {
        opacity: .6;
      }

      .ribbon {
        color: #fff;
        min-height: 930px;
        position: relative;
      }

      .ribbon-img {
        background: url('/static/img/home-hero-bg.jpg') no-repeat center center;
        background-size: cover;
        min-width: 100%;
        min-height: 930px;
        position: absolute;
        z-index: -100;
      }

      .ribbon-txt {
        margin-top: 180px;
      }
    `}</style>
    </Layout>
  );
}

const Extended = translate(['common', 'header', 'footer', 'home'], { i18n, wait: process.browser })(Home);

Extended.getInitialProps = ({ req }) => (
  (true === (req && !process.browser)) ? i18n.getInitialProps(req, ['common', 'header', 'footer', 'home']) : {}
);

export default Extended;
