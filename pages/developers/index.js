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
        <title key="title">
          {t('common:meta.installing-rubygems.title', { defaultValue: 'How To Install RubyGems - VergeCurrency.com' })}
        </title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>How to install RubyGems:</h1>
              <p>RubyGems is the package manager for Ruby. Download the latest version here:</p>
              <ul>
                <li><a href="https://rubygems.org/pages/download"> https://rubygems.org/pages/download </a></li>
                <li><a href="https://github.com/rubygems/rubygems"> https://github.com/rubygems/rubygems </a></li>
              </ul>
              <p>
                To upgrade to the latest RubyGems (Ruby 3.1+ comes with a recent version already):<br />
                <pre><code>$ gem update --system</code></pre>
                <small>Note: You may need administrator/root privileges.</small>
              </p>
              <p><strong>Important:</strong> If you have an older Ruby version, or issues updating, you can manually update RubyGems:</p>
              <p>
                <pre>
                  <code>
                    $ gem install rubygems-update<br />
                    $ update_rubygems
                  </code>
                </pre>
              </p>
              <p>If you don't have RubyGems installed at all, you can manually set it up:</p>
              <ol>
                <li>Download the latest version from the links above.</li>
                <li>Extract the archive and <strong>cd</strong> into the directory.</li>
                <li>Run <strong>ruby setup.rb</strong> (may require admin/root privileges).</li>
              </ol>
              <p>Note: RubyGems is bundled by default with Ruby 2.5 and higher (including 3.1+), so manual installation is rarely necessary.</p>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(Developers_Index);

export default Extended;
