import Head from 'next/head';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function Mining(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.community-mining.title', { defaultValue: 'Mining - VergeCurrency.com' })}</title>
      </Head>
      <div className="learnmore">
        <div className="container">
          <Content>
            <div className="row">
              <h1>How you can mine Verge with AMD or Nvidia GPU</h1>
              <ul className="mining-guide">
                <strong>X-17</strong>:
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/3139-new-sgminer-5-0-beta-fork-with-x17-algorithm-support/">Sgminer for x17 (Windows AMD)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/LordzS/sgminer-x17">Sgminer-x17 Source Code for Linux (AMD)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/tag/ccminer-alexis-1-0/">ccMiner/alexis (Windows Nvidia)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/tpruvot/ccminer">ccMiner Source Code for Linux</a></li>
                <strong>Blake2s</strong>:
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/tag/ccminer-alexis-1-0/">ccMiner/alexis (Windows Nvidia)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alexis78/ccminer">ccMiner Source Code for Linux</a></li>
                <strong>Lyra2rev2</strong>:
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/4739-new-sgminer-5-1-0-fork-with-optimized-lyra2re-kernel/">Sgminer optimized for Lyra2rev2 (Windows AMD)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/tag/ccminer-alexis-1-0/">ccMiner/alexis (Windows Nvidia)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sgminer-dev/sgminer/tree/master/kernel">Sgminer-dev Source Code for linux</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alexis78/ccminer">ccMiner Source Code for Linux</a></li>
                <strong>Myriad-Groestl</strong>:
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/6139-new-optimized-opencl-kernel-for-myriad-groestl/">Sgminer for Myr-Groestl (Windows AMD)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/tag/ccminer-alexis-1-0/">ccMiner/alexis (Windows Nvidia)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sgminer-dev/sgminer/tree/master/kernel">Sgminer-dev Source Code for linux</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alexis78/ccminer">ccMiner Source Code for Linux</a></li>
                <strong>Scrypt</strong>:
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/tag/ccminer-alexis-1-0/">ccMiner/alexis (Windows Nvidia)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/3139-new-sgminer-5-0-beta-fork-with-x17-algorithm-support/">Sgminer for Scrypt & X-17 (Windows AMD)</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/sgminer-dev/sgminer/">Sgminer-dev Source Code for linux</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/alexis78/ccminer">ccMiner Source Code for Linux</a></li>
                <strong>CPU Mining</strong>:
                <li><a target="_blank" rel="noopener noreferrer" href="http://cryptomining-blog.com/8134-windows-binaries-for-the-cpuminer-opt-3-3-8-cpu-miner/">Cpuminer-opt 3.3.8 (Windows/source) - all algos</a></li>
              </ul>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common'], { i18n, wait: typeof window !== 'undefined' })(Mining);

export default Extended;
