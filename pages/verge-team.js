import Link from 'next/link';

import Layout from '../components/Layout';
import Contributors from '../components/Contributors';
import Team from '../components/Team';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function VergeTeam() {
  return (
    <Layout>
      <div className="about">
        <div className="ribbon ribbon--about">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>Meet the Verge Team</h1>
                  <p>
                    The grassroots culture is what makes Verge <span className="hidden-xs"><br /></span>
                    unique and dynamic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro pt-large pb-large pb-xs-0">
          <div className="row center-xs middle-xs">
            <div className="col-xs-10 col-sm-6">
              <h2>
                Verge Currency is a 100% open source project
                and the global Verge Community represents the man power driving it forward.
                Verge is not a company, there was no ICO held upon
                the launch and no pre-mining took place.
              </h2>
              <p>
                Below are just some of the most active community members who form the Core Team.
              </p>
            </div>
          </div>
        </div>
        <div className="team pt-xs pb-large">
          <div className="row center-xs">
            <div className="col-xs-10 col-lg-8">
              <Team />
            </div>
          </div>
        </div>
        <div className="contributors">
          <div className="row center-xs">
            <div className="col-xs-10">
              <div className="row center-xs start-sm">
                <div className="col-xs-12 col-sm-8 col-lg-6 pb-small pb-xs-0">
                  <h2>
                    Want to contribute to Verge Currency? <span className="hidden-xs"><br /></span>
                    Join our community on Github
                  </h2>
                  <p>
                    Verge is open-source software that is constantly improving due
                    to its many contributors. If you would like to contribute as well,
                    take a look at our Github repositories to see where you could make a difference!
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6 end-xs">
                  <Link href="https://github.com/vergecurrency/VERGE">
                    <a href="https://github.com/vergecurrency/VERGE" target="_blank" rel="noopener noreferrer" className="btn btn-tertiary btn-github">Go to Verge repo</a>
                  </Link>
                </div>
                <div className="col-xs-12">
                  <Contributors />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'about'], { i18n, wait: process.browser })(VergeTeam);

export default Extended;
