import React, {Component} from 'react';

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
                <div key={x.id} className="col-sm-3">
                  <a href={x.html_url} target="_blank">
                    <img src={x.avatar_url} alt={x.login} width="40" style={{marginRight: '10px'}} />
                    {x.login} ({x.contributions})
                  </a>
                </div>)
              })
            }
          </div>
        </div>
      )
    }

    return (<span>Loading...</span>);
  }
}

export default Contributors;
