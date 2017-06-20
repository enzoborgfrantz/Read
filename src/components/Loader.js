import React from 'react';
import styled, { keyframes } from 'styled-components';

const Bounce = keyframes`
  0%, 100% {
    transform: scale(0.0);
    } 50% {
      transform: scale(1.0);
    }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const LoaderCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #0699da;
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${Bounce} 2.0s infinite ease-in-out;
`;

const LoaderCircleDelay = LoaderCircle.extend`
  animation-delay: -1.0s;
`;

const Loader = () => (
  <LoaderWrapper>
    <LoaderCircle />
    <LoaderCircleDelay />
  </LoaderWrapper>
);

export default Loader;
