import Link from 'next/link';

import Layout from '../components/Layout';
import Contributors from '../components/Contributors';

import fetch from 'isomorphic-unfetch';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const About = function (props) {
  const { t } = props;

  return (
    <Layout>
      <div className="about">
        <div className="ribbon ribbon--about">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>Meet the Verge Team</h1>
                  <p>The grassroots culture is what makes Verge<br />unique and dynamic.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro pt-lg pb-lg">
          <div className="row center-xs middle-xs">
            <div className="col-sm-6">
              {/* <span class="spaced">Delivers what others can't</span> */}
              <h2>Verge Currency is a 100% open source project and the global Verge Community represents the man power driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place.</h2>
            </div>
          </div>
          <div className="row center-xs middle-xs">
            <div className="col-sm-5"><p>Below are just some of the most active community members who form the Core Team.</p></div>
          </div>
        </div>
        <div className="team pb-lg">
          <div className="row center-xs">
            <div className="col-sm-2">
              <div className="team--member">
                <img src="../static/img/team/sunerok.png" />
                <h3>Sunerok</h3>
                <span>Lead Developer</span>
                <p>Network security and blockchain expert</p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="team--member">
                <img src="../static/img/team/sunerok.png" />
                <h3>Sunerok</h3>
                <span>Lead Developer</span>
                <p>Network security and blockchain expert</p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="team--member">
                <img src="../static/img/team/sunerok.png" />
                <h3>Sunerok</h3>
                <span>Lead Developer</span>
                <p>Network security and blockchain expert</p>
              </div>
            </div>
            <div className="col-sm-2">
              <div className="team--member">
                <img src="../static/img/team/sunerok.png" />
                <h3>Sunerok</h3>
                <span>Lead Developer</span>
                <p>Network security and blockchain expert</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contributors">
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
              <div className="row">
                <div className="col-sm-8">
                  <h2>Want to contribute to Verge Currency? Join our community on Github</h2>
                  <p>Verge is open-source software that is constantly improving due to its many contributors. If you would like to contribute as well, take a look at our Github repositories to see where you could make a difference!</p>
                </div>
                <div className="col-sm-4 end-xs">
                  <a href="#" className="btn btn-tertiary btn-github">Go to verge repo</a>
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
  )
}

const Extended = translate(['common', 'about'], { i18n, wait: process.browser })(About);

export default Extended;
