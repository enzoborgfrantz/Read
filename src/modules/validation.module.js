/*
  Validation functions must return a string describing the error,
  Empty strings and other falsy value indicate a valid input
*/

const isFalsy = input => !input;
const exceedsMaxLength = (input, maxLength) => input.length > maxLength;

const textValidation = (input, maxLength = 25) => {
  if (isFalsy(input)) {
    return 'No blank input';
  } else if (exceedsMaxLength(input, maxLength)) {
    return 'Input too long';
  }
  return '';
};

const numberValidation = (input, maxLength = 20) => {
  if (isFalsy(input)) {
    return 'No blank input';
  } else if (exceedsMaxLength(input, maxLength)) {
    return 'Input too long';
  }
  return '';
};

export { textValidation, numberValidation };
