import Link from 'next/link';
import { translate } from 'react-i18next';

const Ribbon = (props) => (
  <div>
    <div className="ribbon">
      <div className="ribbon-img" />

      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-10 col-sm-9 col-md-6 text-center">
            <div className="ribbon-txt">
              <h1>
                {props.title}
              </h1>
              <p>
                {props.text}
              </p>
              {
                props.buttonPrimary !== undefined &&
                <Link href="/">
                  <a className="btn btn-primary">{props.buttonPrimary}</a>
                </Link>
              }
              {
                props.buttonSecondary !== undefined &&
                <Link href="/">
                  <a className="btn btn-secondary">{props.buttonSecondary}</a>
                </Link>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      h1, a {
        font-family: "Avenir Next", Arial, sans-serif;
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        color: blue;
        text-decoration: none;
      }

      a:hover {
        opacity: .6;
      }

      .ribbon {
        color: #fff;
        min-height: 930px;
        position: relative;
      }

      .ribbon-img {
        background: url('/static/img/home-hero-bg.jpg') no-repeat center center;
        background-size: cover;
        min-width: 100%;
        min-height: 930px;
        position: absolute;
        z-index: -100;
      }

      .ribbon-txt {
        margin-top: 180px;
      }
    `}</style>
  </div>
);

export default Ribbon;
