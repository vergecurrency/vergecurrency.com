import Link from 'next/link';

const Footer = ({ t }) => (
  <footer>
    <div className="row">
      <div className="col-xs">
        <div className="container">
          <div className="row around-xs middle-xs top-sm">
            <div className="col-xs-11 start-xs">
              <h3>{t('footer:stay_updated', { defaultValue: 'STAY UPDATED' } )}</h3>
              <div className="row">
                <div className="col-xs col-md-9 start-xs">
                  <p>{t('footer:stay_updated_text', { defaultValue: 'Keep up with the latest news and articles, and find out all about events happening with Verge Currency.' } )}</p>
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
                      <h4>{t('footer:subheading.navigation', { defaultValue: 'NAVIGATION' } )}</h4>
                    </li>
                    <li>
                      <Link href="/about">
                        <a>{t('footer:about', { defaultValue: 'About' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link prefetch href="/get-verge">
                        <a>{t('footer:get_verge', { defaultValue: 'Get Verge' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/vendors">
                        <a>{t('footer:vendors', { defaultValue: 'Vendors' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/wallets">
                        <a>{t('footer:wallets', { defaultValue: 'Wallets' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/roadmap">
                        <a>{t('footer:roadmap', { defaultValue: 'Roadmap' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/p2p-solutions">
                        <a>{t('footer:p2p_solutions', { defaultValue: 'P2P Solutions' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.developers', { defaultValue: 'DEVELOPERS' } )}</h4>
                    </li>
                    <li>
                      <Link href="/developers/how-to-install-rubygems">
                        <a>{t('footer:how_to_install_rubygems', { defaultValue: 'How to install RubyGems' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/github-desktop">
                        <a>{t('footer:github_desktop', { defaultValue: 'GitHub Desktop' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/our-github-repositories">
                        <a>{t('footer:our_github_repositories', { defaultValue: 'Our GitHub repositories' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/php-library-for-verge-wallet">
                        <a>{t('footer:php_library_for_verge_wallet', { defaultValue: 'PHP Library for Verge wallet' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/developers/ruby-wrapped-gem">
                        <a>{t('footer:ruby_wrapped_gem', { defaultValue: 'Ruby wrapped gem' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/developers">
                        <a>{t('footer:click_to_see_more', { defaultValue: 'Click to see more' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.community', { defaultValue: 'COMMUNITY' } )}</h4>
                    </li>
                    <li>
                      <Link href="/community/developers">
                        <a>{t('footer:developers', { defaultValue: 'Developers' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/contributers">
                        <a>{t('footer:contributers', { defaultValue: 'Contributers' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/donate">
                        <a>{t('footer:donate', { defaultValue: 'Donate' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/social">
                        <a>{t('footer:social', { defaultValue: 'Social' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/community/get-involved">
                        <a>{t('footer:get_involved', { defaultValue: 'Get involved' } )}</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="col-xs-6 col-sm-3">
                  <ul>
                    <li>
                      <h4>{t('footer:subheading.verge_core', { defaultValue: 'VERGE CORE' } )}</h4>
                    </li>
                    <li>
                      <Link href="/our-team">
                        <a>{t('footer:our_team', { defaultValue: 'Our team' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/about-us">
                        <a>{t('footer:about_us', { defaultValue: 'About us' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/history">
                        <a>{t('footer:history', { defaultValue: 'History' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/send-an-email">
                        <a>{t('footer:send_an_email', { defaultValue: 'Send an email' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/presskit">
                        <a>{t('footer:press', { defaultValue: 'Press' } )}</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        <a>{t('footer:faq', { defaultValue: 'FAQ' } )}</a>
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
              <Link href="/">
                <a>
                  <svg version="1.1" viewBox="0 0 1907 365" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(16 14)">
                        <polygon transform="translate(140 188.5) rotate(180) translate(-140 -188.5)" points="140 40 280 337 0 337" fill="#00CBFE"/>
                        <polygon transform="translate(140 148.5) rotate(180) translate(-140 -148.5)" points="140 0 280 297 -5.6843e-14 297" fill="#BFBFBF"/>
                        <polygon transform="translate(140 168.5) rotate(180) translate(-140 -168.5)" points="140 40 261.2 297 18.798 297" fill="#0098BF"/>
                      </g>
                      <path d="m600.46 54.887h22.33l-110.04 294.11h-18.105l-109.64-294.11h21.928l74.031 200.17c11.266 30.176 18.843 52.841 22.732 67.996 2.6823-10.059 7.9798-25.683 15.893-46.873l80.871-221.29zm300.05 294.11h-160.74v-294.11h160.74v18.91h-140.22v111.25h132.37v18.91h-132.37v126.13h140.22v18.91zm162.45-128.15v128.15h-20.52v-294.11h70.008c36.479 0 63.436 6.7392 80.871 20.218 17.435 13.479 26.152 33.763 26.152 60.854 0 19.715-5.1969 36.345-15.591 49.891-10.394 13.546-26.186 23.269-47.376 29.17l79.865 133.98h-24.543l-75.842-128.15h-73.025zm0-17.703h56.127c24.811 0 44.057-5.5322 57.736-16.597 13.68-11.065 20.52-27.393 20.52-48.985 0-22.397-6.7057-38.692-20.117-48.885-13.412-10.193-35.272-15.289-65.582-15.289h-48.684v129.76zm415.32-2.4141h108.43v134.18c-28.432 12.07-60.418 18.105-95.959 18.105-46.404 0-81.977-13.11-106.72-39.329-24.744-26.22-37.116-63.335-37.116-111.35 0-29.908 6.1357-56.429 18.407-79.563 12.272-23.135 29.84-41.005 52.707-53.612 22.867-12.607 49.119-18.91 78.759-18.91 32.054 0 60.821 5.901 86.303 17.703l-8.248 18.508c-25.482-11.802-51.902-17.703-79.262-17.703-38.759 0-69.505 11.97-92.237 35.909-22.733 23.94-34.099 56.227-34.099 96.864 0 44.258 10.796 77.552 32.389 99.882 21.593 22.33 53.31 33.495 95.154 33.495 27.091 0 50.092-3.8222 69.002-11.467v-103.4h-87.51v-19.312zm418.34 148.26h-160.74v-294.11h160.74v18.91h-140.22v111.25h132.37v18.91h-132.37v126.13h140.22v18.91z" fill="#000"/>
                    </g>
                  </svg>
                </a>
              </Link>
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
);

export default Footer;
