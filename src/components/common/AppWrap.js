import styled from 'styled-components';

const AppWrap = styled.div`
  height: 100%;
  display: grid;
  grid-template-areas:
    'world-map world-map'
    'dpad fighters';
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: none;
  border: 2px solid red;
`;

export { AppWrap };
