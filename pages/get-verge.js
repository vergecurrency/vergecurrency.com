import Layout from '../components/Layout';
import Exchanges from '../components/Exchanges';
import Cointicker from '../components/Cointicker';
import Coinchart from '../components/Coinchart';
import { translate } from 'react-i18next';
import i18n from '../i18n';


function GetVerge() {
  return (
    <Layout>
      <div className="get-verge pt-large pb">
        <div className="container">
          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10">
              <h6>Get verge</h6>
              <h2 className="mb">Trade Verge on the most popular exchanges. We’re proud to be listed on</h2>

              <Exchanges />

              <Cointicker />
            </div>
          </div>

          <Coinchart />

          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10 col-sm-6">
              <h6>DELIVERS WHAT OTHERS CAN’T</h6>
              <h2>
                Verge uses multiple anonymity-centric networks such as TOR and I2P.
                The IP addresses of the users are fully obfuscated and
                transactions are completely untraceable.
              </h2>
              <p>We care about your privacy. Do you?</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['home'], { i18n, wait: process.browser })(GetVerge);

export default Extended;
