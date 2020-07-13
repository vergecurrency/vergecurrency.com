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

  // Missing some stuff :)

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

  // Missing some stuff :)

  {
    done: true,
    doneDate: '21st May 2020',
    title: 'Partnership Announcement - MeconCash',
    description: 'Verge Currency is now accepted on all the 13 000 MeconCash ATM’s in Korea...',
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
