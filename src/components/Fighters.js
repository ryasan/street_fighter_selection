import React, {Component} from 'react';
import {portraitIds, FIGHTER_GRID_WIDTH} from './../constants';
import {flatten, slideIn} from './../utils';
import styled from 'styled-components';
// components
import Player1 from './Player1';
import {Cell, Grid, Img} from './common';

class Fighters extends Component {
	renderFighterCells = () => {
		const {active, fighterNames} = this.props;
		return flatten(fighterNames).map((fighter, i) => {
			return (
				<FighterCell key={i} onKeyPress={this.handleKeyPress} active={active === fighter}>
					{active === fighter ? <Player1 /> : ''}
					<Img src={portraitIds[fighter]} alt={fighter} />
					{active === fighter ? <FighterLabel>{fighter}</FighterLabel> : ''}
				</FighterCell>
			);
		});
	};

	render = () => {
		return <FighterGrid onKeyDown={this.handleKeyPress}>{this.renderFighterCells()}</FighterGrid>;
	};
}

const FighterGrid = styled(Grid)`
	grid-area: fighters;
	width: ${FIGHTER_GRID_WIDTH}px;
	outline: none;
	display: grid;
	grid-template-columns: repeat(6, ${FIGHTER_GRID_WIDTH / 6}px);
	border: 2px solid ${({theme}) => theme.color.darkGray};
	right: -100vw;
	position: relative;
	animation: ${slideIn('right')} 1s forwards;
`;

const FighterCell = styled(Cell)`
	border: 2px solid ${({theme}) => theme.color.darkGray};
	outline: none;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

const FighterLabel = styled.label`
	height: 1.5em;
	color: white;
	background: ${({theme}) => theme.color.primary};
	font-size: 12px;
	margin-top: -2em;
	width: 100%;
	text-align: center;
	justify-content: center;
`;

export default Fighters;
