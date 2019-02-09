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
                  <h1>{ t('key-tech:body.ribbontitle', { defaultValue: 'Verge Key Tech' }) }</h1>
                  <p>{ t('key-tech:body.ribbontext', { defaultValue: 'Explore our key technology features. Read and learn more about Tor, I2P and much more.' }) }</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-large bb">
          <div className="themed-container__dark themed-container__dark--wraith wraith">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-6 col-md-5 start-xs">
                <h2>{t('key-tech:body.boxtitle', { defaultValue: 'Technology Focused On The End-User' })}</h2>
                <p>
                  {t('key-tech:body.boxtext1', { defaultValue: 'Verge was originally created based on the idea of providing end-user identity obfuscation suited for everyday use.' })}
                  &nbsp;
                </p>
                <p>
                  {t('key-tech:body.boxtext2', { defaultValue: 'We believe that every human deserves the right to privacy and with that idea in mind we pride ourselves on being able to provide several different technology integrations specifically designed to enhance the overall safety, security, and anonymity of users who transact across the Verge network.' })}
                </p>
                <p>
                  {t('key-tech:body.boxtext3', { defaultValue: 'As time progresses this page will update as we integrate new technology onto our network.' })}
                </p>
                <p>
                  {t('key-tech:body.boxtext4', { defaultValue: 'Below, you will find a brief overview of some of the core technologies that Verge offers as of today.' })}
                </p>
              </div>
              <div className="col-sm-4 col-md-5 hidden-xs" />
            </div>
          </div>
          <div className="key-features content pb">
            <div className="row center-xs pt-large pb">
              <div className="col-xs-10 col-sm-8">
                <h6>{t('key-tech:body.keytitle', { defaultValue: 'Key features' })}</h6>
                <h2>
                  {t('key-tech:body.keytext1', { defaultValue: 'Low fees, quick transactions, high volume in circulation, and multiplatform support are the ingredients that make Verge perfectly positioned for mass adoption.' })}
                </h2>
                <p>{t('key-tech:body.keytext2', { defaultValue: 'Transaction speeds are ultra-fast compared to other coins.' })}</p>
              </div>
            </div>
            <div className="row center-xs pb-large">
              <div className="col-xs-10">
                <div className="row start-xs">
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__tor">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Tor.png" alt="Tor" />
                    </div>
                    <h3>{t('key-tech:body.tortitle', { defaultValue: 'Tor IP obfuscation' })}</h3>
                    <p>
                      {t('key-tech:body.tortext1', { defaultValue: 'Tor, derived from an acronym for the original software project name The Onion Router, is an IP obfuscation service which enables anonymous communication across a layered circuit based network.' })}
                    </p>
                    <p>
                      {t('key-tech:body.tortext2', { defaultValue: 'Verge integrates Tor in all of our wallets, thereby eliminating any single point at which the communicating peers can be determined through network surveillance that relies upon knowing its source and destination.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__i2p">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/I2P.png" alt="I2P" />
                    </div>
                    <h3>{t('key-tech:body.i2ptitle', { defaultValue: 'I2P tunneling' })}</h3>
                    <p>
                      {t('key-tech:body.i2ptext1', { defaultValue: 'I2P is a highly obfuscated tunneling service using ipv6 that anonymizes all Verge data being sent over the network.' })}
                    </p>
                    <p>
                      {t('key-tech:body.i2ptext2', { defaultValue: 'As Verge moves forward, I2P is becoming one of the key technologies ensuring anonymity of the users.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__mining">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Verge.png" alt="Multi Algorithm mining" />
                    </div>
                    <h3>{t('key-tech:body.algtitle', { defaultValue: 'Multi-algorithm Mining' })}</h3>
                    <p>
                      {t('key-tech:body.algtext1', { defaultValue: 'Verge Currency uses Proof of Work (POW) mining principle. It is one of the few cryptocurrencies to have a multi-algorithm support.' })}
                    </p>
                    <p>
                      {t('key-tech:body.algtext2', { defaultValue: 'Verge has 5 different hash functions: Scrypt, X17, Lyra2rev2, myr-groestl and blake2s.  Such design allows for a more equal access. Verge is not a private company funded by pre-mined coins or an ICO.' })}
                    </p>
                    <p>
                      {t('key-tech:body.algtext3', { defaultValue: 'Allowing our community to mine Verge with good technology is vital.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__atomic">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Atomic.png" alt="Atomic Swaps" />
                    </div>
                    <h3>{t('key-tech:body.atstitle', { defaultValue: 'Atomic Swaps' })}</h3>
                    <p>
                      {t('key-tech:body.atstext1', { defaultValue: 'Atomic Swaps, or atomic cross-chain trading, is a technology that enables direct peer-to-peer trading across separate blockchains with BIP65 support and eliminates the need for trusted third parties.' })}
                    </p>
                    <p>
                      {t('key-tech:body.atstext2', { defaultValue: 'Traditional centralized exchanges can be replaced by decentralized exchanges (DEX), which means you always keep your funds in your wallet and do not rely on an intermediary. By enabling Atomic Swaps capability, Verge takes a proactive step towards a decentralized future.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__stealth">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/stealth.png" alt="stealth" />
                    </div>
                    <h3>{t('key-tech:body.stealthtitle', { defaultValue: 'Dual-Key Stealth Addressing' })}</h3>
                    <p>
                      {t('key-tech:body.stealthtext1', { defaultValue: 'Dual-Key Stealth Addressing allows senders to create an unlimited number of one-time destinations addresses on behalf of the recipient without any interaction between the parties. Stealth addresses are a method by which additional obfuscation can be implemented to further protect the receiving party when transacting with Verge.' })}
                    </p>
                    <p>
                      {t('key-tech:body.stealthtext2', { defaultValue: 'When multiple users send funds to a stealth address, rather than these transactions appearing on the blockchain as multiple payments to the same address, they instead appear as multiple payments going to different addresses.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__ringct">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/ringct.png" alt="ringct" />
                    </div>
                    <h3>{t('key-tech:body.ringcttitle', { defaultValue: 'Ring Confidential Transactions (Under Development)' })}</h3>
                    <p>
                      {t('key-tech:body.ringcttext1', { defaultValue: 'Ring Confidential Transactions are based on a combination of technologies: Confidential Transactions and Ring Signatures.' })}
                    </p>
                    <p>
                      {t('key-tech:body.ringcttext2', { defaultValue: 'Confidential transactions include a cryptographic proof that ensure only the participants of a transaction are privy to the values being sent back and forth while simultaneously hiding the values from the sight of the rest of the world.' })}
                    </p>
                    <p>
                      {t('key-tech:body.ringcttext3', { defaultValue: 'Ring Signatures are digital signatures that are created by A group of participants that obscures the linkage between sender and recipient.' })}
                    </p>
                    <p>
                      {t('key-tech:body.ringcttext4', { defaultValue: 'Both of these technologies combined ensure that only the participants of a transaction are privy to the values being sent back and forth while simultaneously hiding the values from the sight of the rest of the world.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__rsk">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/rsk.png" alt="rsk" />
                    </div>
                    <h3>{t('key-tech:body.rsktitle', { defaultValue: 'RSK Smart Contracts (Under Development)' })}</h3>
                    <p>
                      {t('key-tech:body.rsktext1', { defaultValue: 'RSK is the first open-source smart contract platform with a 2-way peg to Verge that also rewards the Verge miners via merge-mining, allowing them to actively participate in the Smart Contract revolution. RSK goal is to add value and functionality to the Verge ecosystem by enabling smart-contracts, near instant payments and higher-scalability.' })}
                    </p>
                    <p>
                      {t('key-tech:body.rsktext2', { defaultValue: 'RSK´s blockchain is secured by merge-mining, which means that it can achieve the same security as Verge in terms of double-spend prevention and settlement finality.' })}
                    </p>
                  </div>
                  <div className="col-xs-12 col-sm-6 feature__item">
                    <div className="feature__image feature__encrypt">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/encrypt.png" alt="encrypt" />
                    </div>
                    <h3>{t('key-tech:body.encrypttitle', { defaultValue: 'Encrypted Messaging' })}</h3>
                    <p>
                      {t('key-tech:body.encrypttext1', { defaultValue: 'Encrypted messaging is a P2P (peer-to-Peer) instant messaging system utilizing state-of-the-art encryption technology to keep your communications private. All messages are encrypted by the proven AES-256-CBC algorithm, and distributed between nodes in such a way as to prevent the recipients of messages from being inferred by assailants utilizing sophisticated traffic analysis.' })}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="themed-container__blue themed-container__blue--integrations">
            <div className="row center-xs integrations">
              <div className="col-xs-10 col-sm-6 col-md-5 col-lg-4 start-xs integrations--text">
                <h6>{t('key-tech:body.inttitle', { defaultValue: 'Integrations' })}</h6>
                <h2>{t('key-tech:body.inttext1', { defaultValue: 'Powering real world mainstream adoption with P2P integrations' })}</h2>
                <p>
                  {t('key-tech:body.inttext2', { defaultValue: 'Verge is constantly moving towards mainstream adoption. Verge integration on messaging and social media platforms is an important strategic step to accomplish this goal.' })}
                </p>
                <p>
                  {t('key-tech:body.inttext3', { defaultValue: 'With no installation required from either party, XVG coins can be sent and received over Twitter, Discord and Telegram.' })}
                </p>
              </div>
              <div className="col-sm-4 col-md-5 col-lg-6 hidden-xs">
                <div className={`integrations--${i18n.language == 'ar' || i18n.language == 'fa' || i18n.language == 'ku' ? 'imgsrtl' : 'imgs'}`} />
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
