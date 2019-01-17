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
import { AppWrap, Cell, Grid, Img } from './components/common';

const FighterGrid = styled(Grid)`
  grid-area: fighters;
  justify-items: center;
  outline: none;
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(6, 120px);
  border: 2px solid hotpink;
`;

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
        <Cell
          key={i}
          onKeyPress={this.handleKeyPress}
          active={this.state.active === fighter}
        >
          {this.state.active === fighter ? <Player1 /> : ''}
          <Img src={portraitIds[fighter]} alt={fighter} />
        </Cell>
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

export default withRouter(App);
