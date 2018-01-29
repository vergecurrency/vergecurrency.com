import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Ribbon from '../components/Ribbon';
import ServerProps from '../components/ServerProps';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Home = function (props) {
  const { t, store } = props;
  const showLoader = store && store.showLoader;

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
              <span className="spaced">Mentioned in:</span>
            </div>
            <div className="col-md col-sm-4 col-xs-6">
              <a href="#">
                <img src="../static/img/mentioned-in/Forbes.svg" width="100" />
              </a>
            </div>
            <div className="col-md col-sm-4 col-xs-6">
              <a href="#">
                <img src="../static/img/mentioned-in/The-Guardian.svg" width="200" />
              </a>  
            </div>
            <div className="col-md col-sm-4 col-xs-6">
              <a href="#">
                <img src="../static/img/mentioned-in/The-Sun.svg" width="100" />
              </a>
            </div>
            <div className="col-md col-sm-4 col-xs-6">
              <a href="#">  
                <img src="../static/img/mentioned-in/The-Motley-Fool.svg" width="100" />
              </a>
            </div>
          </div>
        </div>
        <div className="intro">
          <div className="row center-xs middle-xs pt-lg pb-lg">
            <div className="col-sm-6">
              <span className="spaced">Delivers what others can't</span>
              <h2>Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated and transactions are completely untraceable.</h2>
              <p>We care about your privacy. Do you?</p>
            </div>
          </div>
        </div>
        <div className="benefits">
          <div className="row pt-lg pb-lg">
            <div className="col-md-3 col-md-offset-1">
              <div className="benefits--item">
                <span className="spaced">ANONYMITY</span>
                <p>Verge uses multiple anonymity-centric networks such as TOR and I2P. The IP addresses of the users are fully obfuscated. The Core QT wallet has built-in TOR integration as well as SSL encryption which adds an extra level of security.</p>
              </div>
              <div className="benefits--item pt-lg">
                <span className="spaced">COMMUNITY DRIVEN</span>
                <p>Verge is an open source project with an active team of developers from all over the world. The development team is always in close contact with the community. Verge is not a private company funded through an ICO or premining.</p>
              </div>
              <a href="#" className="benefits--url spaced">Expand benefits</a>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="benefits--item">
                <span className="spaced">MASS ADOPTION</span>
                <p>Low fees, quick transactions, high volume in circulation, multiplatform support, Wraith protocol are the ingredients that make Verge perfectly positioned for mass adoption. Transact on the public ledger for everyday purchases or stay private if you wish so.</p>
              </div>  
              <div className="benefits--item pt-lg">
                <span className="spaced">PRIVACY AS A CHOICE</span>
                <p>Wraith Protocol is a technology that allows the user to choose between public and private ledgers on the same blockchain. Users are free to choose which ledger they want to utilize for each transaction.</p>
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
              <a href="#" className="wallets--url spaced">Read about wallets</a>
              <h2>Dont worry, we got your preffered platform covered. Download your wallet here.</h2>
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
      </div>

    </Layout>
  );
}

const Extended = translate(['home'], { i18n, wait: process.browser })(Home);

export default ServerProps(Extended);
