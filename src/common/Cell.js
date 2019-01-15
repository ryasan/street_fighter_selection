import styled from 'styled-components';

const StyledCell = styled.div`
  padding: 30px;
  background: #bdc3c7;
  width: 100%;
  height: 90px;
  outline: ${({ active }) => (active ? '5px solid limegreen' : 'none')};
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(even) {
    background: #5dade2;
  }
`;

export { StyledCell };
