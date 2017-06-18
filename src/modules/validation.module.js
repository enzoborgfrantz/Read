const validation = (text) => {
  if (text === '') {
    return 'No blank input';
  } else if (text.length > 10) {
    return 'Input too long';
  }
  return '';
};

export { validation };
