import React from 'react';

import Head from 'next/head';

import { translate } from 'react-i18next';
import Layout from '../components/Layout';
import Link from 'next/link';

import i18n from '../i18n';

function FBV(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.FBV.title', { defaultValue: 'Fueled by Verge - VergeCurrency.com' })}</title>
        <link rel="stylesheet" type="text/css" href="/static/scss/pages/_fbv.scss" />
      </Head>


      <div className="container-fbv-header">


        <div className="fbvHeaderBG">
          <div className="intro pb-large">
            <div className="row center-xs">
              <div className="container">
                <div className="fbvRibbonHeading">
                  <br />
                  <br />
                  <br />
                  <br />
                  Fueled by Verge
                </div>
                <div className="fbvRibbonHeadingSub2">Commitment to mass adoption through Verge Currency</div>
              </div>
            </div>


            <div className="row center-xs">
              <img src="/static/img/fbv/fbv_sticker_logo.png" height="235" width="235" className="Fbvimage1" alt="Fbvimage1" />
              <img src="/static/img/fbv/GilLinsterCar.png" className="Fbvimage1" alt="Fbvimage1" />
              <img src="/static/img/fbv/fbvStickerBike.png" height="1542" width="516" className="Fbvimage2" alt="Fbvimage2" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fbv-about">

        <div className="fbvAboutBG">
          <div className="intro pt-large pb-large">
            <div className="row center-xs middle-xs">
              <div className="container">
                <div className="col-xs-12 col-lg-12">
                  <div className="fbvHeading">About this initiative</div>
                  <div className="fbvText">Fueled by Verge is a statement of commitment to mass adoption by educating and spreading awareness of blockchain technology and Verge Currency by the #VergeFam.</div>
                  <div className="fbvButton"><a href="https://goo.gl/forms/pd1EyEneXY6d4WU82">Join the Movement</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container container-fbv-athletes">

        <div className="intro pt-large pb-large">
          <div className="container center-xs">

            <div className="col-xs-10 col-sm-8 center-xs col-sm-offset-2 col-xs-offset-1 pb-small bb">
              <div className="fbvAthletesHeading">Verge Athletes</div>
            </div>




            <div className="row start-xs pt pb bb">

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 center-xs end-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsLeft">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/pacquiaofoundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Manny Pacquiao Foundation's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/MPac_Foundation"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Manny Pacquiao Foundation's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.facebook.com/PacquiaoFoundation/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Manny Pacquiao Foundation's Facebook"
                      >
                        <i className="icon icon--facebook" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">Boxing</p>
                  <p className="athleteName">Manny Pacquiao Foundation</p>
                  <p className="athleteLocation">Philippines</p>

                  <p className="athleteDescription">
                    Named and founded on behalf of future Hall of Fame Boxer Manny Pacquiao,
                    {' '}
                    The Manny Pacquiao Foundation seeks to empower communities and individuals through charitable
                    {' '}
                    support and a message of hope and change.
                    <br /><br />
                    Manny and his wife, Jinkee, have long supported local communities throughout their careers by
                    {' '}
                    building over 1,000 residential homes, aiding in natural disaster relief efforts,
                    {' '}
                    covering hospital bills and expenses, and providing food and resources to the hungry.
                    <br /><br />
                    Through their foundation, the hope is to continue serving such causes in a greater capacity.
                  </p>

                </div>
              </div>

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 col-sm-offset-0 first-xs last-sm center-xs end-sm">
                <img src="/static/img/fbv/MPacFoundation.png" alt="Manny Pacquiao Foundation Fueled by Verge" title="Manny Pacquiao Foundation Fueled by Verge" />
              </div>
            </div>




            <div className="row start-xs pt pb bb">

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 center-xs start-sm">
                <img src="/static/img/fbv/dannyRobertson.png" alt="Danny Robertson Fueled by Verge" title="Danny Robertson Fueled by Verge" />
              </div>

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 col-sm-offset-0 center-xs start-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsRight">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/141mx"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Danny's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/141mx"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Danny's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">Motocross</p>
                  <p className="athleteName">Danny Robertson</p>
                  <p className="athleteLocation">Calgary, Canada</p>

                  <p className="athleteDescription">
                    Danny is from Calgary, Alberta, Canada. Although he is only 10 years old, he has an extraordinary 6 years of racing experience.
                    {' '}
                    He is regularly training and has a huge potential to become a legend in motocross world such as Ricky Carmichael or Jeremy McGrath.
                    <br /><br />
                    Danny is one of our youngest community members who believes in privacy and the Verge vision, and wanted to help the younger generation
                    {' '}
                    acknowledge cryptocurrencies by covering his bike with the Verge brand.
                    {' '}
                    He did not get any compensation for doing so, but sees it as his contribution to bringing awareness.
                  </p>

                </div>
              </div>
            </div>

            <div className="row start-xs pt pb bb">

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 center-xs end-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsLeft">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/gillinster"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Gill's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/gillinster"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Gill's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">Nascar</p>
                  <p className="athleteName">Gil Linster</p>
                  <p className="athleteLocation">Luxembourg</p>

                  <p className="athleteDescription">
                    Gil is a Verge supporter and a race car driver. He currently races stock cars in the NASCAR Whelen Euro Series.
                    <br /><br />
                    In 2017, he became the first ever Luxembourgish NASCAR driver while driving the number 44 race car from Caal Racing team in the Whelen Euro Series,
                    {' '}
                    and ended his first season in 9th place overall.
                    <br /><br />
                    He recently placed 4th and 13th at circuit Zolder - in his second race, he experienced engine difficulties that hindered his performance,
                    {' '}
                    but finished the 2018 Season (of the Elite 2 category) in 5th place.
                    <br /><br />
                    Gill will also be racing in the USA in his next season, with the addition of NASCAR’s Whelen All-American Series, the "lmv8 oval championship".
                    <br /><br />
                    Verge and Gil are both ready to tackle mass adoption and spread its awareness and education through racing.
                  </p>

                </div>
              </div>

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 col-sm-offset-0 first-xs last-sm center-xs end-sm">
                <img src="/static/img/fbv/gilLinster.png" alt="Gil Linster Fueled by Verge" title="Gil Linster Fueled by Verge" />
              </div>
            </div>

            <div className="row start-xs pt pb bb">

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 center-xs start-sm">
                <img src="/static/img/fbv/eSport.png" alt="eSports Fueled by Verge" title="eSports Fueled by Verge" />
              </div>

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 col-sm-offset-0 center-xs start-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsRight">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.facebook.com/UpstateRacingLeague/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Upstate Racing League's Facebook"
                      >
                        <i className="icon icon--facebook" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">eSports - Racing</p>
                  <p className="athleteName">Upstate Racing League</p>
                  <p className="athleteLocation">New York</p>

                  <p>
                    The 2019-2020 Late Model Pro Series will be sponsored by Verge, and will coincide with a new era of racing.
                    {' '}
                    After 8 seasons of the Late Model, the Series will now use the Super Late Model.
                    <br /><br />
                    Some races will allow tire changes which will provide for more strategy and drama to play out.
                    {' '}
                    Other changes include a new format with random draw heat racing for all races. Fields will be set to a hard 26 drivers.
                    <br /><br />
                    Top 20 from heats will automatically transfer into the main feature of the night.
                  </p>

                </div>
              </div>
            </div>

          </div>

          <div className="intro pt-large pb-large">
            <div className="row center-xs middle-xs">
              <div className="col-xs-12 col-lg-7">
                <div className="fbvCommunityHeading">Fueled by Verge is a community at large initiative, reflecting the main goal of Verge</div>
                <div className="fbvText">It is a worldwide effort from individuals excelling in their unique fields, masters of their crafts, sharing their achievements. With this, we can build awareness and educate what Verge and blockchain technology is all about.</div>
              </div>
            </div>

            <div className="row center-xs middle-xs">
              <div className="col-xs-12 col-lg-8">
                <img src="/static/img/fbv/motocrossBike.png" alt="motocrossBike" />
              </div>
            </div>

            <div className="row center-xs middle-xs">

              <div className="col-xs-12 col-lg-8">
                <div className="fbvTextLeftAlignment">
                  The goal of #FueledByVerge is to showcase the utility of Verge through events by its community. Our Verge Currency team is the first team that is &quot;Fueled by Verge&quot; in both design and spirit.
                  <br />
                  <br />
                  FbV wants to showcase the strength and community of Verge by helping Sponsored individuals, thus bringing increased awareness of Verge Currency in general.
                  <br />
                  <br />
                  FbV also wishes to help people by promoting their events and achievements.  This will allow them to gain more support as an individual or team from the project they believe in.  FbV will promote their bios, event schedules, and how to find them. All of this will be done to increase media presence and brand awareness.
                </div>
                <div className="fbvButton"><a href="https://goo.gl/forms/pd1EyEneXY6d4WU82">Join the Movement</a></div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <br />
      <br />
      <br />

    </Layout>
  );
}

const Extended = translate(['fbv', 'common'], { i18n, wait: process.browser })(FBV);

export default Extended;
