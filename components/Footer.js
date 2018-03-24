import React from 'react';

import Link from 'next/link';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {
  faFacebook, faGithub, faTelegram,
  faYoutube, faReddit, faTwitter, faDiscord,
} from '@fortawesome/fontawesome-free-brands';

import VergeLogo from '../static/img/verge-logo.svg';

const Footer = ({ t }) => (
  <footer>
    <div className="row">
      <div className="col-xs">
        <div className="container">
          <div className="row around-xs middle-xs top-sm">
            <div className="col-xs-11 start-xs">
              <h3>{t('footer:stay_updated', { defaultValue: 'STAY UPDATED' })}</h3>
              <div className="row">
                <div className="col-xs col-md-9 start-xs">
                  <p>{t('footer:stay_updated_text', { defaultValue: 'Keep up with the latest news and articles, and find out all about events happening with Verge Currency.' })}</p>
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
                      <h4>{t('footer:subheading.navigation', { defaultValue: 'NAVIGATION' })}</h4>
                    </li>
                    <li>
                      <Link href="/about">
                        <a href="/about" name="About">{t('footer:about', { defaultValue: 'About' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link prefetch href="/get-verge">
                        <a href="/get-verge" name="Get Verge">{t('footer:get_verge', { defaultValue: 'Get Verge' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/vendors">
                        <a href="/vendors" name="Vendors">{t('footer:vendors', { defaultValue: 'Vendors' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wallets">
                        <a href="/wallets" name="Wallets">{t('footer:wallets', { defaultValue: 'Wallets' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/roadmap">
                        <a href="/roadmap" name="Roadmap">{t('footer:roadmap', { defaultValue: 'Roadmap' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/p2p-solutions-guide">
                        <a href="/developers/p2p-solutions-guide" name="P2P guide">{t('footer:p2p_solutions', { defaultValue: 'P2P Solutions' })}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.developers', { defaultValue: 'DEVELOPERS' })}</h4>
                    </li>
                    <li>
                      <Link href="/developers">
                        <a href="/developers" name="Install rubygems">{t('footer:how_to_install_rubygems', { defaultValue: 'How to install RubyGems' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/github-desktop">
                        <a href="/developers/github-desktop" name="Github desktop">{t('footer:github_desktop', { defaultValue: 'GitHub Desktop' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/vergecurrency-repositories">
                        <a href="/developers/vergecurrency-repositories" name="Verge repos">{t('footer:our_github_repositories', { defaultValue: 'Our GitHub repositories' })}</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/developers/php-library-for-verge-wallet">
                        <a href="/developers/php-library-for-verge-wallet" name="Php library">{t('footer:php_library_for_verge_wallet', { defaultValue: 'PHP Library for Verge wallet' })}</a>
                      </Link>

                      </li>
                      <li>
                      <Link href="/developers/ruby-wrapped-gem">
                        <a href="/developers/ruby-wrapped-gem" name="Ruby wrapped gem">{t('footer:ruby_wrapped_gem', { defaultValue: 'Ruby wrapped gem' })}</a>
                      </Link>

                    </li> */}

                    <li>
                      <Link href="https://github.com/vergecurrency/php-verge">
                        <a href="https://github.com/vergecurrency/php-verge" rel="noopener noreferrer" target="_blank">{t('footer:php_library_for_verge_wallet', { defaultValue: 'PHP Library for Verge wallet' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://github.com/vergecurrency/verge-ruby">
                        <a href="https://github.com/vergecurrency/verge-ruby" rel="noopener noreferrer" target="_blank">{t('footer:ruby_wrapped_gem', { defaultValue: 'Ruby wrapped gem' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers">
                        <a href="/developers" name="See more">{t('footer:click_to_see_more', { defaultValue: 'Click to see more' })}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.community', { defaultValue: 'COMMUNITY' })}</h4>
                    </li>
                    <li>
                      <Link href="/developers">
                        <a href="/developers" name="Developers">{t('footer:developers', { defaultValue: 'Developers' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/contributers">
                        <a href="/community/contributers" name="Contributors">{t('footer:contributers', { defaultValue: 'Contributers' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/donate">
                        <a href="/community/donate" name="Donate">{t('footer:donate', { defaultValue: 'Donate' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/social">
                        <a href="/community/social" name="Social media">{t('footer:social', { defaultValue: 'Social' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/get-involved">
                        <a href="/community/get-involved" name="Get involved">{t('footer:get_involved', { defaultValue: 'Get involved' })}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.verge_core', { defaultValue: 'VERGE CORE' })}</h4>
                    </li>
                    <li>
                      <Link href="/our-team">
                        <a href="/our-team" name="Our team">{t('footer:our_team', { defaultValue: 'Our team' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a href="/about-us" name="About us">{t('footer:about_us', { defaultValue: 'About us' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/history">
                        <a href="/history" name="History">{t('footer:history', { defaultValue: 'History' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/send-an-email">
                        <a href="/send-an-email" name="Send an email">{t('footer:send_an_email', { defaultValue: 'Send an email' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/presskit">
                        <a href="/presskit" name="Presskit">{t('footer:press', { defaultValue: 'Press' })}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a href="/faq" name="FAQ">{t('footer:faq', { defaultValue: 'FAQ' })}</a>
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
        <div className="container">
          <div className="row middle-xs bottom">
            <div className="col-xs-8 col--horizontal">
              <div className="social__icon">
                <Link href="https://www.facebook.com/VERGEcurrency">
                  <a href="https://www.facebook.com/VERGEcurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--facebook" name="Facebook"><FontAwesomeIcon icon={faFacebook} /></a>
                </Link>
              </div>
              <div className="social__icon hidden-xs">
                <Link href="https://github.com/vergecurrency?tab=repositories">
                  <a href="https://github.com/vergecurrency?tab=repositories" target="_blank" rel="noopener noreferrer" className="social__link social__link--github" name="Github"><FontAwesomeIcon icon={faGithub} /></a>
                </Link>
              </div>
              <div className="social__icon">
                <Link href="https://t.me/VERGExvg">
                  <a href="https://t.me/VERGExvg" target="_blank" rel="noopener noreferrer" className="social__link social__link--telegram" name="Telegram"><FontAwesomeIcon icon={faTelegram} /></a>
                </Link>
              </div>
              <div className="social__icon">
                <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ">
                  <a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank" rel="noopener noreferrer" className="social__link social__link--youtube" name="Youtube"><FontAwesomeIcon icon={faYoutube} /></a>
                </Link>
              </div>
              <div className="social__icon">
                <Link href="https://www.reddit.com/r/vergecurrency/">
                  <a href="https://www.reddit.com/r/vergecurrency/" target="_blank" rel="noopener noreferrer" className="social__link social__link--reddit" name="Reddit"><FontAwesomeIcon icon={faReddit} /></a>
                </Link>
              </div>
              <div className="social__icon">
                <Link href="https://www.twitter.com/vergecurrency">
                  <a href="https://www.twitter.com/vergecurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--twitter" name="Twitter"><FontAwesomeIcon icon={faTwitter} /></a>
                </Link>
              </div>
              <div className="social__icon">
                <Link href="https://discord.gg/vergecurrency">
                  <a href="https://discord.gg/vergecurrency" target="_blank" rel="noopener noreferrer" className="social__link social__link--discord" name="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
                </Link>
              </div>
            </div>
            <div className="col-xs-4 end-xs">
              <Link href="/">
                <a href="/" className="verge-logo" name="Verge Currency Logo">
                  <VergeLogo width="120" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
