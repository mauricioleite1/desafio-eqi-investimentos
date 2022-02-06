import React, { useContext } from 'react';
import { getSimulacao } from '../../context/helpers';
import { Info } from '../../context/info';
import { Simulacao } from '../../context/simulacao';

import styles from '../../styles/Simulador/FormButtons.module.scss';

const FormButtons = () => {
  const { info } = useContext(Info);
  const { simulacaoData, setSimulacaoData } = useContext(Simulacao);

  const handleClick = async () => {
    const data = await getSimulacao(info.rendimento, info.indexacao)
    console.log(data[0]);
  }

  return (
    <div className={styles.container}>
      <button className='btn btn-form'>Limpar campos</button>

      <button
        className='btn btn-form btn-simular'
        onClick={() => handleClick()}
        disabled={Object.values(info).some(
          (info) => info == 0 || !info || info === ''
        )}
      >
        Simular
      </button>
    </div>
  );
};

export default FormButtons;
