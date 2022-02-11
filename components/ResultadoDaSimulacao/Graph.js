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

  return (
    <section className={styles.container} data-cy="graph">
      <div className={styles.wrapper}>
        <div className={styles.graphComAporte}>
          {Object.values(comAporte).map((valor, index) => (
            <div className={styles.bar} key={index}>
              <GraphBar
                key={index}
                tipo='com aporte'
                index={index}
                maiorValor={comAporte[10]}
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
                maiorValor={semAporte[10]}
                valor={valor}
              />
              <h4>{index}</h4>
            </div>
          ))}
          <div className={styles.legendaValor}>
            <h6>Valor (R$)</h6>
          </div>
          <div className={styles.legendaMeses}>
            <h6>Tempo (meses)</h6>

            <div className={styles.legendaWrapper}>

              <div className={styles.legenda}>
                <div className={`${styles.legendaBola} ${styles.accentColor}`} />
                <h6>Com aporte</h6>
              </div>
              
              <div className={styles.legenda}>
                <div className={styles.legendaBola} />
                <h6>Sem aporte</h6>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
