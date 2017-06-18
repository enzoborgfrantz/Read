import React from 'react';
import styled, { keyframes } from 'styled-components';
import { red, gray } from '../styles/colours';

const ProgressBarEmpty = styled.div`
  width: 100%;
  background-color: ${gray};
  height: 5px;
  position: relative;
`;

const AnimateProgress = value => keyframes`
  from {
    width: 0;
  }

  to {
    width: ${value}%;
  }
`;

const Progress = styled.div`
  height: 100%;
  background-color: ${red};
  background: ${red};
  transition: width 1s ease-in;
  animation: ${props => AnimateProgress(props.value)} 2.5s 1;
  animation-fill-mode: forwards;
`;

const calculateProgress = (currentPage, totalPages) => Math.round((currentPage / totalPages) * 100);

const ProgressBar = ({ min, max, value }) =>
  (<ProgressBarEmpty>
    <Progress value={calculateProgress(value, max)} />
  </ProgressBarEmpty>);

ProgressBar.defaultProps = {
  min: 1,
};

module.exports = ProgressBar;
