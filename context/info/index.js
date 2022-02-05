import React, { useState, createContext } from 'react';

export const Info = createContext();
const initialState = {
  aporteinicial: '',
  aportemensal: '',
  cdi: '',
  indexacao: 'pos',
  ipca: '',
  prazo: '',
  rendimento: 'bruto',
  rentabilidade: '',
}

export const InfoStorage = ({ children }) => {
  const [info, setInfo] = useState(initialState);

  return (
    <Info.Provider value={{info, setInfo}}>
      {children}
    </Info.Provider>
  );
};