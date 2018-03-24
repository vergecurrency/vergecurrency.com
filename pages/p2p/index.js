import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';
import Head from 'next/head';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function P2P_Solutions_Guide(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.telegram-bot-manual.title', { defaultValue: 'Telegram Bot Manual - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="p2p">
              <h1>{t('p2p:headers:telegram', { defaultValue: 'Telegram Bot Manual' })}</h1>
              <ol>
                <li>{t('p2p:telegram:list-1-point-1', { defaultValue: 'Add Verge Bot to your channel: search for @VergeX_bot in Telegram, click "Add to group" and choose your group channel.' })}</li>
                <li>{t('p2p:telegram:list-1-point-2', { defaultValue: 'Display your Verge Telegram address: send "!address" as a direct message to the bot.' })}</li>
                <li>{t('p2p:telegram:list-1-point-3', { defaultValue: 'Deposit Coins: send XVG coins to the address provided.' })}</li>
                <li>{t('p2p:telegram:list-1-point-4', { defaultValue: 'Check Balance: send "!balance" as a direct message and see your balance in the reply.' })}</li>
                <li>{t('p2p:telegram:list-1-point-5', { defaultValue: 'Send Coins Over Telegram: send "!tip @" in the group chat.' })}</li>
                <li>{t('p2p:telegram:list-1-point-6', { defaultValue: 'Withdraw Telegram Wallet Balance: send "!withdraw " as a Direct Message to withdraw your whole wallet balance (minus 2 XVG withdrawal fee) to your Verge address.' })}</li>
                <li>{t('p2p:telegram:list-1-point-7', { defaultValue: 'See Terms: send "!terms" to display terms and conditions for using Verge Telegram Bot.' })}</li>
              </ol>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['p2p', 'common'], { i18n, wait: process.browser })(P2P_Solutions_Guide);

export default Extended;
