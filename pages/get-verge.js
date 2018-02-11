import Link from 'next/link';

import Layout from '../components/Layout';
import Exchanges from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import { translate } from 'react-i18next';
import i18n from '../i18n';

const GetVerge = function (props) {
  const { t } = props;

  return (
    <Layout>
      <div className="get-verge pt-lg">
        <div className="container">
          <div className="row center-xs middle-xs pt pb">
            <div className="col-sm-6 col-xs-12">
              <span className="spaced">Get verge</span>
              <h2>Trade Verge on the most popular exchanges.
              We’re proud to be listed on</h2>
            </div>  
          </div>
          <Exchanges />
          <Cointicker />
        </div>
      </div>
    </Layout>
  )
}  

const Extended = translate(['home'], { i18n, wait: process.browser })(GetVerge);

export default Extended;
