import React from 'react';
import { slide as Menu } from 'react-burger-menu';

import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';

import NProgress from 'nprogress';

import VergeLogoWhite from '../static/img/verge-logo-white.svg';

import Navbar from './Navbar';
import MenuItems from './MenuItems';

Router.onRouteChangeStart = () => { NProgress.start(); };
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ t }) => (
  <header id="header">
    <Head>
      <meta name="theme-color" content="#4cc2f1" />
      <link rel="manifest" href="/static/manifest.json" />
      <style type="text/css">
        @import url(/static/css/ngprogress.css);
      </style>
    </Head>
    <div className="container container--with-gutter">
      <div className="row between-xs around-sm middle-xs">
        <div className="col-xs-5 col-sm-1 start-xs middle-xs">
          <Link href="/">
            <a className="verge-logo" href="/" name="Verge homepage">
              <VergeLogoWhite />
            </a>
          </Link>
        </div>
        <nav className="col-xs-5 col-sm end-xs menu">
          <div className="hidden-xs hidden-sm hidden-md">
            <MenuItems t={t} />
          </div>
          <div className="visible-sm">
            <Menu right>
              <MenuItems t={t} />
            </Menu>
          </div>
        </nav>
      </div>
    </div>
    <Navbar
      key="profile-nav-bar"
    />
  </header>
);

export default Header;
