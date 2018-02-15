import React from 'react';

import Link from 'next/link';

import VergeLogo from '../static/img/verge-logo.svg';

const Footer = ({ t }) => (
  <footer>
    <div className="row">
      <div className="col-xs">
        <div className="container">
          <div className="row around-xs middle-xs top-sm">
            <div className="col-xs-11 start-xs">
              <h3>{t('footer:stay_updated', { defaultValue: 'STAY UPDATED' } )}</h3>
              <div className="row">
                <div className="col-xs col-md-9 start-xs">
                  <p>{t('footer:stay_updated_text', { defaultValue: 'Keep up with the latest news and articles, and find out all about events happening with Verge Currency.' } )}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row around-xs middle-xs top-sm">
            <div className="col-xs-11 center-xs">
              <div className="row">
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.navigation', { defaultValue: 'NAVIGATION' } )}</h4>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>{t('footer:about', { defaultValue: 'About' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link prefetch href="/get-verge">
                        <a>{t('footer:get_verge', { defaultValue: 'Get Verge' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/vendors">
                        <a>{t('footer:vendors', { defaultValue: 'Vendors' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wallets">
                        <a>{t('footer:wallets', { defaultValue: 'Wallets' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/roadmap">
                        <a>{t('footer:roadmap', { defaultValue: 'Roadmap' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/p2p-solutions">
                        <a>{t('footer:p2p_solutions', { defaultValue: 'P2P Solutions' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.developers', { defaultValue: 'DEVELOPERS' } )}</h4>
                    </li>
                    <li>
                      <Link href="/developers/how-to-install-rubygems">
                        <a>{t('footer:how_to_install_rubygems', { defaultValue: 'How to install RubyGems' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/github-desktop">
                        <a>{t('footer:github_desktop', { defaultValue: 'GitHub Desktop' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/our-github-repositories">
                        <a>{t('footer:our_github_repositories', { defaultValue: 'Our GitHub repositories' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/php-library-for-verge-wallet">
                        <a>{t('footer:php_library_for_verge_wallet', { defaultValue: 'PHP Library for Verge wallet' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/ruby-wrapped-gem">
                        <a>{t('footer:ruby_wrapped_gem', { defaultValue: 'Ruby wrapped gem' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/developers">
                        <a>{t('footer:click_to_see_more', { defaultValue: 'Click to see more' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.community', { defaultValue: 'COMMUNITY' } )}</h4>
                    </li>
                    <li>
                      <Link href="/community/developers">
                        <a>{t('footer:developers', { defaultValue: 'Developers' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/contributers">
                        <a>{t('footer:contributers', { defaultValue: 'Contributers' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/donate">
                        <a>{t('footer:donate', { defaultValue: 'Donate' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/social">
                        <a>{t('footer:social', { defaultValue: 'Social' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/get-involved">
                        <a>{t('footer:get_involved', { defaultValue: 'Get involved' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.verge_core', { defaultValue: 'VERGE CORE' } )}</h4>
                    </li>
                    <li>
                      <Link href="/our-team">
                        <a>{t('footer:our_team', { defaultValue: 'Our team' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a>{t('footer:about_us', { defaultValue: 'About us' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/history">
                        <a>{t('footer:history', { defaultValue: 'History' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/send-an-email">
                        <a>{t('footer:send_an_email', { defaultValue: 'Send an email' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/presskit">
                        <a>{t('footer:press', { defaultValue: 'Press' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>{t('footer:faq', { defaultValue: 'FAQ' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xs">
        <div className="container container--with-gutter">
          <div className="row around-xs middle-xs top-sm">
            <div className="col-xs col-sm-11 start-xs">
              <div className="row between-xs bottom middle-xs">
                <div className="col-xs-8">
                  Bottom Footer
                </div>
                <div className="col-xs-4 end-xs">
                  <Link href="/">
                    <a>
                      <VergeLogo width="120" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row around-xs middle-xs top-sm">
            <div className="col-xs col-sm-11 start-xs center-sm">
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
