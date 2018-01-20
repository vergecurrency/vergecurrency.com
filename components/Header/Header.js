import Link from 'next/link';

const Header = () => (
  <nav className="row around-xs middle-xs top-sm">
    <div className="col-xs-5 col-sm start-xs">
      <Link href="/">
        <img src="https://placehold.it/88x88" alt="Verge" />
      </Link>
    </div>
    <div className="hidden-xs col-sm-9 end-sm">
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
    <div className="col-xs-5 col-sm-1 end-xs">
      <img src="https://placehold.it/44x88" alt="Dropdown" />
    </div>
    <style jsx>{`
      nav {
        background: red
        height: 88px
      }

      img {
        cursor: pointer;
        vertical-align: middle
      }

      a {
        color: #05131e
        font-family: 'Avenir Next', Arial, sans-serif
        font-size: 15px
        line-height: 88px
        padding: 9px
        margin: 9px
        text-decoration: none
      }

      a:hover {
        color: yellow
      }

      a:last-child {
        font-weight: 600
        margin: 0
      }
    `}</style>
  </nav>
);

export default Header;
