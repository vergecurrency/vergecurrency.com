import ExpandCollapse from 'react-expand-collapse';

export const PartnerInfo = ({ t }) => {
  const options = {
    previewHeight: '6em', // 1 line = 3em => 2 lines
    expandText: 'more',
    collapseText: 'less',
  };

  return (
    <div className="row center-xs pt-large pb">
      <div className="col-xs-11 start-xs exchanges bb">
        <div className="start-sm pb-small">
          <h2>
            {t('home:partnership.intro', {
              defaultValue: 'On our mission for mass adoption,',
            })}{' '}
            {t('home:partnership.subintro', {
              defaultValue: 'we are supported by the following partners:',
            })}
          </h2>
        </div>
        <div className="partners-grid">
          <div>
            <a href="https://www.unstoppabledomains.com/?ref=verge" target="_blank" rel="noreferrer">
              <img src="/static/img/partners/unstoppable.png" alt="Unstoppable Domains" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.unstoppable', {
                defaultValue: `Unstoppable Domains. It's your name. Own it.
                Own your identity in the digital world.
                Get started with an NFT domain.
                `,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://voicelife.io" target="_blank" rel="noreferrer">
              <img src="/static/img/partners/voicelife.png" alt="Voice Life" className="img--smaller" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.voicelife', {
                defaultValue: `
                Voice Life and Verge Currency are excited to announce a strategic alliance to create a new 
                all-in-one payment system. Combining Voice Life’s (FFWCS) smart phone capabilities with 
                VergePAY to design a blockchain based system utilizing Verge Currency (XVG) for daily use activities.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://changenow.io/" target="_blank" rel="noreferrer">
              <img src="/static/img/partners/changenow.png" alt="ChangeNOW" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.changenow', {
                defaultValue: `ChangeNOW provides a non-custodial instant cryptocurrency exchange service, with a 
                focus on maximum safety, simplicity, and convenience. ChangeNOW does not control your crypto assets, 
                store your funds or require any sort of account creation. By partnering with ChangeNOW, Verge holders 
                have access to more than 170 coins available for exchange without limits; you can exchange as much as 
                you want - account-free, worry-free and faster than light. There are also fiat options available - 
                you can buy cryptocurrency with Visa or MasterCard through their third-party partner.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://nowpayments.io/" target="_blank" rel="noreferrer">
              <img src="/static/img/partners/nowpayments.png" alt="NowPayments" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.nowpayments', {
                defaultValue: `NOWPayments is a non-custodial crypto payment gateway. Founded in 2019 by the team 
                behind ChangeNow, a cryptocurrency exchange service. By partnering with Verge, merchants websites, 
                online stores, and social media accounts can now accept payments in XVG. NOWPayments provides many 
                widgets and tools for transactions and donations, and plugins to accept payments online. With low 
                transaction fees, payments can be converted to your chosen cryptocurrency and will be instantly 
                transferred to your wallet..`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://hyperspheretech.com/" target="_blank" rel="noreferrer">
              <img src="/static/img/partners/hypersphere.png" alt="Voice Life" className="img--wider" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.hypersphere', {
                defaultValue: `
                Verge ($XVG) partners with HyperSphere to launch WalletGuard, the world’s first quantum immune cloud based cryptographic wallet protection and recovery service.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://pacquiaofoundation.org/" target="_blank" rel="noreferrer">
              <img src="/static/img/vendors/latest/pacfoundation.png" alt="PAC Foundation" className="img--wider" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.pacfoundation', {
                defaultValue: `
                Named and founded on behalf of future Hall of Fame Boxer Manny Pacquiao, The Manny Pacquiao Foundation 
                seeks to empower communities and individuals through charitable support and a message of hope and change.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://www.travala.com/?ref=vergecurrency">
              <img src="/static/img/vendors/latest/travala.png" alt="Travala" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.travala', {
                defaultValue: `
                Founded in 2017 and now backed by industry-giant Binance, Travala.com is the leading cryptocurrency-friendly 
                travel booking service where you can use XVG to pay for 2,200,000+ properties, 400,000+ activities in 230 countries and 600 airlines globally.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="http://www.meconcash.com/index_en.html">
              <img src="/static/img/vendors/latest/meconcash.png" alt="meconcash" className="img--smaller" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.meconcash', {
                defaultValue: `
                Using the MeconCash platform, M.Pay, Verge holders will be able to instantly withdraw Korean Wons through a whopping 13 000 ATMs in 
                South Korea. This will allow travelers, students and anyone who holds Verge the ability to quickly withdraw their money, 24/7.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <a href="https://sevenb.io/">
              <img src="/static/img/vendors/latest/7b.svg" alt="7b" className="img--smaller" />
            </a>
            <ExpandCollapse {...options}>
              {t('home:partnership.sevenb', {
                defaultValue: `
                7b broker is a painless, user friendly cryptocurrency trading app.
                Whether you want to buy, sell, trade or Hodl your XVG, the 7b app is virtually your personal broker! With fiat options available for even more convenience, you can buy Verge Currency directly with your credit card. Making the 7b app uncomplicated for beginners and providing all the useful trading tools found at any big exchange, but with alot less hassle. The 7b app is completely transparent about all fees with no hidden commissions and provides fast, secure and efficient transactions wrapped up into a straightforward design.`,
              })}
            </ExpandCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};
