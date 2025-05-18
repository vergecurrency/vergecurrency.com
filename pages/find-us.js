import Head from 'next/head';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function FindUs(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.findus.title', { defaultValue: 'Find us - VergeCurrency.com' })}</title>
        <link rel="stylesheet" type="text/css" href="/static/scss/pages/_find-us.scss" />
      </Head>

      <div className="about">
        <div className="ribbon ribbon--about">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>{t('findus:body.header', { defaultValue: 'Find us!' })}</h1>
                  <p dangerouslySetInnerHTML={{ __html: t('findus:body.subheader', { defaultValue: 'You can find us on the following <span className="hidden-xs"><br /></span> social media platforms' }) }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="findus pt-large pb-large">
          <div className="row center-xs middle-xs">
            <div className="col-xs-12 col-sm-8">


              <div className="intro pt-large pb-large">
                <div className="container center-xs">


                  <div className="divTable">
                    <div className="divTableBody">
                      <div className="divTableRow">
                        <div className="divTableCell"><a href="https://www.twitter.com/vergecurrency" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/twitter.png" alt="Twitter" title="Twitter" /></a></div>
                        <div className="divTableCell"><a href="https://www.reddit.com/r/vergecurrency/" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/reddit.png" alt="Reddit" title="Reddit" /></a></div>
                        <div className="divTableCell"><a href="https://discord.gg/vergecurrency" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/discord.png" alt="Discord" title="Discord" /></a></div>
                        <div className="divTableCell"><a href="https://t.me/officialxvg" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/telegram.png" alt="Telegram" title="Telegram" /></a></div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell">Twitter</div>
                        <div className="divTableCell">Reddit</div>
                        <div className="divTableCell">Discord</div>
                        <div className="divTableCell">Telegram</div>
                      </div>
                      <br /><br />
                      <div className="divTableRow">
                        <div className="divTableCell"><a href="https://www.facebook.com/VERGEcurrency" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/facebook.png" alt="Facebook" title="Facebook" /></a></div>
                        <div className="divTableCell"><a href="https://www.youtube.com/vergecurrencyofficial" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/youtube.png" alt="YouTube" title="YouTube" /></a></div>
                        <div className="divTableCell"><a href="https://github.com/vergecurrency?tab=repositories" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/github.png" alt="GitHub" title="GitHub" /></a></div>
						<div className="divTableCell"><a href="https://coinmarketcap.com/community/profile/VergeCurrency/" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/cmc.png" alt="CoinMarketCap" title="CoinMarketCap" /></a></div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell">Facebook</div>
                        <div className="divTableCell">YouTube</div>
                        <div className="divTableCell">GitHub</div>
                        <div className="divTableCell">CoinMarketCap</div>
                      </div>
					  <br /><br />
                      <div className="divTableRow">
                        <div className="divTableCell"><a href="https://www.tiktok.com/@officialvergecurrency" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/tiktok.png" alt="TikTok" title="TikTok" /></a></div>
                        <div className="divTableCell"><a href="https://bsky.app/profile/vergecurrency.com" target="_blank" rel="noopener noreferrer"><img src="/static/img/find-us/bluesky.png" alt="BlueSky" title="BlueSky" /></a></div>
                      </div>
                      <div className="divTableRow">
                        <div className="divTableCell">TikTok</div>
                        <div className="divTableCell">BlueSky</div>
                      </div>
                    </div>
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

const Extended = translate(['common', 'findus', 'faq'], { i18n, wait: process.browser })(FindUs);

export default Extended;
