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
    const url = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fvergecurrency';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ pressreleases: data.items }));
  }

  render() {
    const truncate = (elem, limit, after) => {
      if (!elem || !limit) return;

      let content = elem.trim();
      content = content.split(' ').slice(0, limit);
      content = content.join(' ') + (after || '');
      return content;
    };
    return (
      <div className="row around-xs start-sm pt-small pb mentions--medium">
        {
          this.state.pressreleases.map(x => (
            <div className="col-xs-12 col-sm-4 start-xs pb-xs pt-small pb" key={x.title}>
              <Link href={x.link}>
                <a href={x.link} className="date" target="_blank" rel="noopener noreferrer">
                  <Moment format="MMMM Do YYYY" className="date">{x.pubDate}</Moment>
                  <h4 dangerouslySetInnerHTML={{ __html: x.title }} />
                  <p
                    dangerouslySetInnerHTML={{
                      __html: truncate(x.description, 20, '... <strong>Read more</strong>'),
                    }}
                  />
                </a>
              </Link>
            </div>
          ))
        }
      </div>
    );
  }
}

export default MediumPosts;
