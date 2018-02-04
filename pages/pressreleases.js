import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import Subheader from '../components/Subheader';

import ServerProps from '../components/ServerProps';

import { translate } from 'react-i18next';
import i18n from '../i18n';

import Moment from 'react-moment';
import 'moment-timezone';

import markdown from 'markdown-in-js';

const Pressreleases = function (props) {
  const { t, store } = props;
  const showLoader = store && store.showLoader;

  return (
    <Layout loading={ showLoader }>
      <Subheader t={t} category='press' page='pressreleases' />

      <div className="pressreleases">
        <div className="white-container white-container--pressreleases">
          <div className="container pb pb-xs-0">
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs previous">
              <div className="col-xs-11 start-xs">
                <h3>Press releases</h3>

                <div className="row around-xs pt-small">
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Verge launches new website in the start of 2018</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs pb-small-xs">
                    <h3>Wraith Protocol set to be released end of 2017</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jun 2017</Moment>
                  </div>
                  <div className="col-xs-12 col-sm-4 start-xs">
                    <h3>Understand Wraith Protocol in 5 simple steps</h3>
                    <Moment format="MMMM Do YYYY" className="date">1 jan 2018</Moment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['pressreleases'], { i18n, wait: process.browser })(Pressreleases);

export default ServerProps(Extended);
