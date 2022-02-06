import React, { useState, useContext } from 'react';
import { Simulacao } from '../../context/simulacao';
import styles from '../../styles/ResultadoDaSimulacao/Graph.module.scss';
import GraphBar from './GraphBar';

const Graph = () => {
  const {
    simulacaoData: {
      graficoValores: { comAporte, semAporte },
    },
  } = useContext(Simulacao);

  const maiorValorComAporte = comAporte[10];
  const maiorValorSemAporte = semAporte[10];

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.graphComAporte}>
          {Object.values(comAporte).map((valor, index) => (
            <div className={styles.bar} key={index}>
              <GraphBar
                key={index}
                tipo='com aporte'
                index={index}
                maiorValor={maiorValorComAporte}
                valor={valor}
              />
            </div>
          ))}
        </div>

        <div className={styles.graphSemAporte}>
          {Object.values(semAporte).map((valor, index) => (
            <div className={styles.bar} key={index}>
              <GraphBar
                key={index}
                tipo='sem aporte'
                index={index}
                maiorValor={maiorValorSemAporte}
                valor={valor}
              />
              <h4>{index}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Graph;
