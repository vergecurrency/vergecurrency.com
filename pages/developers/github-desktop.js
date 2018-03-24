import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function GithubDesktop(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.github-desktop.title', { defaultValue: 'Installing GitHub Desktop - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>Installing GitHub Desktop</h1>
              <p><strong>OS X</strong></p>
              <p>How to install GitHub Desktop on OS X 10.9 or later.</p>
              <ol>
                <li>Visit the&nbsp;<a href="https://desktop.github.com/">GitHub Desktop download page</a>.</li>
                <li>Choose&nbsp;<strong>Download for Mac</strong>.</li>
                <li>In your computer&#39;s&nbsp;<strong>Downloads</strong>&nbsp;folder, double-click the&nbsp;<strong>GitHub Desktop</strong>&nbsp;zip file.</li>
                <li>After the file has been unzipped, double-click&nbsp;<strong>GitHub Desktop</strong>.</li>
              </ol>
              <p><strong>Windows</strong></p>
              <p>How to install GitHub Desktop on Microsoft Windows 7 or later.</p>
              <p><strong>Warning</strong>: You must have a 64-bit operating system to run GitHub Desktop.</p>
              <ol>
                <li>Visit the&nbsp;<a href="https://desktop.github.com/">GitHub Desktop download page</a>.</li>
                <li>Choose&nbsp;<strong>Download for Windows</strong>.</li>
              </ol>
              <p><strong>Note:</strong>&nbsp;If you are a network administrator, you can use the&nbsp;<a href="https://help.github.com/desktop/guides/getting-started-with-github-desktop/about-the-github-desktop-windows-installer-package/">GitHub Desktop Windows installer package</a>&nbsp;to deploy GitHub Desktop.</p>
              <ol>
                <li>In your computer&#39;s&nbsp;<strong>Downloads</strong>&nbsp;folder, double-click&nbsp;<strong>GitHub Desktop</strong>.</li>
                <li>In the pop-up window, click&nbsp;<strong>Install</strong>.</li>
                <li>After the program has been installed, click&nbsp;<strong>Run</strong>.</li>
              </ol>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(GithubDesktop);

export default Extended;
