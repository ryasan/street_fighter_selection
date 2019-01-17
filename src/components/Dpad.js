import React, { Component } from 'react';
import styled from 'styled-components';

class Dpad extends Component {
  render = () => {
    return (
      <DpadArea>
        <button>up</button>
        <button>left</button>
        <button>right</button>
        <button>down</button>
      </DpadArea>
    );
  };
}

const DpadArea = styled.div`
  grid-area: dpad;
  border: 2px solid yellow;
`;

export default Dpad;
