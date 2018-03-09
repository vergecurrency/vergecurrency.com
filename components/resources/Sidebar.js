import React from 'react';
import ActiveLink from './ActiveLink';

export default () => (
  <div className="col-sm-offset-1 col-sm-2 sidebar pt">
    <span className="spaced">Guides</span>
    <ul>
      <li><ActiveLink href="/guides/introduction">Introduction</ActiveLink></li>
      <li><ActiveLink href="/guides/getting-started">Getting started</ActiveLink></li>
      <li><ActiveLink href="/guides/how-to-buy-verge">How to buy Verge</ActiveLink></li>
      <li><ActiveLink href="/guides/what-is-verge">What is Verge?</ActiveLink></li>
      <li><ActiveLink href="/guides/verge-on-your-website">Verge on your website</ActiveLink></li>
    </ul>
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
      <li><ActiveLink href="/p2p">Twitter Bot Manual</ActiveLink></li>
      <li><ActiveLink href="/p2p">Discord Bot Manual</ActiveLink></li>
    </ul>
  </div>
);
