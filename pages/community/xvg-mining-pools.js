import Link from 'next/link';
import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';

const MiningPools = () => (
  <Layout>
    <div className="learnmore">
      <div className="container">
        <Content>
          <div className="row">
            <h1>Verge Pools</h1>
            <ul className="pools-list">
              <strong>Scrypt</strong>
		      	  <li><Link href="https://bsod.pw/en/pool/dashboard/xvg/"><a href="https://bsod.pw/en/pool/dashboard/xvg/" target="_blank" rel="noopener noreferrer">[SCRYPT] BSOD.PW</a></Link></li>
              <li><Link href="http://blockmasters.co"><a href="http://blockmasters.co" target="_blank" rel="noopener noreferrer">[SCRYPT] Block Masters</a></Link></li>
              <li><Link href="https://verge-scrypt.miningpoolhub.com/"><a href="https://verge-scrypt.miningpoolhub.com/" target="_blank" rel="noopener noreferrer">[SCRYPT] MiningPoolHub.com</a></Link></li>
              {/* <li><Link href="https://xvg.thecoin.pw/index.php?page=statistics&action=pool"><a href="https://xvg.thecoin.pw/index.php?page=statistics&action=pool" target="_blank" rel="noopener noreferrer">[SCRYPT] TheCoin.pw</a></Link></li> */}
              <li><Link href="http://www.zpool.ca/site/mining"><a href="http://www.zpool.ca/site/mining" target="_blank" rel="noopener noreferrer">[SCRYPT] ZPool</a></Link></li>
              {/*  <li><Link href="http://scrypt.ispace.co.uk/coindetails/?coin=xvg&id=79"><a href="http://scrypt.ispace.co.uk/coindetails/?coin=xvg&id=79" target="_blank" rel="noopener noreferrer">[SCRYPT] iSpace Mining Pools</a></Link></li>*/}
              <li><Link href="https://www.mining-dutch.nl"><a href="https://www.mining-dutch.nl" target="_blank" rel="noopener noreferrer">[SCRYPT] mining-dutch.nl</a></Link></li>
              <li><Link href="http://xvg.mastermining.net/index.php?page=statistics&action=pool"><a href="http://xvg.mastermining.net/index.php?page=statistics&action=pool" target="_blank" rel="noopener noreferrer">[SCRYPT] MasterMining.net</a></Link></li>
              <li><Link href="https://www.multipool.us/dashboard/pool/xvg"><a href="https://www.multipool.us/dashboard/pool/xvg" target="_blank" rel="noopener noreferrer">[SCRYPT] Multipool.us</a></Link></li>
              <strong>Myr-Groestl</strong>
	      		  <li><Link href="https://bsod.pw/en/pool/dashboard/xvg/"><a href="https://bsod.pw/en/pool/dashboard/xvg/" target="_blank" rel="noopener noreferrer">[myr-groestl] BSOD.PW</a></Link></li>
              <li><Link href="https://hashfaster.com/"><a href="https://hashfaster.com/" target="_blank" rel="noopener noreferrer">[myr-groestl] HashFaster </a></Link></li>
              <li><Link href="http://poolovich.pro/"><a href="http://poolovich.pro/" target="_blank" rel="noopener noreferrer">[myr-groestl] Poolovich </a></Link></li>
              <li><Link href="http://xvg-mg.idcray.com/"><a href="http://xvg-mg.idcray.com/" target="_blank" rel="noopener noreferrer">[myr-groestl] IDcray </a></Link></li>
              <li><Link href="https://www.zpool.ca/algo/myr-gr"><a href="https://www.zpool.ca/algo/myr-gr" target="_blank" rel="noopener noreferrer">[myr-groestl] ZPool</a></Link></li>
              <li><Link href="http://antminepool.com"><a href="http://antminepool.com" target="_blank" rel="noopener noreferrer">[myr-groestl] AntMinePool</a></Link></li>
	      <li><Link href="https://www.mining-dutch.nl"><a href="https://www.mining-dutch.nl" target="_blank" rel="noopener noreferrer">[myr-groestl] mining-dutch.nl</a></Link></li>
              <strong>Lyra2Rev2</strong>
	      		  <li><Link href="https://bsod.pw/en/pool/dashboard/xvg/"><a href="https://bsod.pw/en/pool/dashboard/xvg/" target="_blank" rel="noopener noreferrer">[Lyra2REv2] BSOD.PW</a></Link></li>
              <li><Link href="http://blockmasters.co/"><a href="http://blockmasters.co/" target="_blank" rel="noopener noreferrer">[Lyra2Rev2] Block Masters </a></Link></li>
              <li><Link href="http://poolovich.pro/"><a href="http://poolovich.pro/" target="_blank" rel="noopener noreferrer">[Lyra2Rev2] Poolovich </a></Link></li>
              <li><Link href="https://hashfaster.com/"><a href="https://hashfaster.com/" target="_blank" rel="noopener noreferrer">[Lyra2re] HashFaster </a></Link></li>
              <li><Link href="http://xvg-lyra.idcray.com/"><a href="http://xvg-lyra.idcray.com/" target="_blank" rel="noopener noreferrer">[Lyra2re] IDcray </a></Link></li>
              <li><Link href="http://www.zpool.ca/site/mining"><a href="http://www.zpool.ca/site/mining" target="_blank" rel="noopener noreferrer">[Lyra2re] ZPool</a></Link></li>
              <li><Link href="http://antminepool.com"><a href="http://antminepool.com" target="_blank" rel="noopener noreferrer">[Lyra2Rev2] AntMinePool</a></Link></li>
	      <li><Link href="https://www.mining-dutch.nl"><a href="https://www.mining-dutch.nl" target="_blank" rel="noopener noreferrer">[Lyra2Re] mining-dutch.nl</a></Link></li>
              <strong>Blake2s</strong>
              <li><Link href="http://www.zpool.ca/site/mining"><a href="http://www.zpool.ca/site/mining" target="_blank" rel="noopener noreferrer">[Blake2s] ZPool</a></Link></li>
              <li><Link href="https://pool.unimining.net/site/mining"><a href="https://pool.unimining.net/site/mining" target="_blank" rel="noopener noreferrer">[Blake2s] UniMining</a></Link></li>
              <li><Link href="http://antminepool.com"><a href="http://antminepool.com" target="_blank" rel="noopener noreferrer">[Blake2s] AntMinePool</a></Link></li>
              <li><Link href="http://verge.blake2s.com"><a href="http://verge.blake2s.com" target="_blank" rel="noopener noreferrer">[Blake2s] Verge Blake2s</a></Link></li>
              <li><Link href="https://bsod.pw/en/pool/dashboard/xvg/"><a href="https://bsod.pw/en/pool/dashboard/xvg/" target="_blank" rel="noopener noreferrer">[Blake2s] BSOD.PW</a></Link></li>
              <li><Link href="http://nlpool.nl"><a href="http://nlpool.nl" target="_blank" rel="noopener noreferrer">[Blake2s] NLpool.nl</a></Link></li>
              {/*  <li><Link href="http://luckypool.xyz"><a href="http://luckypool.xyz" target="_blank" rel="noopener noreferrer">[Blake2s] LuckyPool</a></Link></li>*/}
              {/*  <li><Link href="https://poolio.mmcs.world/"><a href="https://poolio.mmcs.world/" target="_blank" rel="noopener noreferrer">[Blake2s] pOOlio.mmcs.world</a></Link></li>*/}
	      <li><Link href="https://www.mining-dutch.nl"><a href="https://www.mining-dutch.nl" target="_blank" rel="noopener noreferrer">[Blake2s] mining-dutch.nl</a></Link></li>
              <strong>x17</strong>
			        <li><Link href="https://bsod.pw/en/pool/dashboard/xvg/"><a href="https://bsod.pw/en/pool/dashboard/xvg/" target="_blank" rel="noopener noreferrer">[x17] BSOD.PW</a></Link></li>
              <li><Link href="http://blockmasters.co/"><a href="http://blockmasters.co/" target="_blank" rel="noopener noreferrer">[x17] Block Masters </a></Link></li> 
              <li><Link href="https://hashfaster.com/"><a href="https://hashfaster.com/" target="_blank" rel="noopener noreferrer">[x17] HashFaster </a></Link></li>    
              <li><Link href="http://poolovich.pro/"><a href="http://poolovich.pro/" target="_blank" rel="noopener noreferrer">[x17] Poolovich </a></Link></li>
              {/*  <li><Link href="http://yiimp.eu"><a href="http://yiimp.eu/" target="_blank" rel="noopener noreferrer">[x17] Yiimp</a></Link></li>*/}
              <li><Link href="http://www.zpool.ca/site/mining"><a href="http://www.zpool.ca/site/mining" target="_blank" rel="noopener noreferrer">[x17] ZPool</a></Link></li>
              <li><Link href="http://nlpool.nl"><a href="http://nlpool.nl" target="_blank" rel="noopener noreferrer">[x17] NLPOOL.NL</a></Link></li>
              <li><Link href="http://antminepool.com"><a href="http://antminepool.com" target="_blank" rel="noopener noreferrer">[x17] AntMinePool</a></Link></li>
              {/*  <li><Link href="http://verge.carpecrypto.me/"><a href="http://verge.carpecrypto.me/" target="_blank" rel="noopener noreferrer">[x17] CarpeCrypto Verge Pool</a></Link></li>*/}
	      <li><Link href="https://www.mining-dutch.nl"><a href="https://www.mining-dutch.nl" target="_blank" rel="noopener noreferrer">[X17] mining-dutch.nl</a></Link></li>
              <strong>Multi Algorithm (hash to verge)</strong>
              <li><Link href="https://hash-to-coins.com/index.php"><a href="https://hash-to-coins.com/index.php" target="_blank" rel="noopener noreferrer">Hash to Coins</a></Link></li>
              <li><Link href="https://prohashing.com/"><a href="https://prohashing.com/" target="_blank" rel="noopener noreferrer">ProHashing</a></Link></li>
	      <li><Link href="https://www.mining-dutch.nl"><a href="https://www.mining-dutch.nl" target="_blank" rel="noopener noreferrer">Mining-Dutch.nl</a></Link></li>
            </ul>
          </div>
        </Content>
      </div>
    </div>
  </Layout>
);

export default MiningPools;
