import React, { Component } from 'react';
import { StyledWrapper, StyledCell, StyledGrid, StyledImg } from './common';
import StreetFighter from './StreetFighter';

const portraitIds = {
  Ryu: 'https://i.postimg.cc/FzbkgJqt/31-usf4art36t.jpg',
  'E.Honda': 'https://i.postimg.cc/KzMMjWD8/31-usf4art15t.jpg',
  Blanka: 'https://i.postimg.cc/MK8yMz42/31-usf4art05t.jpg',
  Guile: 'https://i.postimg.cc/kgT8pK5q/31-usf4art22t.jpg',
  Balrog: 'https://i.postimg.cc/d3cTy95m/31-usf4art04t.jpg',
  Vega: 'https://i.postimg.cc/28mZj2bC/31-usf4art41t.jpg',
  Ken: 'https://i.postimg.cc/pLWzCqRs/31-usf4art28t.jpg',
  'Chun Li': 'https://i.postimg.cc/VLBXX3QS/31-usf4art07t.jpg',
  Zangief: 'https://i.postimg.cc/15HN8www/31-usf4art44t.jpg',
  Dhalsim: 'https://i.postimg.cc/N0VXgtTn/31-usf4art13t.jpg',
  Sagat: 'https://i.postimg.cc/nVqmt6Ld/31-usf4art37t.jpg',
  'M.Bison': 'https://i.postimg.cc/QMV5GCB5/31-usf4art30t.jpg'
};

class App extends Component {
  constructor() {
    super();
    this.sf = new StreetFighter();
    this.state = {
      active: 'Ryu'
    };
  }

  componentDidMount = () => {
    this.elFocus.focus();
  };

  handleKeyPress = e => {
    this.setState({ active: this.sf.selectFighter(e.keyCode) });
  };

  render = () => {
    return (
      <StyledWrapper>
        <StyledGrid
          onKeyDown={this.handleKeyPress}
          tabIndex="0"
          ref={el => (this.elFocus = el)}
        >
          {this.sf.fighters.map(row => {
            return row.map((fighter, i) => {
              return (
                <StyledCell
                  onKeyPress={this.handleKeyPress}
                  key={i}
                  active={this.state.active === fighter}
                >
                  <StyledImg src={portraitIds[fighter]} alt={fighter} />
                </StyledCell>
              );
            });
          })}
        </StyledGrid>
      </StyledWrapper>
    );
  };
}

export default App;
