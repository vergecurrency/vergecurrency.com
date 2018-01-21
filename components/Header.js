import Link from 'next/link';

const Header = ({ t }) => (
  <header className="row around-xs middle-xs top-sm">
    <div className="col-xs-5 col-sm-1 col-md-2 start-xs middle-xs">
      <Link href="/">
        <a><img src="https://placehold.it/128x50" alt="Verge" /></a>
      </Link>
    </div>
    <nav className="col-xs-5 col-sm end-xs">
      <div className="hidden-xs">
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
    <style jsx>{`
      header {
        height: 88px;
      }

      header > div,
      button {
        align-self: center;
      }

      header > div img {
        display: block;
      }

      button {
        cursor: pointer;
        width: 40px;
        height: 40px;
      }

      nav > div,
      button {
        display: inline-block;
        vertical-align: middle;
      }

      nav a {
        color: #05131e;
        font-family: 'Avenir Next', Arial, sans-serif;
        font-size: 15px;
        line-height: 88px;
        margin: 6px;
        padding: 6px;
        text-decoration: none;
      }

      nav a:last-child {
        font-weight: 600;
        margin-right: 12px;
      }

      @media (min-width: 64em) {
        nav a {
          margin: 9px;
          padding: 9px;
        }

        nav a:last-child {
          margin-right: 18px;
        }
      }

      nav a:hover {
        color: yellow;
      }
    `}</style>
  </header>
);

export default Header;
