import React, {Component} from 'react';
import LazyImage, { Source } from 'react-image-lazyload';

class Contributors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contributors: []
    }
  }

  componentWillMount() {
    const url = "https://api.github.com/repos/vergecurrency/VERGE/contributors"
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({contributors: data}))
  }

  render() {
    if (this.state.contributors.length > 0) {
      return (
        <div>
          <div className="row">
            {
              this.state.contributors.map(x => {
                return (
                <div key={x.id} className="col-xs-6 col-sm-2">
                  <a href={x.html_url} target="_blank" className="contributors--item">
                    <div className="contributors--item__img">
                      <LazyImage
                          src={x.avatar_url}
                          backgroundColor="#1db5db"
                      ></LazyImage>
                    </div>
                    <div className="contributors--item__author">{x.login}</div>
                    <div className="contributors--item__profile">
                      <a href={x.html_url}>View profile</a>
                    </div>
                  </a>
                </div>)
              })
            }
          </div>
        </div>
      )
    }

    return (<span>Loading contributors...</span>);
  }
}

export default Contributors;
