/* eslint-disable no-unused-vars */

/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useState } from 'react';

const loadingContext = createContext();

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState([]);

  const value = {
    loading,
    setLoading,
  };

  return (
    <loadingContext.Provider value={value}>{children}</loadingContext.Provider>
  );
};

export function useLoading(init) {
  const { loading, setLoading } = useContext(loadingContext);

  // setLoading(init)

  return {
    loading,
    setLoading,
  };
}
