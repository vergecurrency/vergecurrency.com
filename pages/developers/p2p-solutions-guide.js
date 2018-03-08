import React from 'react'

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function P2P_Solutions_Guide(props) {
  const { t } = props;

  return (
    <Layout>
      <div className="learnmore pt-lg">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>{t('p2p:headers:title', { defaultValue: 'P2P Solutions Guide' })}</h1>
              <h2>{t('p2p:headers:telegram', { defaultValue: 'Telegram Bot Manual' })}</h2>
              <ol>
                <li>{t('p2p:telegram:list-1-point-1', { defaultValue: 'Add Verge Bot to your channel: search for @VergeX_bot in Telegram, click "Add to group" and choose your group channel.' })}</li>
                <li>{t('p2p:telegram:list-1-point-2', { defaultValue: 'Display your Verge Telegram address: send "!address" as a direct message to the bot.' })}</li>
                <li>{t('p2p:telegram:list-1-point-3', { defaultValue: 'Deposit Coins: send XVG coins to the address provided.' })}</li>
                <li>{t('p2p:telegram:list-1-point-4', { defaultValue: 'Check Balance: send "!balance" as a direct message and see your balance in the reply.' })}</li>
                <li>{t('p2p:telegram:list-1-point-5', { defaultValue: 'Send Coins Over Telegram: send "!tip @" in the group chat.' })}</li>
                <li>{t('p2p:telegram:list-1-point-6', { defaultValue: 'Withdraw Telegram Wallet Balance: send "!withdraw " as a Direct Message to withdraw your whole wallet balance (minus 2 XVG withdrawal fee) to your Verge address.' })}</li>
                <li>{t('p2p:telegram:list-1-point-7', { defaultValue: 'See Terms: send "!terms" to display terms and conditions for using Verge Telegram Bot.' })}</li>
              </ol>
              <h2>{t('p2p:headers:twitter', { defaultValue: 'Twitter Bot Manual' })}</h2>
              <ol>
                <li>{t('p2p:twitter:list-1-point-1', { defaultValue: 'Display your verge Twitter address: tweet "@vergetips address" to see the Verge address associated with you Twitter account.' })}</li>
                <li>{t('p2p:twitter:list-1-point-2', { defaultValue: 'Deposit Coins: send XVG coins to the address provided.' })}</li>
                <li>{t('p2p:twitter:list-1-point-3', { defaultValue: 'Check Balance: tweet "@vergetips balance" and see your balance in the reply.' })}</li>
                <li>
                  {t('p2p:twitter:list-1-point-4:text', { defaultValue: 'Send Coins Over Twitter: tweet "@vergetips tip @".' })}<br />
                  <b>{t('p2p:twitter:list-1-point-4:note', { defaultValue: 'Note: minimum tip amount - 10 XVG' })}</b>
                </li>
                <li>{t('p2p:twitter:list-1-point-5', { defaultValue: 'Withdraw Twitter Wallet Balance: tweet "@vergetips withdraw " to withdraw your whole wallet balance (minus 2 XVG withdrawal fee) to your Verge address.' })}</li>
                <li>{t('p2p:twitter:list-1-point-6', { defaultValue: 'Support Verge: tip "@vergecurrency" to support the Verge Team!' })}</li>
              </ol>
              <h2>{t('p2p:headers:discord', { defaultValue: 'Discord Bot Manual' })}</h2>
              <ol>
                <li>{t('p2p:discord:list-1-point-1', { defaultValue: 'Display your Verge Discord address: send "@vergebot deposit" to see the Verge address associated with your Discord account.' })}</li>
                <li>{t('p2p:discord:list-1-point-2', { defaultValue: 'Deposit Coins: send XVG coins to the address provided.' })}</li>
                <li>{t('p2p:discord:list-1-point-3', { defaultValue: 'Check Balance: send "@vergebot balance" and see your balance in the reply.' })}</li>
                <li>
                  {t('p2p:discord:list-1-point-4:text', { defaultValue: 'Send Coins Over Discord: send "@vergebot tip @ ".' })}<br />
                  <b>{t('p2p:discord:list-1-point-4:note', { defaultValue: 'Note: minimum tip amount - 10 XVG.' })}</b>
                </li>
                <li>{t('p2p:discord:list-1-point-5', { defaultValue: 'Withdraw Discord wallet balance: send "@vergebot withdraw " to withdraw your whole wallet balance (minus 2 XVG withdrawal fee) to your Verge address.' })}</li>
                <li>{t('p2p:discord:list-1-point-6', { defaultValue: 'Support Verge: tip @vergedev to support the Verge Team!' })}</li>
              </ol>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
};

const Extended = translate(['p2p'], { i18n, wait: process.browser })(P2P_Solutions_Guide);

export default Extended;
