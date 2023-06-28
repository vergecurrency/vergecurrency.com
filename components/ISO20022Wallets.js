const wallets = [
    {
        href: "https://github.com/vergecurrency/VergeX/files/11666117/vergex-windows64.zip",
        logo: "/static/img/wallets/windows.svg",
        alt: "VergeX Windows 64bit"
    },
    {
        href: "https://github.com/vergecurrency/VergeX/files/11660120/vergex-linux64.zip",
        logo: "/static/img/wallets/linux.svg",
        alt: "VergeX Linux 64bit"
    },
    {
        href: "https://github.com/vergecurrency/VergeX/",
        logo: "/static/img/wallets/apple.svg",
        alt: "VergeX OSX 64bit"
    }
]

export const ISO20022WalletInfo = ({ t }) =>
    <div className="row center-xs pt">
        <div className="col-xs-11 start-xs exchanges bb">
             <div className="start-sm pb-small">
                <h2>
                    {t('wallets:iso20022.intro', {
                        defaultValue: 'VergeX ISO20022 Application',
                    })}
                </h2>
                <h4>{t('wallets:iso20022.subintro', {
                    defaultValue: 'ISO 20022 is a multi part International Standard prepared by the ISO Technical Committee TC68 Financial Services. It describes a common platform for the development of messages using:  1) a modelling methodology to capture in a syntax-independent way financial business areas, business transactions and associated message flows.  2) a central dictionary of business items used in financial communications.  3) a set of XML and ASN.1 design rules to convert the message models into XML or ASN.1 schemas, whenever the use of the ISO 20022 XML or ASN.1-based syntax is preferred',
                })}
                </h4>
            </div>
            <div className="partners-grid">
                {
                    wallets.map(({ href, alt, logo }) => {
                        return (<div key={logo}>
                            <a href={href}>
                                <img src={logo} alt={alt} title={alt} />
                            </a>
                        </div>)
                    })
                }
            </div>
        </div>
    </div>
