import RadialProgress from '../components/RadialProgress';

/*
    Add milestones oldest to newest - they will display NEWEST to OLDEST.
*/

const mileStones = [
  {
    done: true,
    doneDate: '1st January 2018',
    title: 'Core Wallet 4.0 Release Stage 2',
    description: 'Tor Integration & Optional Stealth Addressing',
    progress: 100,
    progressState: '',
  },
  {
    done: true,
    doneDate: '24th March 2018',
    title: 'New website',
    description: 'New look, guides, list of official core members, blog with official news, mobile friendly',
    progress: 100,
    progressState: '',
  },
  {
    done: true,
    doneDate: '9th June 2018',
    title: 'First Verge Meetup',
    description: 'First verge meetup in Amsterdam, Netherlands',
    progress: 100,
    progressState: '',
    infoLabel: 'Verge Meetup 2018',
    infoUrl: 'https://vergecurrency.com/meetup-2018'
  },
  {
    done: true,
    doneDate: '24th June 2018',
    title: 'Mining Update',
    description: 'XVGui Miner for Windows',
    progress: 100,
    progressState: '',
  },
  {
    done: true,
    doneDate: '17th January 2019',
    title: 'BlackPaper Version 5.0',
    description: '5th revision of the BlackPaper',
    progress: 100,
    progressState: '',
    infoLabel: 'Verge Currency BlackPaper',
    infoUrl: 'https://vergecurrency.com/static/blackpaper/verge-blackpaper-v5.0.pdf'
  },
  {
    done: true,
    doneDate: '11th April 2019',
    title: 'Merchandise Online Store',
    description: 'Verge branded apparel that can be purchased with XVG and BTC.',
    progress: 100,
    progressState: '',
    infoLabel: 'Verge Currency Store',
    infoUrl: 'https://vergecurrency.store'
  },
  {
    done: true,
    doneDate: '23rd April 2019',
    title: 'Official iOS wallet',
    description: 'iOS wallet with full-fledged feature set like a normal wallet.',
    progress: 100,
    progressState: 'Released',
    infoLabel: 'Verge Currency Tor Wallet (App Store)',
    infoUrl: 'https://itunes.apple.com/us/app/id1459928869'
  },
  {
    done: true,
    doneDate: '16th May 2019',
    title: 'Rebased Codebase',
    description: 'Rebasing the entire codebase to include the newest standards shared by bitcoin.',
    progress: 100,
    progressState: 'Released',
    infoLabel: 'Windows Tor QT Wallet (GitHub)',
    infoUrl: 'https://github.com/vergecurrency/VERGE/releases/latest'
  },
  {
    done: true,
    doneDate: '25th May 2019',
    title: 'Second Verge Meetup',
    description: 'Second verge meetup in Rotterdam, Netherlands',
    progress: 100,
    progressState: '',
    infoLabel: 'Verge Meetup 2019',
    infoUrl: 'https://vergecurrency.com/meetup-2019'
  },
  {
    done: true,
    doneDate: '5th Jun 2019',
    title: 'XcelTrip Partnership',
    description: 'Anyone with Verge Currency can spend it to book from over 800,000 hotels, over 300 airlines, across 200 countries.',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release (Medium)',
    infoUrl: 'https://medium.com/vergecurrency/verge-currency-can-be-used-to-book-from-over-800-00-hotels-across-the-globe-9b4e7fd6c152'
  },
  {
    done: true,
    doneDate: '5th Jun 2019',
    title: 'XcelPay Partnership',
    description: 'XcelPay allows for any retailers and merchants to integrate payments with Verge through XcelPay PoS (Point of Sale) systems.',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release (Medium)',
    infoUrl: 'https://medium.com/vergecurrency/verge-currency-can-be-used-to-book-from-over-800-00-hotels-across-the-globe-9b4e7fd6c152'
  },
  {
    done: true,
    doneDate: '7th Jun 2019',
    title: 'iOS Wallet Update v1.1.1',
    description: 'New stuff! Moon mode, 13 languages, new logo, new send & receive cards, new Tor status indicators...',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '14th Jun 2019',
    title: 'XVG Added to Abra',
    description: 'Abra adds Verge Withdrawals to their platform',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '14th Jun 2019',
    title: 'XVG added to NowPayments',
    description: 'NowPayments & NowNodes integrate Verge',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '21st Jun 2019',
    title: 'Verge Telescope Alpha',
    description: 'Verge Telescope - Alpha Release (Block explorer)',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '3rd Jul 2019',
    title: 'Blockchain BizMag first mentions Verge',
    description: 'The first time Verge was mentioned in Blockchain BizMag',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '5th Jul 2019',
    title: 'XVG Android Wallet - Moon Mode',
    description: 'Android Wallet Moon Mode implemented (pre-release)',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '12th Jul 2019',
    title: 'Verge Zendesk Implemented',
    description: 'Verge implements Zendesk as their self-service knowledgebase',
    progress: 100,
    progressState: '',
    infoLabel: 'Verge Zendesk',
    infoUrl: 'https://verge.zendesk.com/hc/en-us'
  },
  {
    done: true,
    doneDate: '12th Jul 2019',
    title: 'Boardworld integrates Verge',
    description: 'Boardworld, a leading Australian snow/skate/surf retailer, integrates Verge as a payment option',
    progress: 100,
    progressState: '',
    infoLabel: 'BoardWorld',
    infoUrl: 'https://www.boardworld.com.au/pay-with-crypto'
  },
  {
    done: true,
    doneDate: '19th Jul 2019',
    title: 'Android Wallet integrates wallet pins & CircleCI',
    description: 'CircleCI testing has been implemented on the Android Wallet Codebase to ensure quality builds, and the wallet now supports PIN security.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '2nd Aug 2019',
    title: 'Miners migrated from v4 to latest codebase.',
    description: 'Miners are now operating on the latest codebase, now it has been thoroughly tested and has proven to be stable.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '2nd Aug 2019',
    title: 'iOS wallet surpasses 5K downloads',
    description: 'The Verge iOS Wallet has now surpassed 5,000 downloads!',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '5th Aug 2019',
    title: 'Paycent announces Partnership',
    description: 'XVG is now available as a source of funding to Paycent\'s crypto-fiat cards, which are used globally.',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release (Medium)',
    infoUrl: 'https://medium.com/@paycent/verge-xvg-can-now-be-used-globally-with-paycent-fe649ab2771d'
  },
  {
    done: true,
    doneDate: '7th Aug 2019',
    title: 'Ganja.com Partnership',
    description: 'Discretely and privately purchase Ganja.com CBD products with Verge Currency.',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release (Medium)',
    infoUrl: 'https://medium.com/vergecurrency/verge-partners-with-ganja-com-24387302e890'
  },
  {
    done: true,
    doneDate: '30th Aug 2019',
    title: 'iOS Update v1.2.0',
    description: 'Added Mars mode theme, changed application icon, added the ability to hide balances on screen, introduced paper wallet sweeping and iOS 13 compatiblity.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '30th Aug 2019',
    title: 'Verge Core Updates',
    description: 'Progressive improvements, added dns seeds, mining templates. import/export, rpc functions, new logo and more',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '30th Aug 2019',
    title: 'Android Wallet',
    description: 'Development update - Added changeable VWS Services URLs, PIN feature, UX improvements..',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '6th Sep 2019',
    title: 'More exchanges, more choice',
    description: 'Verge was added to EviEx and Bitnovo Exchanges',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '1st Oct 2019',
    title: 'Ellipal Hardware Integration Complete',
    description: 'The code required to support Verge XVG on your Ellipal device has now been released.',
    progress: 100,
    progressState: '',
    infoLabel: 'Ellipal Firmware update',
    infoUrl: 'https://www.ellipal.com/pages/update-ellipal-hardware-wallet'
  },
  {
    done: true,
    doneDate: '2nd Oct 2019',
    title: 'Halving Schedule Adjustments',
    description: 'Code to support changes to the Verge halving schedule',
    progress: 100,
    progressState: '',
    infoLabel: 'GitHub Pull',
    infoUrl: 'https://github.com/vergecurrency/VERGE/pull/904'
  },
  {
    done: true,
    doneDate: '4th Oct 2019',
    title: 'Prodoge Lists Verge',
    description: 'Verge has now been listed on Prodoge.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '11th Oct 2019',
    title: 'Verge Core v6.0.0 Released',
    description: 'Halving schedule adjusted, added new halvings to the “GetBlockSubsidy”, adjusted the test for the GetBlockSubsidy function, raised the protocol version...',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '15th Oct 2019',
    title: 'Voyager Lists Verge',
    description: 'Verge XVG is now available via Voyager.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '25th Oct 2019',
    title: 'Verge Docker Images Released',
    description: 'Verge Core, Bitcore, Price Ticker API, IP API docker images are now available.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '29th October 2019',
    title: 'Partnership Announcement - The Manny Pacquiao Foundation',
    description: 'The Manny Pacquiao Foundation seeks to empower communities and individuals through charitable support and a message of hope and change...',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release',
    infoUrl: 'https://pacquiaofoundation.org/news/'
  },
  {
    done: true,
    doneDate: '2nd Nov 2019',
    title: 'Atomic Wallet Partnership',
    description: 'Verge is now added to the list of assets you can manage via Atomic, reducing your effort spent on managing crypto assets.',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '14th Nov 2019',
    title: 'Abra adds Verge',
    description: 'Abra enables direct deposit and withdrawal of Verge',
    progress: 100,
    progressState: ''
  },
  {
    done: true,
    doneDate: '31st Jan 2020',
    title: 'ElectrumX + ElectrumV4 public testing',
    description: 'ElectrumX + ElectrumV4 are now available for public testing',
    progress: 100,
    progressState: ''
  },
  {
    done: false,
    doneDate: '31st Jan 2020',
    title: 'Electrum mnemonic sweeping',
    description: 'Mnemonic sweeping is being implemented for Electrum wallets',
    progress: 70,
    progressState: 'In Progress'
  },
  {
    done: true,
    doneDate: '11th Feb 2020',
    title: 'Binance enables direct conversion',
    description: 'Now available via Binance\'s Crypto Assets Convert Function',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release',
  infoUrl: 'https://www.binance.com/en/support/articles/360039265392'
  },
  {
    done: true,
    doneDate: '15th April 2020',
    title: 'iOS Update v1.3.2',
    description: 'update to the Verge iOS app',
    progress: 100,
    progressState: '',
    infoLabel: 'Apple App Store',
    infoUrl: 'https://apps.apple.com/us/app/verge-currency-tor-wallet/id1459928869'
  },
  {
    done: true,
    doneDate: '21st April 2020',
    title: 'XVGD - Go Verge Node!',
    description: 'xvgd is a full node verge implementation written in Go (golang)',
    progress: 100,
    progressState: '',
    infoLabel: 'Github Repository',
    infoUrl: 'https://github.com/vergecurrency/xvgd'
  },
  {
    done: true,
    doneDate: '21st May 2020',
    title: 'Partnership Announcement - MeconCash',
    description: 'Verge Currency is now accepted on all 13,000 MeconCash ATM\'s in Korea...',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release (Medium)',
    infoUrl: 'https://medium.com/vergecurrency/verge-meconcash-press-release-cc17678d68cd'
  },
  {
    done: true,
    doneDate: '11th June 2020',
    title: 'Partnership Announcement - MobiePay',
    description: 'MobiePay is a universal payment ecosystem that provides a mechanism for users to spend or transfer fiat and cryptocurrency instantly from their mobile phone, to merchants or other users.',
    progress: 100,
    progressState: '',
    infoLabel: 'Press Release (Medium)',
    infoUrl: 'https://medium.com/vergecurrency/verge-currency-and-mobiepay-team-up-8f58f1d33853'
  },
  {
    done: true,
    doneDate: '30th July 2020',
    title: 'Public Beta for MyVergies',
    description: 'MyVergies is a lite desktop client for Verge, created by SwenVanZanten, that has tor built-in!.',
    progress: 100,
    progressState: '',
    infoLabel: 'Github Releases Page',
    infoUrl: 'https://github.com/vergecurrency/MyVergies/releases'
  },
  {
    done: true,
    doneDate: '5th August 2020',
    title: 'Trezor firmware implementation',
    description: 'Verge implementation into Trezor firmware',
    progress: 100,
    progressState: '',
    infoLabel: 'Github Releases Page',
    infoUrl: 'https://github.com/trezor/trezor-firmware/pull/1165'
  },
  {
    done: true,
    doneDate: '25th August 2020',
    title: 'VergeCurrency.Exchange launched',
    description: 'ChangeNow launches VergeCurrency.Exchange',
    progress: 100,
    progressState: '',
    infoLabel: 'Exchange Website',
    infoUrl: 'https://vergecurrency.exchange'
  },
  {
    done: true,
    doneDate: '14th September 2020',
    title: 'Updated Verge Android Wallet App',
    description: 'Verge Android Wallet updated and open sourced',
    progress: 100,
    progressState: '',
    infoLabel: 'Google Play',
    infoUrl: 'https://play.google.com/store/apps/details?id=com.vergepay.wallet'
  },
  {
    done: true,
    doneDate: '15th December 2020',
    title: 'NFC Payment Capabilities added',
    description: 'iOS wallet now supports NFC payment, enabling users to pay POS merchants easily.',
    progress: 100,
    progressState: 'Released',
    infoLabel: 'Verge Currency Tor Wallet (App Store)',
    infoUrl: 'https://apps.apple.com/app/id1459928869'
  },
  {
    done: true,
    doneDate: '22nd December 2020',
    title: 'Voice Life and Verge Currency announce strategic alliance',
    description: 'Voice Life and Verge Currency announce a strategic alliance to create a new all-in-one payment system - unveiling on January 11, 2021 at the Consumer Electronics Show (CES)',
    progress: 100,
    progressState: 'Released',
    infoLabel: 'Cision PR Newswire Press Release',
    infoUrl: 'https://www.prnewswire.co.uk/news-releases/voice-life-charges-into-the-future-with-verge-currency-xvg-and-vergepay-870303997.html'
  }
  // {
  //   done: true or false,
  //   doneDate: 'Relevant Date',
  //   title: 'Title goes here',
  //   description: 'A longer description',
  //   progress: 100 or whatever %,
  //   progressState: 'If not done, what is the status',
  //   infoLabel: 'Text label for the link',
  //   infoUrl: 'optional - use full url'
  // },
];

export default ({ start = 0, maxLength = mileStones.length }) =>
  mileStones.slice(start, start + maxLength).reverse().map(mapItem => (
    <li
      className={`roadmap__item roadmap__item--${
        mapItem.done ? 'done' : 'planned'
      }`}
    >
      <h3>{mapItem.title}</h3>
      {mapItem.description}
      <br />
      {mapItem.done ? (
        <div className="roadmap-update-progress">
          <span>Announced</span>{' '}
          <div className="progress progress-text">{mapItem.doneDate}</div>
        </div>
      ) : (
        <RadialProgress
          percentage={mapItem.progress}
          text={mapItem.progressState}
        />
      )}
      {mapItem.infoUrl && (
        <div className="roadmap-update-progress">
          <span>More Info</span>{' '}
          <div className="progress progress-text"><a target="_blank" href={mapItem.infoUrl}>{mapItem.infoLabel}</a></div>
        </div>
      )}
    </li>
  ));
