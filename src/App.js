import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import StreetFighter from './StreetFighter';
import { portraitIds, FIGHTER_GRID_WIDTH } from './constants';
import { flatten } from './utils';
import styled from 'styled-components';
// components
import AppBar from './components/AppBar';
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

  componentDidMount = () => {
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

  renderFighterCells = () => {
    const { active } = this.state;
    return flatten(this.sf.fighterNames).map((fighter, i) => {
      return (
        <FighterCell
          key={i}
          onKeyPress={this.handleKeyPress}
          active={active === fighter}
        >
          {active === fighter ? <Player1 /> : ''}
          <Img src={portraitIds[fighter]} alt={fighter} />
          {active === fighter ? <FighterLabel>{fighter}</FighterLabel> : ''}
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
        <AppBar />
        <Switch>
          <Route path="*" component={WorldMap} />
        </Switch>
        <Dpad handleDpadPress={this.handleDpadPress} />
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
    'dpad fighters'
    '. .';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
`;

const FighterGrid = styled(Grid)`
  grid-area: fighters;
  width: ${FIGHTER_GRID_WIDTH}px;
  outline: none;
  display: grid;
  grid-template-columns: repeat(6, ${FIGHTER_GRID_WIDTH / 6}px);
  border: 2px solid ${({ theme }) => theme.color.darkGray};
`;

const FighterCell = styled(Cell)`
  border: 2px solid ${({ theme }) => theme.color.darkGray};
  outline: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const FighterLabel = styled.label`
  height: 1.5em;
  color: white;
  background: ${({ theme }) => theme.color.primary};
  font-size: 12px;
  margin-top: -2em;
  width: 100%;
  text-align: center;
  justify-content: center;
`;

export default withRouter(App);
