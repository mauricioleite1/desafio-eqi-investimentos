import React, { useContext } from 'react';
import { getSimulacao } from '../../context/helpers';
import { Info } from '../../context/info';
import { Error } from '../../context/error';
import { Simulacao } from '../../context/simulacao';

import styles from '../../styles/Simulador/FormButtons.module.scss';

const FormButtons = () => {
  const { error } = useContext(Error);
  const { info, setInfo } = useContext(Info);
  const { simulacaoData, setSimulacaoData } = useContext(Simulacao);

  const handleClick = async () => {
    const data = await getSimulacao(info.rendimento, info.indexacao);
    setSimulacaoData(data[0]);
  };

  const clearInputs = () => {
    const initialState = {
      aporteinicial: 0,
      aportemensal: 0,
      indexacao: 'pos',
      prazo: 0,
      rendimento: 'bruto',
      rentabilidade: 0,
    };

    setInfo(initialState);
    setSimulacaoData(null);
  };

  return (
    <div className={styles.container}>
      <button
        className='btn btn-form'
        data-cy='simular-btn'
        onClick={clearInputs}
      >
        Limpar campos
      </button>

      <button
        className='btn btn-form btn-simular'
        data-cy='simular-btn'
        onClick={() => handleClick()}
        disabled={Object.values(info).some(
          (info) =>
            info == 0 || !info || info === '' || error.codigos.length > 0
        )}
      >
        Simular
      </button>
    </div>
  );
};

export default FormButtons;
