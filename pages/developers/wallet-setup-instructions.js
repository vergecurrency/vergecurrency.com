import React from 'react';

import Link from 'next/link';

import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

import { translate } from 'react-i18next';
import i18n from '../../i18n';

function Vendor_Integration(props) {
  const { t } = props;

  return (
    <Layout>
      <div className="learnmore pt-lg">
        <div className="container">
          <Content>
            <div className="rubygems">
              <h1>{t('wallet-setup:title', { defaultValue: 'Wallets' })}</h1>
              <p>{t('wallet-setup:line-001', { defaultValue: 'Binary (pre-compiled) wallets are available on all platforms at VergeCurrency.com.' })}</p>
              <p className="note">
                {t('wallet-setup:line-002', { defaultValue: 'Note: Important! Only download pre-compiled wallets from the official Verge website or official Github repos.' })}<br />
                {t('wallet-setup:line-003', { defaultValue: 'Note: For a fresh wallet install you can reduce the blockchain syncing time by downloading a nightly snapshot and following the setup instructions.' })}
              </p>
              {t('wallet-setup:line-004', { defaultValue: 'Nightly snapshot' })}:&nbsp;
              <Link href="https://verge-blockchain.com/down">
                <a href="https://verge-blockchain.com/down" rel="noopener noreferrer">https://verge-blockchain.com/down</a>
              </Link><br />
              {t('wallet-setup:line-005', { defaultValue: 'Setup instructions' })}:&nbsp;
              <Link href="https://verge-blockchain.com/howto">
                <a href="https://verge-blockchain.com/howto" rel="noopener noreferrer">https://verge-blockchain.com/howto</a>
              </Link>
              <h2>{t('wallet-setup:line-006', { defaultValue: 'Windows Wallet Usage' })}</h2>
              <ol>
                <li>{t('wallet-setup:line-007', { defaultValue: 'Download the pre-compiled software.' })}</li>
                <li>{t('wallet-setup:line-008', { defaultValue: 'Install' })}</li>
                <li>{t('wallet-setup:line-009', { defaultValue: 'In windows file explorer, open c:\\Users\\XXX\\AppData\\Roaming\\VERGE (be sure to change XXX to your windows user)' })}</li>
                <li>{t('wallet-setup:line-010', { defaultValue: 'Right click and create a new file verge.txt' })}</li>
                <li>
                  {t('wallet-setup:line-011', { defaultValue: 'Edit the file to have the following contents (be sure to change the password)' })}
                  <pre>
                    <code>
                      rpcuser=vergerpcusername<br />
                      rpcpassword=85CpSuCNvDcYsdQU8w621mkQqJAimSQwCSJL5dPT9wQX<br />
                      rpcport=20102<br />
                      port=21102<br />
                      daemon=1<br />
                      algo=groestl
                    </code>
                  </pre>
                </li>
                <li>{t('wallet-setup:line-012', { defaultValue: 'Save and close the file' })}</li>
                <li>{t('wallet-setup:line-013', { defaultValue: 'Rename the file to verge.conf' })}</li>
                <li>{t('wallet-setup:line-014', { defaultValue: 'Start the VERGE-qt program.' })}</li>
                <li>
                  {t('wallet-setup:line-015', { defaultValue: 'Open up VERGE-qt console and run getinfo (or getmininginfo) to verify settings.' })}<br />
                  <span className="note">{t('wallet-setup:line-016', { defaultValue: 'Note: You must re-start the wallet after making changes to verge.conf.' })}</span>
                </li>
              </ol>
              <h2>{t('wallet-setup:line-017', { defaultValue: 'OS X Wallet Usage' })}</h2>
              <ol>
                <li>{t('wallet-setup:line-018', { defaultValue: 'Download the pre-compiled software.' })}</li>
                <li>{t('wallet-setup:line-019', { defaultValue: 'Double click the DMG' })}</li>
                <li>{t('wallet-setup:line-020', { defaultValue: 'Drag the Verge-Qt to your Applications folder' })}</li>
                <li>
                  {t('wallet-setup:line-021', { defaultValue: 'Install required boost dependency via homebrew' })}
                  <pre>
                    <code>
                      xcode-select --install<br />
                      ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;<br />
                      brew doctor<br />
                      brew install boost
                    </code>
                  </pre>
                </li>
                <li>{t('wallet-setup:line-022', { defaultValue: 'Double click the Verge-Qt application to open it.' })}</li>
                <li>{t('wallet-setup:line-023', { defaultValue: 'Go grab a ☕️ while it syncs with the blockchain' })}</li>
                <li>{t('wallet-setup:line-024', { defaultValue: 'Note: It may look like it is frozen or hung while it is indexing and syncing the blockchain. It\'s not. It\'s chugging away, but currently the UI doesn\'t give you a lot of feedback on status. We\'re working to fix that. Syncing takes a while to complete (ie. > 10 minutes or more) so just be patient.' })}</li>
                <li>{t('wallet-setup:line-025', { defaultValue: 'Note: If you want to change your configuration the file is located at ~/Library/Application\\ Support\\VERGE\\VERGE.conf. This isn\'t required by default.' })}</li>
              </ol>
              <h2>{t('wallet-setup:line-026', { defaultValue: 'Linux Wallet' })}</h2>
              <ol>
                <li>
                  <Link href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-linux.md">
                    <a href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-linux.md" target="_blank" rel="noopener noreferrer">
                      {t('wallet-setup:line-027', { defaultValue: 'Compile using linux instructions.' })}
                    </a>
                  </Link>
                </li>
                <li>{t('wallet-setup:line-028', { defaultValue: 'The wallet GUI is in ./verge/src/qt and the daemon in ./verge/src.' })}</li>
                <li>
                  {t('wallet-setup:line-029', { defaultValue: 'Optional - the binaries to your favorite location. for use by all users, run the following commands:' })}
                  <pre>
                    <code>
                      sudo cp src/VERGEd /usr/bin/<br />
                      sudo cp src/qt/VERGE-qt /usr/bin/<br />
                      Run ./VERGEd from wherever you put it. The output from this command will tell you that you need to make a VERGE.conf file and will suggest some good starting values.<br />
                      Open up your new config file that was created in your home directory in your favorite text editor<br />
                      nano ~/.VERGE/VERGE.conf<br />
                      Paste the output from the VERGEd command into the VERGE.conf like this: (It is recommended to change the password to something unique.)<br />
                      rpcuser=vergerpcusername<br />
                      rpcpassword=85CpSuCNvDcYsdQU8w621mkQqJAimSQwCSJL5dPT9wQX<br />
                      rpcport=20102<br />
                      port=21102<br />
                      daemon=1<br />
                      algo=groestl
                    </code>
                  </pre>
                </li>
                <li>{t('wallet-setup:line-030', { defaultValue: 'Save the file and exit your editor. If using nano type ctrl + x on your keyboard and the y and hitting enter. This should have created a VERGE.conf file with what you just added.' })}</li>
                <li>
                  {t('wallet-setup:line-031', { defaultValue: 'Start the Verge daemon again' })}
                  <pre>
                    <code>
                      ./path/to/VERGEd
                    </code>
                  </pre>
                </li>
              </ol>
              <p className="note">
                {t('wallet-setup:line-032', { defaultValue: 'Note: To check the status of how much of the blockchain has been downloaded (aka synced) type ./path/to/VERGEd getinfo.' })}<br />
                {t('wallet-setup:line-033', { defaultValue: 'Note: If you see something like \'Killed (program cc1plus)\' run dmesg to see the error(s)/problems(s). This is most likely caused by running out of resources. You may need to add some RAM or add some swap space.' })}
              </p>
              <Link href="https://www.youtube.com/watch?v=WYe75b6RWes">
                <a href="https://www.youtube.com/watch?v=WYe75b6RWes" target="_blank" rel="noopener noreferrer">
                  {t('wallet-setup:line-034', { defaultValue: 'You can also check out this Linux Wallet Video Tutorial.' })}
                </a>
              </Link>
              <h2>{t('wallet-setup:line-035', { defaultValue: 'Building From Source' })}</h2>
              <ul>
                <li>
                  <Link href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-linux.md">
                    <a href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-linux.md" target="_blank" rel="noopener noreferrer">
                      {t('wallet-setup:line-036', { defaultValue: 'Linux Instructions' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-osx.md">
                    <a href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-osx.md" target="_blank" rel="noopener noreferrer">
                      {t('wallet-setup:line-037', { defaultValue: 'OS X Instructions' })}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-win.md">
                    <a href="https://github.com/vergecurrency/VERGE/blob/master/doc/build-verge-win.md" target="_blank" rel="noopener noreferrer">
                      {t('wallet-setup:line-038', { defaultValue: 'Windows Instructions' })}
                    </a>
                  </Link>
                </li>
              </ul>
              <h2>{t('wallet-setup:line-039', { defaultValue: 'Developer Notes' })}</h2>
              <h3>{t('wallet-setup:line-040', { defaultValue: 'The Easy Method:' })}</h3>
              <p className="note">
                {t('wallet-setup:line-041', { defaultValue: 'Note: Sometimes linux user permissions are not set up properly, and causes failed compiling in linux. Please ensure your user has access or do the install from root if these problems arise.' })}
              </p>
              <pre>
                <code>
                  sudo rm -Rf ~/VERGE  #(if you already have it)<br />
                  sudo apt-get -y install git && cd ~ && git clone https://github.com/vergecurrency/VERGE && cd VERGE && sh go.sh
                </code>
              </pre>
              <h3>{t('wallet-setup:line-042', { defaultValue: 'The slightly longer version:' })}</h3>
              <p>
                {t('wallet-setup:line-043', { defaultValue: 'Install the dependencies. Note: If you are on debian, you will also need to apt-get install libcanberra-gtk-module.' })}
              </p>
              <pre>
                <code>
                  sudo add-apt-repository ppa:bitcoin/bitcoin<br />
                  sudo apt-get update<br />
                  sudo apt-get install \<br />
                  libdb4.8-dev libdb4.8++-dev build-essential \<br />
                  libtool autotools-dev automake pkg-config libssl-dev libevent-dev \<br />
                  bsdmainutils git libboost-all-dev libminiupnpc-dev libqt5gui5 \<br />
                  libqt5core5a libqt5dbus5 libevent-dev qttools5-dev \<br />
                  qttools5-dev-tools libprotobuf-dev protobuf-compiler libqrencode-dev \<br />
                  libseccomp-dev libcap-dev
                </code>
              </pre>
              <p>{t('wallet-setup:line-044', { defaultValue: 'Clone the git repository and compile the daemon and gui wallet:' })}</p>
              <pre>
                <code>
                  git clone https://github.com/vergecurrency/verge && cd verge && ./autogen.sh && ./configure && make
                </code>
              </pre>
              <p className="note">{t('wallet-setup:line-045', { defaultValue: 'Note: If you get a "memory exhausted" error, make a swap file.' })}</p>
              <Link href="https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04">
                <a href="https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04" target="_blank" rel="noopener noreferrer">
                  (https://www.digitalocean.com/community/tutorials/how-to-add-swap-space-on-ubuntu-16-04)
                </a>
              </Link>
              <h3>{t('wallet-setup:line-046', { defaultValue: 'Mac OS X Wallet' })}</h3>
              <p className="note">{t('wallet-setup:line-047', { defaultValue: 'Note: This has only been confirmed to work on OS X Sierra (10.12) and OS X High Sierra (10.13) with XCode 9.2 and Apple LLVM version 9.0.0 (clang-900.0.39.2).' })}</p>
              <ol>
                <li>
                  {t('wallet-setup:line-048', { defaultValue: 'Ensure you have mysql and boost installed.' })}
                  <pre>
                    <code>
                      brew install mysql boost
                    </code>
                  </pre>
                </li>
                <li>
                  {t('wallet-setup:line-049', { defaultValue: 'Ensure you have python 2.7 installed and in your path (OS X comes with this by default)' })}
                  <pre>
                    <code>
                      python --version
                    </code>
                  </pre>
                </li>
                <li>
                  {t('wallet-setup:line-050', { defaultValue: 'Export the required environment variables' })}
                  <pre>
                    <code>
                      export VERGE_PLATFORM=&squo;mac&squo;<br />
                      export CXX=clang++<br />
                      export CC=clang
                    </code>
                  </pre>
                </li>
                <li>
                  {t('wallet-setup:line-051', { defaultValue: 'Run your build commands' })}
                  <pre>
                    <code>
                      ./building/common.sh<br />
                      ./building/mac/requirements.sh<br />
                      ./building/mac/build.sh
                    </code>
                  </pre>
                </li>
                <li>{t('wallet-setup:line-052', { defaultValue: 'Grab a ☕️ and wait it out' })}</li>
                <li>
                  {t('wallet-setup:line-053', { defaultValue: 'Create the .dmg file' })}
                  <pre>
                    <code>
                      ./building/mac/dist.sh
                    </code>
                  </pre>
                </li>
              </ol>
            </div>
          </Content>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['wallet-setup'], { i18n, wait: process.browser })(Vendor_Integration);

export default Extended;
