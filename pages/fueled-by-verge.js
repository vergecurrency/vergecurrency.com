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


	 
	  




<div class="container-fbv-header"> 


	<div class="fbvHeaderBG">
		<div class="intro pb-large">
			<div class="row center-xs">
				<div class="container">
					<div class="fbvRibbonHeading"><br /><br /><br /><br />Fueled by Verge</div>
					<div class="fbvRibbonHeadingSub2">Commitment to mass adoption through Verge Currency</div>
				</div>
			</div>


			<div class="row center-xs">
					<img src="/static/img/fbv/fbv_sticker_logo.png" height="235" width="235" class="Fbvimage1"/>
					<img src="/static/img/fbv/fbv_ribbon_bike.png" class="Fbvimage1"/>
					<img src="/static/img/fbv/fbvStickerBike.png" height="1542" width="516" class="Fbvimage2"/>
				</div>
			</div>
		</div>
	</div>

	











<div class="container-fbv-about"> 

	<div class="fbvAboutBG">
		<div class="intro pt-large pb-large">
			<div class="row center-xs middle-xs">
				<div class="container">
					<div class="col-xs-12 col-lg-12">
						<div class="fbvHeading">About this initiative</div>
						<div class="fbvText">Fueled by Verge is a statement of commitment to mass adoption by educating and spreading awareness of blockchain technology and Verge Currency by the #VergeFam.</div> 
						<div class="fbvButton"><a href="https://goo.gl/forms/pd1EyEneXY6d4WU82">Join the Movement</a></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>





<div class="container"> 
	   
	<div class="intro pt-large pb-large">
		<div class="container center-xs">
			<div class="fbvAthletesHeading">Verge Athletes</div>

				<div class="fbv-grid">
		  			<div>
		 				<div class="AthletesFbv1">
		  				  <a href="https://www.instagram.com/141mx/" target="_blank"><img src="/static/img/fbv/dannyRobertson.png" alt="Danny Robertson Fueled by Verge"></img>
							<div class="AthletesFbvTxt1"> 
								<p class="athleteSport">Motocross</p>
								<p class="athleteName">Danny Robertson</p>
								<p class="athleteLocation">Calgary, Canada</p>
							</div>
						 </a>
						</div>
	 	  			</div>

 		 			<div>
						<div class="AthletesFbv1">
		 				  <a href="https://www.instagram.com/gillinster/?hl=en" target="_blank"><img src="/static/img/fbv/gilLinster.png" alt="Gil Linster Fueled by Verge"></img>
		 					<div class="AthletesFbvTxt1">
							 	<p class="athleteSport">Nascar</p>
								<p class="athleteName">Gil Linster</p>
								<p class="athleteLocation">Luxembourg</p>
			 				</div>
						  </a>
		  				</div>
		 			</div>
 		 			
					<div>
		   				<div class="AthletesFbv1">
		   				  <a href="https://goo.gl/forms/pd1EyEneXY6d4WU82"><img src="/static/img/fbv/yourSport.png" alt="Your Sport Fueled by Verge"></img>
							<div class="AthletesFbvTxt1">
			 					<p class="athleteName">Would You Like to Join?</p>
								<p class="athleteLocation">Contact Us!</p>
		   		 			</div>
						  </a>
		  				</div>
		 			</div>
		</div>
	</div>




		<div class="intro pt-large pb-large">
	  		<div class="row center-xs middle-xs">
				<div class="col-xs-12 col-lg-7">
					 <div class="fbvCommunityHeading">Fueled by Verge is a community at large initiative, reflecting the main goal of Verge</div>
					 <div class="fbvText">It is a worldwide effort from individuals excelling in their unique fields, masters of their crafts, sharing their achievements. With this, we can build awareness and educate what Verge and blockchain technology is all about.</div> 
				</div>
			</div>

			<div class="row center-xs middle-xs">
				<div class="col-xs-12 col-lg-8">
					<img src="/static/img/fbv/motocrossBike.png"></img>
				</div>
			</div>


			<div class="row center-xs middle-xs">
				<div class="col-xs-12 col-lg-8">
				<div class="fbvTextLeftAlignment">The goal of #FueledByVerge is to showcase the utility of Verge through events by its community. Our Verge Currency team is the first team that is "Fueled by Verge" in both design and spirit. <br /><br />
		  		 FbV wants to showcase the strength and community of Verge by helping Sponsored individuals, thus bringing increased awareness of Verge Currency in general. <br /><br />
		  		 FbV also wishes to help people by promoting their events and achievements.  This will allow them to gain more support as an individual or team from the project they believe in.  FbV will promote their bios, event schedules, and how to find them. All of this will be done to increase media presence and brand awareness.</div>
		 		<div class="fbvButton"><a href="https://goo.gl/forms/pd1EyEneXY6d4WU82">Join the Movement</a></div>				</div>
			</div>
	   </div>
	</div>

</div>
	   
<br /><br /><br />

    </Layout>
  );
}

const Extended = translate(['fbv', 'common'], { i18n, wait: process.browser })(FBV);

export default Extended;
