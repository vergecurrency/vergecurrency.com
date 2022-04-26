import Link from 'next/link';
import Head from 'next/head';

import { translate } from 'react-i18next';
import Layout from '../components/Layout';
import Contributors from '../components/Contributors';
import Team from '../components/Team';
import TeamCategory from '../components/TeamCategory';
import TGAdmins from '../components/TGAdmins';

import i18n from '../i18n';

const teamCategories = Object.values(require('../lists/team'));

function VergeTeam (props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">
          {t('common:meta.verge-team.title', {
            defaultValue: 'Verge Team - VergeCurrency.com',
          })}
        </title>
      </Head>
      <div className="about">
        <div className="ribbon ribbon--about">
          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1>{t('verge-team:body.header', { defaultValue: 'Meet the Verge Team' })}</h1>
                  <p dangerouslySetInnerHTML={{ __html: t('common:texts.grassroots', { defaultValue: 'The grassroots culture is what makes Verge <span className="hidden-xs"><br /></span> unique and dynamic.' }) }} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="intro pt-large pb-large pb-xs-0">
          <div className="row center-xs middle-xs">
            <div className="col-xs-10 col-sm-6">
              <h2>
                {t('common:texts.open', { defaultValue: 'Verge Currency is a 100% open-source project, and the global Verge Community represents the manpower driving it forward. Verge is not a company, there was no ICO held upon the launch and no pre-mining took place. All contributors, including the Core Team, are unpaid volunteers who donate their time and energy into the project because they are passionate and believe in Verge.' })}
              </h2>
              <p>
                {t('verge-team:body.text1', { defaultValue: 'Below are just some of the most active community members who form the Core Team.' })}
              </p>
            </div>
          </div>
        </div>
        <div className="team pt-xs pb-large">
          <div className="row center-xs">
            <div className="col-xs-10 col-lg-8">
              {teamCategories.map(team => (
                <TeamCategory {...team}>
                  <Team {...team} />
                </TeamCategory>
              ))}
            </div>
          </div>
        </div>
        <div className="contributors">
          <div className="row center-xs">
            <div className="col-xs-10">
              <div className="row center-xs start-sm">
                <div className="col-xs-12 col-sm-8 col-lg-6 pb-small pb-xs-0">
                  <h2>
                    {t('verge-team:body.text2', { defaultValue: 'Want to contribute to Verge Currency?' })}
                    {' '}
                    <span className="hidden-xs">
                      <br />
                    </span>
                    {t('verge-team:body.text3', { defaultValue: 'Join our community on Github' })}
                  </h2>
                  <p>
                    {t('verge-team:body.text4', { defaultValue: 'Verge is open-source software that is constantly improving due to its many contributors. If you would like to contribute as well, take a look at our Github repositories to see where you could make a difference!' })}
                  </p>
                </div>
                <div className="col-xs-12 col-sm-4 col-lg-6 end-xs">
                  <Link href="https://github.com/vergecurrency?tab=repositories">
                    <a
                      href="https://github.com/vergecurrency?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-tertiary btn-github"
                    >
                      {t('verge-team:body.text5', { defaultValue: 'Go to the Verge repo' })}
                    </a>
                  </Link>
                </div>
                <div className="col-xs-12">
                  <Contributors />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'verge-team'], {
  i18n,
  wait: process.browser,
})(VergeTeam);

export default Extended;
