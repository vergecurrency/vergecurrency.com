import React from 'react';
import ActiveLink from './ActiveLink';

export default () => (
  <div className="col-sm-offset-1 col-sm-3 sidebar pt">
    {/* <span className="spaced">Guides</span>
    <ul>
      <li><ActiveLink href="/guides/introduction">Introduction</ActiveLink></li>
      <li><ActiveLink href="/guides/getting-started">Getting started</ActiveLink></li>
      <li><ActiveLink href="/guides/how-to-buy-verge">How to buy Verge</ActiveLink></li>
      <li><ActiveLink href="/guides/what-is-verge">What is Verge?</ActiveLink></li>
      <li><ActiveLink href="/guides/verge-on-your-website">Verge on your website</ActiveLink></li>
    </ul> */}
    <span className="spaced">FAQ</span>
    <ul>
      <li><ActiveLink href="/faq">General</ActiveLink></li>
      <li><ActiveLink href="/faq/privacy">Privacy</ActiveLink></li>
      <li><ActiveLink href="/faq/wallets">Wallets</ActiveLink></li>
      <li><ActiveLink href="/faq/mining">Mining</ActiveLink></li>
      <li><ActiveLink href="/faq/legal">Legal</ActiveLink></li>
    </ul>
    <span className="spaced">P2P</span>
    <ul>
      <li><ActiveLink href="/p2p">Telegram Bot Manual</ActiveLink></li>
      <li><ActiveLink href="/p2p/twitter-bot">Twitter Bot Manual</ActiveLink></li>
      <li><ActiveLink href="/p2p/discord-bot">Discord Bot Manual</ActiveLink></li>
    </ul>
    <span className="spaced">Developers</span>
    <ul>
      <li><ActiveLink href="/developers">How to install RubyGems</ActiveLink></li>
      <li><ActiveLink href="/developers/github-desktop">GitHub Desktop</ActiveLink></li>
      <li><ActiveLink href="/developers/vergecurrency-repositories">Our GitHub repositories</ActiveLink></li>
      <li><ActiveLink href="/developers/verge-vendor-integration">Verge Vendor integration</ActiveLink></li>
      <li><ActiveLink href="/developers/wallet-setup-instructions">Wallet setup instructions</ActiveLink></li>
    </ul>
  </div>
);
