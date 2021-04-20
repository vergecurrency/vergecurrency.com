const wallets = [
    {
        href: "https://www.ellipal.com",
        logo: "/static/img/vendors/latest/ellipal.png",
        alt: "Ellipal"
    }
]

export const ColdStorageWalletInfo = ({ t }) =>
    <div className="row center-xs pt">
        <div className="col-xs-11 start-xs exchanges bb">
             <div className="start-sm pb-small">
                <h2>
                    {t('wallets:coldstorage.intro', {
                        defaultValue: 'Cold Storage Wallets',
                    })}
                </h2>
                <h4>{t('wallets:coldstorage.subintro', {
                    defaultValue: 'Cold Storage wallets are not as quickly accessible, but more secure than hot wallets. Ideal for longer term holdings, where security is preferred over convenience.',
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
