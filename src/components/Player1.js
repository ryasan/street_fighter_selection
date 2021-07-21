import React from 'react';
import styled from 'styled-components';

const StyledPlayer1 = styled.div`
	width: 0;
	height: 0;
	color: white;
	position: absolute;
	display: flex;
	justify-content: center;
	font-size: 12px;
	border-left: 1.4em solid transparent;
	border-right: 1.4em solid transparent;
	border-top: 2em solid ${({theme}) => theme.color.primary};
`;

const StyledP1Label = styled.div`
	position: absolute;
	margin-top: -2em;
`;

export function Player1() {
	return (
		<StyledPlayer1>
			<StyledP1Label>P1</StyledP1Label>
		</StyledPlayer1>
	);
}

export default Player1;
