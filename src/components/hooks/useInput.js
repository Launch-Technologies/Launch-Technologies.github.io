import { useState } from 'react';

export const useInput = (defaultValue) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  return [inputValue, setInputValue];
};
