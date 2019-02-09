import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';

const MenuItems = ({ t }) => (
  <div className="links">
    <Link prefetch href="/">
      <a href="/" className="visible-xs">
        {t('header:home', { defaultValue: 'Home' })}
      </a>
    </Link>
    <Link prefetch href="/get-started">
      <a href="/get-started">{t('header:get-started', { defaultValue: 'Get Started' })}</a>
    </Link>
    <span className="submenu">
      {t('header:about', { defaultValue: 'About' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link prefetch href="/about">
          <a href="/about">{t('header:about', { defaultValue: 'About Us' })}</a>
        </Link>
        <Link prefetch href="/verge-team">
          <a href="/verge-team">{t('header:verge-team', { defaultValue: 'Verge Team' })}</a>
        </Link>
        <Link prefetch href="/key-tech">
          <a href="/key-tech">{t('header:key-tech', { defaultValue: 'Key Tech' })}</a>
        </Link>
        <Link prefetch href="/benefits">
          <a href="/history">{t('header:benefits', { defaultValue: 'Benefits' })}</a>
        </Link>
        <Link prefetch href="/pressreleases">
          <a href="/pressreleases">{t('header:press-releases', { defaultValue: 'Press Releases' })}</a>
        </Link>
        <Link prefetch href="/fueled-by-verge">
          <a href="/fueled-by-verge">{t('header:fueled-by-verge', { defaultValue: 'Fueled By Verge' })}</a>
        </Link>
      </div>
    </span>
    <Link prefetch href="/wallets">
      <a href="/wallets">{t('header:wallets', { defaultValue: 'Wallets' })}</a>
    </Link>
    <Link prefetch href="/roadmap">
      <a href="/roadmap">{t('header:roadmap', { defaultValue: 'Roadmap' })}</a>
    </Link>
    <Link prefetch href="/vendors">
      <a href="/vendors">{t('header:vendors', { defaultValue: 'Vendors' })}</a>
    </Link>
    <span className="submenu">
      {t('header:resources', { defaultValue: 'Resources' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        {/* <Link href="/guides">
          <a href="/guides">{t('header:guides', { defaultValue: 'Guides' })}</a>
        </Link> */}
        <Link prefetch href="https://vergecurrency.com/static/blackpaper/verge-blackpaper-v5.0.pdf">
          <a href="https://vergecurrency.com/static/blackpaper/verge-blackpaper-v5.0.pdf">{t('header:blackpaper', { defaultValue: 'Blackpaper' })}
          </a>
        </Link>
        <Link prefetch href="/faq">
          <a href="/faq">{t('header:faq', { defaultValue: 'FAQ' })}
          </a>
        </Link>
        <Link prefetch href="/community/xvg-mining-pools/">
          <a href="/community/xvg-mining-pools/">{t('header:pools', { defaultValue: 'Mining Pools' })}
          </a>
        </Link>
        <Link href="https://verge.zendesk.com">
          <a href="https://verge.zendesk.com" target="_blank" rel="noopener noreferrer">
            {t('header:zendesk', { defaultValue: 'ZenDesk' })}
          </a>
        </Link>
        <Link href="https://en.wikipedia.org/wiki/Verge_(cryptocurrency)">
          <a href="https://en.wikipedia.org/wiki/Verge_(cryptocurrency)" target="_blank" rel="noopener noreferrer">
            {t('header:wiki', { defaultValue: 'Wiki' })}
          </a>
        </Link>
        <Link prefetch href="/p2p">
          <a href="/p2p">{t('header:p2p', { defaultValue: 'P2P' })}
          </a>
        </Link>
        <Link href="https://vergecurrency.network/">
          <a href="https://vergecurrency.network/" target="_blank" rel="noopener noreferrer">
            {t('header:network-status', { defaultValue: 'Network Status' })}
          </a>
        </Link>
        <Link prefetch href="/developers">
          <a href="/developers">{t('header:developers', { defaultValue: 'Developers' })}</a>
        </Link>
        <Link prefetch href="/presskit">
          <a href="/presskit">{t('header:presskit', { defaultValue: 'Presskit' })}</a>
        </Link>
        <Link prefetch href="/find-us">
          <a href="/find-us">{t('header:find-us', { defaultValue: 'Find Us' })}</a>
        </Link>
      </div>
    </span>
    <Link prefetch href="/get-verge">
      <a href="/get-verge">{t('header:get-verge', { defaultValue: 'Get Verge' })}</a>
    </Link>
    <LanguageSwitcher />
  </div>
);

export default MenuItems;
