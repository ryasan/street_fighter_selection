import React, { Component } from 'react';
import { FighterDetailsWrap } from './common';

class FighterDetails extends Component {
  render = () => {
    return (
      <FighterDetailsWrap>
        {this.props.location.state}
      </FighterDetailsWrap>
    );
  };
}

export default FighterDetails;
