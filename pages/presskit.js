import Link from 'next/link';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

const Presskit = function (props) {
  const { t } = props;

  return (
    <Layout>
      <div className="presskit">
        <div className="ribbon ribbon--presskit">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1 dangerouslySetInnerHTML={{ __html: t("presskit:ribbon.title") }}></h1>
                  <p>{t("presskit:ribbon.text")}</p>
                  <Link href="/">
                    <a className="btn btn-primary">{t("presskit:ribbon.buttonPrimary")}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container white-container white-container--press">
          <div className="row center-xs">
            <div className="col-xs-9 col-sm-10">
              <div className="row between-xs">
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3>{t('common:reason-1.title', { defaultValue: 'A cryptocurrency designed for everyday use.' })}</h3>
                  <p>{t('common:reason-1.text', { defaultValue: 'Improving upon the original Bitcoin blockchain and aims to fulfill its initial purpose.' })}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3>{t('common:reason-2.title', { defaultValue: 'Bringing blockchain into everyday life.' })}</h3>
                  <p>{t('common:reason-2.text', { defaultValue: 'Verge currency makes it possible to engage in direct transactions.' })}</p>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <h3>{t('common:reason-3.title', { defaultValue: 'Open Source Development & Community Driven.' })}</h3>
                  <p>{t('common:reason-3.text', { defaultValue: 'Verge is not a private company funded by pre-mined coins or ICO\'s.' })}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="white-container">
          <div className="container pt pb">
            <div className="row center-xs">
              <div className="col-xs-10">
                <div className="start-xs">
                  <h2>{t('presskit:coverage.title', { defaultValue: 'Press kit' })}</h2>
                  <p>{t('presskit:coverage.text', { defaultValue: 'This is our press kit for media coverage that you can use. We would please ask you to  not alter our logo in any way. We prepared guidelines to help you use Verge brand and assets, including our logo, fonts, and colour palettes.' }) }</p>

                  <h2>{t('presskit:logo.title', { defaultValue: 'Verge logo' })}</h2>
                  <p>{t('presskit:logo.text', { defaultValue: 'You can use the Verge logos to link to vergecurrency.com and to attach it to a blog post, news article, or press release about Verge.' })}</p>
                </div>
                <div className="row center-xs pt pb logos">
                  <div className="col-xs-12 col-sm-10">
                    <div className="row around-xs middle-xs">
                      <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive" src="https://placehold.it/1600x800" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive" src="https://placehold.it/1600x800" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive" src="https://placehold.it/800x800" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive" src="https://placehold.it/1600x800" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive" src="https://placehold.it/1200x800" />
                      </div>
                      <div className="col-xs-12 col-sm-4" />
                      <div className="col-xs-12 col-sm-4">
                        <Link href="">
                          <a className="btn btn-primary btn-primary--on-white-bg">{t('presskit:logo.download', { defaultValue: 'Download logo here' })}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="start-xs">
                  <h2>{t('presskit:font.title', { defaultValue: 'Brand font' })}</h2>
                  <p>{t('presskit:font.text', { defaultValue: 'The official font used in Verge Currency branding is Avenir Next Regular.' })}</p>
                  <p><Link href="/"><a>{t('presskit:font.download', { defaultValue: 'Download font here' })}</a></Link>.</p>
                  <p className="pt">{t('presskit:colors', { defaultValue: 'The colors that are used for the logo and style elements:' })}</p>
                </div>
                <div className="row center-xs pt pb colors">
                  <div className="col-xs-12">
                    <div className="row around-xs middle-xs">
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--black">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Black</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #000000
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              0, 0, 0
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              91, 79, 62, 97
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--white">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>White</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #FFFFFF
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              255, 255, 255
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              0, 0, 0, 0
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--pacific-blue-1">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Pacific Blue 1</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #0095C1
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              0, 149, 193
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              79, 24, 14, 1
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--picton-blue">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Picton Blue</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #4CC2F1
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              76, 194, 241
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              63, 0, 0, 0
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--allports">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Allports</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #006994
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              0, 105, 148
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              0, 0, 0, 0
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--blizzard-blue">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Blizzard Blue</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #DBEFF8
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              219, 239, 248
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              17, 0, 3, 0
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--astronaut-blue">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Astronaut Blue</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #003D58
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              0, 61, 88
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              100, 0, 0, 75
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--venice-blue">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide"></div>
                          <div className="col-xs-12">
                            <p><strong>Venice Blue</strong></p>
                          </div>
                          <div className="col-xs-5">
                            <p>
                              <small>HEX</small><br />
                              #075A7F
                            </p>
                          </div>
                          <div className="col-xs-7">
                            <p>
                              <small>RGB</small><br />
                              7, 90, 127
                            </p>
                          </div>
                          <div className="col-xs-12">
                            <p>
                              <small>CMYK</small><br />
                              100, 0, 0, 56
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs pb">
              <div className="col-xs-12">
                <div className="container blue-container blue-container--presskit">
                  <div className="row center-xs">
                    <div className="col-xs-8">
                      <h2>{t('presskit:blue-container:big', { defaultValue: 'Verge improves upon the original Bitcoin blockchain and aims to fulfill its initial purpose of providing individuals and businesses with a fast, efficient and decentralized way of making direct transactions while maintaining personal privacy.'})}</h2>
                      <p>{t('presskit:blue-container:small', { defaultValue: 'Verge Currency is a cryptocurrency designed for everyday use.' })}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row center-xs">
              <div className="col-xs-10">
                <div className="start-xs">
                  <h2>{t('presskit:reference.title', { defaultValue: 'Verge reference information' })}</h2>
                  <p className="pb">{t('presskit:reference.text', { defaultValue: 'Verge Currency is a cryptocurrency designed for everyday use. It improves upon the original Bitcoin blockchain and aims to fulfill its initial purpose of providing individuals and businesses with a fast, efficient and decentralized way of making direct transactions while maintaining personal privacy.' })}</p>
                  <h2>{t('presskit:wraith.title', { defaultValue: 'Wraith Protocol' })}</h2>
                  <p>{t('presskit:wraith.text', { defaultValue: 'Wraith Protocol by Verge is a technology that allows the user to choose between public and private ledgers on the same blockchain. User anonymity is ensured in both cases thanks to the latest version of Tor integrated in Verge wallets.' })}</p>
                  <p>
                    <span>{t('presskit:findoutmore.text.intro', { defaultValue: 'To find more about Verge check our' })} </span>
                    <span><Link href="/faq"><a>{t('presskit:findoutmore.text.link.faq', { defaultValue: 'FAQ' })}</a></Link>, </span>
                    <span><Link href="/blog"><a>{t('presskit:findoutmore.text.link.blog', { defaultValue: 'Blog' })}</a></Link> </span>
                    <span>{t('presskit:findoutmore.text.and', { defaultValue: 'and' })} </span>
                    <span><Link href="/black-paper"><a>{t('presskit:findoutmore.text.link.black-paper', { defaultValue: 'Black Paper' })}</a></Link>.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

const Extended = translate(['common', 'presskit'], { i18n, wait: process.browser })(Presskit);

export default Extended;
