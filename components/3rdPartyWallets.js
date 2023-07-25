const wallets = [
    {
        href: "https://walletnow.app.link/get",
        logo: "/static/img/wallets/3rdparty/now-wallet.png",
        alt: "NOW Wallet"
    },
	{
        href: "https://www.coinomi.com/",
        logo: "/static/img/wallets/3rdparty/coinomi.png",
        alt: "Coinomi"
    },
    {
        href: "https://guarda.com/",
        logo: "/static/img/wallets/3rdparty/guarda.png",
        alt: "Guarda"
    },
    {
        href: "https://www.investvoyager.com/",
        logo: "/static/img/wallets/3rdparty/voyager.png",
        alt: "Voyager"
    },
	{
        href: "https://atomicwallet.io/komodo-wallet",
        logo: "/static/img/wallets/3rdparty/komodo-wallet-logo_black.png",
        alt: "Komodo"
    }
]

export const ThirdPartyWalletInfo = ({ t }) =>
    <div className="row center-xs pt pb-large">
        <div className="col-xs-11 start-xs exchanges bb">
             <div className="start-sm pb-small">
                <h2>
                    {t('wallets:thirdparty.intro', {
                        defaultValue: '3rd Party Wallets',
                    })}
                </h2>
                <h4>{t('wallets:thirdparty.subintro', {
                    defaultValue: 'You can also store your XVG in the following 3rd party wallets.',
                })}
                </h4>
                <p className="wallet-warning">{t('wallets:thirdparty.warning', {
                    defaultValue: 'Verge Currency provides the list of wallets below for your information, but does not endorse nor support their usage. There is always a trade-off between convenience and security. Research thoroughly before using any wallet or solution.'
                })}
                </p>
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
