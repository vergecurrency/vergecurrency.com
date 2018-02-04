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

const Subnavigation_Items = {
  press: [
    {
      link: '/our-team',
      i18:  'submenu.ourTeam',
      name: 'Verge Team'
    },
    {
      link: '/history',
      i18:  'submenu.history',
      name: 'History'
    },
    {
      link: '/key-tech',
      i18:  'submenu.keyTech',
      name: 'Key Tech'
    },
    {
      link: '/press-releases',
      i18:  'submenu.pressReleases',
      name: 'Press Releases'
    },
    {
      link: '/presskit',
      i18:  'submenu.presskit',
      name: 'Presskit'
    }
  ]
};

const Subheader = ({ t, category, page }) => (
  <header className={"hidden-xs subheader " + page + "--subheader" }>
    <div className="container">
      <div className="row around-xs middle-xs">
        <nav className="col-xs-12 center-xs">
          {
            Subnavigation_Items[category].map(item => (
              <Link key={`${item.i18}`} href={`${item.link}`}>
                <a>{t(item.i18, { defaultValue: item.name })}</a>
              </Link>
            ))
          }
        </nav>
      </div>
    </div>
  </header>
);

export default Subheader;
