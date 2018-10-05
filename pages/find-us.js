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
              <ul className="no-style">
                <li>
                  <Link href="https://www.twitter.com/vergecurrency">
                    <a href="https://www.twitter.com/vergecurrency" target="_blank" rel="noopener noreferrer">
                      {t('header:twitter', { defaultValue: 'Twitter' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.reddit.com/r/vergecurrency/">
                    <a href="https://www.reddit.com/r/vergecurrency/" target="_blank" rel="noopener noreferrer">
                      {t('header:reddit', { defaultValue: 'Reddit' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://vergefora.com">
                    <a href="https://vergefora.com" target="_blank" rel="noopener noreferrer">
                      {t('header:forums', { defaultValue: 'Forums' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.investfeed.com/currency/XVG">
                    <a href="https://www.investfeed.com/currency/XVG" target="_blank" rel="noopener noreferrer">
                      {t('header:investfeed', { defaultValue: 'investFeed' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/vergecurrency">
                    <a href="https://discord.gg/vergecurrency" target="_blank" rel="noopener noreferrer">
                      {t('header:discord', { defaultValue: 'Discord' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://t.me/VERGExvg">
                    <a href="https://t.me/VERGExvg" target="_blank" rel="noopener noreferrer">
                      {t('header:telegram', { defaultValue: 'Telegram' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.facebook.com/VERGEcurrency">
                    <a href="https://www.facebook.com/VERGEcurrency" target="_blank" rel="noopener noreferrer">
                      {t('header:facebook', { defaultValue: 'Facebook' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ">
                    <a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank" rel="noopener noreferrer">
                      {t('header:youtube', { defaultValue: 'YouTube' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/vergecurrency?tab=repositories">
                    <a href="https://github.com/vergecurrency?tab=repositories" target="_blank" rel="noopener noreferrer">
                      {t('header:github', { defaultValue: 'GitHub' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link prefetch href="/community/get-involved">
                    <a href="/community/get-involved">{t('header:contact', { defaultValue: 'Email' })}</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'findus', 'faq'], { i18n, wait: process.browser })(FindUs);

export default Extended;
