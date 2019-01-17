import { keyframes } from 'styled-components';

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

export { flashColorAnimation };
