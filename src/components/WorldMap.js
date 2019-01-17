import React, { Component } from 'react';
import styled from 'styled-components';
import { World } from './../images';
import { mapIds } from './../constants';
// components
import { Cell, Grid } from './common';

const ROWS = 8;
const COLUMNS = 12;

const WorldMapWrap = styled(Grid)`
  grid-area: world-map;
  width: 1000px;
  height: 400px;
  background: url(${World}) center center no-repeat;
  background-size: contain;
  grid-template-columns: repeat(${COLUMNS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  box-sizing: border-box;
  border: 2px solid limegreen;
`;

const MapCellWrap = styled.div`
  padding: 10%;
  text-align: center;
  color: ${({ active }) => (active ? 'red' : 'white')};
  font-size: 12px;
  font-weight: bolder;
`;

const MapCell = styled(Cell)`
  background: url(${({ countryBg }) => countryBg}) no-repeat center center;
  background-size: cover;
  border: none;
  border-radius: 2px;
`;

const mapCellMatrix = () => {
  const cellMatrix = [];
  for (let i = 0; i < ROWS; i++) {
    for (let j = 0; j < COLUMNS; j++) {
      cellMatrix.push(0);
    }
  }
  return cellMatrix;
};

class WorldMap extends Component {
  renderMapCells = () => {
    return mapCellMatrix().map((_, i) => {
      if (mapIds[i]) {
        const activeFighter = this.props.location.state;
        const { country, fighter, name } = mapIds[i];
        const active = fighter === activeFighter;
        return (
          <MapCellWrap key={i} active={active}>
            <MapCell countryBg={country} active={active} />
            {name}
          </MapCellWrap>
        );
      }
      return <MapCell key={i} />;
    });
  };

  render = () => {
    return <WorldMapWrap>{this.renderMapCells()}</WorldMapWrap>;
  };
}

export default WorldMap;
