import React from 'react';
import ActiveLink from './ActiveLink';
import Link from 'next/link';

export default () => (
  <div className="sidebar pt-small pb-xs">
    {/* <h6>Guides</h6>
      <ul>
      <li><ActiveLink href="/guides/introduction">Introduction</ActiveLink></li>
      <li><ActiveLink href="/guides/getting-started">Getting started</ActiveLink></li>
      <li><ActiveLink href="/guides/how-to-buy-verge">How to buy Verge</ActiveLink></li>
      <li><ActiveLink href="/guides/what-is-verge">What is Verge?</ActiveLink></li>
      <li><ActiveLink href="/guides/verge-on-your-website">Verge on your website</ActiveLink></li>
    </ul> */}
    <h6>FAQ</h6>
    <ul>
      <li><ActiveLink href="/faq">General</ActiveLink></li>
      <li><ActiveLink href="/faq/privacy">Privacy</ActiveLink></li>
      <li><ActiveLink href="/faq/wallets">Wallets</ActiveLink></li>
      <li><ActiveLink href="/faq/mining">Mining</ActiveLink></li>
      <li><ActiveLink href="/faq/legal">Legal</ActiveLink></li>
    </ul>
    <h6>Community</h6>
    <ul>
      <li><ActiveLink href="/community/get-involved">Get involved</ActiveLink></li>
      {/* <li><ActiveLink href="/community/social">Social</ActiveLink></li> */}
      {/* <li><ActiveLink href="/donate">Donate</ActiveLink></li> */}
      <li><ActiveLink href="/community/xvg-mining-pools">Mining pools</ActiveLink></li>
      <li><ActiveLink href="/community/mining">How to mine?</ActiveLink></li>
    </ul>
    <h6>Developers</h6>
    <ul>
      <li><ActiveLink href="/developers">How to install RubyGems</ActiveLink></li>
      <li><ActiveLink href="/developers/github-desktop">GitHub Desktop</ActiveLink></li>
      <li><ActiveLink href="/developers/vergecurrency-repositories">Our GitHub repositories</ActiveLink></li>
      <li><ActiveLink href="/developers/wallet-setup-instructions">Wallet setup instructions</ActiveLink></li>
      <li>
        <Link href="https://github.com/vergecurrency/php-verge">
          <a href="https://github.com/vergecurrency/php-verge" rel="noopener noreferrer" target="_blank" style={{ color: 'rgb(51, 51, 51)' }}>PHP Library for Verge wallet</a>
        </Link>
      </li>
      <li>
        <Link href="https://github.com/vergecurrency/verge-ruby">
          <a href="https://github.com/vergecurrency/verge-ruby" rel="noopener noreferrer" target="_blank" style={{ color: 'rgb(51, 51, 51)' }}>Ruby wrapped gem for interacting with Verge wallet</a>
        </Link>
      </li>
      <li>
        <Link href="https://nownodes.io/nodes/verge-xvg">
          <a href="https://nownodes.io/nodes/verge-xvg" rel="noopener noreferrer" target="_blank" style={{ color: 'rgb(51, 51, 51)' }}>Use NOWNodes to get access to Verge Nodes and Explorer</a>
        </Link>
      </li>
    </ul>
  </div>
);
