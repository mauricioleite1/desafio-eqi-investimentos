import React, { useState, createContext } from 'react';

export const Simulacao = createContext();

export const SimulacaoStorage = ({ children }) => {
  const [simulacaoData, setSimulacaoData] = useState(null);

  return (
    <Simulacao.Provider value={{simulacaoData, setSimulacaoData}}>
      {children}
    </Simulacao.Provider>
  );
};