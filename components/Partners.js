import ExpandCollapse from 'react-expand-collapse';

export default function PartnerInfo() {
  const options = {
    previewHeight: "50px"
  };

  return <div className="">      
      <div className="">
        <div className="">          
          <table width="100%" border="1" align="center">
          <tr>
            <td width="33%" align="center">
            <p className="">TokenPay</p>
            </td>
            <td width="33%" align="center">
            <p className="">MindGeek</p>
            </td>
            <td width="33%" align="center">
            <p className="">NetCents</p>
            </td>
          </tr>
           <tr>
              <td width="33%">
               <ExpandCollapse {...options}>
                TokenPay was created with the fundamental desire to bridge modern-day financial 
                institutions with the benefits of the blockchain space.  TPAY is an open-sourced, 
                decentralized, and self-verifying payment platform project with a passionate community 
                following with a focus on adoption, decentralization and ease of use for digital currencies
                in todays mixed currency global financial system. 
              </ExpandCollapse>
              </td>
              <td width="33%">
               <ExpandCollapse {...options}>
                MindGeek is a global industry-leading information technology firm headquartered in Luxembourg, 
                with offices in Nicosia, London, Miami, Montreal and Los Angeles.  MindGeek continues to drive 
                the state of technology forward, developing industry-leading solutions enabling faster, more 
                efficient delivery of content every second to millions of customers worldwide.
              </ExpandCollapse>
              </td>
              <td width="33%">
               <ExpandCollapse {...options}>
                NetCents is a next-generation online payment processing platform, offering consumers and merchants 
                online services for managing electronic payments. The Company is focused on capturing the migration 
                from cash to digital currency by utilizing innovative Blockchain Technology to provide payment 
                solutions that are simple to use, secure and worry-free. NetCents has partnered with Verge along 
                with its financial partners, mobile operators, exchanges, etc., to streamline the user experience 
                of transacting online.
               </ExpandCollapse>
              </td>                            
           </tr>
          </table>
        </div>
       </div>
    </div>;
}
