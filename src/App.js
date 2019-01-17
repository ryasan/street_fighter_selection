import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
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
      active: ''
    };
  }

  componentDidMount = () => {
    this.setState({ active: 'Ryu' });
    this.elFocus.focus();
  };

  goToFighter = keyCode => {
    const fighter = this.sf.selectFighter(keyCode);
    this.setState({ active: fighter }, () => {
      this.props.history.push({
        pathname: `/${fighter.toLowerCase()}`,
        state: fighter
      });
    });
  };

  handleKeyPress = e => {
    this.goToFighter(e.keyCode);
  };

  handleDpadPress = keyCode => {
    this.goToFighter(keyCode);
  };

  render = () => {
    return (
      <AppWrap
        ref={el => (this.elFocus = el)}
        onKeyDown={this.handleKeyPress}
        tabIndex="0">
        <AppBar />
        <Switch>
          <Route path="*" component={WorldMap} />
        </Switch>
        <Dpad handleDpadPress={this.handleDpadPress} />
        <Fighters
          onKeyDown={this.handleKeyPress}
          fighterNames={this.sf.fighterNames}
          handleKeyPress={this.handleKeyPress}
          active={this.state.active}/>
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

export default withRouter(App);
