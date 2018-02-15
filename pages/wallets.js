import Link from 'next/link';
import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Wallets = function (props) {
  const { t } = props;

  const handleScrollToElement = (event) => {
    const allWallets = document.getElementById('wallets');
    window.scrollTo(0, allWallets.offsetTop);
  }

  return (
    <Layout>
      <div className="wallets">
        <div className="ribbon ribbon--wallets">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>Download our Wallet</h1>
                  <p>Download our latest Core wallet to store <br />
                    your Verge Currency with.</p>
                  <Link href="/">
                    <a className="btn btn-primary btn-wallet">{t("home:ribbon.buttonPrimary")}</a>
                  </Link>
                  <a onClick={() => handleScrollToElement()} className="btn btn-white">See all our wallets</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row center-xs middle-xs pt pb-lg intro">
            <div className="col-xs-9 col-sm-6">
              <span className="spaced">Wallets</span>
              <div className="pt-xs">
                <h2>Download our latest Core Wraith Wallets for<br /> Windows, Linux and OSX or store your Verge on<br /> your mobile with our Tor wallet.</h2>
                <p>Our core wallet is secure, easy and fast. Transactions in<br /> less than 30 seconds.</p>
              </div>
            </div>
          </div>
          <div className="benefits"> {/* TODO: refactor into themed container */}
            <div className="row center-xs start-sm pt-lg pb-lg">
              <div className="col-xs-9 col-md-3 col-md-offset-1">
                <div className="benefits--item">
                  <h6>{t("home:benefits.benefit_1.title")}</h6>
                  <p>{t("home:benefits.benefit_1.text")}</p>
                </div>
                <div className="benefits--item pt-lg">
                  <h6>{t("home:benefits.benefit_1.title")}</h6>
                  <p>{t("home:benefits.benefit_1.text")}</p>
                </div>
                <h6>
                  <Link href={t("home:benefits.link:url")}>
                    <a className="benefits--url spaced">{t("home:benefits.link.title")}</a>
                  </Link>
                </h6>
              </div>
              <div className="col-xs-9 col-md-3 col-md-offset-1">
                <div className="benefits--item">
                  <h6>{t("home:benefits.benefit_3.title")}</h6>
                  <p>{t("home:benefits.benefit_3.text")}</p>
                </div>
                <div className="benefits--item pt-lg">
                  <h6>{t("home:benefits.benefit_4.title")}</h6>
                  <p>{t("home:benefits.benefit_4.text")}</p>
                </div>
              </div>
              <div className="col-md-4 benefits--imgs hidden-xs">
                <img src="../static/img/benefits-desktop.png" />
                <img src="../static/img/benefits-mobile.png" />
              </div>
            </div>
          </div>
          <div className="wallets pt-lg pb-lg" id="wallets">
            <div className="row center-xs start-sm">
              <div className="col-sm-6 col-xs-9 start-xs">
                <span className="spaced">WALLETS FOR ALL PLATFORMS</span>
                <h2>We got your preffered platform covered. <br />
                  Download your wallet here.</h2>
              </div>
            </div>
            <div className="row center-xs start-sm">
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__android wallets--icon__android--tor"></div>
                  <div className="wallets--text">
                    <h4>Tor Android Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__apple"></div>
                  <div className="wallets--text">
                    <h4>OSX Electrum Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs wallets--item__disabled">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__apple"></div>
                  <div className="wallets--text">
                    <h4>Apple iOS Wallet</h4>
                    <span>Available soon!</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__apple wallets--icon__apple--tor"></div>
                  <div className="wallets--text">
                    <h4>OSX Tor Electrum Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__windows"></div>
                  <div className="wallets--text">
                    <h4>Windows Electrum Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__windows wallets--icon__windows--tor"></div>
                  <div className="wallets--text">
                    <h4>Windows Tor Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__linux"></div>
                  <div className="wallets--text">
                    <h4>Linux Electrum Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
              <div className="col-xs-9 col-md-3 wallets--item start-xs">
                <a href="#">{/* TODO: Some browsers will ignore div inside a. Refactor! */}
                  <div className="wallets--icon wallets--icon__linux wallets--icon__linux--tor"></div>
                  <div className="wallets--text">
                    <h4>Linux Tor Electrum Wallet</h4>
                    <span>Download here</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="guide">
            <div className="row center-xs middle-xs pt pb">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/R48e1mp_5qA"></iframe>
            </div>  
          </div>
          <div className="row center-xs middle-xs pt pb-lg intro">
            <div className="col-xs-9 col-sm-6">
              <span className="spaced">WRAITH PROTOCOL</span>
              <div className="pt-xs">
                <h2>Wraith Protocol is a technology that allows the user to seamlessly switch between public And private ledgers on the Verge Blockchain. For the first time, users are now free to choose which ledger they want to utilize.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Extended = translate(['common', 'wallets'], { i18n, wait: process.browser })(Wallets);

export default Extended;
