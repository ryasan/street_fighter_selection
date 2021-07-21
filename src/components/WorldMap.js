import React from 'react';
import styled from 'styled-components';

import {Cell, Grid} from './common';
import {slideIn} from './../utils/slideInAnimation';
import {countries} from './../constants';
import {World} from './../images';

const MAP_ROWS = 8;
const MAP_COLUMNS = 12;

const MapGrid = styled(Grid)`
	grid-area: world-map;
	width: 1000px;
	height: 400px;
	background: url(${World}) center center no-repeat;
	background-size: contain;
	grid-template-columns: repeat(${MAP_COLUMNS}, 1fr);
	grid-template-rows: repeat(${MAP_ROWS}, 1fr);
	top: -100vh;
	position: relative;
	animation: ${slideIn('top')} 1s forwards;
`;

const CellWrapper = styled.div`
	text-align: center;
	color: ${({active, theme}) => (active ? theme.color.secondary : 'white')};
	font-size: 12px;
	font-weight: bolder;
	display: flex;
	flex-direction: column;
	padding: 0 10px;
`;

const Flag = styled(Cell)`
	background: url(${({countryBg}) => countryBg}) no-repeat center center;
	background-size: cover;
	border: none;
	flex: 1;
	box-shadow: ${({active, theme}) =>
		active ? `inset 0px 0px 0px 2px ${theme.color.secondary};` : 'none'};
`;

const Text = styled.div`
	font-size: 10px;
`;

function MapCell({country, selectedFighter}) {
	return (
		<CellWrapper>
			{country && (
				<>
					<Flag countryBg={country.flag} active={country.fighter === selectedFighter} />{' '}
					<Text>{country.name}</Text>
				</>
			)}
		</CellWrapper>
	);
}

export default function WorldMap({selectedFighter}) {
	return (
		<MapGrid>
			{Array.from({length: MAP_ROWS}, (_, i) =>
				Array.from({length: MAP_COLUMNS}, (_, ii) => (
					<MapCell
						key={ii}
						country={countries.find((c) => c.coordinates[0] === i && c.coordinates[1] === ii)}
						selectedFighter={selectedFighter}
					/>
				)),
			)}
		</MapGrid>
	);
}
