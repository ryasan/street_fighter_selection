import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import StreetFighter from './StreetFighter';
import { portraitIds } from './constants';
import { flatten } from './utils';
import styled from 'styled-components';
// components
import WorldMap from './components/WorldMap';
import Dpad from './components/Dpad';
import Player1 from './components/Player1';
import { Cell, Grid, Img } from './components/common';

class App extends Component {
  constructor(props) {
    super(props);
    this.sf = new StreetFighter();
    this.state = {
      active: this.props.location.state // fighter passed in from router
    };
  }

  // focus on selection box
  componentDidMount = () => {
    this.elFocus.focus();
  };

  // route to selected fighter details
  handleKeyPress = e => {
    const fighter = this.sf.selectFighter(e.keyCode);
    this.setState({ active: fighter }, () => {
      this.props.history.push({
        pathname: `/${fighter.toLowerCase()}`,
        state: fighter
      });
    });
  };

  renderFighterCells = () => {
    return flatten(this.sf.fighterNames).map((fighter, i) => {
      return (
        <FighterCell
          key={i}
          onKeyPress={this.handleKeyPress}
          active={this.state.active === fighter}
        >
          {this.state.active === fighter ? <Player1 /> : ''}
          <Img src={portraitIds[fighter]} alt={fighter} />
        </FighterCell>
      );
    });
  };

  render = () => {
    return (
      <AppWrap
        ref={el => (this.elFocus = el)}
        onKeyDown={this.handleKeyPress}
        tabIndex="0"
      >
        <Switch>
          <Route path="*" component={WorldMap} />
        </Switch>
        <Dpad />
        <FighterGrid onKeyDown={this.handleKeyPress}>
          {this.renderFighterCells()}
        </FighterGrid>
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
    'dpad fighters';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 2px solid red;
`;

const FighterGrid = styled(Grid)`
  grid-area: fighters;
  width: 100%;
  outline: none;
  display: grid;
  grid-template-columns: repeat(6, 120px);
  border: 2px solid hotpink;
`;

const FighterCell = styled(Cell)`
  border: 2px solid ${({ theme }) => theme.color.darkGray};
  outline: none;
`;

export default withRouter(App);
