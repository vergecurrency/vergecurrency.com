import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';
import Head from 'next/head';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function P2P_discord_bot(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.discord-bot-manual.title', { defaultValue: 'Discord Bot Manual - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="p2p">
              <h1>{t('p2p:headers:discord', { defaultValue: 'Discord Bot Manual' })}</h1>
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
}

const Extended = translate(['p2p', 'common'], { i18n, wait: process.browser })(P2P_discord_bot);

export default Extended;
