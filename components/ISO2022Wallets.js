const wallets = [
    {
        href: "https://github.com/vergecurrency/VergeX/files/11666117/vergex-windows64.zip",
        logo: "/static/img/wallets/windows.svg",
        alt: "VergeX Windows 64bit"
    }
]

export const ISO20022WalletInfo = ({ t }) =>
    <div className="row center-xs pt">
        <div className="col-xs-11 start-xs exchanges bb">
             <div className="start-sm pb-small">
                <h2>
                    {t('wallets:iso20022.intro', {
                        defaultValue: 'VergeX ISO20022 Wallets',
                    })}
                </h2>
                <h4>{t('wallets:iso20022.subintro', {
                    defaultValue: 'VergeX makes sending ISO20022 compliant transactions over the Verge blockchain easy!',
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
