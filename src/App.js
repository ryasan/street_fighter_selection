import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import StreetFighter from './StreetFighter';
import { fighters, portraitIds } from './constants';
import { flatten } from './utils';
// components
import FighterDetails from './FighterDetails';
import Player1 from './Player1';
import { StyledAppWrap, StyledCell, StyledGrid, StyledImg } from './common';

class App extends Component {
  constructor(props) {
    super(props);
    this.sf = new StreetFighter();
    this.state = {
      active: this.props.location.state
    };
  }

  componentDidMount = () => {
    this.elFocus.focus();
  };

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
    return flatten(fighters).map((fighter, i) => {
      return (
        <StyledCell
          key={i}
          onKeyPress={this.handleKeyPress}
          active={this.state.active === fighter}
        >
          {this.state.active === fighter ? <Player1 /> : ''}
          <StyledImg src={portraitIds[fighter]} alt={fighter} />
        </StyledCell>
      );
    });
  };

  render = () => {
    return (
      <StyledAppWrap
        ref={el => (this.elFocus = el)}
        onKeyDown={this.handleKeyPress}
        tabIndex="0"
      >
        <Switch>
          <Route path="*" component={FighterDetails} />
        </Switch>
        <StyledGrid onKeyDown={this.handleKeyPress}>
          {this.renderFighterCells()}
        </StyledGrid>
      </StyledAppWrap>
    );
  };
}

export default withRouter(App);
