import React from 'react';
import Layout from '../../components/Layout';
import Content from '../../components/resources/Content';
import pools from './miningpools';

class MiningPools extends React.Component {
  constructor() {
    super();
    this.state = { filter: '' };
    this.updateSearch = this.updateSearch.bind(this);
    this.renderAlgoDropdown = this.renderAlgoDropdown.bind(this);
  }


  getFilteredPool() {
    const { filter } = this.state;
    if (filter === '') return pools;

    return pools
      .filter(pool => pool.supportedAlgos.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }

  updateSearch(text) {
    this.setState({ filter: text });
  }

  renderAlgoDropdown(change) {
    const { filter } = this.state;
    return (
      <select onChange={change} value={filter}>
        <option value="">All</option>
        <option value="Scrypt">Scrypt</option>
        <option value="Groestl">Myr-Groestl</option>
        <option value="x17">X17</option>
        <option value="Lyra2Rev2">Lyra2Rev2</option>
        <option value="Blake2s">Blake2S</option>
      </select>
    );
  }

  render() {
    return (
      <Layout>
        <div className="container learnmore">
          <Content>
            <div className="row center-xs pt-small pb">
              <div className="col-xs-10 start-xs exchanges bb">
                <div className="start-sm pb-small">
                  {this.renderAlgoDropdown(e => this.updateSearch(e.target.value))}
                  <div className="minerpools-grid">
                    {this.getFilteredPool().map((pool, id) => (
                      <a key={id} target="_blank" href={pool.poollink}>
                        <div className="pool-item card">
                          <h1>{pool.poolname}</h1>
                          {/*<p>*/}
                          {/*  {'Hardfork Ready:'}*/}
                          {/*  {' '}*/}
                          {/*  {pool.hardfork ? '✅' : '❓' }*/}
                          {/*</p>*/}
                          <h5>
                            {'Algorithms:'}
                          </h5>
                          <code>{pool.supportedAlgos}</code>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Content>
        </div>
      </Layout>
    );
  }
}

export default MiningPools;
