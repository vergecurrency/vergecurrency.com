import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import Layout from '../components/Layout';
import { LatestVendors } from '../components/Vendors';

import { translate } from 'react-i18next';
import i18n from '../i18n';

class VendorsPage extends React.Component {

  constructor(props){
    super(props)

    this.applyNewFilterCheckbox = this.applyNewFilterCheckbox.bind(this)
  }

  state = {
    filter: ['retail', 'foodAndBev', 'service', 'entertainment', 'travel', 'education']
  }

  applyNewFilterCheckbox(e, name){
    this.setState({
      filter: e.target.checked
        ? Array.from(new Set([ ...this.state.filter, name]))
        : this.state.filter.filter((e) => e !== name)
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
                  <br />
                    <h3>
                    {t('common:vendors.text2', { defaultValue: 'Get started today and accept Verge in your store!' })}
                    </h3>
                    <Link target="_blank" href="https://vergecurrency.business/">
                      <a target="_blank" href="https://vergecurrency.business/" className="btn btn-primary">{t('common:vendors.text3', { defaultValue: 'Accept Verge today' })}</a>
                    </Link>
                </div>
              </div>
            </div>
            <div className="intro pt pb">
              <div className="row center-xs middle-xs">
                <div className="col-xs-10 col-sm-8">
            <fieldset>
              <legend>{t('vendors:body.choose', { defaultValue: 'Select vendor categories' })}</legend>

                <span className="check-categories">
                    <input className="checkbox" type="checkbox" id="retail" name="feature"
                          checked={this.state.filter.includes('retail')} onChange={(e) => this.applyNewFilterCheckbox(e, 'retail')} />
                    <label htmlFor="retail">Retail</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="foodAndBev" name="feature"
                          checked={this.state.filter.includes('foodAndBev')} onChange={(e) => this.applyNewFilterCheckbox(e, 'foodAndBev')} />
                    <label htmlFor="foodAndBev">Food And Beverages</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="service" name="feature"
                          checked={this.state.filter.includes('service')} onChange={(e) => this.applyNewFilterCheckbox(e, 'service')} />
                    <label htmlFor="service">Service</label>
                </span><br/>

                <span className="check-categories">
                    <input type="checkbox" id="entertainment" name="feature"
                          checked={this.state.filter.includes('entertainment')} onChange={(e) => this.applyNewFilterCheckbox(e, 'entertainment')}/>
                    <label htmlFor="entertainment">Entertainment</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="travel" name="feature"
                          checked={this.state.filter.includes('travel')} onChange={(e) => this.applyNewFilterCheckbox(e, 'travel')}/>
                    <label htmlFor="travel">Travel</label>
                </span>

                <span className="check-categories">
                    <input type="checkbox" id="education" name="feature"
                          checked={this.state.filter.includes('education')} onChange={(e) => this.applyNewFilterCheckbox(e, 'education')}/>
                    <label htmlFor="education">Education</label>
                </span>
            </fieldset>
            </div>
              </div>
            </div>
            <LatestVendors {...this.state} />
          </div>
        </div>
      </Layout>
    );
  }
}

const Extended = translate(['common', 'vendors'], { i18n, wait: process.browser })(VendorsPage);

export default Extended;
