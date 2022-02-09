import React, { useState, createContext } from 'react';

export const Info = createContext();
const initialState = {
  aporteinicial: null,
  aportemensal: null,
  cdi: null,
  indexacao: 'pos',
  ipca: null,
  prazo: null,
  rendimento: 'bruto',
  rentabilidade: null,
};

export const InfoStorage = ({ children }) => {
  const [info, setInfo] = useState(initialState);

  return <Info.Provider value={{ info, setInfo }}>{children}</Info.Provider>;
};
