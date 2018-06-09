import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

const MenuItems = ({ t }) => (
  <div className="links">
    <Link prefetch href="/">
      <a href="/" className="visible-xs">{t('header:home', { defaultValue: 'Home' })}</a>
    </Link>
    <Link prefetch href="/get-started">
      <a href="/get-started">{t('header:getstarted', { defaultValue: 'Get Started' })}</a>
    </Link>
    <span className="submenu">
      {t('header:about', { defaultValue: 'About' })}<FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link prefetch href="/about">
          <a href="/about">{t('header:about', { defaultValue: 'About Us' })}</a>
        </Link>
        <Link prefetch href="/verge-team">
          <a href="/verge-team">{t('header:verge-team', { defaultValue: 'Verge Team' })}</a>
        </Link>
        <Link prefetch href="/key-tech">
          <a href="/key-tech">{t('header:key-tech', { defaultValue: 'Key Tech' })}</a>
        </Link>
        {/* <Link prefetch href="/history">
          <a href="/history">{t('header:history', { defaultValue: 'History' })}</a>
        </Link> */}
        <Link prefetch href="/pressreleases">
          <a href="/pressreleases">{t('header:pressreleases', { defaultValue: 'Press Releases' })}</a>
        </Link>
        <Link prefetch href="/meetup">
      <a href="/meetup">{t('header:meetup', { defaultValue: 'Meetup' })}</a>
    </Link>
      </div>
    </span>
    <span className="submenu">
      {t('header:Find Us', { defaultValue: 'Find Us' })}<FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link href="https://www.twitter.com/vergecurrency">
          <a href="https://www.twitter.com/vergecurrency" target="_blank" rel="noopener noreferrer">{t('header:twitter', { defaultValue: 'Twitter' })}</a>
        </Link>
        <Link href="https://www.reddit.com/r/vergecurrency/">
          <a href="https://www.reddit.com/r/vergecurrency/" target="_blank" rel="noopener noreferrer">{t('header:reddit', { defaultValue: 'Reddit' })}</a>
        </Link>
        <Link href="https://vergefora.com">
          <a href="https://vergefora.com" target="_blank" rel="noopener noreferrer">{t('header:forums', { defaultValue: 'Forums' })}</a>
        </Link>		
        <Link href="https://discord.gg/vergecurrency">
          <a href="https://discord.gg/vergecurrency" target="_blank" rel="noopener noreferrer">{t('header:discord', { defaultValue: 'Discord' })}</a>
        </Link>
        <Link href="https://t.me/VERGExvg">
          <a href="https://t.me/VERGExvg" target="_blank" rel="noopener noreferrer">{t('header:telegram', { defaultValue: 'Telegram' })}</a>
        </Link>
        <Link href="https://www.facebook.com/VERGEcurrency">
          <a href="https://www.facebook.com/VERGEcurrency" target="_blank" rel="noopener noreferrer">{t('header:facebook', { defaultValue: 'FaceBook' })}</a>
        </Link>
        <Link href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ">
          <a href="https://www.youtube.com/channel/UCv59uw_WhHB2VxbBs0LPeeQ" target="_blank" rel="noopener noreferrer">{t('header:youtube', { defaultValue: 'YouTube' })}</a>
        </Link>
        <Link href="https://github.com/vergecurrency?tab=repositories">
          <a href="https://github.com/vergecurrency?tab=repositories" target="_blank" rel="noopener noreferrer">{t('header:github', { defaultValue: 'GitHub' })}</a>
        </Link>
        <Link prefetch href="/community/get-involved">
          <a href="/community/get-involved">{t('header:contact', { defaultValue: 'Contact Direct' })}</a>
        </Link>		
      </div>
    </span>

    <Link prefetch href="/wallets">
      <a href="/wallets">{t('header:wallets', { defaultValue: 'Wallets' })}</a>
    </Link>
    <Link prefetch href="/roadmap">
      <a href="/roadmap">{t('header:roadmap', { defaultValue: 'Roadmap' })}</a>
    </Link>
    <Link prefetch href="/vendors">
      <a href="/vendors">{t('header:vendors', { defaultValue: 'Vendors' })}</a>
    </Link>
    <span className="submenu">
      {t('header:resources', { defaultValue: 'Resources' })}<FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        {/* <Link href="/guides">
          <a href="/guides">{t('header:guides', { defaultValue: 'Guides' })}</a>
        </Link> */}
        <Link prefetch href="/faq">
          <a href="/faq">{t('header:faq', { defaultValue: 'FAQ' })}</a>
        </Link>
        <Link prefetch href="/p2p">
          <a href="/p2p">{t('header:p2p', { defaultValue: 'P2P' })}</a>
        </Link>
        <Link prefetch href="/developers">
          <a href="/developers">{t('header:developers', { defaultValue: 'Developers' })}</a>
        </Link>
        <Link prefetch href="/presskit">
          <a href="/presskit">{t('header:presskit', { defaultValue: 'Presskit' })}</a>
        </Link>		
      </div>
    </span>
    <Link prefetch href="/get-verge">
      <a href="/get-verge">{t('header:get_verge', { defaultValue: 'Get Verge' })}</a>
    </Link>
  </div>
);

export default MenuItems;
