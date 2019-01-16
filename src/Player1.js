import React, { Component } from 'react';
import styled from 'styled-components';

const StyledPlayer1 = styled.div`
  font-size: 20px;
  color: white;
  position: absolute;
  margin-top: -15px;
`;

class Player1 extends Component {
  render = () => {
    return <StyledPlayer1>P 1</StyledPlayer1>;
  };
}

export default Player1;
