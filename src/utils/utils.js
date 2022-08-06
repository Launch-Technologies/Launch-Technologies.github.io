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

export const getGreeting = () => {
  const hour = new Date().getHours();
  let str = 'Good Morning';
  if (hour >= 12) str = 'Good Afternoon';
  if (hour >= 18) str = 'Good Evening';
  if (hour >= 21) str = 'Good Night';
  return str;
};
