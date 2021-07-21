import React from 'react';

import Head from 'next/head';

import { translate } from 'react-i18next';

import Layout from '../components/Layout';

import i18n from '../i18n';

function KeyTech(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.key-tech.title', { defaultValue: 'Key Tech' })}</title>
      </Head>
      <div className="key-tech press">
        <div className="ribbon ribbon--key-tech">
          <div className="ribbon-img" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{t('key-tech:body.ribbontitle', { defaultValue: 'Verge Key Tech' })}</h1>
                  <p>{t('key-tech:body.ribbontext', { defaultValue: 'Explore our key technology features.' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb-large bb">
          <div className="themed-container__dark themed-container__dark--keytech keytech">
            <div className="row center-xs">
              <div className="col-xs-10">
                <h2>{t('key-tech:body.boxtitle', { defaultValue: 'Technology Focused On The End-User' })}</h2>
                <p>
                  {t('key-tech:body.boxtext1', { defaultValue: 'Verge is a digital currency designed for people and for everyday use. It improves upon the original Bitcoin blockchain and aims to fulfill its initial purpose of providing individuals and businesses with a fast, efficient and decentralized way of making direct transactions.' })}
                  &nbsp;
                </p>
                <p>
                  {t('key-tech:body.boxtext3', { defaultValue: 'As time progresses this page will update as we integrate new technology onto our network.' })}
                </p>
                <p>
                  {t('key-tech:body.boxtext4', { defaultValue: 'Below, you will find a brief overview of some of the core technologies that Verge offers as of today.' })}
                </p>
              </div>
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
                    <div className="feature__image feature__mining">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/Verge.png" alt="Multi Algorithm mining" />
                    </div>
                    <h3>{t('key-tech:body.algtitle', { defaultValue: 'Multi-algorithm Mining' })}</h3>
                    <p>
                      {t('key-tech:body.algtext1', { defaultValue: 'Verge Currency uses Proof of Work (POW) mining principle. It is one of the few digital currencies to have multi-algorithm support.' })}
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
                    <div className="feature__image feature__rsk">
                      <img className="img-responsive feature__image" src="/static/img/key-tech/rsk.png" alt="rsk" />
                    </div>
                    <h3>{t('key-tech:body.rsktitle', { defaultValue: 'Smart Contracts (Under Development)' })}</h3>
                    <p>
                      {t('key-tech:body.rsktext1', { defaultValue: 'Miniscript allows software to automatically analyze a script, including determining what witness data must be generated in order to spend coins protected by that script. With miniscript telling the wallet what it needs to do, wallet developers don’t need to write new code when they switch from one script template to another.' })}
                    </p>
                    <p>
                      {t('key-tech:body.rsktext2', { defaultValue: 'The structured representation of the scripts provided by miniscript allows wallets to be much more dynamic about the scripts they use. In support of that dynamism, miniscripts can be created using an easily-written policy language. Policies are composable, allowing any valid sub-expression to be replaced by another valid sub-expression (within certain limits imposed by the blockchain system).' })}
                    </p>
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

const Extended = translate(['key-tech', 'common'], { i18n, wait: process.browser })(KeyTech);

export default Extended;
