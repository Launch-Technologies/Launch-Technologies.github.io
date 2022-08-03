export const isEmpty = (value) => {
  const type = typeof value;
  if ((value !== null && type === 'object') || type === 'function') {
    const props = Object.keys(value);
    if (props.length === 0 || props.size === 0) {
      return true;
    }
  }
  return !value;
};
