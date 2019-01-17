import React, { Component } from 'react';
import styled from 'styled-components';

const DpadArea = styled.div`
  grid-area: dpad;
  border: 2px solid yellow;
`;

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

export default Dpad;
