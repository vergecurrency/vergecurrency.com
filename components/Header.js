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
      <div className="row around-xs middle-xs">
        <div className="col-xs-5 col-sm-1 col-md-2 start-xs middle-xs">
          <Link href="/">
            <a>
              <svg version="1.1" viewBox="0 0 1907 365" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <g transform="translate(16 14)">
                    <polygon transform="translate(140 188.5) rotate(180) translate(-140 -188.5)" points="140 40 280 337 0 337" fill="#00CBFE"/>
                    <polygon transform="translate(140 148.5) rotate(180) translate(-140 -148.5)" points="140 0 280 297 -5.6843e-14 297" fill="#BFBFBF"/>
                    <polygon transform="translate(140 168.5) rotate(180) translate(-140 -168.5)" points="140 40 261.2 297 18.798 297" fill="#0098BF"/>
                  </g>
                  <path d="m600.46 54.887h22.33l-110.04 294.11h-18.105l-109.64-294.11h21.928l74.031 200.17c11.266 30.176 18.843 52.841 22.732 67.996 2.6823-10.059 7.9798-25.683 15.893-46.873l80.871-221.29zm300.05 294.11h-160.74v-294.11h160.74v18.91h-140.22v111.25h132.37v18.91h-132.37v126.13h140.22v18.91zm162.45-128.15v128.15h-20.52v-294.11h70.008c36.479 0 63.436 6.7392 80.871 20.218 17.435 13.479 26.152 33.763 26.152 60.854 0 19.715-5.1969 36.345-15.591 49.891-10.394 13.546-26.186 23.269-47.376 29.17l79.865 133.98h-24.543l-75.842-128.15h-73.025zm0-17.703h56.127c24.811 0 44.057-5.5322 57.736-16.597 13.68-11.065 20.52-27.393 20.52-48.985 0-22.397-6.7057-38.692-20.117-48.885-13.412-10.193-35.272-15.289-65.582-15.289h-48.684v129.76zm415.32-2.4141h108.43v134.18c-28.432 12.07-60.418 18.105-95.959 18.105-46.404 0-81.977-13.11-106.72-39.329-24.744-26.22-37.116-63.335-37.116-111.35 0-29.908 6.1357-56.429 18.407-79.563 12.272-23.135 29.84-41.005 52.707-53.612 22.867-12.607 49.119-18.91 78.759-18.91 32.054 0 60.821 5.901 86.303 17.703l-8.248 18.508c-25.482-11.802-51.902-17.703-79.262-17.703-38.759 0-69.505 11.97-92.237 35.909-22.733 23.94-34.099 56.227-34.099 96.864 0 44.258 10.796 77.552 32.389 99.882 21.593 22.33 53.31 33.495 95.154 33.495 27.091 0 50.092-3.8222 69.002-11.467v-103.4h-87.51v-19.312zm418.34 148.26h-160.74v-294.11h160.74v18.91h-140.22v111.25h132.37v18.91h-132.37v126.13h140.22v18.91z" fill="#000"/>
                </g>
              </svg>
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
