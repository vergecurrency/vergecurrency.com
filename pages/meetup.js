import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function Meetup(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.meetup.title', { defaultValue: 'Verge Meetup - VergeCurrency.com' })}</title>
        <script src="https://www.universe.com/embed2.js" data-state=""></script>
      </Head>
      <div className="meetup pt-large pb">
        <div className="ribbon ribbon--meetup">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 text-center">
                <div className="ribbon-txt">
                  <h1>Join The First Verge Meetup in <span>Amsterdam</span> June 9th, 2018</h1>
                  <p>We are really pleased to announce that we will be <br className="hidden-xs" />holding the very first Verge meet-up ever!</p>
                  <a className="unii-listing-button unii-custom unii-medium Light btn btn-primary px-large" href="https://www.universe.com/events/verge-meet-up-tickets-amsterdam-NTL872?buttonColor=#1db6dc&buttonText=Buy Tickets Here" style={{ backgroundColor: "#1db6dc" }}>Buy Tickets Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row center-xs middle-xs pt">
            <div className="col-xs-10 pb bb">
              <div className="meetup__counters">
                <div className="row">
                  <div className="col-xs-6 col-sm-3 pb">
                    <div className="meetup__counter-number">600</div>
                    <div className="meetup__counter-text">tickets available</div>
                  </div>
                  <div className="col-xs-6 col-sm-3 pb">
                    <div className="meetup__counter-number">1st</div>
                    <div className="meetup__counter-text">Verge Meetup</div>
                  </div>
                  <div className="col-xs-6 col-sm-3 pb">
                    <div className="meetup__counter-number">9th</div>
                    <div className="meetup__counter-text">June 2018</div>
                  </div>
                  <div className="col-xs-6 col-sm-3 pb">
                    <div className="meetup__counter-number">10+</div>
                    <div className="meetup__counter-text">Core members</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container pb-large bb">
            <div className="themed-container__transparent themed-container__transparent--meetup pb-xs-0">
              <div className="row center-xs">
                <div className="col-xs-10 col-sm-6 col-md-5 start-sm">
                  <h2>Holding the very first Verge <br className="visible-md" />meet-up ever.</h2>
                  <p class="text--larger">
                    The meet-up will take place on the 9th of June in Amsterdam, the capital of the Netherlands, and will take place on a boat, which we will cruise on through the Amsterdam canals.
                  </p>
                  <p>
                    We will have several speakers and special guests during this event who will provide information about the Verge Currency project, blockchain development in general, as well as touch on topics related to other developments in the crypto space.
                  </p>
                </div>
                <a href="https://www.docks.nl" target="_blank" rel="noreferrer noopener" className="col-xs-10 col-sm-4 col-md-5"><span className="visible-xs">Visit DOCKS</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="container meetup--media">
          <div className="row center-xs middle-xs pt pb">
            <div className="col-xs-10 col-sm-8 col-md-5">
              <h2>Verge Meetup on a <span>ship</span>. <br className="hidden-xs" />Location and place.</h2>
              <p className="pb-small">The meetup will take place on a boat, which we will cruise on through the Amsterdam canals.</p>
              <img src="/static/img/meetup/squiggly.png" className="img-responsive" />
            </div>
          </div>

          <div className="row center-xs middle-xs pt">
            <div className="col-xs-10">
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-4 col--fullheight">
                  <img src="/static/img/meetup/pics/pic1.png" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-sm-4 col--fullheight">
                  <img src="/static/img/meetup/pics/pic2.png" className="img-responsive" />
                  <img src="/static/img/meetup/pics/pic3.png" className="img-responsive" />
                </div>
                <div className="col-xs-12 col-sm-4 col--fullheight">
                  <img src="/static/img/meetup/pics/pic4.png" className="img-responsive" />
                  <img src="/static/img/meetup/pics/pic5.png" className="img-responsive" />
                </div>
              </div>
            </div>
          </div>

          <div className="row center-xs middle-xs pb">
            <div className="col-xs-10">
              <div className="row">
                <div className="col-xs-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.505135614645!2d4.902052188500803!3d52.37939260409592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609b646f89b21%3A0xb1f631c99dabe1b5!2sDe+Ruijterkade%2C+Amsterdam!5e0!3m2!1snl!2snl!4v1525194929869" width="100%" height="400" frameborder="0"></iframe>
                </div>
              </div>
              <div className="row top-xs middle-sm pt">
                <div className="col-xs-6 col-sm-3 start-xs">
                  <h3>Address</h3>
                  <p>
                    De Ruijterkade 14<br />1011 AA Amsterdam
                  </p>
                </div>
                <div className="col-xs-6 col-sm-6 start-xs">
                  <h3>Ship departure</h3>
                  <p>
                    Arrival time between 14:45 and 15:15<br />
                    The boat departs at 15:30 (Not a minute later).
                  </p>
                </div>
                <div className="col-xs-12 col-sm-3">
                  <a className="unii-listing-button unii-custom unii-medium Light btn btn-primary px-large" href="https://www.universe.com/events/verge-meet-up-tickets-amsterdam-NTL872?buttonColor=#1db6dc&buttonText=Buy Tickets Here" style={{ backgroundColor: "#1db6dc" }}>Buy Tickets Here</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt pb">
          <div className="row center-xs">
            <div className="col-xs-10">
              <div className="themed-container__dark themed-container__dark--meetup">
                <div className="row center-xs">
                  <div className="col-xs-10 col-sm-8 start-sm">
                    <h3>
                      The Verge meet-up is not only informative, but is equally a <span>networking opportunity</span> to socialize and meet with other like-minded individuals.
                    </h3>
                    <h3>
                      We will finish the evening with a <span>big party</span>, where our Core team and a number of special guests will be present to <span>celebrate this day with everyone</span>.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container meetup--tickets">
          <div className="row center-xs pt">
            <div className="col-xs-10 col-md-11 col-lg-9">
              <h2>
                Verge Meetup <span>Ticket Costs</span>.
              </h2>
              <p>There are 3 kinds of tickets available for purchase.</p>

              <div className="row center-xs around-sm pt">
                <div className="col-xs-10 col-sm-4 col-md-3 col--ticket">
                  <div className="bb">
                    <h4>Evening Only</h4>
                    <p>Buy Ticket Today</p>
                    <p className="tickets__price">€ 35</p>
                  </div>
                  <div class="pt-small pb-small">
                    <a className="unii-listing-button unii-custom unii-medium Light btn btn-primary" href="https://www.universe.com/events/verge-meet-up-tickets-amsterdam-NTL872?buttonColor=#1db6dc&buttonText=Buy Tickets Here" style={{ backgroundColor: "#1db6dc" }}>Buy Tickets Here</a>
                  </div>
                  <p class="text--smaller start-sm">
                    <b>What you get:</b><br />
                    Access to our awesome party in the evening
                    <br />
                    <br />
                    Get to meet other crypto and Verge enthusiasts
                  </p>
                </div>
                <div className="col-xs-10 col-sm-4 col-md-3 col--ticket">
                  <div className="bb">
                    <h4>Afternoon + Evening</h4>
                    <p>Buy Ticket Today</p>
                    <p className="tickets__price">€ 75</p>
                  </div>
                  <div class="pt-small pb-small">
                    <a className="unii-listing-button unii-custom unii-medium Light btn btn-primary" href="https://www.universe.com/events/verge-meet-up-tickets-amsterdam-NTL872?buttonColor=#1db6dc&buttonText=Buy Tickets Here" style={{ backgroundColor: "#1db6dc" }}>Buy Tickets Here</a>
                  </div>
                  <p class="text--smaller start-sm">
                    <b>What you get:</b><br />
                    Access to both the afternoon and evening program.
                    <br />
                    <br />
                    Dinner buffet and soft drinks included
                    <br />
                    <br />
                    Interesting speakers and presentations
                    <br />
                    <br />
                    + All perks of <i>“Evening only”</i>
                  </p>
                </div>

                <div className="col-xs-10 col-sm-4 col-md-3 col--ticket">
                  <div className="bb">
                    <h4>VIP Ticket</h4>
                    <p>Buy Ticket Today</p>
                    <p className="tickets__price">€ 175</p>
                  </div>
                  <div class="pt-small pb-small">
                    <a className="unii-listing-button unii-custom unii-medium Light btn btn-primary" href="https://www.universe.com/events/verge-meet-up-tickets-amsterdam-NTL872?buttonColor=#1db6dc&buttonText=Buy Tickets Here" style={{ backgroundColor: "#1db6dc" }}>Buy Tickets Here</a>
                  </div>
                  <p class="text--smaller start-sm">
                    <b>What you get:</b><br />
                    All-inclusive drinks and snacks
                    <br />
                    <br />
                    Exclusive bar access
                    <br />
                    <br />
                    + All perks of the <i>“Afternoon + Evening”</i>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container meetup--programme pt">
          <div className="row center-xs pt">
            <div className="col-xs-10 col-sm-4 col-sm-offset-1 start-sm pb-xs">
              <h2>
                Program <span>Outline</span>
              </h2>
              <p>
                Arrival time between 14:45 and 15:15<br />
                The boat departs at 15:30 (Not a minute later).<br /><br />

                <b>Afternoon program:</b><br />
                15:00 until 19:30  (includes a dinner buffet)<br /><br />

                <b>Evening program:</b><br />
                19:30 until 00:00
              </p>
              <p class="text--smaller">
                There are 3 kinds of tickets available for purchase: If your ticket includes the afternoon program, you will have access to a dinner buffet and unlimited soft drinks and/or other non-alcoholic beverages.<br /><br />
                The evening program will have snacks available which are also included in the ticket price.
              </p>
            </div>
            <div className="col-xs-10 col-sm-4 col-sm-offset-1 start-sm">
              <h2>
                Practical Information
              </h2>
              <p>
                Our meet-up location is next to the <b>Central Amsterdam station</b>.<br /><br />

                <b>Arrival:</b><br />
                The boat will depart 15:30. Come 15-30 min. BEFORE departure.<br /><br />

                <b>Dress Code:</b><br />
                Nice clothing!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="meetup--bottom" />
    </Layout>
  );
}

const Extended = translate(['meetup', 'common'], { i18n, wait: process.browser })(Meetup);

export default Extended;
