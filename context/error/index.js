import React, { useState, createContext } from 'react';

export const Error = createContext();

const initialState = {
  codigos: [],
}

export const ErrorStorage = ({ children }) => {
  const [error, setError] = useState(initialState);

  return <Error.Provider value={{ error, setError }}>{children}</Error.Provider>;
};
