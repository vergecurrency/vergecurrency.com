import Head from 'next/head';
import Link from 'next/link';

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




              <div class="intro pt-large pb-large">
	<div class="container center-xs">
   
   
   

<div class="divTable">
    <div class="divTableBody">
      <div class="divTableRow">
        <div class="divTableCell"><a href="https://www.twitter.com/vergecurrency" target="_blank"><img src="/static/img/find-us/twitter.png" alt="Twitter" title="Twitter"></img></a></div>
        <div class="divTableCell"><a href="https://www.reddit.com/r/vergecurrency/" target="_blank"><img src="/static/img/find-us/reddit.png" alt="Reddit" title="Reddit"></img></a></div>
        <div class="divTableCell"><a href="https://vergefora.com/" target="_blank"><img src="/static/img/find-us/verge-forums.png" alt="Forums" title="Verge Forums"></img></a></div>
        <div class="divTableCell"><a href="https://www.investfeed.com/currency/XVG" target="_blank"><img src="/static/img/find-us/investfeed.png" alt="investFeed" title="investFeed"></img></a></div>
        <div class="divTableCell"><a href="https://discord.gg/vergecurrency" target="_blank"><img src="/static/img/find-us/discord.png" alt="Discord" title="Discord"></img></a></div>
    </div>
    <div class="divTableRow">
        <div class="divTableCell">Twitter</div>
        <div class="divTableCell">Reddit</div>
        <div class="divTableCell">Verge Forums</div>
        <div class="divTableCell">investFeed</div>
        <div class="divTableCell">Discord</div>
    </div>
  <br /><br />
    <div class="divTableRow">
        <div class="divTableCell"><a href="https://t.me/VERGExvg" target="_blank"><img src="/static/img/find-us/telegram.png" alt="Telegram" title="Telegram"></img></a></div>
        <div class="divTableCell"> <a href="https://www.facebook.com/VERGEcurrency" target="_blank"><img src="/static/img/find-us/facebook.png" alt="Facebook" title="Facebook"></img></a></div>
        <div class="divTableCell"><a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank"><img src="/static/img/find-us/youtube.png" alt="YouTube" title="YouTube"></img></a></div>
        <div class="divTableCell"><a href="https://github.com/vergecurrency?tab=repositories" target="_blank"><img src="/static/img/find-us/github.png" alt="GitHub" title="GitHub"></img></a></div>
        <div class="divTableCell"><a href="https://vergecurrency.com/community/get-involved" target="_blank"><img src="/static/img/find-us/email.png" alt="Email" title="Email"></img></a></div>
    </div>
    <div class="divTableRow">
        <div class="divTableCell">Telegram</div>
        <div class="divTableCell">Facebook</div>
        <div class="divTableCell">YouTube</div>
        <div class="divTableCell">GitHub</div>
        <div class="divTableCell">Email</div>
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
