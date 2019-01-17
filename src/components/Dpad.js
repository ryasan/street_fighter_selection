import React, { Component } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
class Dpad extends Component {
  handleClick = e => {
    this.props.handleDpadPress(e.target.value);
  };

  render = () => {
    return (
      <DpadArea>
        <DpadWrapUp value={38} onClick={this.handleClick} />
        <DpadWrapDown value={40} onClick={this.handleClick} />
        <DpadWrapLeft value={37} onClick={this.handleClick} />
        <DpadWrapRight value={39} onClick={this.handleClick} />
      </DpadArea>
    );
  };
}

const DpadArea = styled.ul`
  grid-area: dpad;
  display: grid;
  grid-template-rows: repeat(3, 50px);
  grid-template-columns: repeat(3, 50px);
  grid-template-areas:
    '. up .'
    'left . right'
    '. down .';
`;

const DpadWrap = styled.li`
  list-style: none;
  background: gray;
  border-radius: 10px 10px 10px 10px;
  width: 100%;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #666;
  cursor: pointer;
  box-shadow: 0px 6px 0px #666, 0px 3px 15px rgba(0, 0, 0, 0.4),
    inset 0px 1px 0px rgba(255, 255, 255, 0.3),
    inset 0px 0px 3px rgba(255, 255, 255, 0.5);
  background: rgb(115, 115, 115);

  background: linear-gradient(
    0deg,
    rgba(115, 115, 115, 1) 0%,
    rgba(153, 153, 153, 1) 100%
  );

  &:hover {
    background: rgb(140, 140, 140);
    background: linear-gradient(
      0deg,
      rgba(140, 140, 140, 1) 0%,
      rgba(179, 179, 179, 1) 100%
    );
  }

  &:active {
    background: rgb(153, 153, 153);
    background: linear-gradient(
      0deg,
      rgba(153, 153, 153, 1) 0%,
      rgba(115, 115, 115, 1) 100%
    );
    box-shadow: 0px 2px 0px #666, 0px 1px 6px rgba(0, 0, 0, 0.4),
      inset 0px 1px 0px rgba(255, 255, 255, 0.3),
      inset 0px 0px 3px rgba(255, 255, 255, 0.5);
    transform: translate(0, 4px);
    transition: all 0.2s ease-in-out;
  }
`;

const DpadWrapDown = styled(DpadWrap)`
  grid-area: down;
  &:after {
    content: '▼';
  }
`;

const DpadWrapUp = styled(DpadWrap)`
  grid-area: up;
  &:after {
    content: '▲';
  }
`;

const DpadWrapLeft = styled(DpadWrap)`
  grid-area: left;
  &:after {
    content: '◀';
  }
`;

const DpadWrapRight = styled(DpadWrap)`
  grid-area: right;
  &:after {
    content: '▶';
  }
`;

export default Dpad;
