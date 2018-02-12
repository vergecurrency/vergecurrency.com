import React from 'react';

import VergeLogo from '../static/img/verge-logo-white.svg';

import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import NProgress from 'nprogress';

import Navbar from './Navbar';

Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ t }) => (
  <header id="header">
    <Head>
      <style type="text/css">
        @import url(/static/css/ngprogress.css);
      </style>
    </Head>
    <div className="container container--with-gutter">
      <div className="row between-xs around-sm middle-xs">
        <div className="col-xs-5 col-sm-1 col-md-2 start-xs middle-xs">
          <Link href="/">
            <a>
              <VergeLogo />
            </a>
          </Link>
        </div>
        <nav className="col-xs-5 col-sm end-xs menu">
          <div className="links hidden-xs">
            <Link prefetch href="/about">
              <a>{t('header:about', { defaultValue: 'About' } )}</a>
            </Link>
            <Link href="/wallets">
              <a>{t('header:wallets', { defaultValue: 'Wallets' } )}</a>
            </Link>
            <Link href="/roadmap">
              <a>{t('header:roadmap', { defaultValue: 'Roadmap' } )}</a>
            </Link>
            <Link href="/community">
              <a>{t('header:community', { defaultValue: 'Community' } )}</a>
            </Link>
            <Link href="/learn-more">
              <a>{t('header:learn_more', { defaultValue: 'Learn more' } )}</a>
            </Link>
            <Link prefetch href="/get-verge">
              <a>{t('header:get_verge', { defaultValue: 'Get Verge' } )}</a>
            </Link>

            <a href="#" className="menu--hamburger"></a>
          </div>
        </nav>
      </div>
    </div>
    <Navbar />
  </header>
);

export default Header;
