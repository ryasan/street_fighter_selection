import styled, { keyframes, css } from 'styled-components';

const flashColorAnimation = () => keyframes`
  0% { filter: none; }
  10% { filter: grayscale(100%); }
  20% { filter: none; }
  30% { filter: grayscale(100%); }
  40% { filter: none; }
  50% { filter: grayscale(100%); }
  60% { filter: none; }
  70% { filter: grayscale(100%); }
  80% { filter: none; }
  90% { filter: grayscale(100%); }
  100% { filter: none; }
`;

const activeCSS = () => css`
  animation: ${flashColorAnimation} 0.5s linear;
  animation-fill-mode: forwards;
`;

const StyledCell = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border: 2px solid #eee;
  filter: grayscale(100%);
  ${({ active }) => (active ? activeCSS() : '')}
`;

export { StyledCell };
