import Link from 'next/link';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Navbar from './Navbar';

Router.onRouteChangeStart = (url) => {
  NProgress.start();
}
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Header = ({ t }) => (
  <header id="header">
    <Head>
      <link rel="stylesheet" type="text/css" href="../static/css/ngprogress.css" />
    </Head>
    <div className="container">
      <div className="row around-xs middle-xs">
        <div className="col-xs-5 col-sm-1 col-md-2 start-xs middle-xs">
          <Link href="/">
            <a><img src="/static/img/vergecurrency-logo.png" alt="Verge Currency" /></a>
          </Link>
        </div>
        <nav className="col-xs-5 col-sm end-xs">
          <div className="links hidden-xs">
            <Link prefetch href="/about">
              <a>{t('header:about')}</a>
            </Link>
            <Link href="/wallets">
              <a>{t('header:wallets')}</a>
            </Link>
            <Link href="/roadmap">
              <a>{t('header:roadmap')}</a>
            </Link>
            <Link href="/community">
              <a>{t('header:community')}</a>
            </Link>
            <Link href="/learn-more">
              <a>{t('header:learn_more')}</a>
            </Link>
            <Link prefetch href="/get-verge">
              <a>{t('header:get_verge')}</a>
            </Link>
          </div>
          <button>
            =
          </button>
        </nav>
      </div>
    </div>
    <Navbar />
  </header>
);

export default Header;
