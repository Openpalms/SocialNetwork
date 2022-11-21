export const required = (value) => {
  if (value) {
    return undefined;
  }
  return 'Can not be empty';
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) {
    return `max length not more then ${maxLength} symbols`;
  }
  return undefined;
};
