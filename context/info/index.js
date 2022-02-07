import React, { useState, createContext } from 'react';

export const Info = createContext();
const initialState = {
  aporteinicial: 0,
  aportemensal: 0,
  cdi: 0,
  indexacao: 'pos',
  ipca: 0,
  prazo: 0,
  rendimento: 'bruto',
  rentabilidade: 0,
};

export const InfoStorage = ({ children }) => {
  const [info, setInfo] = useState(initialState);

  return <Info.Provider value={{ info, setInfo }}>{children}</Info.Provider>;
};
