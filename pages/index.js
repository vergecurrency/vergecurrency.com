import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';
import Exchanges from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import ServerProps from '../components/ServerProps';
import fetch from 'isomorphic-unfetch'

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Home = function (props) {
  const { t, store } = props;
  const showLoader = store && store.showLoader;

  let mentions = []
  for (let i = 1; i < 6; i++){
    mentions.push(
      <div className="col-md col-sm-4 col-xs-6" key={i}>
        <a href={t("home:mentioned:mention_" + i + ":url")}>
          <img src={t("home:mentioned:mention_" + i + ":img")} width={t("home:mentioned:mention_" + i + ":width")} />
        </a>
      </div>
    );
  }

  return (
    // <Layout loading={ showLoader }>
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
      <div className="container">
        <div className="white-container white-container--home">
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
        <div className="mentions">
          <div className="row center-xs middle-xs pt pb">
            <div className="col-md col-sm-4 col-xs-6">
              <span className="spaced">{t("home:mentioned:mentioned_in")}</span>
            </div>
            {mentions}
          </div>
        </div>
        <div className="intro">
          <div className="row center-xs middle-xs pt-lg pb-lg">
            <div className="col-sm-6">
              <span className="spaced">{t("home:intro:span")}</span>
              <h2>{t("home:intro:h2")}</h2>
              <p>{t("home:intro:p")}</p>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="row pt-lg pb-lg">
            <div className="col-md-3 col-md-offset-1">
              <div className="benefits--item">
                <span className="spaced">{t("home:benefits:benefit_1:title")}</span>
                <p>{t("home:benefits:benefit_1:text")}</p>
              </div>
              <div className="benefits--item pt-lg">
                <span className="spaced">{t("home:benefits:benefit_1:title")}</span>
                <p>{t("home:benefits:benefit_1:text")}</p>
              </div>
              <a href={t("home:benefits:link:url")} className="benefits--url spaced">{t("home:benefits:link:title")}</a>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="benefits--item">
                <span className="spaced">{t("home:benefits:benefit_3:title")}</span>
                <p>{t("home:benefits:benefit_3:text")}</p>
              </div>  
              <div className="benefits--item pt-lg">
                <span className="spaced">{t("home:benefits:benefit_4:title")}</span>
                <p>{t("home:benefits:benefit_4:text")}</p>
              </div>
            </div>
            <div className="col-md-4 benefits--imgs">
              <img src="../static/img/benefits-desktop.png" />
              <img src="../static/img/benefits-mobile.png" />  
            </div>
          </div>
        </div>
        <div className="wallets pt-lg pb-lg">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <a href={t("home:wallets:link:url")} className="wallets--url spaced">{t("home:wallets:link:title")}</a>
              <h2>{t("home:wallets:header")}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              Tor Android Wallet
            </div>
            <div className="col-md-3">
              OSX Electrum Wallet
            </div>
            <div className="col-md-3">
              Apple iOS Wallet
            </div>
          </div>
        </div>
        <div className="power-to-the-people white-container white-container--home white-container--home__empower">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <span className="spaced">Empowering people</span>
              <h3>Our mission is to <span>empower people</span> around the world by bringing blockchain transactions into <span>everyday life</span>. Verge makes it possible to engage in direct transactions quickly, efficiently and <span>privately</span>.</h3>
              <p>With Verge, businesses and individuals have flexible options for sending and receiving payments. With the flip of a switch, we offer helpful integrations and tools that enable them to handle large scale transactions between merchants and small scale private payments.</p>
              <a href="#" className="btn btn-secondary">Get Verge</a>
            </div>
          </div>
        </div>
        <div className="exchanges pt-lg pb-lg">
          <div className="row">
            <div className="col-sm-6 col-xs-12">
              <a href="#" className="wallets--url spaced">See more exchanges</a>
              <h2>Trade Verge on the most popular exchanges. <br />
              We’re proud to be listed on:</h2>
            </div>
          </div>
          <Exchanges t={t} />
          <Cointicker />
          <div className="row">
            <div className="col-xs-12">
              <span>BTC Price</span>
            </div>
          </div>
        </div>
        <div className="vendors">
          <div className="row pt-xlg pb-xlg">
            <div className="col-md-5 col-md-offset-1">
              <div className="vendors--story">
                <span className="spaced">Accept Verge Currency</span>
                <h2>Powering real world vendors that accept Verge Currency</h2>
                <p>All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.<br /><br />
                  Get started today and accept Verge in your store.</p>
                <a href="#" className="btn btn-primary btn-primary--on-white-bg">Accept Verge Today</a>
                <a href="#" className="btn btn-tertiary">See all vendors</a>
              </div>  
            </div>
            <div className="col-md-6 vendors--imgs">
              <img src="../static/img/vendors/vendor-story.png" /> 
            </div>
          </div>
        </div>
        <div className="vendors--list">
          <div className="row pt-lg pb-lg center-xs middle-xs">
            <div className="col-xs-12">
              <h2>Latest vendors to accept Verge</h2>
              <a href="#" className="spaced">See all vendors here</a>
            </div>
            <div className="col-xs-12 pt"></div> {/*odd solution - fix this later */}
            <div className="col-md">
              Nexwave
            </div>
            <div className="col-md">
              HODL
            </div>
            <div className="col-md">
              Crypto VFX
            </div>
            <div className="col-md">
              Snel.com
            </div>
            <div className="col-md">
              PMC
            </div>
            <div className="col-md">
              RRRRR
            </div>
          </div>
        </div>
        <div className="roadmap">
          <div className="row pt pb">
            <div className="col-sm-8 col-sm-offset-4">
              <h2>A roadmap with great features to come.<br />
                Join us while we're still growing!</h2>
              <ul className="roadmap--timeline">
                <li className="done">
                  <h3>"Black" Paper v3.0</h3>
                  <span>Released</span> 4 June 2017
                </li>
                <li className="done">
                  <h3>Test servers deployed</h3>
                  <span>Released</span> 10 Aug 2017
                </li>
                <li className="planned">
                  <h3>I2P Android Wallet</h3>
                  Test servers <br />
                  Anonymous mobile transactions over the I2P network
                </li>
              </ul>
              <a href="#" className="spaced pt">Full roadmap here</a>
            </div>
          </div>
        </div>
        <div className="blog">
          <div className="row pt pb center-xs middle-xs">
            <div className="col-sm-8">
              <a href="#" className="spaced">Go to the blog</a>
              <h2>Check out our blog and to find out what is<br />
                happening with Verge.</h2>
              
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['home'], { i18n, wait: process.browser })(Home);

export default ServerProps(Extended);
