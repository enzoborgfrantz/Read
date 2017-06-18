import React, { Component } from 'react';
import styled from 'styled-components';
import { blue, red, placeholderGray } from '../styles/colours';
import { font } from '../styles/fonts';
import { Icon } from './Icon';
import { validation } from '../modules/validation.module';

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
  border-bottom: 2px solid transparent;
  ${''/* transition: border .25s ease-in; */}
  ${props => props.focused && `border-bottom: 2px solid ${blue};`}
  ${props => props.isInvalid && `border-bottom: 2px solid ${red};`}
`;

const InputErrorWrapper = styled.div`

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
    const { value } = e.target;
    const error = validation(value);
    this.setState({ isInvalid: !!error, errorMessage: error });
  }

  render() {
    const { type, value, placeholder } = this.props;
    const { focused, isInvalid, errorMessage } = this.state;

    return (
      <InputErrorWrapper>
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

export { Input };
