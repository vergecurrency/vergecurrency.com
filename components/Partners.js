import ExpandCollapse from 'react-expand-collapse';

export const PartnerInfo = ({ t }) => {
  const options = {
    previewHeight: '6em', // 1 line = 3em => 2 lines
    expandText: 'more',
    collapseText: 'less',
  };

  return (
    <div className="row center-xs pt-large pb">
      <div className="col-xs-10 start-xs exchanges bb">
        <div className="start-sm pb-small">
          <h2>
            {t('home:partnership.intro', {
              defaultValue: 'On our mission for mass adoption',
            })}{' '}
            <span className="hidden-xs">
              <br />
            </span>
            {t('home:partnership.subintro', {
              defaultValue: 'we are supported by the following partners:',
            })}
          </h2>
        </div>
        <div className="partners-grid">
          <div>
            <h2 className="">TokenPay</h2>
            <ExpandCollapse {...options}>
              {t('home:partnership.tpay', {
                defaultValue: `TokenPay was created with the fundamental desire to bridge
              modern-day financial institutions with the benefits of the
              blockchain space. TPAY is an open-sourced, decentralized, and
              self-verifying payment platform project with a passionate
              community following with a focus on adoption, decentralization and
              ease of use for digital currencies in todays mixed currency global
              financial system.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <h2 className="">MindGeek</h2>
            <ExpandCollapse {...options}>
              {t('home:partnership.mindgeek', {
                defaultValue: `MindGeek is a global industry-leading information technology firm
                headquartered in Luxembourg, with offices in Nicosia, London,
                Miami, Montreal and Los Angeles. MindGeek continues to drive the
                state of technology forward, developing industry-leading solutions
                enabling faster, more efficient delivery of content every second
                to millions of customers worldwide.`,
              })}
            </ExpandCollapse>
          </div>
          <div>
            <h2 className="">NetCents</h2>

            <ExpandCollapse {...options}>
              {t('home:partnership.netcents', {
                defaultValue: `NetCents is a next-generation online payment processing platform,
                offering consumers and merchants online services for managing
                electronic payments. The Company is focused on capturing the
                migration from cash to digital currency by utilizing innovative
                Blockchain Technology to provide payment solutions that are simple
                to use, secure and worry-free. NetCents has partnered with Verge
                along with its financial partners, mobile operators, exchanges,
                etc., to streamline the user experience of transacting online.`,
              })}
            </ExpandCollapse>
          </div>
        </div>
      </div>
    </div>
  );
};
