import Link from 'next/link';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/fontawesome-free-solid';
import LanguageSwitcher from './LanguageSwitcher';

const MenuItems = ({ t }) => (
  <div className="links">
    <Link href="/">
      <a href="/" className="visible-xs">
        {t('header:home', { defaultValue: 'Home' })}
      </a>
    </Link>
    <span className="submenu">
      {t('header:about', { defaultValue: 'About' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        <Link href="/about">
          <a href="/about">{t('header:about', { defaultValue: 'About' })}</a>
        </Link>
        <Link href="/verge-team">
          <a href="/verge-team">{t('header:verge-team', { defaultValue: 'Verge Team' })}</a>
        </Link>
        <Link href="/key-tech">
          <a href="/key-tech">{t('header:key-tech', { defaultValue: 'Key Tech' })}</a>
        </Link>
        <Link href="/benefits">
          <a href="/benefits">{t('header:benefits', { defaultValue: 'Benefits' })}</a>
        </Link>
        {/* <Link prefetch href="/pressreleases">
          <a href="/pressreleases">{t('header:press-releases', { defaultValue: 'Press Releases' })}</a>
        </Link> */}
        <Link href="/fueled-by-verge">
          <a href="/fueled-by-verge">{t('header:fueled-by-verge', { defaultValue: 'Fueled By Verge' })}</a>
        </Link>
      </div>
    </span>
    <Link href="/wallets">
      <a href="/wallets">{t('header:wallets', { defaultValue: 'Wallets' })}</a>
    </Link>
    <Link href="/milestones">
      <a href="/milestones">{t('header:milestones', { defaultValue: 'Milestones' })}</a>
    </Link>
    <Link href="/get-verge">
      <a href="/get-verge">{t('header:get-verge', { defaultValue: 'Get Verge!' })}</a>
    </Link>
    <Link href="/vendors">
      <a href="/vendors">{t('header:vendors', { defaultValue: 'Vendors' })}</a>
    </Link>
    <a href="https://XVGTokens.com/" target="_blank" rel="noopener noreferrer">
      {t('header:verge-merch', { defaultValue: 'XVGTokens' })}
    </a>
    <span className="submenu">
      {t('header:resources', { defaultValue: 'Resources' })}
      <FontAwesomeIcon icon={faChevronDown} />
      <div className="submenu__content">
        {/* <Link href="/guides">
          <a href="/guides">{t('header:guides', { defaultValue: 'Guides' })}</a>
        </Link> */}
          <a href="/static/blackpaper/verge-blackpaper-v5.0.pdf" target="_blank" rel="noopener noreferrer">{t('header:blackpaper', { defaultValue: 'Blackpaper' })}
          </a>
        <Link href="/faq">
          <a href="/faq">{t('header:faq', { defaultValue: 'FAQ' })}
          </a>
        </Link>
        <Link href="/community/xvg-mining-pools">
          <a href="/community/xvg-mining-pools">{t('header:pools', { defaultValue: 'Mining Pools' })}
          </a>
        </Link>
        <a href="https://mycryptocheckout.com/?ref=156" target="_blank" rel="noopener noreferrer">
          {t('header:acceptverge', { defaultValue: 'Accept Verge!' })}
        </a>
        <a href="https://en.wikipedia.org/wiki/Verge_(cryptocurrency)" target="_blank" rel="noopener noreferrer">
          {t('header:wiki', { defaultValue: 'Wiki' })}
        </a>
        <a href="https://vergecurrency.network/d/VmzuEE5Mk/verge-blockchain?orgId=1" target="_blank" rel="noopener noreferrer">
          {t('header:network-status', { defaultValue: 'Network Status' })}
        </a>
        <Link href="/developers">
          <a href="/developers">{t('header:developers', { defaultValue: 'Developers' })}</a>
        </Link>
        <Link href="/presskit">
          <a href="/presskit">{t('header:presskit', { defaultValue: 'Presskit' })}</a>
        </Link>
        <Link href="/meetup">
          <a href="/meetup">{t('header:meetup', { defaultValue: 'MeetUp' })}</a>
        </Link>
        <Link href="/find-us">
          <a href="/find-us">{t('header:find-us', { defaultValue: 'Find Us' })}</a>
        </Link>
      </div>
    </span>                            
    <LanguageSwitcher />
  </div>
);

export default MenuItems;
