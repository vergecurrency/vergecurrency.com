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
              <img src="/static/img/fbv/fbv_ribbon_nfl.png" className="Fbvimage" alt="Fbvimage" />
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
                  <br />
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
                        href="https://www.instagram.com/wyatthasil50/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Wyatt Hasil's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/wyatthasil50"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Wyatt Hasil's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">Motocross</p>
                  <p className="athleteName">Wyatt Hasil</p>
                  <p className="athleteLocation">Alberta, Canada</p>

                  <p className="athleteDescription">
                    Wyatt was born July 1, 2008, sharing the same birthday with Canada, and is now 13 years old.
                    <br /><br />
                    Wyatt has been riding motorcycles since he was 3 years old and has been racing competitively since 2014.
                    {' '}
                    He won his first Alberta provincial series race he entered.
                    {' '}
                    In 2020, Direct Motocross wrote an ‘On the Radar’ article Presented by Husqvarna Motorcycles Canada as they took notice of Wyatt’s results.
                    <br /><br />
                    Wyatt has recently been sponsored by JC Powersports South.
                    {' '}
                    Also sponsoring Wyatt is Troy Lee Designs Official — Moto, MTB, Helmets, Gear and Protection.
                    <br /><br />
                    Wyatt will not only learn about Blockchain Technology (Verge Currency), but he will now be part of this
                    {' '}
                    generational movement and join Danny Robertson under the Motocross umbrella of FbV.
                  </p>

                </div>
              </div>

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 col-sm-offset-0 first-xs last-sm center-xs end-sm">
                <img src="/static/img/fbv/WyattHasil.jpg" alt="Wyatt Hasil Fueled by Verge" title="Wyatt Hasil Fueled by Verge" />
              </div>
            </div>

            <div className="row start-xs pt pb bb">
              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 center-xs start-sm">
                <img src="/static/img/fbv/ReenaNorville.jpg" alt="Reena Norville Fueled by Verge" title="Reena Norville Fueled by Verge" />
              </div>

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 col-sm-offset-0 center-xs start-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsRight">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/reen_bean_/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Reena Norville's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">MMA</p>
                  <p className="athleteName">Reena Norville</p>
                  <p className="athleteLocation">Spring Valley, California</p>

                  <p className="athleteDescription">
                    Reena Norville is a notorious MMA amateur gone pro.
                    {' '}
                    After becoming the MMA amateur California state champion she is ready to take it to the next level.
                    <br /><br />
                    Her passion, focus and endurance have proven themselves to be undisputable and are key to
                    {' '}
                    ensure a kick-start of her pro career.
                    <br /><br />
                    Being fueled by Verge she is fighting her way to a common goal, to be the best at what we do.
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
                        href="https://www.instagram.com/shaqlewis22/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Shaquille Lewis' Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/shaq_lewis22"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Shaquille Lewis' Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">CFL / NFL</p>
                  <p className="athleteName">Shaquille Lewis</p>
                  <p className="athleteLocation">Texas, USA</p>

                  <p>
                    Shaquille Lewis is a former CFL & NFL athlete having played with Saskatchewan and Calgary
                    {' '}
                    in the CFL and later on with the Kansas City Chiefs in the NFL.
                    <br /><br />
                    Besides being an athlete by nature, Shaq is also a dedicated entrepreneur in the field of
                    {' '}
                    medical cannabis, commercial airline, is the co-owner of a Forex brokerage and is part of the RPA college.
                    <br /><br />
                    Shaq has proven himself to be true team player both in sports a business, he is fueled by Verge!
                  </p>

                </div>
              </div>

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 col-sm-offset-0 first-xs last-sm center-xs end-sm">
                <img src="/static/img/fbv/ShaquilleLewis.jpg" alt="Shaquille Lewis Fueled by Verge" title="Shaquille Lewis Fueled by Verge" />
              </div>
            </div>

            <div className="row start-xs pt pb bb">
              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 center-xs start-sm">
                <img src="/static/img/fbv/MalikWilliams.jpg" alt="Malik Williams Fueled by Verge" title="Malik Williams Fueled by Verge" />
              </div>

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 col-sm-offset-0 center-xs start-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsRight">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/M4_Ville/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Malik Williams' Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/M4_Ville"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Malik Williams' Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">NFL</p>
                  <p className="athleteName">Malik Williams</p>
                  <p className="athleteLocation">Louisville, Kentucky</p>

                  <p>
                    Malik Williams joins Fueled By Verge at the start of his NFL journey after a stellar College career as
                    {' '}
                    Running Back to Lamar Jackson at the University of Louisville. With consistent standout performances -
                    {' '}
                    including a record setting day of 9 carries 180yds and 2 touchdowns vs Syracuse - Lamar had a teammate
                    {' '}
                    he could rely on to get the job done.
                    <br /><br />
                    Malik bolsters our Gridiron credentials and brings his enthusiasm and commitment to the Fueled By Verge cause.
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
                        href="https://www.instagram.com/_rpawildcats/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View RPA College's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/_rpawildcats"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View RPA College's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.facebook.com/RPAWildcats/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View RPA College's Facebook"
                      >
                        <i className="icon icon--facebook" />
                      </a>
                    </Link>

                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/reggiecalhounjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Reggie Calhoun Jr's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/reggiecalhounjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Reggie Calhoun Jr's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.facebook.com/thereggiecalhounjr/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Reggie Calhoun Jr's Facebook"
                      >
                        <i className="icon icon--facebook" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">Football</p>
                  <p className="athleteName">RPA College / Reggie Calhoun Jr</p>
                  <p className="athleteLocation">Arlington, Texas</p>

                  <p className="athleteDescription">
                    Fueled By Verge is all about building community and helping bring together talent for the greater good -
                    {' '}
                    this ethos is mirrored by Reggie Calhoun Jr in his creation of the RPA College.
                    <br /><br />
                    This is a project that brings together future athletes from humble beginnings, whose undoubted skills
                    {' '}
                    might otherwise be lost. But it also teaches core life skills and prepares students with business skills
                    {' '}
                    for when their sports careers come to an end.
                    <br /><br />
                    This resonates with Fueled By Verge in our goal of teaching the clear advantages of blockchain and
                    {' '}
                    informing more people to the clear advantages of adopting a borderless digital currency in XVG.
                    <br /><br />
                    We welcome the RPA College to Fueled By Verge.
                  </p>

                </div>
              </div>

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 col-sm-offset-0 first-xs last-sm center-xs end-sm">
                <img src="/static/img/fbv/RPACollege.jpg" alt="RPA College Fueled by Verge" title="RPA College Fueled by Verge" />
              </div>
            </div>

            <div className="row start-xs pt pb bb">
              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 center-xs start-sm">
                <img src="/static/img/fbv/LewisNeal.jpg" alt="Lewis Neal Fueled by Verge" title="Lewis Neal Fueled by Verge" />
              </div>

              <div className="col-xs-10 col-sm-6 col-md-6 col-xs-offset-1 col-sm-offset-0 center-xs start-sm">
                <div className="AthletesFbvTxtV2">
                  <span className="socialIconsRight">
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.instagram.com/iamlewisneal"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Lewis Neal's Instagram"
                      >
                        <i className="icon icon--instagram" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://twitter.com/IamLewisNeal"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Lewis Neal's Twitter"
                      >
                        <i className="icon icon--twitter" />
                      </a>
                    </Link>
                    <Link>
                      <a
                        className="icon iconlink"
                        href="https://www.facebook.com/LewIsMNeal/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View Lewis Neal's Facebook"
                      >
                        <i className="icon icon--facebook" />
                      </a>
                    </Link>
                  </span>
                  <p className="athleteSport">NFL</p>
                  <p className="athleteName">Lewis Neal</p>
                  <p className="athleteLocation">British Columbia</p>

                  <p>
                    Lewis Neal is mainly known for football, having played in college for the Dallas Cowboys and now for the BC Lions.
                    {' '}
                    He now represents Verge in his sport.
                    <br /><br />
                    But he is much more than an athlete, he is an entrepreneur who tackles challenges head on, with the same drive and dedication that he plays ball.
                    <br /><br />
                    He is Fueled By Verge!
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
                  <p className="athleteLocation">Luxembourg / North Carolina</p>

                  <p className="athleteDescription">
                    Gil is a race car driver and Verge supporter.
                    <br /><br />
                    In 2017, he became the first ever Luxembourgish NASCAR driver while driving the number 44 race car from Caal Racing team in the Whelen Euro Series,
                    {' '}
                    and ended his first season in 9th place overall.
                    <br /><br />
                    More recently, Gill moved to the USA and is now racing in the NASCAR Carolina Pro Late Model Series.
                    <br /><br />
                    Verge and Gil are both ready to tackle mass adoption and spread its awareness and education through racing.
                  </p>

                </div>
              </div>

              <div className="col-xs-10 col-sm-4 col-md-4 col-xs-offset-1 col-sm-offset-0 first-xs last-sm center-xs end-sm">
                <img src="/static/img/fbv/gilLinster.jpg" alt="Gil Linster Fueled by Verge" title="Gil Linster Fueled by Verge" />
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
                    Danny is from Calgary, Alberta, Canada. Although he is only 12 years old, he has an extraordinary 8 years of racing experience.
                    {' '}
                    He can be found training regularly, and has the potential to become a legend in the motocross world, like Ricky Carmichael or Jeremy McGrath.
                    <br /><br />
                    Danny is one of our youngest community members who believes in privacy and the Verge vision, and wants to help the younger generation
                    {' '}
                    acknowledge cryptocurrencies by covering his bike with the Verge brand.
                    {' '}
                    He does not get any compensation for doing so, but sees it as his contribution to bringing awareness and adoption
                    {' '}
                    - he was the initial inspiration for the Fueled by Verge movement.
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
