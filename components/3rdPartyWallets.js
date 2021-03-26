const wallets = [
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
        href: "https://atomicwallet.io/",
        logo: "/static/img/wallets/3rdparty/atomicwallet.png",
        alt: "Atomic"
    },
    {
        href: "https://www.xcelpay.io/",
        logo: "/static/img/wallets/3rdparty/xcelpay.png",
        alt: "XcelPay"
    }
]

export const ThirdPartyWalletInfo = ({ t }) =>
    <div className="row center-xs pt-large pb">
        <div className="col-xs-11 start-xs exchanges bb">
             <div className="start-sm pb-small">
                <h2>
                    {t('home:thirdparty.intro', {
                        defaultValue: '3rd Party Wallets',
                    })}
                </h2>e
                <h4>{t('home:thirdparty.subintro', {
                    defaultValue: 'You can also store your XVG in the following 3rd party wallets.',
                })}
                </h4>
                <p className="wallet-warning">{t('home:thirdparty.warning', {
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
