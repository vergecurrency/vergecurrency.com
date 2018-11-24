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
          <script type="text/javascript" src="myscript.js"></script>
          <link rel="stylesheet" type="text/css" href="/static/scss/pages/_fbv.scss" />
      </Head>


<div class="fbvRibbon">
	<img src="static/img/fbv/topBannerRibbon.png" alt="Fueled by Verge" styles="width:100%;"></img>
		<div class="fbvRibbonHeading">Fueled by Verge</div><br />
		<div class="fbvRibbonHeadingSub2">Commitment to massadoption by spreading awareness of cryptocurrencies and Verge.</div>
</div>	

	
<div class="fbvAbout">
	<div class="divTableBody">
		<div class="divTableRow">
			<div class="fbvHeading">About this initiative</div>
		</div>
	</div>
  
  
	<div class="divTableRow">
		<div class="divTableCell">Fueled by Verge is a statement of commitment to massadoption by spreading awareness of cryptocurrencies and Verge, by the VergeFam. It is a worldwide effort from individuals excelling in their unique fields and with it they will spread awareness of what XVG is all about.</div>
	</div>
	<div class="divTableRow">
		<div class="fbvButton"><a href="https://vergecurrency.com/community/send-an-email/">Join the Movement</a></div>
	</div>
</div>


<div class="fbvAthletes">
	<div class="divTableBody">
		<div class="divTableRow">
			<div class="fbvAthletesHeading">Verge Athletes</div>
		</div>
	</div>
</div>

<div class="fbvAthletes">
	<div class="fbvAthletesRow">
		<div class="fbvAthletesColumn"><a href="https://www.instagram.com/141mx/" target="_blank"><img src="static/img/fbv/dannyRobertson.png" alt="Danny Robertson Fueled by Verge" styles="width:100%"></img></a></div>
		<div class="fbvAthletesColumn"><a href="https://www.instagram.com/gillinster/?hl=en" target="_blank"><img src="static/img/fbv/gilLinster.png" alt="Gil Linster Fueled by Verge" styles="width:100%"></img></a></div>
		<div class="fbvAthletesColumn"><a href="https://vergecurrency.com/community/send-an-email/"><img src="static/img/fbv/yourSport.png" alt="Your Sport Fueled by Verge" styles="width:100%"></img></a></div>
	</div>
</div>









<div class="fbvCommunity">
	<div class="divTableBody">
		<div class="divTableRow">
			<div class="fbvCommunityHeading">Fueled by Verge is a community at large <br /> initiative, reflecting the main goal of Verge</div>
		</div>
	</div>
		<div class="divTableRow">
<div class="divTableCell">It is a worldwide effort from individuals excelling in their unique fields, masters of their craft, to share their achievement and with it, build awareness and education of what Verge and blockchain is all about.</div>
		</div>
</div>






<div class="fbvMotoBG">
	<img src="static/img/fbv/motocrossBike.png" alt="Motocross Fueled by Verge"></img>
</div>	



<div class="fbvMotoContent">
	<div class="divTableRow">
			<div class="divTableCell">The goal of #FueledByVerge is to showcase the utility of Verge through sporting events. Verge Currency is the first team that is fueled by Verge, in both design and spirit.<br /><br /> FbV wants to showcase the strength and the community of Cryptocurrency by helping Sponsored individuals showcase Verge. Thus, bringing increased awareness of Verge Currency and cryptocurrencies in general!<br /><br />FbV also wishes to help the athletes by promoting the events, and the important information for these sports people, insuring their fans can follow them. With regards to this, FbV will promote the bio of each individual, as well as their respective sporting schedules and how to find it/where to buy it. All of this culminates increased media presence of our athletes and brand awareness.</div>
	</div>
	<div class="divTableRow">
		<div class="fbvButton"><a href="https://vergecurrency.com/community/send-an-email/">Join the Movement</a></div>
	</div>
</div>
<br /><br /><br />



    </Layout>
  );
}

const Extended = translate(['fbv', 'common'], { i18n, wait: process.browser })(FBV);

export default Extended;
