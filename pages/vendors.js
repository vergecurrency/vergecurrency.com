import Link from 'next/link';

import Layout from '../components/Layout';
import Vendors from '../components/Vendors';

const VendorsPage = () => {

  return(
    <Layout>
      <div className="vendors">
        <div className="intro pt-lg pb-lg">
          <div className="row center-xs middle-xs">
            <div className="col-sm-6">
              <span class="spaced">Vendors using Verge</span>
              <h2>Vendors proudly accept Verge Currency as a method of payment for their services.</h2>
            </div>
          </div>
          <Vendors />
          <div className="row">
            <div className="col-xs-12 col-sm-9">
              <span className="spaced">lorem ipsum dolor simit</span>
            </div>
            <div className="col-xs-12 col-sm-3">
              <a className="btn btn-primary">Accept verge today</a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )  
}

export default VendorsPage;
