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
    done: true,
    doneDate: '31st Jan 2020',
    title: 'Electrum mnemonic sweeping',
    description: 'Mnemonic sweeping is being implemented for Electrum wallets',
    progress: 100,
    progressState: ''
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
  },
  {
    done: true,
    doneDate: '7th February 2021',
    title: 'Verge Currency Business Portal',
    description: 'We have now released a business oriented portal, with the information you need to get up and running accepting Verge!',
    progress: 100,
    progressState: '',
    infoLabel: 'Website Link',
    infoUrl: 'https://vergecurrency.business'
  },
  {
    done: true,
    doneDate: '18th March 2021',
    title: 'MyVergies moves to stable release 1.0.0',
    description: 'MyVergies is a lite desktop client for Verge, created by SwenVanZanten, that has tor built-in!',
    progress: 100,
    progressState: '',
    infoLabel: 'Github Releases Page',
    infoUrl: 'https://github.com/vergecurrency/MyVergies/releases'
  },
  {
    done: true,
    doneDate: '11th April 2021',
    title: 'Electrum 4.0.3 released',
    description: 'Now available - Please note: requires Tor to be installed',
    progress: 100,
    progressState: '',
    infoLabel: 'Github Releases Page',
    infoUrl: 'https://github.com/vergecurrency/electrum/releases/latest'
  },
  {
    done: true,
    doneDate: '15th May 2021',
    title: 'Verge Currency launches ambassador program!',
    description: 'Verge Currency launches ambassador program!',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/verge-ambassador-program-dfe1f92a480f'
  },
  {
    done: true,
    doneDate: '25th May 2021',
    title: 'Lewis Neal is Fueled by Verge!',
    description: 'American Football player from North Carolina, Lewis Neal, joins the Fueled by Verge movement',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/lewis-neal-is-fueled-by-verge-93959b82106b'
  },
  {
    done: true,
    doneDate: '1st June 2021',
    title: 'Reggie Calhoun Jr and RPA College join Fueled by Verge',
    description: 'Reggie Calhoun Jr. is creating the next generation of athletes, Fueled by Verge!',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/rpa-college-is-fueled-by-verge-316555ad937d'
  },
  {
    done: true,
    doneDate: '4th June 2021',
    title: 'Binance adds USDT pairing for XVG',
    description: 'Now you can finally trade with the XVG-USDT pair on Binance!',
    progress: 100,
    progressState: '',
    infoLabel: 'Binance Announcement',
    infoUrl: 'https://www.binance.com/en/support/announcement/32569413cb7e400f8a25514fbdb37d4d'
  },
  {
    done: true,
    doneDate: '5th June 2021',
    title: 'NOWPayments enables mass payments - use Verge Currency to enable payrolls, send out salaries and rebates, instantly!',
    description: 'NOWPayments enables mass payments - use Verge Currency for rebates, freelance commissions, affiliate rewards, employee payrolls, or any other type of mass payment – easy as pie!',
    progress: 100,
    progressState: '',
    infoLabel: 'Twitter Link',
    infoUrl: 'https://twitter.com/NOWPayments_io/status/1401099066990383106'
  },
  {
    done: true,
    doneDate: '8th June 2021',
    title: 'Malik Williams joins Fueled by Verge',
    description: 'Malik Williams joins Fueled By Verge at the start of his NFL journey, after a stellar College career as Running Back!',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/fueled-by-verge-adding-to-our-roster-2642c9f60e65'
  },
  {
    done: true,
    doneDate: '15th June 2021',
    title: 'Devastating car crash survivor Vikram Jeet Singh Parmar joins Fueled By Verge',
    description: 'The inspirational Vikram Jeet Singh Parmar, an experienced climber, joins Fueled By Verge as he prepares to traverse the Seven Summits of the World.',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/7-continents-7-highest-summits-7-highest-volcanoes-plus-the-north-pole-and-south-pole-7498ee29167b'
  },
  {
    done: true,
    doneDate: '24th June 2021',
    title: 'MMA Fighter signs with Fueled By Verge to push awareness of Verge Currency $XVG through Combat Sports',
    description: 'The 115lb pocket dynamo, Reena Norville, signs with Fueled By Verge to push awareness of Verge Currency $XVG through MMA',
    progress: 100,
    progressState: '',
    infoLabel: 'EIN PressWire Media Release',
    infoUrl: 'https://www.einpresswire.com/article/544433405/mma-fighter-signs-with-fueled-by-verge-to-push-awareness-of-verge-currency-xvg-through-combat-sports'
  },
  {
    done: true,
    doneDate: '26th June 2021',
    title: 'Mint and trade NFTs with Verge Currency on Libra.Codes',
    description: 'You can now mint and trade NFTs using Verge Currency on Libra.Codes!',
    progress: 100,
    progressState: '',
    infoLabel: 'Twitter Link',
    infoUrl: 'https://twitter.com/libracodes/status/1408458418801680388'
  },
  {
    done: true,
    doneDate: '29th June 2021',
    title: 'rLoop enters into a MOU with Verge Currency and Voice Life Inc',
    description: 'Verge, rLoop and Voice Life will work collectively on expanding Voice Life\'s Far Field Wireless Charging Platform.',
    progress: 100,
    progressState: '',
    infoLabel: 'EIN PressWire Media Release',
    infoUrl: 'https://www.einpresswire.com/article/544689173/clean-limitless-continuous-power-to-be-built-using-blockchain-on-a-far-field-wireless-charging-platform'
  },
  {
    done: true,
    doneDate: '13th July 2021',
    title: 'Motocross race winners paid in $XVG, through Fueled By Verge․',
    description: 'Motocross race winners paid in $XVG, through Fueled By Verge․ Another first for Crypto and Verge Currency.',
    progress: 100,
    progressState: '',
    infoLabel: 'EIN PressWire Media Release',
    infoUrl: 'https://www.einpresswire.com/article/546167442/cryptocurrency-makes-huge-step-into-motocross-by-paying-winners-in'
  },
  {
    done: true,
    doneDate: '22nd July 2021',
    title: '$XVG enters MOU with Travel Booking Giant Travala.com',
    description: 'The Collaboration is intended to bring a large offering of travel options to the Verge Currency ($XVG) community, while expanding the userbase of Travala.com offerings.',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/digital-currency-enters-mou-with-travel-booking-giant-5125ddc0013b'
  },
  {
    done: true,
    doneDate: '30th July 2021',
    title: 'Wyatt Hasil joins Fueled by Verge (FBV)',
    description: '11X Canadian Motocross Champion joins Fueled By Verge (FBV).',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/11x-canadian-motocross-champion-joins-fueled-by-verge-fbv-2c8596cf4596'
  },
  {
    done: true,
    doneDate: '9th August 2021',
    title: '$XVG is live on Travel Booking Giant Travala.com',
    description: 'Book at over 2,200,000+ properties, 400,000+ activities in 230 countries and 600 airlines globally.',
    progress: 100,
    progressState: '',
    infoLabel: 'Travala.com Website',
    infoUrl: 'https://www.travala.com/'
  },
  {
    done: true,
    doneDate: '27th August 2021',
    title: 'Jayden Riley Joins Fueled by Verge',
    description: 'Motocross racer joins National Foundation to bring awareness to digital currency and blockchain.',
    progress: 100,
    progressState: '',
    infoLabel: 'EIN PressWire Media Release',
    infoUrl: 'https://www.einpresswire.com/article/549838471/motocross-racer-joins-national-foundation-to-bring-awareness-to-digital-currency-and-blockchain'
  },
  {
    done: true,
    doneDate: '7th September 2021',
    title: '$XVG can now be used on Binance Pay',
    description: 'Binance Pay allows users to send, spend and receive cryptocurrency with zero fees and lightning fast payments, making it an accessible and effortless way of transacting value worldwide.',
    progress: 100,
    progressState: '',
    infoLabel: 'Medium Article',
    infoUrl: 'https://medium.com/vergecurrency/hot-off-the-heels-of-binance-partner-travala-com-listing-xvg-gets-welcomed-into-binance-pay-59e5693102a5'
  },
  {
    done: true,
    doneDate: '9th September 2021',
    title: 'Tokocrypto adds $XVG to their platform',
    description: '#1 Crypto Exchange in Indonesia added support for $XVG.',
    progress: 100,
    progressState: '',
    infoLabel: 'Twitter Link',
    infoUrl: 'https://twitter.com/vergecurrency/status/1435962472503054339/'
  },
  {
    done: true,
    doneDate: '9th September 2021',
    title: 'Kriptomat adds $XVG to their platform',
    description: '$XVG is now listed on Kriptomat, one of Estonian largest cryptocurrency exchanges.',
    progress: 100,
    progressState: '',
    infoLabel: 'Kriptomat Page',
    infoUrl: 'https://kriptomat.io/verge-xvg-price/'
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
