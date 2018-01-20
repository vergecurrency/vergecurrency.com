import Link from 'next/link';

const Header = () => (
  <header className="row around-xs middle-xs top-sm">
    <div className="col-xs-5 col-sm-1 col-md-2 start-xs middle-xs">
      <Link href="/">
        <a><img src="https://placehold.it/128x50" alt="Verge" /></a>
      </Link>
    </div>
    <nav className="col-xs-5 col-sm end-xs">
      <div className="hidden-xs">
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/wallets">
          <a>Wallets</a>
        </Link>
        <Link href="/roadmap">
          <a>Roadmap</a>
        </Link>
        <Link href="/community">
          <a>Community</a>
        </Link>
        <Link href="/learn-more">
          <a>Learn more</a>
        </Link>
        <Link href="/get-verge">
          <a>Get Verge</a>
        </Link>
      </div>
      <button>
        =
      </button>
    </nav>
    <style jsx>{`
      header {
        height: 88px
      }

      header > div,
      button {
        align-self: center
      }

      header > div img {
        display: block
      }

      button {
        cursor: pointer;
        width: 40px
        height: 40px
      }

      nav > div,
      button {
        display: inline-block
        vertical-align: middle
      }

      nav a {
        color: #05131e
        font-family: 'Avenir Next', Arial, sans-serif
        font-size: 15px
        line-height: 88px
        margin: 6px
        padding: 6px
        text-decoration: none
      }

      nav a:last-child {
        font-weight: 600
        margin-right: 12px
      }

      @media (min-width: 64em) {
        nav a {
          margin: 9px
          padding: 9px
        }

        nav a:last-child {
          margin-right: 18px
        }
      }

      nav a:hover {
        color: yellow
      }
    `}</style>
  </header>
);

export default Header;
