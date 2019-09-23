import Link from 'next/link';

import NProgress from 'nprogress';
import Router from 'next/router';

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Subnavigation_Items = {
  get: [
    {
      link: '/accept-verge',
      i18: 'submenu.accept_verge',
      name: 'Accept Verge',
    },
    {
      link: '/vendors',
      i18: 'submenu.vendors',
      name: 'Vendors',
    },
    {
      link: '/guides',
      i18: 'submenu.guides',
      name: 'Guides',
    },
  ],

  press: [
    {
      link: '/our-team',
      i18: 'submenu.our_team',
      name: 'Verge Team',
    },
    /* {
      link: '/history',
      i18: 'submenu.history',
      name: 'History',
    },*/
    {
      link: '/key-tech',
      i18: 'submenu.key_tech',
      name: 'Key Tech',
    },
    {
      link: '/pressreleases',
      i18: 'submenu.press_releases',
      name: 'Press Releases',
    },
    {
      link: '/presskit',
      i18: 'submenu.presskit',
      name: 'Presskit',
    },
  ],
};

const Subheader = ({ t, category, page }) => (
  <header className={`hidden-xs subheader ${page}--subheader`}>
    <div className="container">
      <div className="row around-xs middle-xs">
        <nav className="col-xs-12 center-xs">
          {
            Subnavigation_Items[category].map(item => (
              <Link key={`${item.i18}`} href={`${item.link}`}>
                <a href={`${item.link}`}>{t(item.i18, { defaultValue: item.name })}</a>
              </Link>
            ))
          }
        </nav>
      </div>
    </div>
  </header>
);

export default Subheader;
