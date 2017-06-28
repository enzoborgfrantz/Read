import React from 'react';
import styled from 'styled-components';
import { blue, placeholderGray } from '../styles/colours';
import { font } from '../styles/fonts';
import Icon from './Icon';

const Button = styled.input.attrs({
  type: 'button',
  value: props => props.value,
  className: props => props.className,
  onClick: props => props.onClick,
})`
  appearance: none;
  background-color: ${blue};
  width: 100%;
  outline: none;
  border: none;
  color: white;
  border-radius: 3px;
  padding-bottom: 5px;
  box-shadow: inset -2px -3px 0px 0px rgba(27,31,35,0.12);
  transition: box-shadow .2s ease-in;
  font-family: ${font};
  height: 23px;
  &:active {
    box-shadow: none;
  };
`;
const IconWrapper = styled.span`
  position: absolute;
  right: 10px;
`;

const ButtonWithIconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonWithIcon = ({ className, children, value, icon, onClick }) => (
  <ButtonWithIconWrapper>
    <Button className={className} value={value} onClick={onClick}>
      {children}
    </Button>
    <IconWrapper>
      <Icon name={icon} width={15} height={15} />
    </IconWrapper>
  </ButtonWithIconWrapper>
);

const IconButtonWrapper = styled.button.attrs({
  onClick: props => props.onClick,
})`
  appearance: none;
  width: 100%;
  outline: none;
  border: none;
  background: transparent;
  transition: transform .5s ease-in;
  &:active {
    transform: scale(1.5);
  }
`;

const IconButton = ({ className, icon, ...props }) =>
  (<IconButtonWrapper className={className} {...props}>
    <Icon name={icon} />
  </IconButtonWrapper>);

const ClearTextButton = Button.extend`
  color: ${placeholderGray};
  width: 26px;
  font-size: 15px;
  background-color: transparent;
  box-shadow: none;
`;

export { Button, ButtonWithIcon, IconButton, ClearTextButton };
