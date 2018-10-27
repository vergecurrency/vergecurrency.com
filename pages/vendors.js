import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import { LatestVendors } from '../components/Vendors';

import { translate } from 'react-i18next';
import i18n from '../i18n';

class VendorsPage extends React.Component {

  state = {
    retail: false,
    foodAndBev: false,
    service: false,
    entertainment: false,
    travel: false,
    education: false
  }

  applyNewFilterCheckbox(e, name){
    this.setState({
      [name]: e.target.checked 
    })
  }

  render() {
    const { t } = this.props;

    return (
      <Layout>
        <Head>
          <title key="title">{t('common:meta.vendors.title', { defaultValue: 'Vendors - VergeCurrency.com' })}</title>
        </Head>
        <div className="themed-container__gray themed-container__gray--roadmap">
          <div className="container">
            <div className="intro pt pb">
              <div className="row center-xs middle-xs">
                <div className="col-xs-10 col-sm-6">
                  <h6>{t('vendors:body.header', { defaultValue: 'Vendors using Verge' })}</h6>
                  <h2>{t('common:vendors.text1', { defaultValue: 'All of the vendors below proudly accept Verge Currency as a method of payment for their goods and services.' })}</h2>
                </div>
              </div>
            </div>
            <div className="intro pt pb">
              <div className="row center-xs middle-xs">
                <div className="col-xs-10 col-sm-6">
            <fieldset>
              <legend>{t('vendors:body.choose', { defaultValue: 'Select vendor categories' })}</legend>

                <span className="check-categories">
                    <input className="checkbox" type="checkbox" id="retail" name="feature"
                          value={this.state.retail} onChange={(e) => this.applyNewFilterCheckbox(e, 'retail')} />
                    <label htmlFor="retail">Retail</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="foodAndBev" name="feature"
                          value={this.state.foodAndBev} onChange={(e) => this.applyNewFilterCheckbox(e, 'foodAndBev')} />
                    <label htmlFor="foodAndBev">Food And Beverages</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="service" name="feature"
                          value={this.state.service} onChange={(e) => this.applyNewFilterCheckbox(e, 'service')} />
                    <label htmlFor="service">Service</label>
                </span><br/>

                <span className="check-categories">
                    <input type="checkbox" id="entertainment" name="feature"
                          value={this.state.entertainment} onChange={(e) => this.applyNewFilterCheckbox(e, 'entertainment')}/>
                    <label htmlFor="entertainment">Entertainment</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="travel" name="feature"
                          value={this.state.travel} onChange={(e) => this.applyNewFilterCheckbox(e, 'travel')}/>
                    <label htmlFor="travel">Travel</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="education" name="feature"
                          value={this.state.education} onChange={(e) => this.applyNewFilterCheckbox(e, 'education')}/>
                    <label htmlFor="education">Education</label>
                </span>
            </fieldset>
            </div>
              </div>
            </div>

            <LatestVendors {...this.state} />

            <div className="row center-xs pt">
              <div className="col-xs-10">
                <div className="row start-xs between-xs">
                  <div className="col-xs-12 col-sm-8 pb-xs">
                    <h3>
                    {t('common:vendors.text2', { defaultValue: 'Get started today and accept Verge in your store!' })}
                    </h3>
                  </div>
                  <div className="col-xs-12 col-sm-4 end-sm">
                    <Link href="https://vergecurrency.com/developers/verge-vendor-integration/">
                      <a href="https://vergecurrency.com/developers/verge-vendor-integration/" className="btn btn-primary">{t('common:vendors.text3', { defaultValue: 'Accept Verge today' })}</a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

const Extended = translate(['common', 'vendors'], { i18n, wait: process.browser })(VendorsPage);

export default Extended;
