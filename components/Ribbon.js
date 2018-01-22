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
  </div>
);

export default Ribbon;
