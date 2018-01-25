import Link from 'next/link';

const Footer = ({ t }) => (
  <div>
    <footer>
      <div className="row">
        <div className="col-xs">
          <div className="container">
            <div className="row around-xs middle-xs top-sm">
              <div className="col-xs-11 start-xs">
                <h3>{t('footer:stay_updated')}</h3>
                <div className="row">
                  <div className="col-xs col-md-9 start-xs">
                    <p>{t('footer:stay_updated_text')}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row around-xs middle-xs top-sm">
              <div className="col-xs-11 center-xs">
                <div className="row">
                  <div className="col-xs-6 col-sm-3">
                    <ul>
                      <li>
                        <h4>{t('footer:navigation')}</h4>
                      </li>
                      <li>
                        <Link href="/about">
                          <a>{t('footer:about')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link prefetch href="/get-verge">
                          <a>{t('footer:get_verge')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/vendors">
                          <a>{t('footer:vendors')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/wallets">
                          <a>{t('footer:wallets')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/roadmap">
                          <a>{t('footer:roadmap')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/p2p-solutions">
                          <a>{t('footer:p2p_solutions')}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <ul>
                      <li>
                        <h4>{t('footer:developers')}</h4>
                      </li>
                      <li>
                        <Link href="/developers/how-to-install-rubygems">
                          <a>{t('footer:how_to_install_rubygems')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/developers/github-desktop">
                          <a>{t('footer:github_desktop')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/developers/our-github-repositories">
                          <a>{t('footer:our_github_repositories')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/developers/php-library-for-verge-wallet">
                          <a>{t('footer:php_library_for_verge_wallet')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/developers/ruby-wrapped-gem">
                          <a>{t('footer:ruby_wrapped_gem')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/community/developers">
                          <a>{t('footer:click_to_see_more')}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <ul>
                      <li>
                        <h4>{t('footer:community')}</h4>
                      </li>
                      <li>
                        <Link href="/community/developers">
                          <a>{t('footer:developers')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/community/contributers">
                          <a>{t('footer:contributers')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/community/donate">
                          <a>{t('footer:donate')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/community/social">
                          <a>{t('footer:social')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/community/get-involved">
                          <a>{t('footer:get_involved')}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-6 col-sm-3">
                    <ul>
                      <li>
                        <h4>{t('footer:verge_core')}</h4>
                      </li>
                      <li>
                        <Link href="/our-team">
                          <a>{t('footer:our_team')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/about-us">
                          <a>{t('footer:about_us')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/history">
                          <a>{t('footer:history')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/send-an-email">
                          <a>{t('footer:send_an_email')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/presskit">
                          <a>{t('footer:press')}</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/faq">
                          <a>{t('footer:faq')}</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs">
          <div className="container">
            <div className="row around-xs middle-xs top-sm">
              <div className="col-xs col-sm-11 start-xs">
                Bottom Footer
              </div>
            </div>
            <div className="row around-xs middle-xs top-sm">
              <div className="col-xs col-sm-11 start-xs center-sm">
              </div>
            </div>
            </div>
        </div>
      </div>
    </footer>
    <style jsx>{`
      footer {
        background: #091721;
        font-family: 'Avenir Next', Arial, sans-serif;
        padding-top: 3rem;
      }

      footer > div:last-child {
        background: white;
        margin-top: 3rem;
      }

      h3, h4 {
        color: white;
        font-size: .8rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: .2rem;
      }

      h3 { // optical illusion solved
        margin-left: .1rem;
      }

      h3 + div p {
        color: white;
        font-size: 2rem
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 2.5rem;
      }

      ul {
        list-style: none;
        margin: 0 0 1.5rem;
        padding: 0;
        text-align: left;
      }

      @media (min-width: 48rem) {
        h3 + div p {
          line-height: auto;
        }
        ul {
          margin-bottom: 0;
        }
      }

      a {
        color: white;
        display: inline-block;
        font-size: .8rem;
        line-height: 1.3rem;
        margin-bottom:.2rem;
        text-decoration: none;
        text-transform: initial;
        align-self: start;
      }

      a:hover {
        text-decoration: underline
      }
    `}</style>
  </div>
);

export default Footer;
