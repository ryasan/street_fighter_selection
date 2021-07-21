import React from 'react';
import styled from 'styled-components';

import {slideIn} from './../utils/slideInAnimation';

const DpadArea = styled.ul`
	grid-area: dpad;
	display: grid;
	grid-template-rows: repeat(3, 50px);
	grid-template-columns: repeat(3, 50px);
	grid-template-areas:
		'. up .'
		'left . right'
		'. down .';
	left: -100vw;
	position: relative;
	animation: ${slideIn('left')} 1s forwards;
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
	border: 1px solid #cc0000;
	text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.5);
	cursor: pointer;
	box-shadow: 0px 6px 0px #cc0000, 0px 3px 15px rgba(0, 0, 0, 0.4),
		inset 0px 1px 0px rgba(255, 255, 255, 0.3), inset 0px 0px 3px rgba(255, 255, 255, 0.5);
	background: rgb(230, 0, 0);
	background: linear-gradient(0deg, rgba(230, 0, 0, 1) 0%, rgba(255, 51, 51, 1) 100%);

	&:hover {
		background: rgb(255, 26, 26);
		background: linear-gradient(0deg, rgba(255, 26, 26, 1) 0%, rgba(255, 102, 102, 1) 100%);
	}

	&:active {
		background: rgb(255, 51, 51);
		background: linear-gradient(0deg, rgba(255, 51, 51, 1) 0%, rgba(230, 0, 0, 1) 100%);

		box-shadow: 0px 2px 0px #cc0000, 0px 1px 6px rgba(0, 0, 0, 0.4),
			inset 0px 1px 0px rgba(255, 255, 255, 0.3), inset 0px 0px 3px rgba(255, 255, 255, 0.5);
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

export default function Dpad(props) {
	return (
		<DpadArea>
			<DpadWrapUp value={38} onClick={props.handleDpadPress} />
			<DpadWrapDown value={40} onClick={props.handleDpadPress} />
			<DpadWrapLeft value={37} onClick={props.handleDpadPress} />
			<DpadWrapRight value={39} onClick={props.handleDpadPress} />
		</DpadArea>
	);
}
