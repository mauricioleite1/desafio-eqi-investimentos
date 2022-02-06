import React, { useContext } from 'react';
import { Simulacao } from '../../context/simulacao';
import styles from '../../styles/ResultadoDaSimulacao/Graph.module.scss';

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
          {Object.values(comAporte).map((valor, key) => (
            <div
              key={key}
              style={{ height: (valor / maiorValorComAporte) * 100 * 1.5 }}
            />
          ))}
        </div>

        <div className={styles.graphSemAporte}>
          {Object.values(semAporte).map((valor, index) => (
            <div className={styles.bar} key={index}>
              <div
                key={index}
                style={{ height: (valor / maiorValorSemAporte) * 30 }}
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
