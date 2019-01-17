import React, { Component } from 'react';
import styled from 'styled-components';
import { World } from './../images';
import { mapIds, MAP_COLUMNS, MAP_ROWS } from './../constants';
import { generateMatrix } from './../utils';
// components
import { Cell, Grid } from './common';

class WorldMap extends Component {
  renderMapCells = () => {
    return generateMatrix(MAP_ROWS, MAP_COLUMNS).map((_, i) => {
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
    return <MapGrid>{this.renderMapCells()}</MapGrid>;
  };
}

const MapGrid = styled(Grid)`
  grid-area: world-map;
  width: 1000px;
  height: 400px;
  background: url(${World}) center center no-repeat;
  background-size: contain;
  grid-template-columns: repeat(${MAP_COLUMNS}, 1fr);
  grid-template-rows: repeat(${MAP_ROWS}, 1fr);
`;

const MapCellWrap = styled.div`
  padding: 10%;
  text-align: center;
  color: ${({ active, theme }) => (active ? theme.color.primary : 'white')};
  font-size: 12px;
  font-weight: bolder;
`;

const MapCell = styled(Cell)`
  background: url(${({ countryBg }) => countryBg}) no-repeat center center;
  background-size: cover;
  border: none;
  border-radius: 2px;
`;

export default WorldMap;
