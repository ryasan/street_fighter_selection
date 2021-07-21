import styled, {css} from 'styled-components';
import {flashColorAnimation} from './../../utils';

const activeCSS = css`
	animation: ${flashColorAnimation} 0.5s linear;
	animation-fill-mode: forwards;
`;

const Cell = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	filter: grayscale(100%);
	${({active}) => active && activeCSS}
`;

export {Cell};
