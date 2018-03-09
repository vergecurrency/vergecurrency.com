import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

const MenuItems = ({ t }) => (
  <div className="links">
    <Link prefetch href="/">
      <a href="/" className="visible-xs">{t('header:home', { defaultValue: 'Home' })}</a>
    </Link>
    <Link prefetch href="/about">
      <a href="/about">{t('header:about', { defaultValue: 'About' })}</a>
    </Link>
    <Link href="/wallets">
      <a href="/wallets">{t('header:wallets', { defaultValue: 'Wallets' })}</a>
    </Link>
    <Link href="/roadmap">
      <a href="/roadmap">{t('header:roadmap', { defaultValue: 'Roadmap' })}</a>
    </Link>
    <Link href="/vendors">
      <a href="/vendors">{t('header:vendors', { defaultValue: 'Vendors' })}</a>
    </Link>
    <span className="submenu">
      {t('header:resources', { defaultValue: 'Resources' })}<FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link href="/guides">
          <a href="/guides">{t('header:guides', { defaultValue: 'Guides' })}</a>
        </Link>
        <Link href="/faq">
          <a href="/faq">{t('header:faq', { defaultValue: 'FAQ' })}</a>
        </Link>
        <Link href="/p2p">
          <a href="/p2p">{t('header:p2p', { defaultValue: 'P2P' })}</a>
        </Link>
        <Link href="/developers">
          <a href="/developers">{t('header:developers', { defaultValue: 'Developers' })}</a>
        </Link>
      </div>
    </span>
    <Link prefetch href="/get-verge">
      <a href="/get-verge">{t('header:get_verge', { defaultValue: 'Get Verge' })}</a>
    </Link>
  </div>
);

export default MenuItems;
