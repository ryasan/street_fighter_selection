import React, { Component } from 'react';
import styled from 'styled-components';
import { World, USA } from './../images';

const ROWS = 8;
const COLUMNS = 12;

const WorldMapWrap = styled.div`
  border: 2px solid red;
  width: 1000px;
  height: 400px;
  background: url(${World}) center center no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: repeat(${COLUMNS}, 1fr);
  grid-template-rows: repeat(${ROWS}, 1fr);
  box-sizing: border-box;
`;

const MapCell = styled.div`
  border: 2px solid limegreen;
  width: 100%;
  background: url(${({ countryBg }) => countryBg}) no-repeat center center;
  background-size: cover;
  box-sizing: border-box;
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

const mapIds = {
  13: USA,
  15: USA,
  27: USA
};

class WorldMap extends Component {
  renderMapCells = () => {
    return mapCellMatrix().map((_, i) => {
      const countryBg = mapIds[i];
      if (countryBg) return <MapCell key={i} countryBg={countryBg} />;
      return <MapCell key={i} />;
    });
  };
  render = () => {
    return <WorldMapWrap>{this.renderMapCells()}</WorldMapWrap>;
  };
}

export default WorldMap;
