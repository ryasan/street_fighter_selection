import React, { Component } from 'react';
import { StyledFighterDetailsWrapper } from './common';

class FighterDetails extends Component {
  render = () => {
    return (
      <StyledFighterDetailsWrapper>
        {this.props.location.state}
      </StyledFighterDetailsWrapper>
    );
  };
}

export default FighterDetails;
