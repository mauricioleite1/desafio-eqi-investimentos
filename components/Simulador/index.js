import React from 'react';
import Form from './Form';
import FormButtons from './FormButtons';
import styles from '../../styles/Simulador.module.scss';
import * as auxiliarData from '../../context/auxiliarData';

const Simulador = () => {
  return (
    <div className={styles.container}>
      <h2>Simulador</h2>

      <div className={styles.wrapper}>
        <Form
          titulo='Rendimento'
          inputs={auxiliarData.inputsRendimento}
          opcoes={auxiliarData.opcoesRendimento}
        />
        <Form
          titulo='Tipos de indexação'
          inputs={auxiliarData.inputsIndexacao}
          opcoes={auxiliarData.opcoesIndexacao}
        />
      </div>

      <FormButtons />
    </div>
  );
};

export default Simulador;
