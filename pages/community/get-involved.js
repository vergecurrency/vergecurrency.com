import Head from 'next/head';
import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';
import { translate } from 'react-i18next';
import i18n from '../../i18n';

function GetInvolved (props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.get-involved.title', { defaultValue: 'Get Involved - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <p>
                <strong>Verge Ambassador Program</strong>
              </p>
              <p>
                The main goal of the Verge Ambassador Program is to educate and engage blockchain enthusiasts
                by providing them with the tools and community support they need to help Verge currency grow.
                Many (existing) community members may be willing to support Verge but are not sure where to
                start. That’s where the ambassador program comes in, this group of individuals share a similar
                passion when it comes to expanding the Verge ecosystem, sharing knowledge and educating
                others in the field of blockchain technology, and in particular, Verge currency.
              </p>
              <p>
                <strong>Ambassador Departments</strong>
              </p>
              <p>
                <ul>
                  <li>
                    <p>
                      Development - This department mainly helps with the development of Verge code and
                      keeping the Verge network secure. All the new ambassadors will work in tandem with the
                      Verge core team, which will help them to ask the right questions and come up with great
                      new ideas.
                    </p>
                  </li>
                  <li>
                    <p>
                      Outreach - This department focuses mainly on interacting with the community and
                      identifying new businesses opportunities like approaching new companies and
                      exchanges. Ambassadors can write to companies and pursue them to accept XVG as a
                      payment.
                    </p>
                  </li>
                  <li>
                    <p>
                      Marketing - This team comes up with the best strategies on how to market verge
                      currency, study the latest trends in social media, analyze exciting ideas and opportunities.
                      Apart from all these, this team is also responsible for content creation which will be
                      shared through all the official channels.
                    </p>
                  </li>
                  <li>
                    <p>
                      Graphics &amp; Design - This team closely collaborates with all the other departments to
                      create any graphic and visual aids necessary to support new announcements and
                      partnerships. Ambassadors are free to design any additional content or help other
                      ambassadors with their work.
                    </p>
                  </li>
                </ul>
              </p>
              <p>
                If you are the kind of person who wants to contribute to the Verge Currency and has some
                innovative ideas, feel free to write us at ambassador@vergecurrency.com.
              </p>
              <p><strong>
                Join the Verge Ambassador Program!
                <br />
                <a href='https://medium.com/vergecurrency/verge-ambassador-program-dfe1f92a480f'>https://medium.com/vergecurrency/verge-ambassador-program-dfe1f92a480f</a>
              </strong>
              </p>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(GetInvolved);

export default Extended;
