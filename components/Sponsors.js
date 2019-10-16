const sponsors = [
    {
        href: "https://www.jetbrains.com/",
        logo: "/static/img/sponsors/jetbrains.png",
        alt: "jetbrains"
    },
    {
        href: "https://go-trex.com/",
        logo: "/static/img/sponsors/gotrex.png",
        alt: "go trex"
    },
    {
        href: "https://shelterblue.com/",
        logo: "/static/img/sponsors/shelterblue.png",
        alt: "shelter blue"
    },
    {
        href: "https://www.clothingric.com/",
        logo: "/static/img/sponsors/clothingric.png",
        alt: "clothing ric"
    },
    {
        href: "https://blockchainbusinessmagazine.com/",
        logo: "/static/img/sponsors/bbm.png",
        alt: "blockchain business magazine"
    },
    {
        href: "https://nownodes.io/",
        logo: "/static/img/sponsors/nownodes.png",
        alt: "now nodes"
    }
]

export const SponsorsInfo = ({ t }) =>
    <div className="row center-xs pt-large pb">
        <div className="col-xs-10 start-xs exchanges bb">
            <div className="start-sm pb-small">
                <h2>
                    {t('home:sponsors.intro', {
                        defaultValue: 'Mission Supporters',
                    })}
                </h2>
                <h4>{t('home:sponsors.subintro', {
                    defaultValue: 'The following companies and/or individuals have donated a noteworthy amount of money or services to the Verge team because they believe in our vision.',
                })}
                </h4>
            </div>
            <div className="partners-grid">
                {
                    sponsors.map(({ href, alt, logo }) => {
                        return (<div>
                            <a href={href}>
                                <img src={logo} alt={alt} />
                            </a>
                        </div>)
                    })
                }
            </div>
        </div>
    </div>
