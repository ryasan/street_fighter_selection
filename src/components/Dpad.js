import React from 'react';
import styled from 'styled-components';

import {slideIn} from './../utils/slideInAnimation';

const Container = styled.ul`
	animation: ${slideIn('left')} 1s forwards;
	display: grid;
	grid-area: dpad;
	grid-template-areas: 
	'. up .' 
	'left . right' 
	'. down .'; 
	left: -100vw;
	grid-template-columns: repeat(3, 50px);
	grid-template-rows: repeat(3, 50px);
	position: relative;
`;

const ButtonBase = styled.li`
	align-items: center;
	background: gray;
	background: linear-gradient(0deg, rgba(230, 0, 0, 1) 0%, rgba(255, 51, 51, 1) 100%);
	background: rgb(230, 0, 0);
	border-radius: 10px 10px 10px 10px;
	border: 1px solid #cc0000;
	box-shadow: 
		0px 6px 0px #cc0000, 
		0px 3px 15px rgba(0, 0, 0, 0.4), 
		inset 0px 1px 0px rgba(255, 255, 255, 0.3), 
		inset 0px 0px 3px rgba(255, 255, 255, 0.5);
	color: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	list-style: none;
	padding: 10px;
	text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
	width: 100%;

	&:hover {
		background: rgb(255, 26, 26);
		background: linear-gradient(0deg, rgba(255, 26, 26, 1) 0%, rgba(255, 102, 102, 1) 100%);
	}

	&:active {
		background: rgb(255, 51, 51);
		background: linear-gradient(0deg, rgba(255, 51, 51, 1) 0%, rgba(230, 0, 0, 1) 100%);

		box-shadow: 
			0px 2px 0px #cc0000, 
			0px 1px 6px rgba(0, 0, 0, 0.4),
			inset 0px 1px 0px rgba(255, 255, 255, 0.3), 
			inset 0px 0px 3px rgba(255, 255, 255, 0.5);
		transform: translate(0, 4px);
		transition: all 0.2s ease-in-out;
	}
`;

const Down = styled(ButtonBase)`
	grid-area: down;
	&:after {
		content: '▼';
	}
`;

const Up = styled(ButtonBase)`
	grid-area: up;
	&:after {
		content: '▲';
	}
`;

const Left = styled(ButtonBase)`
	grid-area: left;
	&:after {
		content: '◀';
	}
`;

const Right = styled(ButtonBase)`
	grid-area: right;
	&:after {
		content: '▶';
	}
`;

export default function Dpad(props) {
	return (
		<Container>
			<Up value={38} onClick={props.handleDpadPress} />
			<Down value={40} onClick={props.handleDpadPress} />
			<Left value={37} onClick={props.handleDpadPress} />
			<Right value={39} onClick={props.handleDpadPress} />
		</Container>
	);
}
