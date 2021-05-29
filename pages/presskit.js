import Link from 'next/link';
import Head from 'next/head';

import Layout from '../components/Layout';

import { translate } from 'react-i18next';
import i18n from '../i18n';

function Presskit(props) {
  const { t } = props;

  return (
    <Layout>
      <Head>
        <title key="title">{t('common:meta.presskit.title', { defaultValue: 'Presskit - VergeCurrency.com' })}</title>
      </Head>
      <div className="presskit">
        <div className="ribbon ribbon--presskit">
          <div className="ribbon-img" />

          <div className="container">
            <div className="row center-xs">
              <div className="col-xs-10 col-sm-9 col-md-6 text-center">
                <div className="ribbon-txt">
                  <h1 dangerouslySetInnerHTML={{ __html: t('presskit:ribbon.title') }} />
                  <p>{t('presskit:ribbon.text')}</p>
                  <a href="/static/branding-guide/brandguideline-verge.pdf" target="_blank" rel="noopener" className="btn btn-primary">{t('presskit:ribbon.buttonPrimary', { defaultValue: 'Download complete kit' })}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container themed-container themed-container--press">
          <div className="row center-xs">
            <div className="col-xs-9 col-sm-10">
              <div className="row between-xs">
                <div className="col-xs-12 col-sm-4 start-xs pb-xs reason">
                  <div className="reason--inner">
                    <h3 dangerouslySetInnerHTML={{ __html: t('common:USPs.first.header') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('common:USPs.first.text') }} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs pb-xs reason">
                  <div className="reason--inner">
                    <h3 dangerouslySetInnerHTML={{ __html: t('common:USPs.second.header') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('common:USPs.second.text') }} />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-4 start-xs reason">
                  <div className="reason--inner">
                    <h3 dangerouslySetInnerHTML={{ __html: t('common:USPs.third.header') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('common:USPs.third.text') }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="themed-container">
          <div className="container pt pb">
            <div className="row center-xs">
              <div className="col-xs-10">
                <div className="start-xs">
                  <h2>{t('presskit:coverage.title', { defaultValue: 'Press kit' })}</h2>
                  <p>{t('presskit:ribbon.text', { defaultValue: 'This is our press kit for media coverage that you can use.' }) }
                      &nbsp;
                    {t('presskit:ribbon.text2', { defaultValue: 'We would please ask you to  not alter our logo in any way. We prepared guidelines to help you use the Verge brand and assets, including our logo, fonts, and colour palettes.' }) }
                  </p>
                </div>
                <div className="start-xs pt">
                  <h2>{t('presskit:logo.title', { defaultValue: 'Verge logo' })}</h2>
                  <p>{t('presskit:logo.text', { defaultValue: 'You can use the Verge logos to link to vergecurrency.com and to attach it to a blog post, news article, or press release about Verge.' })}</p>
                </div>
                <div className="row center-xs pt pb logos">
                  <div className="col-xs-12 col-sm-10">
                    <div className="row around-xs middle-xs">
                      <div className="col-xs-12 col-sm-4">
                        <img className="img-responsive" src="/static/img/press/logo/verge-logo.png" alt="Verge Logo" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <img style={{ backgroundColor: '#061C2D' }} className="img-responsive" src="/static/img/press/logo/verge-logo-white.png" alt="Verge Logo (White)" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <img style={{ padding: '1rem 2rem' }} className="img-responsive" src="/static/img/press/logo/verge-symbol.png" alt="Verge Symbol" />
                      </div>
                      <div className="col-xs-12 col-sm-4">
                        <a href="/static/img/press/logo/verge-logo.zip" className="btn btn-primary btn-primary--on-white-bg">{t('presskit:logo.download', { defaultValue: 'Download logos here' })}</a>
                        <p>
                          <a href="https://github.com/vergecurrency/verge-graphics/" target="_blank">or browse GitHub</a>
                          </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="start-xs">
                  <h2>{t('presskit:font.title', { defaultValue: 'Brand font' })}</h2>
                  <p dangerouslySetInnerHTML={{ __html: t('presskit:font.text', { defaultValue: 'The official font used in Verge Currency branding is Metropolis.' }) }} />
                  <p className="pt">{t('presskit:font.colors', { defaultValue: 'The colors that are used for the logo and style elements:' })}</p>
                </div>
                <div className="row center-xs pt pb colors">
                  <div className="col-xs-12">
                    <div className="row around-xs middle-xs">
                      <div className="col-xs-10 col-sm-4 col-md-3 col-lg-3 color color--black">
                        <div className="row start-xs">
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
                          <div className="col-xs-12 color-guide" />
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
            <div className="container themed-container__blue themed-container__blue--presskit">
              <div className="row center-xs">
                <div className="col-xs-8">
                  <h2>{t('presskit:reference:text1', { defaultValue: 'Verge improves upon the original Bitcoin blockchain and aims to fulfill its initial purpose of providing individuals and businesses with a fast, efficient and decentralized way of making direct transactions while maintaining personal privacy.' })}</h2>
                  <p>{t('presskit:reference:text2', { defaultValue: 'Verge Currency is a cryptocurrency designed for everyday use.' })}</p>
                </div>
              </div>
            </div>
            <div className="row center-xs pt-large">
              <div className="col-xs-10">
                <div className="start-xs">
                  <h2>{t('presskit:reference.title', { defaultValue: 'Verge reference information' })}</h2>
                  <p className="pb">
                    {t('presskit:reference.text2', { defaultValue: 'Verge Currency is a cryptocurrency designed for everyday use.' })}
                  &nbsp;
                    {t('presskit:reference.text1', { defaultValue: 'Verge improves upon the original Bitcoin blockchain and aims to fulfill its initial purpose of providing individuals and businesses with a fast, efficient and decentralized way of making direct transactions while maintaining personal privacy.' })}
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
