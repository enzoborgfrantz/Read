import styled, { keyframes } from 'styled-components';
import { blue } from '../styles/colours';

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  border: 2px solid white;
  border-top: 2px solid ${blue};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  animation: ${Spin} 1s linear infinite;
`;

export default Spinner;
