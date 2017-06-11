import React from 'react';
import styled from 'styled-components';
import { font } from '../styles/fonts';
import { darkGray, yellow } from '../styles/colours';

const NumberInput = styled.input.attrs({
  placeholder: props => props.placeholder,
  value: props => props.value,
  type: 'number',
})`
  border: none;
  text-align: center;
  border-bottom: 1px solid ${yellow};
  background-color: transparent;
  font-family: ${font};
  font-size: 30px;
  color: ${yellow};
  outline: none;
  margin-left: 5px;
  width: 75px;
  box-sizing: border-box;
  &::placeholder {
    color:${darkGray};
  }
`;

module.exports = NumberInput;
