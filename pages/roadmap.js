import Link from 'next/link';

import Layout from '../components/Layout';

const Roadmap = () => (
  <Layout>
    <div className="roadmap pt-lg">
      <div className="row pt-lg pb-lg">
        <div className="col-sm-8 col-sm-offset-4">
          <span className="spaced">Roadmap</span>
          <h2>
            A roadmap with great features to come.<br />
            Join us while we&apos;re still growing!
          </h2>
          <ul className="roadmap--timeline">
            <li className="done">
              <h3>&quot;Black&quot; Paper v3.0</h3>
              <span>Released</span> 4 June 2017
            </li>
            <li className="done">
              <h3>Test servers deployed</h3>
              <span>Released</span> 10 Aug 2017
            </li>
            <li className="planned">
              <h3>I2P Android Wallet</h3>
              Test servers <br />
              Anonymous mobile transactions over the I2P network
            </li>
          </ul>

          <h6>
            <Link href="/roadmap">
              <a href="/roadmap" className="spaced pt">Full roadmap here</a>
            </Link>
          </h6>
        </div>
      </div>
    </div>
  </Layout>
);

export default Roadmap;
