import { InfoStorage } from './info';
import { SimulacaoStorage } from './simulacao';

const GlobalContext = ({ children }) => {
  return (
    <SimulacaoStorage>
      <InfoStorage>{children}</InfoStorage>
    </SimulacaoStorage>
  );
};

export default GlobalContext;
