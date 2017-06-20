import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { blue, red, placeholderGray } from '../styles/colours';
import { font } from '../styles/fonts';
import Icon from './Icon';

const shake = keyframes`
  from, to {
  transform: translate3d(0, 0, 0);
  }

  10%, 30%, 50%, 70%, 90% {
  transform: translate3d(-5px, 0, 0);
  }

  20%, 40%, 60%, 80% {
  transform: translate3d(5px, 0, 0);
  }
`;

const StyledInput = styled.input.attrs({
  type: props => props.type,
  defaultValue: props => props.defaultValue,
  placeholder: props => props.placeholder,
  onFocus: props => props.onFocus,
  onBlur: props => props.onBlur,
})`
  border: none;
  background-color: transparent;
  color: ${blue};
  outline: none;
  width: 100%;
  box-sizing: border-box;
  font-size: 12px;
  font-family: ${font};
  &::placeholder {
    color:${placeholderGray};
  }
  ${props => props.isInvalid && `color: ${red};`}
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2px;
  box-sizing: border-box;
  border-bottom: 2px solid ${placeholderGray};
  ${props => props.focused && `border-bottom: 2px solid ${blue};`}
  ${props => props.isInvalid && `border-bottom: 2px solid ${red};`}
`;

const InputErrorWrapper = styled.div`
  width: 100%;
  height: 36px;
  ${props => props.isInvalid && `animation: ${shake} .8s 1;`};
`;

const ErrorMessage = styled.span`
  color: ${red};
  font-size: 8px;
  padding-left: 5px;
`;

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
    this.focusChanged = this.focusChanged.bind(this);
    this.textChanged = this.textChanged.bind(this);
  }

  focusChanged() {
    this.setState(prevState => ({ focused: !prevState.focused }));
  }

  textChanged(e) {
    const { validationFunction } = this.props;

    if (validationFunction) {
      const { value } = e.target;
      const error = validationFunction(value);
      this.setState({ isInvalid: !!error, errorMessage: error });
    }
  }

  render() {
    const { type, value, placeholder } = this.props;
    const { focused, isInvalid, errorMessage } = this.state;

    return (
      <InputErrorWrapper isInvalid={isInvalid}>
        <InputWrapper focused={focused} isInvalid={isInvalid}>
          <StyledInput
            type={type}
            defaultValue={value}
            placeholder={placeholder}
            onFocus={this.focusChanged}
            onBlur={this.focusChanged}
            onChange={this.textChanged}
            isInvalid={isInvalid}
          />
          {isInvalid &&
            <Icon
              name={'exclamationMark'}
              width={15}
              height={15}
            />}
        </InputWrapper>
        {isInvalid &&
          <ErrorMessage>
            {errorMessage}
          </ErrorMessage>}
      </InputErrorWrapper>
    );
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  validationFunction: PropTypes.function,
};

Input.defaultProps = {
  type: 'text',
  value: '',
  placeholder: '',
  validationFunction: null,
};

export default Input;
