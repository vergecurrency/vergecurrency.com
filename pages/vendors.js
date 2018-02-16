import Link from 'next/link';

import Layout from '../components/Layout';
import Vendors from '../components/Vendors';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const VendorsPage = (props) => {
  const { t } = props;
  return(
    <Layout>
      <div className="vendors">
        <div className="intro pt-lg pb-lg">
          <div className="row center-xs middle-xs">
            <div className="col-sm-6">
              <span className="spaced">Vendors using Verge</span>
              <h2>Vendors proudly accept Verge Currency as a method of payment for their services.</h2>
            </div>
          </div>
          <Vendors />
          <div className="row pt">
            <div className="col-xs-12 col-sm-7 col-sm-offset-1">
              <h3>Are you interested in Verge Currency? Start accepting Verge today!</h3>
            </div>
            <div className="col-xs-12 col-sm-3 col-sm-offset-1">
              <a className="btn btn-primary">Accept verge today</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )  
}

export default VendorsPage;
