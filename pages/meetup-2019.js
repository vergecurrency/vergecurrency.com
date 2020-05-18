import Head from 'next/head';

import { translate } from 'react-i18next';

import Layout from '../components/Layout';

import i18n from '../i18n';

import { Sponsors } from '../components/Sponsors-2019';

function Meetup(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.meetup.title', { defaultValue: 'The Second Verge Meetup in Rotterdam 25th of May, 2019 - VergeCurrency.com' })}</title>
        <meta key="description" name="description" content={t('common:meta.meetup.description', { defaultValue: 'Bigger, better, more exclusive and catering to all Verge members&pos; needs. The meet-up will take place on May 25th, in the best spot Rotterdam has to offer.' })} />
      </Head>
      <div className="meetup pt-large pb">
        <div className="ribbon ribbon--meetup19">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-11 col-sm-10 text-center">
                <div className="ribbon-txt">
                  <h1>
                    Join The Second Verge Meetup in
                    {' '}
                    <span>Rotterdam</span>
                    {' '}
                    May 25th, 2019
                  </h1>
                  <p>
                    We are really pleased to announce that we will be
                    <br className="hidden-xs" />
                    holding the second official Verge meet-up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg__grey">
          <div className="container">
            <div className="row center-xs middle-xs pt">
              <div className="col-xs-11 bb">
                <div className="meetup__counters">
                  <div className="row">
                    <div className="col-xs-6 col-sm-3 pb">
                      <div className="meetup__counter-number">96</div>
                      <div className="meetup__counter-text">tickets left</div>
                    </div>
                    <div className="col-xs-6 col-sm-3 pb">
                      <div className="meetup__counter-number">2nd</div>
                      <div className="meetup__counter-text">Verge Meetup</div>
                    </div>
                    <div className="col-xs-6 col-sm-3 pb">
                      <div className="meetup__counter-number">25th</div>
                      <div className="meetup__counter-text">May 2019</div>
                    </div>
                    <div className="col-xs-6 col-sm-3 pb">
                      <div className="meetup__counter-number">10+</div>
                      <div className="meetup__counter-text">Core members</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">

          <Sponsors />

          <div className="container pb-large">
            <div className="themed-container__transparent themed-container__transparent--meetup19 pb-small">
              <div className="row center-xs">
                <div className="col-xs-11 col-sm-6 col-md-5 start-sm">
                  <h2>
                    Holding the second Verge meet-up.
                    <br />
                    Bigger &amp; Better.
                  </h2>
                  <p className="text--larger">
                    Bigger, better, more exclusive and catering to all Verge members&apos; needs.
                    {' '}
                    The meet-up will take place on May 25th, in the best spot Rotterdam has to offer.
                  </p>
                  <p className="text--larger">
                    We will have several guest speakers attending the event. They will provide information
                    {' '}
                    about the Verge Currency project, blockchain development in general, as well as other developments within the crypto space.
                  </p>
                </div>
                <div className="col-xs-10 col-sm-4 col-md-5 col-sm-offset-1">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container pb bb">
          <div className="pb-small sponsor-container">
            <div className="row center-xs">
              <div className="col-xs-11 col-sm-11 col-md-3 start-sm">
                <h3>
                  Special Guests
                </h3>
                <p className="text--larger">
                  We are pleased to present our special guests for this meetup, that you will be able to meet and greet.
                </p>
              </div>

              <div className="col-xs-10 col-sm-3 col-md-2 start-sm">
                <img src="/static/img/meetup-2019/guests/Justin.jpg" className="img-responsive" alt="responsive" />
                <h5>
                  Justin (Sunerok)
                </h5>
                <p className="text--smaller">
                  Founder and Lead Developer for Verge Currency
                </p>
              </div>

              <div className="col-xs-10 col-sm-3 col-md-2 start-sm">
                <img src="/static/img/meetup-2019/guests/Didi.jpg" className="img-responsive" alt="responsive" />
                <h5>
                  Didi Taihuttu
                </h5>
                <p className="text--smaller">
                  Part of The Bitcoin Family
                </p>
              </div>

              <div className="col-xs-10 col-sm-3 col-md-2 start-sm">
                <img src="/static/img/meetup-2019/guests/Michael.jpg" className="img-responsive" alt="responsive" />
                <h5>
                  Crypto Michaël
                </h5>
                <p className="text--smaller">
                Full Time Trader
                </p>
              </div>

              <div className="col-xs-10 col-sm-3 col-md-2 start-sm">
                <img src="/static/img/meetup-2019/guests/x.jpg" className="img-responsive" alt="responsive" />
                <h5>
                  <em>Two</em> Secret Guests
                </h5>
                <p className="text--smaller">
                Come and see who they are!
                </p>
              </div>

            </div>
          </div>
        </div>

        <div className="container meetup--media">
          <div className="row center-xs middle-xs pt">
            <div className="col-xs-11 col-sm-8 col-md-8">
              <h2>
                Liked our first meet-up?
                <br className="hidden-xs" />
                {' '}
                Get excited for the second.
              </h2>
              <p className="pb-small">With views of the Willems Bridge on one side and the Erasmus Bridge on the other.</p>
            </div>
          </div>

          <div className="row center-xs middle-xs pt">
            <div className="col-xs-11">
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-4 col--fullheight">
                  <img src="/static/img/meetup-2019/pics/pic1.jpg" className="img-responsive" alt="responsive" />
                </div>
                <div className="col-xs-12 col-sm-4 col--fullheight">
                  <img src="/static/img/meetup-2019/pics/pic2.jpg" className="img-responsive" alt="responsive" />
                  <img src="/static/img/meetup-2019/pics/pic3.jpg" className="img-responsive" alt="responsive" />
                </div>
                <div className="col-xs-12 col-sm-4 col--fullheight">
                  <img src="/static/img/meetup-2019/pics/pic4.jpg" className="img-responsive" alt="responsive" />
                  <img src="/static/img/meetup-2019/pics/pic5.jpg" className="img-responsive" alt="responsive" />
                </div>
              </div>
            </div>
          </div>

          <div className="row center-xs middle-xs pb">
            <div className="col-xs-11">
              <div className="row">
                <div className="col-xs-12">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2069.373379656265!2d4.491164789289276!3d51.91728840563742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c43367221a5b8d%3A0x2c039be15846d9ae!2sBoompjes+750%2C+3011+XZ+Rotterdam%2C+Netherlands!5e0!3m2!1sen!2sau!4v1550043280496" width="100%" height="400" frameBorder="0" title="Google Map"></iframe>
                </div>
              </div>
              <div className="row top-xs middle-sm pt">
                <div className="col-xs-6 col-sm-3 start-xs">
                  <h3>Address</h3>
                  <p>
                    Boompjes 750
                    <br />
                    3011 XZ Rotterdam
                  </p>
                </div>
                <div className="col-xs-6 col-sm-6 start-xs">
                  <h3>Parking</h3>
                  <p>
                    You can park at various places, the most popular place is the
                    {' '}
                    North Island across the water, which is free 24 hours a day.
                  </p>
                </div>
                <div className="col-xs-12 col-sm-3">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt pb">
          <div className="row center-xs">
            <div className="col-xs-11">
              <div className="themed-container__dark themed-container__dark--meetup">
                <div className="row center-xs">
                  <div className="col-xs-10 col-sm-8 start-sm">
                    <h3>
                      The Verge Meet-up is equally made to be informative as well as a
                      {' '}
                      <span>networking opportunity</span>
                      {' '}
                      to socialize and meet with other likeminded individuals.
                    </h3>
                    <h3>
                      The evening will end with a big party, where the core team and special guests are present to
                      {' '}
                      <span>celebrate with everyone.</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container meetup--programme pt">
          <div className="row center-xs pt">
            <div className="col-xs-11 col-sm-5 start-sm pb-xs">
              <h2>
                Program
                {' '}
                <span>Outline</span>
              </h2>
              <p>
                15:30 Doors open for guests
                <hr />
                16:20 Official Opening
                <hr />
                16:30 Informative Program
                <br />
                <small>Didi Taihuttu from the Bitcoin Family</small>
                <hr />
                16:50 Informative Program
                <br />
                <small>Special Guest #1 & Partnership Announcement</small>
                <hr />
                17:00 Informative Program
                <br />
                <small>Mycro</small>
                <hr />
                17:20 Informative Program
                <br />
                <small>Developer Panel 1: Justin & Marvin</small>
                <hr />
                18:00 Informative Program
                <br />
                <small>Special Guest #2 & Partnership Announcement</small>
                <hr />
                18:15 BBQ Dinner
                <hr />
                19:30 Informative Program
                <br />
                <small>Crypto Michael</small>
                <hr />
                19:40 Informative Program
                <br />
                <small>Developer Panel 2: Swen & Manuel</small>
                <hr />
                20:30 DJ Starts
                <hr />
                23:00 Dutch Snack
                <hr />
                01:00 End of event
                <br />
                <br />
                We will have short and sweet speeches throughout the night.
                <br />
                More info about our speakers soon.
              </p>
              <div className="pt-small pb-small">
                <a
                  className="unii-listing-button unii-custom unii-medium Light btn btn-primary px-large"
                  href="/static/docs/VergeRotterdamFlyer.pdf"
                  target="_blank"
                  style={{ backgroundColor: '#1db6dc', color: '#ffffff' }}
                >
                  Download Detailed Program
                </a>
              </div>
            </div>
            <div className="col-xs-11 col-sm-5 col-sm-offset-1 start-sm">
              <h2>
                Practical Information
              </h2>
              <p>
                Our meet-up location has easy access by public transport,
                {' '}
                but also offers free parking spaces close by.
                <br />
                <br />
                Doors will open at 15:30 and close at 01:00, and there will be security present throughout the event.
                <br />
                <br />
                <b><span className="warn">Guests will be held accountable for any and all damages made during the event.</span></b>
                <br />
                <br />
                <b>Travelling Plans:</b>
                <br />
                Public Transport:
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.nl/maps/dir/Amsterdam+Centraal,+Stationsplein,+1012+AB+Amsterdam/Eau+Lounge,+Boompjes+750,+3011+XZ+Rotterdam/@52.156234,4.3241559,10z/am=t/data=!4m14!4m13!1m5!1m1!1s0x47c609b70dd81623:0xcae71b8d3adfd142!2m2!1d4.900272!2d52.3791283!1m5!1m1!1s0x47c43342e5ecd389:0x53692323570e9faf!2m2!1d4.492098!2d51.916849!3e3">Click to see route</a>
                {' '}
                (Google Maps)
                <br />
                Car:
                {' '}
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.nl/maps/dir/Amsterdam+Airport+Schiphol,+Evert+van+de+Beekstraat+202,+1118+CP+Schiphol/Eau+Lounge,+Boompjes+750,+3011+XZ+Rotterdam/@52.1111674,4.2769485,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x47c5e134e0fd162d:0xc7d51583f1cef188!2m2!1d4.7682744!2d52.3105386!1m5!1m1!1s0x47c43342e5ecd389:0x53692323570e9faf!2m2!1d4.492098!2d51.916849!3e0">Click to see route</a>
                {' '}
                (Google Maps)
                <br />
                (
                <a target="_blank" rel="noopener noreferrer" href="https://www.google.nl/maps/place/Noordereiland,+3071+LL+Rotterdam/data=!4m2!3m1!1s0x47c43369f5c21d6d:0x6623a259e9515705?ved=2ahUKEwjS2OOpzMXgAhVIJVAKHSaOAz0Q8gEwAHoECAAQAQ">Click to see parking spots</a>
                )
                <br />
                <br />
                <b>Dress Code:</b>
                <br />
                No Code!
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="meetup--bottom19" />
    </Layout>
  );
}

const Extended = translate(['meetup-2019', 'common'], { i18n, wait: process.browser })(Meetup);

export default Extended;
