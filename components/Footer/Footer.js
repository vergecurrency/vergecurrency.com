import Link from 'next/link';


const Footer = () => (
  <footer>
    <div className="row">
      <div className="col-xs">
        <div className="row around-xs middle-xs top-sm">
          <div className="col-xs col-sm-11 start-xs">
            <h3>STAY UPDATED</h3>
            <p>Keep up with the latest news and articles, and find out all about events happening with Verge Currency</p>
          </div>
        </div>
        <div className="row around-xs middle-xs top-sm">
          <div className="col-xs col-sm-11 start-xs center-sm">
            <div className="row">
              <div className="col-xs col-sm-3">
                <ul>
                  <li>
                    <h4>NAVIGATION</h4>
                  </li>
                  <li>
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/get-verge">
                      <a>Get Verge</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/vendors">
                      <a>Vendors</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/wallets">
                      <a>Wallets</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/roadmap">
                      <a>Roadmap</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/p2p-solutions">
                      <a>P2P Solutions</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs col-sm-3">
                <ul>
                  <li>
                    <h4>DEVELOPERS</h4>
                  </li>
                  <li>
                    <Link href="/developers/how-to-install-rubygems">
                      <a>How to install RubyGems</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/developers/github-desktop">
                      <a>GitHub Desktop</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/developers/our-github-repositories">
                      <a>Our GitHub repositories</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/developers/php-library-for-verge-wallet">
                      <a>PHP Library for Verge wallet</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/developers/ruby-wrapped-gem">
                      <a>Ruby wrapped gem</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/developers">
                      <a>Click to see more</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs col-sm-3">
                <ul>
                  <li>
                    <h4>COMMUNITY</h4>
                  </li>
                  <li>
                    <Link href="/community/developers">
                      <a>Developers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/contributers">
                      <a>Contributers</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/donate">
                      <a>Donate</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/social">
                      <a>Social</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/community/get-involved">
                      <a>Get involved</a>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-xs col-sm-3">
                <ul>
                  <li>
                    <h4>VERGE CORE</h4>
                  </li>
                  <li>
                    <Link href="/our-team">
                      <a>Our team</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about-us">
                      <a>About us</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/history">
                      <a>History</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/send-an-email">
                      <a>Send an email</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/press">
                      <a>Press</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/faq">
                      <a>FAQ</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      Bottom Footer
    </div>
    <style jsx>{`
      footer > div {
        background: blue
      }
      footer > div:last-child {
        background: white
      }

      a {
        color: yellow
        font-family: 'Avenir Next', Arial, sans-serif
        font-size: 15px
        // line-height: 88px
        // margin: 9px
        // padding: 9px
        text-decoration: none
      }

      a:hover {
        color: white
      }

      a:last-child {
        // font-weight: 600
        // margin: 0
      }
    `}</style>
  </footer>
);

export default Footer;
