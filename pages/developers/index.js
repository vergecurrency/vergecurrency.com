import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function Developers_Index(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.installing-rubygems.title', { defaultValue: 'How To Install RubyGems - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>How to install RubyGems:</h1>
              <p>RubyGems is a package management framework for Ruby. Download the latest version here:</p>
              <ul>
                <li><a href="https://rubygems.org/rubygems/rubygems-2.7.6.tgz"> https://rubygems.org/rubygems/rubygems-2.7.6.tgz </a></li>
                <li><a href="https://rubygems.org/rubygems/rubygems-2.7.6.zip"> https://rubygems.org/rubygems/rubygems-2.7.6.zip </a></li>
                <li><a href="https://rubygems.org/gems/rubygems-update-2.7.6.gem"> https://rubygems.org/gems/rubygems-update-2.7.6.gem </a></li>
                <li><a href="https://github.com/rubygems/rubygems"> https://github.com/rubygems/rubygems </a></li>
              </ul>
              <p>
                To upgrade to the latest RubyGems:<br />
                <pre><code>$ gem update --system</code></pre>
                # may need to be administrator or root
              </p>
              <p><strong> NOTE: </strong> RubyGems 1.1 and 1.2 have problems upgrading when there is no rubygems-update installed. You will need to use the following instructions if you see Nothing to update. If you have an older version of RubyGems installed, then you can still do it in two steps:</p>
              <p>
                <pre>
                  <code>
                    $ gem install rubygems-update<br />
                    $ update_rubygems
                  </code>
                </pre>
              </p>
              <p>If you don&#39;t have any RubyGems installed, there is still the pre-gem approach to getting software, doing it manually:</p>
              <ol>
                <li>Download from one of the links listed above</li>
                <li>Unpack into a directory and <strong> cd </strong> there</li>
                <li>Install with ruby <strong> setup.rb </strong> (you may need admin/root privilege</li>
              </ol>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(Developers_Index);

export default Extended;
