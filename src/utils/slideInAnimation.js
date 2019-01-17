import { keyframes } from 'styled-components';

const slideIn = direction => keyframes`
  100% { ${direction}: 0; }
`;

export { slideIn };
