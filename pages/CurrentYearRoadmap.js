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
    done: false,
    doneDate: '',
    title: 'Merchandise Online Store',
    description:
      'Verge branded apparel that can be purchased with XVG and BTC.',
    progress: 95,
    progressState: 'finalizing design',
  },
  {
    done: false,
    doneDate: '',
    title: 'Mining Update',
    description: 'XVGui Miner for Windows, Official Mining Pool & Mining Guide',
    progress: 80,
    progressState: 'work in progress',
  },
  {
    done: false,
    doneDate: '',
    title: 'Rebased Codebase',
    description:
      'Rebasing the entire codebase to include the newest standards shared by bitcoin.',
    progress: 95,
    progressState: 'rebasing',
  },
  {
    done: false,
    doneDate: '',
    title: 'Desktop Wallet',
    description:
      'Electron based wallet with better performance and minimalistic UI design',
    progress: 85,
    progressState: 'preparing release',
  },
  {
    done: false,
    doneDate: '',
    title: 'RingCT Integration',
    description:
      'Ring Confidential Transactions - advanced masking of transaction amounts',
    progress: 45,
    progressState: 'integrating',
  },
  {
    done: false,
    doneDate: '',
    title: 'RSK',
    description: 'RSK Smart Contract Integration',
    progress: 25,
    progressState: 'investigating integration',
  },
  {
    done: false,
    doneDate: '',
    title: 'Official iOS wallet',
    description:
      'iOS wallet with full-fledged feature set like a normal wallet.',
    progress: 55,
    progressState: 'in public beta; development ongoing',
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
