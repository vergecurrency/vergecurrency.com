import React from 'react';
import fetch from 'isomorphic-unfetch';

import Link from 'next/link';
import Moment from 'react-moment';
import 'moment-timezone';

class MediumPosts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pressreleases: [],
    };
  }

  componentWillMount() {
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fverge-currency-xvg';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ pressreleases: data.items }));
  }

  render() {
    return (
      <div className="row around-xs start-sm pt-small pb">
        {
          this.state.pressreleases.map((x) => {
            return (
              <div className="col-xs-12 col-sm-4 start-xs pb-xs pt-small pb">
                <Link href={x.link}>
                  <a href={x.link} className="date" target="_blank">
                    <h3 dangerouslySetInnerHTML={{ __html: x.title }} />
                    <Moment format="MMMM Do YYYY">{x.pubDate}</Moment> - Read
                  </a>
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default MediumPosts;
