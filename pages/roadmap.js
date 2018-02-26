import Link from 'next/link';

import Layout from '../components/Layout';

const Roadmap = () => (
  <Layout>
    <div className="roadmap">
      <div className="themed-container--gray themed-container--gray--roadmap">
        <div className="container">
          <div className="row center-xs roadmap">
            <div className="col-xs-11 col-sm-8 col-lg-6 start-xs center-sm">
              <h6>Roadmap</h6>
              <h2>
                A roadmap with great features to come.<br />
                Join us while we&apos;re still growing!
              </h2>

              <div className="row start-xs center-sm pt">
                <div className="col-xs-10 col-xs-offset-2 col-sm-12 col-sm-offset-0 col-md-10 col-lg-9 start-xs">
                  <ul className="roadmap__timeline">
                    <li className="roadmap__year roadmap__year--previous">
                      <span>2017</span>
                    </li>
                    <li className="roadmap__item roadmap__item--done">
                      <h3>&quot;Black&quot; Paper v3.0</h3>
                      <span>Released</span> 4 June 2017
                    </li>
                    <li className="roadmap__item roadmap__item--done">
                      <h3>Core Wallet 3.0 Release Stage 1</h3>
                      Wallet UI Overhaul, VISP, Bloom Filters, Atomic Swaps Capability<br />
                      <span>Released</span> 4 June 2017
                    </li>
                    <li className="roadmap__item roadmap__item--done">
                      <h3>I2P Android Wallet</h3>
                      Anonymous mobile transactions over the I2P network
                    </li>
                    <li className="roadmap__year roadmap__year--current">
                      <span>2018</span>
                    </li>
                    <li className="roadmap__item roadmap__item--planned">
                      <h3>Mining Update</h3>
                      XVGui Miner, Official Mining Pool, Mining Guide
                    </li>
                    <li className="roadmap__item roadmap__item--planned">
                      <h3>I2P Android Wallet</h3>
                      Anonymous mobile transactions over the I2P network
                    </li>
                    <li className="roadmap__item roadmap__item--planned">
                      <h3>Mining Update</h3>
                      XVGui Miner, Official Mining Pool, Mining Guide
                    </li>
                    <li className="roadmap__year roadmap__year--next">
                      <span>2019</span>
                    </li>
                    <li className="roadmap__item roadmap__item--planned">
                      <h3>I2P Android Wallet</h3>
                      Anonymous mobile transactions over the I2P network
                    </li>
                    <li className="roadmap__item roadmap__item--planned">
                      <h3>Mining Update</h3>
                      XVGui Miner, Official Mining Pool, Mining Guide
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Roadmap;
