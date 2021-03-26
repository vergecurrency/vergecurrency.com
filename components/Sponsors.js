const sponsors = [
    {
        href: "https://www.jetbrains.com/?from=vergecurrency",
        logo: "/static/img/sponsors/jetbrains.png",
        alt: "Jetbrains"
    },
    {
        href: "https://go-trex.com/",
        logo: "/static/img/sponsors/gotrex.png",
        alt: "Go Trex"
    },
    {
        href: "https://shelterblue.com/",
        logo: "/static/img/sponsors/shelterblue.png",
        alt: "Shelter Blue"
    },
    {
        href: "https://www.clothingric.com/",
        logo: "/static/img/sponsors/clothingric.png",
        alt: "Clothing RIC"
    },
    {
        href: "https://blockchainbusinessmagazine.com/",
        logo: "/static/img/sponsors/bbm.png",
        alt: "Blockchain Business Magazine"
    },
    {
        href: "https://nownodes.io/",
        logo: "/static/img/sponsors/nownodes.png",
        alt: "Now Nodes"
    }
]

export const SponsorsInfo = ({ t }) =>
    <div className="row center-xs pt-large pb">
        <div className="col-xs-11 start-xs exchanges bb">
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
