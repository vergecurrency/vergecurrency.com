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
  <header id="subheader" className="hidden-xs">
    <div className="container">
      <div className="row around-xs middle-xs">
        <nav className="col-xs-12 center-xs">
          <Link href="">
            <a>Verge Team</a>
          </Link>
          <Link href="">
            <a>History</a>
          </Link>
          <Link href="">
            <a>Key Tech</a>
          </Link>
          <Link href="">
            <a>Press Releases</a>
          </Link>
          <Link href="">
            <a>Presskit</a>
          </Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
