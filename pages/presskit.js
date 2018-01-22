import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Presskit = function (props) {
  const { t } = props;

  return (
    <Layout>
      <div className="ribbon">
        <div className="ribbon-img" />

        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10 col-sm-9 col-md-6 text-center">
              <div className="ribbon-txt">
                <h1 dangerouslySetInnerHTML={{ __html: t("presskit:ribbon.title") }}></h1>
                <p>{t("presskit:ribbon.text")}</p>
                <Link href="/">
                  <a className="btn btn-primary">{t("presskit:ribbon.buttonPrimary")}</a>
                </Link>
                <Link href="/">
                  <a className="btn btn-secondary">{t("presskit:ribbon.buttonSecondary")}</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container white-container white-container--shadowed">
        <div className="row center-xs">
          <div className="col-xs-9 col-sm-10">
            <div className="row between-xs">
              <div className="col-xs-12 col-sm-4 start-xs reason">
                <h3>A cryptocurrency designed for everyday use.</h3>
                <p>Improving upon the original Bitcoin blockchain and aims to fulfill its initial purpose.</p>
              </div>
              <div className="col-xs-12 col-sm-4 start-xs reason">
                <h3>Bringing blockchain into everyday life.</h3>
                <p>Verge currency makes it possible to engage in direct transactions.</p>
              </div>
              <div className="col-xs-12 col-sm-4 start-xs reason">
                <h3>Open Source Development & Community Driven.</h3>
                <p>Verge is not a private company funded by pre-mined coins or ICO's.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="white-container">
        <div className="container">
          <div className="row center-xs">
            <div className="col-xs-10">
            <div className="start-xs">
              <h2>Press kit</h2>
              <p>This is our press kit for media coverage that you can use. We would please ask you to  not alter our logo in any way. We prepared guidelines to help you use Verge brand and assets, including our logo, fonts, and colour palettes.</p>

              <h2>Verge logo</h2>
              <p>You can use the Verge logos to link to vergecurrency.com and to attach it to a blog post, news article, or press release about Verge.</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .white-container {
          background: #fff;
          margin-top: 0;
          padding-top: 12rem;
          padding-bottom: 4rem;
          position: relative;
        }
        .white-container--shadowed {
          box-shadow: 0 0 2rem 1px rgba(66, 66, 66, .67);
          z-index: 1;
          margin-bottom: -8rem;
          padding-top: 4rem;
        }

        h1, h2, h3, a, p {
          font-family: "Avenir Next", Arial, sans-serif;
        }

        h3 {
          font-weight: 600;
          font-size: 1.2rem;
        }

        h2 {
          font-weight: 600;
          font-size: 1.5rem;
        }

        p {
          color: #647886;
          font-weight: 400;
          font-size: .8rem;
        }

        .reason p {
          font-weight: 500;
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
          min-height: 440px;
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

const Extended = translate(['presskit'], { i18n, wait: process.browser })(Presskit);

export default Extended;
