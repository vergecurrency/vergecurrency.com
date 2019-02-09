import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function GetStarted(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.key-tech.title', { defaultValue: 'Get Started - VergeCurrency.com' })}</title>
      </Head>
      <div className="key-tech press getstarted">
        <div className="ribbon ribbon--key-tech">
          <div className="ribbon-getstarted" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1 dangerouslySetInnerHTML={{ __html: t('get-started:body.header1', { defaultValue: 'Congratulations! You’re now ready<br />to acquire your first Verge (XVG).' }) }} />
                  <p>{t('get-started:body.header2', { defaultValue: 'We’ve created this guide to tackle this specific problem - this page brings you from zero to hero in buying and using Verge (XVG).' })}</p>
                  <div className="pt-large logos">
                    <img src="/static/img/get-started/coinbase.png" alt="coinbase" />
                    <img src="/static/img/get-started/localbitcoins.png" alt="localbitcoins" />
                    <img src="/static/img/get-started/binance.png" alt="binance" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--getstarted pt">
          <div className="container pb">
            <div className="row center-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('get-started:body.step', { defaultValue: 'Step' })} 1</h6>
                <h2>{t('get-started:body.step1', { defaultValue: 'Getting Paired Coins' })}</h2>
                <h3>{t('get-started:body.step1a', { defaultValue: 'Convert your government fiat money to (BTC) or (ETH)' })}</h3>
                <p>{t('get-started:body.step1b', { defaultValue: 'Because you can’t purchase Verge (XVG) directly from your bank account balance or credit card today, you must purchase Bitcoin (BTC) or Ethereum (ETH) from a secured online platform that accepts these payment methods first. We recommend Coinbase for your Country.' })}
                </p>
                <Link href="https://www.coinbase.com/join/5acd19a56c71040a508b1210">
                  <a href="https://www.coinbase.com/join/5acd19a56c71040a508b1210" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-primary--on-white-bg" name="Accept Verge Today">{t('home:vendors.buttonPrimary', { defaultValue: 'Create a Coinbase account' })}</a>
                </Link>
                <img src="/static/img/get-started/coinbase-img.png" alt="coinbase img" />
              </div>
            </div>
            <div className="row start-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-sm-offset-2 col-lg-5 col-lg-offset-4">
                <ol type="I">
                  <li>{t('get-started:body.step1c', { defaultValue: 'Set up account with your information.' })}</li>
                  <li>{t('get-started:body.step1d', { defaultValue: 'Connect your bank accounts and/or credit cards.' })}</li>
                  <li>{t('get-started:body.step1e', { defaultValue: 'Buy Bitcoin (BTC) or Ethereum (ETH).' })}</li>
                  <li>{t('get-started:body.step1f', { defaultValue: 'Choose the specific amount you’d like to purchase in the respected fiat currency.' })}</li>
                  <li>{t('get-started:body.step1g', { defaultValue: 'Confirm the transaction and wait for the Bitcoin (BTC) or Ethereum (ETH) to appear in the wallet.' })}</li>
                </ol>
                <div className="protip protip-white">
                  <div className="text">
                    <strong>{t('get-started:body.protip', { defaultValue: 'Protip:' })}</strong> {t('get-started:body.step1h', { defaultValue: 'Make sure to activate 2 Factor Authentication protection on your account. If you’d like to save transaction fees, consider using GDAX to purchase the paired coins.' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--home pt">
          <div className="container pb">
            <div className="row center-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('get-started:body.step', { defaultValue: 'Step' })} 2</h6>
                <h2>{t('get-started:body.step2', { defaultValue: 'Send to an exchange' })}</h2>
                <h3>{t('get-started:body.step2a', { defaultValue: 'Send your (BTC) or (ETH) to an exchange that trades Verge (XVG)' })}</h3>
                <p>{t('get-started:body.step2b', { defaultValue: 'Now that you have a paired coin (BTC or ETH), it’s time to send them over to an exchange that trades Verge (XVG). Today, there are over 25+ active exchanges that trade Verge (XVG) with Bitcoin (BTC) or Ethereum (ETH) as trading pairs. We recommend using Binance.' })}</p>
                <Link href="https://www.binance.com/?ref=28698668">
                  <a href="https://www.binance.com/?ref=28698668" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-primary--on-white-bg" name="Accept Verge Today">{t('home:vendors.buttonPrimary', { defaultValue: 'Create a Binance account' })}</a>
                </Link>
                <img src="/static/img/get-started/binance-img.png" alt="binance img" />
              </div>
            </div>
            <div className="row start-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-sm-offset-2 col-lg-5 col-lg-offset-4">
                <ol type="I">
                  <li>{t('get-started:body.step2c', { defaultValue: 'Set up account with your information' })}</li>
                  <li>{t('get-started:body.step2d', { defaultValue: 'Locate the Bitcoin (BTC) or Ethereum (ETH) wallet addresses (Deposit & Withdraw) under the Wallet or Fund page.' })}</li>
                  <li>{t('get-started:body.step2e', { defaultValue: 'Depending on which pairing you bought on Coinbase (BTC or ETH), copy the “Deposit” wallet address for that respected pair.' })}</li>
                  <li>{t('get-started:body.step2f', { defaultValue: 'Go back to your Coinbase account, find the wallet of the pair just bought Bitcoin, (BTC) or Ethereum (ETH) and click Send.' })}</li>
                  <li>{t('get-started:body.step2g', { defaultValue: 'Paste in your “Deposit” address from the exchange and click Send.' })}</li>
                </ol>
                <div className="protip protip-white">
                  <div className="text">
                    <strong>{t('get-started:body.protip', { defaultValue: 'Protip:' })}</strong> {t('get-started:body.step2g', { defaultValue: 'Paste in your “Deposit” address from the exchange and click Send.' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--getstarted pt">
          <div className="container pb">
            <div className="row center-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('get-started:body.step', { defaultValue: 'Step' })} 3</h6>
                <h2>{t('get-started:body.step3', { defaultValue: 'Buying Verge (XVG)' })}</h2>
                <h3>{t('get-started:body.step3a', { defaultValue: 'Purchase Verge (XVG) from your selected exchange.' })}</h3>
                <p>{t('get-started:body.step3b', { defaultValue: 'As the transaction travels through the blockchain between your Coinbase wallet and exchange wallet, keep in mind that this will take time and it varies by the traffic on the blockchain. Now that your Bitcoin (BTC) or Ethereum (ETH) has arrived at your exchange wallet, you are ready to purchase your Verge (XVG).' })} </p>
                <img src="/static/img/get-started/binance-chart.png" alt="binance chart" />
              </div>
            </div>
            <div className="row start-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-sm-offset-2 col-lg-5 col-lg-offset-4">
                <ol type="I">
                  <li>{t('get-started:body.step3c', { defaultValue: 'Get to your exchange platform interface.' })}</li>
                  <li>{t('get-started:body.step3d', { defaultValue: 'Locate the desired exchange pair - XVG/BTC or XVG/ETH.' })}</li>
                  <li>{t('get-started:body.step3e', { defaultValue: 'Input your desire order amount.' })}</li>
                  <li>{t('get-started:body.step3f', { defaultValue: 'Trigger the order and you should receive your Verge (XVG) instantly.' })}</li>
                  <li>{t('get-started:body.step3g', { defaultValue: 'Check your Verge (XVG) balance on the Funds page' })}</li>
                </ol>
                <div className="protip protip-white">
                  <div className="text">
                    <strong>{t('get-started:body.protip', { defaultValue: 'Protip:' })}</strong> {t('get-started:body.step3h', { defaultValue: 'Trading pair XVG/BTC = buying Verge (XVG) with Bitcoin (BTC), you can always check the rate of exchange, sometimes you can buy Verge (XVG) at a cheaper price' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--home pt">
          <div className="container pb">
            <div className="row center-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('get-started:body.step', { defaultValue: 'Step' })} 4</h6>
                <h2>{t('get-started:body.step4', { defaultValue: 'Verge Secured Wallet' })}</h2>
                <h3>{t('get-started:body.step4a', { defaultValue: 'Download the Verge Electrum Tor Wallet from our official site.' })}</h3>
                <p>{t('get-started:body.step4b', { defaultValue: 'At this point, you should see Verge (XVG) in your Verge exchange wallet. Verge Currency is built with a focus on privacy and designed for everyday use. Our key technology features includes: Tor IP obfuscation, I2P tunneling, low fees, ultra-fast transactions, and various tools that protects you as a consumer so you have total control over your financial privacy. For these reasons, we do not recommend keeping your Verge (XVG) coins on an exchange, regardless of how large and well known the exchange. Instead, we recommend you to download the Verge Electrum Tor Wallet and store your Verge (XVG) coins there. Only YOU will have access with your keys.' })}</p>
                <Link href="/wallets">
                  <a href="/wallets" className="btn btn-primary btn-primary--on-white-bg" name="Accept Verge Today">{t('home:vendors.buttonPrimary', { defaultValue: 'Download Wallets here' })}</a>
                </Link>
                <img src="/static/img/get-started/verge-wallet-electrum.png" alt="verge electrum wallet" />
              </div>
            </div>
            <div className="row start-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-sm-offset-2 col-lg-5 col-lg-offset-4">
                <ol type="I">
                  <li>{t('get-started:body.step4c', { defaultValue: 'Download the Electrum Tor Wallet for your operating system' })}</li>
                  <li>{t('get-started:body.step4d', { defaultValue: 'Download and install the Tor Browser from here' })}:  https://www.torproject.org</li>
                  <li>{t('get-started:body.step4e', { defaultValue: 'Launch the Tor browser and leave it open (important)' })}</li>
                  <li>{t('get-started:body.step4f', { defaultValue: 'Extract the Electrum Tor wallet to c: and launch “electrum-xvg.exe”' })}</li>
                </ol>
                <p>{t('get-started:body.step4g', { defaultValue: 'Create a new standard wallet and save your wallet seed (Write it on a notepad and store somewhere safe) and set your wallet password.' })}</p>
                <h3>{t('get-started:body.step4h', { defaultValue: 'Receive XVG' })}</h3>
                <ol type="I">
                  <li>{t('get-started:body.step4i', { defaultValue: 'On wallet home screen, click the “Address” tab, copy an address of your choice that you’d like to receive the Verge (XVG).' })}</li>
                  <li>{t('get-started:body.step4j', { defaultValue: 'Then, go to “Receive” tab and paste that address into the receiving address space, provide a description and amount of xvg to receive then click save.' })}</li>
                  <li>{t('get-started:body.step4k', { defaultValue: 'Proceed to send your Verge (XVG) to that address you just copied from the designated platform you’re sending from.' })}</li>
                </ol>
                <h3>{t('get-started:body.step4l', { defaultValue: 'Send XVG' })}</h3>
                <ol type="I">
                  <li>{t('get-started:body.step4m', { defaultValue: 'On wallet home screen, click the “Send” tab, input the receiving address and the amount of Verge (XVG) then hit send.' })}</li>
                </ol>
                <p>{t('get-started:body.step4n', { defaultValue: 'Done!' })}</p>
                <div className="protip protip-white">
                  <div className="text">
                    <strong>{t('get-started:body.protip', { defaultValue: 'Protip:' })}</strong> {t('get-started:body.step4o', { defaultValue: 'Be sure to hand write or print out your recovery phrases, losing this will result in permanent loss of coins from your wallet.' })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container themed-container--getstarted pt">
          <div className="container pb">
            <div className="row center-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-lg-6">
                <h6>{t('get-started:body.step', { defaultValue: 'Step' })} 5</h6>
                <h2>{t('get-started:body.step5', { defaultValue: 'Spend Verge (XVG)' })}</h2>
                <h3>{t('get-started:body.step5a', { defaultValue: 'Use the Verge Wallet to purchase goods and services.' })}</h3>
                <p>{t('get-started:body.step5b', { defaultValue: 'With your Verge (XVG) coins completely secured via the Electrum Tor Wallet, you can now purchase goods and services from over 85+ vendors around the world. Our complete vendor list can be found below. The number of merchants and businesses accepting Verge is consistently growing. Verge Currency thrives on protecting our user’s privacy and anonymity so you can conduct financial transactions with peace in mind.' })}</p>
                <Link href="/vendors">
                  <a href="/vendors" className="btn btn-primary btn-primary--on-white-bg" name="Accept Verge Today">{t('home:vendors.buttonPrimary', { defaultValue: 'See all vendors' })}</a>
                </Link>
                <img
                  src="/static/img/get-started/verge-mobile-wallet.png"
                  srcSet="
                    ../static/img/get-started/verge-mobile-wallet.png 1x,
                    ../static/img/get-started/verge-mobile-wallet@2x.png 2x
                  "
                  alt="Verge mobile wallet"
                />
              </div>
            </div>
            <div className="row start-xs intro pt">
              <div className="col-xs-11 col-sm-7 col-sm-offset-2 col-lg-5 col-lg-offset-4">
                <ol type="I">
                  <li>{t('get-started:body.step5c', { defaultValue: 'Identify the merchant/business whom you’d like to purchase goods or services from.' })}</li>
                  <li>{t('get-started:body.step5d', { defaultValue: 'Proceed to the checkout page and locate the option to pay with Verge (XVG).' })}</li>
                  <li>{t('get-started:body.step5e', { defaultValue: 'Copy the wallet address shown on the Verge (XVG) payment page.' })}</li>
                  <li>{t('get-started:body.step5f', { defaultValue: 'In your Electrum Tor Wallet, go to the “Send” tab.' })}</li>
                  <li>{t('get-started:body.step5g', { defaultValue: 'Paste in the wallet address, the total Verge (XVG) to send and a description. Then hit Send.' })}</li>
                </ol>
                <div className="protip protip-white">
                  <div className="icon" />
                  <div className="text">
                    <strong>{t('get-started:body.protip', { defaultValue: 'Protip:' })}</strong> {t('get-started:body.step5h', { defaultValue: 'Always make sure to double check the receiver’s address and amount before sending your payment.' })}
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

const Extended = translate(['key-tech', 'common', 'get-started'], { i18n, wait: process.browser })(GetStarted);

export default Extended;
