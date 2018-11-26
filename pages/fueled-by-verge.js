import React from 'react';

import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function FBV(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.FBV.title', { defaultValue: 'Fueled by Verge - VergeCurrency.com' })}</title>
         <link rel="stylesheet" type="text/css" href="/static/scss/pages/_fbv.scss" />
      </Head>
	  <div class="fbv">
	   <div class="ribbon ribbon--fbv">
		<div class="fbvRibbonHeading">Fueled by Verge</div><br />
		<div class="fbvRibbonHeadingSub2">Commitment to mass adoption by spreading awareness and education of Verge and blockchain technology.</div>
		 <div class="row center-xs middle-xs">
		  <img class="fbvSticker" src="/static/img/fbv/fbv_sticker_logo.png" alt="Fueled by Verge"></img>
		  <img class="fbvBike" src="/static/img/fbv/fbv_ribbon_bike.png" alt="Motocross Bike"></img>
		</div>
	   </div>
	  </div>
	  <div class="intro pt-large pb-large">
	   <div class="row center-xs middle-xs">
		<div class="col-xs-12 col-sm-8">
		 <div class="fbvHeading">About this initiative</div>
		  <p>Fueled by Verge is a statement of commitment to mass adoption by spreading awareness and education of Verge and blockchain technology, by the VergeFam. It is a worldwide effort from individuals excelling in their unique fields and with it they will spread awareness of what Verge is all about.</p>
		  <div class="fbvButton"><a href="https://vergecurrency.com/community/send-an-email/">Join the Movement</a></div>
		 </div>
		</div>
	   </div>
	   <div class="intro pt-large pb-large">
		<div class="container center-xs">
		 <div class="fbvAthletesHeading">Verge Athletes</div>
		 <div class="fbv-grid">
		  <div>
		   <a href="https://www.instagram.com/141mx/" target="_blank"><img src="/static/img/fbv/dannyRobertson.png" alt="Danny Robertson Fueled by Verge"></img></a>
		   <div class="fbv_react-expand-collapse__content" styles="height: 6em;">
		    <div class="fbv_react-expand-collapse__body">
			 <h3>Motosports</h3>
		 	 <h2>Danny Robertson</h2>
			 <h4>Calgary, Canada</h4>
			</div>
		   </div>
	 	  </div>
 		  <div>
		   <a href="https://www.instagram.com/gillinster/?hl=en" target="_blank"><img src="/static/img/fbv/gilLinster.png" alt="Gil Linster Fueled by Verge"></img></a>
		   <div class="fbv_react-expand-collapse__content" styles="height: 6em;">
		    <div class="fbv_react-expand-collapse__body">
		 	 <h3>Racing</h3>
			 <h2>Gil Linster</h2>
			 <h4>Luxembourg</h4>
		    </div>
		   </div>
		  </div>
 		  <div>
		   <a href="https://vergecurrency.com/community/send-an-email/"><img src="/static/img/fbv/yourSport.png" alt="Your Sport Fueled by Verge"></img></a>
		   <div class="fbv_react-expand-collapse__content" styles="height: 6em;">
		    <div class="fbv_react-expand-collapse__body">
			 <h3>Would You Like to Join?</h3>
			 <h2>Contact Us!</h2>
		    </div>
		   </div>
		  </div>
		 </div>
		</div>
	   </div>
	   <div class="intro pt-large pb-large">
		<div class="row center-xs middle-xs">
	 	 <div class="col-xs-12 col-sm-8">
		  <div class="fbvCommunityHeading">Fueled by Verge is a community at large <br /> initiative, reflecting the main goal of Verge</div>
		   <p>It is a worldwide effort from individuals excelling in their unique fields, masters of their crafts, and to share their achievements. With this, we can build awareness and education of what Verge and blockchain is all about.</p>
		 </div>
		 <div class="center-xs col-xs-12 col-sm-8">
		  <div class="fbvMotoBike"></div>
		   <img src="/static/img/fbv/motocrossBike.png"></img>
		 </div>
  		 <div class="col-xs-12 col-sm-8">
		  <p>The goal of #FueledByVerge is to showcase the utility of Verge through events. Our Verge Currency team is the first team that is fueled by Verge, in design, and spirit. <br /><br />
      	   FbV wants to showcase the strength and the community of Cryptocurrency by helping Sponsored individuals showcase Verge. Thus bringing increased awareness of Verge Currency and blockchain technology in general. <br /><br />
		   FbV also wishes to help people - by promoting their events, and any other important information for these people. This helps them recieve supporting fans and these fans following them. With regards to this, FbV will promote their bios, as well as their respective schedules and how to find it/where to buy them.  All to increase media presence and brand awareness. </p>
		   <div class="fbvButton"><a href="https://vergecurrency.com/community/send-an-email/">Join the Movement</a></div>
		 </div>
		</div>
	   </div>

<br /><br /><br />

    </Layout>
  );
}

const Extended = translate(['fbv', 'common'], { i18n, wait: process.browser })(FBV);

export default Extended;
