import RadialProgress from '../components/RadialProgress';

const roadMap = [
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
    description:
      'New look, guides, updated roadmap, list of official core members, blog with official news, mobile friendly',
    progress: 100,
    progressState: '',
  },
  {
    done: true,
    doneDate: '9th June 2018',
    title: 'First Verge Meetup',
    description: 'First verge meetup in Netherlands, Amsterdam',
    progress: 100,
    progressState: '',
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
  },
  {
    done: true,
    doneDate: '11th April 2019',
    title: 'Merchandise Online Store',
    description:
      'Verge branded apparel that can be purchased with XVG and BTC.',
    progress: 100,
    progressState: 'https://vergecurrency.store',
  },
  {
    done: true,
    doneDate: '23rd April 2019',
    title: 'Official iOS wallet',
    description:
      'iOS wallet with full-fledged feature set like a normal wallet.',
    progress: 100,
    progressState: 'Released',
  },
  {
    done: true,
    doneDate: '16th May 2019',
    title: 'Rebased Codebase',
    description:
      'Rebasing the entire codebase to include the newest standards shared by bitcoin.',
    progress: 100,
    progressState: 'Released',
  },
  {
    done: true,
    doneDate: '25th May 2019',
    title: 'Second Verge Meetup',
    description: 'Second verge meetup in Netherlands, Rotterdam',
    progress: 100,
    progressState: '',
  },
  {
    done: false,
    doneDate: '',
    title: 'Desktop Wallet',
    description:
      'Electron based wallet with better performance and minimalistic UI design',
    progress: 85,
    progressState: 'Preparing release',
  },
  {
    done: false,
    doneDate: '',
    title: 'RingCT Integration',
    description:
      'Ring Confidential Transactions - advanced masking of transaction amounts',
    progress: 45,
    progressState: 'Work in progress',
  },
  {
    done: false,
    doneDate: '',
    title: 'RSK',
    description: 'RSK Smart Contract Integration',
    progress: 25,
    progressState: 'Investigating integration',
  },
  {
    done: false,
    doneDate: '',
    title: 'Official Android wallet update',
    description:
      'Freshly redesigned wallet to match our corporate design and feature set.',
    progress: 30,
    progressState: 'Work in progress',
  },
  {
    done: false,
    doneDate: '',
    title: 'iOS wallet 1.1.0',
    description:
      'Add Moon Mode and 12 langauges.',
    progress: 50,
    progressState: 'Work in progress',
  },
];

export default ({ start = 0, maxLength = roadMap.length }) =>
  roadMap.slice(start, start + maxLength).map(mapItem => (
    <li
      className={`roadmap__item roadmap__item--${
        mapItem.done ? 'done' : 'planned'
      }`}
    >
      <h3>{mapItem.title}</h3>
      {mapItem.description} <br />
      {mapItem.done ? (
        <div className="roadmap-update-progress">
          <span>Released</span>{' '}
          <div className="progress progress-text">{mapItem.doneDate}</div>
        </div>
      ) : (
        <RadialProgress
          percentage={mapItem.progress}
          text={mapItem.progressState}
        />
      )}
    </li>
  ));
