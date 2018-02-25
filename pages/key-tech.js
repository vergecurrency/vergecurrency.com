import React from 'react';

import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faTelegram,
  faYoutube, faReddit, faTwitter, faDiscord,
} from '@fortawesome/fontawesome-free-brands';

import Moment from 'react-moment';
import 'moment-timezone';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import LogoBusinessInsider from '../static/img/coverage/Business_Insider.svg';
import LogoForbes from '../static/img/coverage/Forbes.svg';
import LogoHuffingtonPost from '../static/img/coverage/Huffington_Post.svg';
import LogoMashable from '../static/img/coverage/Mashable.svg';
import LogoTechChrunch from '../static/img/coverage/TechChrunch.svg';

function Pressreleases(props) {
  const { t } = props;

  return (
    <Layout>
      <Subheader t={t} category="press" page="key-tech" />

      <div className="pressreleases press">
        <div className="ribbon ribbon--pressreleases">
          <div className="ribbon-img" />

          <div className="container pt">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-10 col-md-8 text-center">
                <div className="ribbon-txt">
                  <h1>{ t('key-tech:ribbon.title', { defaultValue: 'Verge Key Tech' }) }</h1>
                  <p>{ t('key-tech:ribbon.text', { defaultValue: 'Explore our key technology features. Read and learn more about Wraith, Tor, I2P and much more.' }) }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container themed-container--dark">
          ..
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Pressreleases);

export default Extended;
