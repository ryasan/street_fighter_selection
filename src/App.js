import React, { Component } from 'react';
import StreetFighter from './StreetFighter';
import styled from 'styled-components';
// components
import AppBar from './components/AppBar';
import WorldMap from './components/WorldMap';
import Dpad from './components/Dpad';
import Fighters from './components/Fighters';

class App extends Component {
  constructor(props) {
    super(props);
    this.sf = new StreetFighter();
    this.state = {
      selectedFighter: ''
    };
  }

  componentDidMount = () => {
    this.setState({ selectedFighter: 'Ryu' });
    this.elFocus.focus();
  };

  selectFighter = keyCode => {
    const fighter = this.sf.selectFighter(keyCode);
    this.setState({ selectedFighter: fighter });
  };

  handleKeyPress = e => {
    this.selectFighter(e.keyCode);
  };

  handleDpadPress = keyCode => {
    this.selectFighter(keyCode);
  };

  render = () => {
    return (
      <AppWrap
        ref={el => (this.elFocus = el)}
        onKeyDown={this.handleKeyPress}
        tabIndex="0">
        <AppBar />
        <WorldMap selectedFighter={this.state.selectedFighter} />
        <Dpad handleDpadPress={this.handleDpadPress} />
        <Fighters
          onKeyDown={this.handleKeyPress}
          fighterNames={this.sf.fighterNames}
          handleKeyPress={this.handleKeyPress}
          active={this.state.selectedFighter}
        />
      </AppWrap>
    );
  };
}

const AppWrap = styled.div`
  background: ${({ theme }) => theme.backgroundColor};
  height: 100%;
  display: grid;
  grid-template-areas:
    'world-map world-map'
    'dpad fighters'
    '. .';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
`;

export default App;
