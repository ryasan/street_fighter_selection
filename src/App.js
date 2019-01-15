import React, { Component } from 'react';
import { StyledWrapper, StyledCell, StyledGrid } from './common';
import StreetFighter from './StreetFighter';

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
                  {fighter}
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
