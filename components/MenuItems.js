import Link from 'next/link';
import Router from 'next/router';

const MenuItems = ({ t }) => {
  return (
    <div className="links">
      <Link prefetch href="/">
        <a className="visible-xs">{t('header:home', { defaultValue: 'Home' })}</a>
      </Link>
      <Link prefetch href="/about">
        <a>{t('header:about', { defaultValue: 'About' })}</a>
      </Link>
      <Link href="/wallets">
        <a>{t('header:wallets', { defaultValue: 'Wallets' })}</a>
      </Link>
      <Link href="/roadmap">
        <a>{t('header:roadmap', { defaultValue: 'Roadmap' })}</a>
      </Link>
      <Link href="/vendors">
        <a>{t('header:vendors', { defaultValue: 'Vendors' })}</a>
      </Link>
      <Link href="/resources/introduction">
        <a>{t('header:resources', { defaultValue: 'Resources' })}</a>
      </Link>
      <Link prefetch href="/get-verge">
        <a>{t('header:get_verge', { defaultValue: 'Get Verge' })}</a>
      </Link>
    </div>  
  );
}

export default MenuItems;
