import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function KeyTech(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.key-tech.title', { defaultValue: 'Key Tech - VergeCurrency.com' })}</title>
      </Head>
      <div className="key-tech press">
        <div className="ribbon ribbon--key-tech">
          <div className="ribbon-img" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t('key-tech:ribbon.title', { defaultValue: 'Verge Key Tech' }) }</h1>
                  <p>{ t('key-tech:ribbon.text', { defaultValue: 'Explore our key technology features. Read and learn more about Wraith, Tor, I2P and much more.' }) }</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-large bb">
          <div className="themed-container__dark themed-container__dark--wraith wraith">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-6 col-md-5 start-xs">
                <h2>Wraith Protocol</h2>
                <p>
                  Wraith Protocol is a technology that allows the user to seamlessly switch between public and private
                  ledgers on the Verge Blockchain. Users are now free to choose which ledger they want to utilize.
                </p>
                <p>
                  When Wraith Protocol is turned ON — the transaction data is hidden and not visible via the blockchain
                  explorer. Optional stealth addressing keeps transactions hidden and not linked to your public address.
                </p>
                <p>
                  If Wraith Protocol is OFF, transactions are linked to your public address and are publicly viewable
                  via the blockchain explorer.
                </p>
                <Link href="/blog">
                  <a href="/blog" className="btn btn-primary">Read about Wraith on our blog</a>
                </Link>
              </div>
              <div className="col-sm-4 col-md-5 hidden-xs" />
            </div>
          </div>
          <div className="key-features content pb">
            <div className="row center-xs pt-large pb">
              <div className="col-xs-10 col-sm-8">
                <h6>Key features</h6>
                <h2>
                  Low fees, quick transactions, high volume in circulation, multiplatform support, Wraith protocol are the
                  ingredients that make Verge perfectly positioned for mass adoption.
                </h2>
                <p>Transaction speeds are ultra-fast compared to other coins.</p>
              </div>
            </div>
            <div className="row center-xs pb-large">
              <div className="col-xs-10">
                <div className="row start-xs">
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__tor">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Tor.png" alt="Tor" />
                    </div>
                    <h3>Tor IP obfuscation</h3>
                    <p>
                      Tor, derived from an acronym for the original software project name “The Onion Router”, is an IP
                      obfuscation service which enables anonymous communication across a layered circuit based network.
                    </p>
                    <p>
                      Verge integrates Tor in its Core, Electrum and Android wallets, thereby eliminating any single point
                      at which the communicating peers can be determined through network surveillance that relies upon
                      knowing its source and destination.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__i2p">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/I2P.png" alt="I2P" />
                    </div>
                    <h3>I2P tunneling</h3>
                    <p>
                      I2P is a highly obfuscated tunneling service using ipv6 that anonymizes all Verge data being sent over
                      the network.
                    </p>
                    <p>
                      As Verge moves forward, I2P is becoming one of the key technologies ensuring anonymity of the users.
                      As Verge moves forward, I2P is becoming one of the key technologies ensuring anonymity of the users.
                    </p>
                    <p>
                      As Verge moves forward, I2P is becoming one of the key technologies ensuring anonymity of the users.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__atomic">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Atomic.png" alt="Atomic Swaps" />
                    </div>
                    <h3>Atomic Swaps</h3>
                    <p>
                      Atomic Swaps, or atomic cross-chain trading, is a technology that enables direct peer-to-peer trading
                      across separate blockchains with BIP65 support and eliminates the need for trusted third parties.
                    </p>
                    <p>
                      Traditional centralized exchanges can be replaced by decentralized exchanges (DEX), which means you
                      always keep your funds in your wallet and do not rely on an intermediary. By enabling Atomic Swaps
                      capability, Verge takes a proactive step towards a decentralized future.
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__mining">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Verge.png" alt="Multi Algorithm mining" />
                    </div>
                    <h3>Multi-algorithm Mining</h3>
                    <p>
                      Verge Currency uses Proof of Work (POW) mining principle. It is one of the few cryptocurrencies to
                      have a multi-algorithm support.
                    </p>
                    <p>
                      Verge has 5 different hash functions: Scrypt, X17, Lyra2rev2, myr-groestl and blake2s.  Such design
                      allows for a more equal access. Verge is not a private company funded by pre-mined coins or
                      ICO&apos;s.
                    </p>
                    <p>
                      Therefore allowing our community to mine Verge with good technology is vital.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="themed-container__blue themed-container__blue--integrations">
            <div className="row center-xs integrations">
              <div className="col-xs-10 col-sm-6 col-md-5 col-lg-4 start-xs integrations--text">
                <h6>Integrations</h6>
                <h2>Powering real world mainstream adoption with P2P integrations</h2>
                <p>
                  Verge is constantly moving towards mainstream adoption. Verge integration on messaging and social
                  media platforms is an important strategic step to accomplish this goal.
                </p>
                <p>
                  With no installation required from either party, XVG coins can be sent and received over Twitter,
                  Discord and Telegram. More platforms are in planning stages as we speak!
                </p>
              </div>
              <div className="col-sm-4 col-md-5 col-lg-6 hidden-xs">
                <div className="integrations--imgs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['key-tech', 'common'], { i18n, wait: process.browser })(KeyTech);

export default Extended;
