import styled from 'styled-components';

const StyledCell = styled.div`
  background: #bdc3c7;
  width: 100%;
  height: 100%;
  outline: ${({ active }) => (active ? '5px solid limegreen' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(even) {
    background: #5dade2;
  }
`;

export { StyledCell };
