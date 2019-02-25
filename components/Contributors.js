import React from 'react';
import fetch from 'isomorphic-unfetch';
import LazyLoad from 'react-lazyload';

class Contributors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contributors: [],
    };
  }

  componentWillMount() {
    const url = 'https://api.github.com/repos/vergecurrency/VERGE/contributors';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ contributors: data }));
  }

  render() {
    if (this.state.contributors.length > 0) {
      return (
        <div>
          <div className="row center-xs pt-xs pb">
            {
              this.state.contributors.map((x, i) => {
                if (x.id !== 15385883) {
                  return (
                    <div key={x.id} className={`${i === 0 ? 'col-xs-9' : 'col-xs-6'} col-xs-6 col-sm-4 col-md-3 col-lg-2`}>
                      <a href={x.html_url} target="_blank" rel="noopener noreferrer" className="contributors--item">
                        <div className="contributors--item__img">
                          <LazyLoad height={130}>
                            <img src={x.avatar_url} alt={x.login} />
                          </LazyLoad>
                        </div>
                        <div className="contributors--item__author">{x.login}</div>
                        <div className="contributors--item__profile">
                          <span>View on GitHub</span>
                        </div>
                      </a>
                    </div>
                  );
                }
              })
            }
          </div>
        </div>
      );
    }

    return (<span>Loading contributors...</span>);
  }
}

export default Contributors;
