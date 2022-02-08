import { InfoStorage } from './info';
import { SimulacaoStorage } from './simulacao';
import { ErrorStorage } from './error';

const GlobalContext = ({ children }) => {
  return (
    <SimulacaoStorage>
      <ErrorStorage>
        <InfoStorage>{children}</InfoStorage>
      </ErrorStorage>
    </SimulacaoStorage>
  );
};

export default GlobalContext;
