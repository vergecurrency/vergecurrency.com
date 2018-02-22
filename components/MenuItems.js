import Link from 'next/link';

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
    <Link href="/resources/introduction">
      <a href="/resources/introduction">{t('header:resources', { defaultValue: 'Resources' })}</a>
    </Link>
    <Link prefetch href="/get-verge">
      <a href="/get-verge">{t('header:get_verge', { defaultValue: 'Get Verge' })}</a>
    </Link>
  </div>
);

export default MenuItems;
