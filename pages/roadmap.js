import Head from 'next/head'

import Layout from '../components/Layout'

import { translate } from 'react-i18next'
import i18n from '../i18n'

function Roadmap(props) {
  const { t } = props

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.roadmap.title', {
            defaultValue: 'Roadmap - VergeCurrency.com',
          })}
        </title>
      </Head>
      <div className="roadmap">
        <div className="themed-container__gray themed-container__gray--roadmap">
          <div className="container">
            <div className="row center-xs roadmap">
              <div className="col-xs-11 col-sm-8 col-lg-6 start-xs center-sm">
                <h6>Roadmap</h6>
                <h2>
                  A roadmap with great features to come.<br />
                  Join us while we&apos;re still growing!
                </h2>

                <p>
                  As an open-source community &amp; volunteer-driven project,
                  our roadmap is meant as a general guideline for how we are
                  developing Verge into one of the best cryptocurrency options
                  out there.
                </p>
                <p>
                  In the spirit of transparency and in good faith to the
                  community, we want this roadmap to be made public. However,
                  please keep in mind that this roadmap is subject to change
                  based on priorities, unplanned developments and new ideas.
                </p>

                <div className="row start-xs center-sm pt">
                  <div className="col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs">
                    <ul className="roadmap__timeline">
                      <li className="roadmap__year roadmap__year--previous">
                        <span>2017</span>
                      </li>
                      <li className="roadmap__item roadmap__item--done">
                        <h3>&quot;Black&quot; Paper v3.0</h3>
                        <span>Released</span> 4 June 2017
                      </li>
                      <li className="roadmap__item roadmap__item--done">
                        <h3>Core Wallet 3.0 Release Stage 1</h3>
                        Wallet UI Overhaul, VISP, Bloom Filters, Atomic Swaps
                        Capability<br />
                        <span>Released</span> 15 November 2017
                      </li>
                      <li className="roadmap__year roadmap__year--current">
                        <span>2018</span>
                      </li>
                      <li className="roadmap__item roadmap__item--done">
                        <h3>Core Wallet 4.0 Release Stage 2</h3>
                        Tor Integration & Optional Stealth Addressing<br />
                        <span>Released</span> 1 January 2018
                      </li>
                      <li className="roadmap__item roadmap__item--done">
                        <h3>New website</h3>
                        New look, guides, updated roadmap, list of official core
                        members, blog with official news, mobile friendly<br />
                        <span>Released</span> 24 March 2018
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>Merchandise Online Store</h3>
                        Verge branded apparel that can be purchased with XVG and
                        BTC.<br />
                        <b>Q1</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>Mining Update</h3>
                        XVGui Miner, Official Mining Pool, Mining Guide<br />
                        <b>Q1</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>RSK Smart Contracts</h3>
                        They are in testnet for Bitcoin now. Date revolves
                        around this timeline.<br />
                        <s>Q4 2017</s> <b>Q2</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>RingCT integration</h3>
                        <b>Q2</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>Official iOS wallet</h3>
                        <b>Q2</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>I2P Android Wallet</h3>
                        Anonymous mobile transactions over the I2P network<br />
                        <b>Q2</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>Tor I2P Electrum Wallet</h3>
                        <b>Q3</b>
                      </li>
                      <li className="roadmap__item roadmap__item--planned">
                        <h3>Test Tor I2P Electrum Wallet</h3>
                        <b>Q3</b>
                      </li>
                      {/* <li className="roadmap__year roadmap__year--next">
                        <span>2019</span>
                        </li>
                        <li className="roadmap__item roadmap__item--planned">
                        <h3>I2P Android Wallet</h3>
                        Anonymous mobile transactions over the I2P network
                        </li>
                        <li className="roadmap__item roadmap__item--planned">
                        <h3>Mining Update</h3>
                        XVGui Miner, Official Mining Pool, Mining Guide
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

const Extended = translate(['common', 'roadmap'], {
  i18n,
  wait: process.browser,
})(Roadmap)

export default Extended
