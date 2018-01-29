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

const Subheader = ({ t, items }) => (
  <header id="subheader" className="hidden-xs">
    <div className="container">
      <div className="row around-xs middle-xs">
        <nav className="col-xs-12 center-xs">
          {/* {
            items.map(item => (
              <Link key={`${item.i18}`} href={`${item.link}`}>
                <a>{t(item.i18, { defaultValue: item.name })}</a>
              </Link>
            ))
          } */}
        </nav>
      </div>
    </div>
  </header>
);

export default Subheader;
