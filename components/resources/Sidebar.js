import React from 'react';
import ActiveLink from './ActiveLink';

export default () => (
  <div className="col-sm-offset-1 col-sm-2 sidebar pt">
    <span className="spaced">Guides</span>
    <ul>
      <li><ActiveLink href="/resources/introduction">Introduction</ActiveLink></li>
      <li><ActiveLink href="/resources/getting-started">Getting started</ActiveLink></li>
      <li><ActiveLink href="/resources/how-to-buy-verge">How to buy Verge</ActiveLink></li>
      <li><ActiveLink href="/resources/what-is-verge">What is Verge?</ActiveLink></li>
      <li><ActiveLink href="/resources/verge-on-your-website">Verge on your website</ActiveLink></li>
    </ul>
    <span className="spaced">FAQ</span>
    <ul>
      <li><ActiveLink href="/resources/general">General</ActiveLink></li>
      <li><ActiveLink href="/resources/privacy">Privacy</ActiveLink></li>
      <li><ActiveLink href="/resources/mining">Mining</ActiveLink></li>
      <li><ActiveLink href="/resources/wallets">Wallets</ActiveLink></li>
      <li><ActiveLink href="/resources/legal">Legal</ActiveLink></li>
    </ul>
  </div>
);
