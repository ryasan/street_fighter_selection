import React, { Component } from 'react';
import { StyledFighterDetailsWrap } from './common';

class FighterDetails extends Component {
  render = () => {
    return (
      <StyledFighterDetailsWrap>
        {this.props.location.state}
      </StyledFighterDetailsWrap>
    );
  };
}

export default FighterDetails;
