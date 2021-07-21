import styled, {css, keyframes} from 'styled-components';

const flashColorAnimation = keyframes`
  0% { filter: none; }
  10% { filter: brightness(200%); }
  20% { filter: none; }
  30% { filter: brightness(200%); }
  40% { filter: none; }
  50% { filter: brightness(200%); }
  60% { filter: none; }
  70% { filter: brightness(200%); }
  80% { filter: none; }
  90% { filter: brightness(200%); }
  100% { filter: none; }
`;

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
