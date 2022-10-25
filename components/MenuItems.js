import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import LanguageSwitcher from './LanguageSwitcher';

const MenuItems = ({ t }) => (
  <div className="links">
    <Link prefetch href="/">
      <a href="/" className="visible-xs">
        {t('header:home', { defaultValue: 'Home' })}
      </a>
    </Link>
    <span className="submenu">
      {t('header:about', { defaultValue: 'About' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link prefetch href="/about">
          <a href="/about">{t('header:about', { defaultValue: 'About' })}</a>
        </Link>
        <Link prefetch href="/verge-team">
          <a href="/verge-team">{t('header:verge-team', { defaultValue: 'Verge Team' })}</a>
        </Link>
        <Link prefetch href="/key-tech">
          <a href="/key-tech">{t('header:key-tech', { defaultValue: 'Key Tech' })}</a>
        </Link>
        <Link prefetch href="/benefits">
          <a href="/benefits">{t('header:benefits', { defaultValue: 'Benefits' })}</a>
        </Link>
        {/* <Link prefetch href="/pressreleases">
          <a href="/pressreleases">{t('header:press-releases', { defaultValue: 'Press Releases' })}</a>
        </Link> */}
        <Link prefetch href="/fueled-by-verge">
          <a href="/fueled-by-verge">{t('header:fueled-by-verge', { defaultValue: 'Fueled By Verge' })}</a>
        </Link>
      </div>
    </span>
    <Link prefetch href="/wallets">
      <a href="/wallets">{t('header:wallets', { defaultValue: 'Wallets' })}</a>
    </Link>
    <Link prefetch href="/milestones">
      <a href="/milestones">{t('header:milestones', { defaultValue: 'Milestones' })}</a>
    </Link>
    <span className="submenu">
      {t('header:resources', { defaultValue: 'Resources' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        {/* <Link href="/guides">
          <a href="/guides">{t('header:guides', { defaultValue: 'Guides' })}</a>
        </Link> */}
          <a href="/static/blackpaper/verge-blackpaper-v5.0.pdf" target="_blank">{t('header:blackpaper', { defaultValue: 'Blackpaper' })}
          </a>
        <Link prefetch href="/faq">
          <a href="/faq">{t('header:faq', { defaultValue: 'FAQ' })}
          </a>
        </Link>
        <Link prefetch href="/community/xvg-mining-pools">
          <a href="/community/xvg-mining-pools">{t('header:pools', { defaultValue: 'Mining Pools' })}
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
        <Link href="https://vergecurrency.network/d/VmzuEE5Mk/verge-blockchain?orgId=1">
          <a href="https://vergecurrency.network/d/VmzuEE5Mk/verge-blockchain?orgId=1" target="_blank" rel="noopener noreferrer">
            {t('header:network-status', { defaultValue: 'Network Status' })}
          </a>
        </Link>
        <Link prefetch href="/developers">
          <a href="/developers">{t('header:developers', { defaultValue: 'Developers' })}</a>
        </Link>
        <Link prefetch href="/presskit">
          <a href="/presskit">{t('header:presskit', { defaultValue: 'Presskit' })}</a>
        </Link>
        <Link prefetch href="/meetup">
          <a href="/meetup">{t('header:meetup', { defaultValue: 'MeetUp' })}</a>
        </Link>
        <Link prefetch href="/find-us">
          <a href="/find-us">{t('header:find-us', { defaultValue: 'Find Us' })}</a>
        </Link>
      </div>
    </span>
    <Link prefetch href="/vendors">
      <a href="/vendors">{t('header:vendors', { defaultValue: 'Vendors' })}</a>
    </Link>
    <Link href="https://vergecurrency.store/">
      <a href="https://vergecurrency.store/" target="_blank" rel="noopener noreferrer">
        {t('header:verge-merch', { defaultValue: 'Store' })}
      </a>
    </Link>
    <Link prefetch href="/get-verge">
      <a href="/get-verge">{t('header:get-verge', { defaultValue: 'Get Verge' })}</a>
    </Link>
    <LanguageSwitcher />
  </div>
);

export default MenuItems;
