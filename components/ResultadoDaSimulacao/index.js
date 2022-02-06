import React, { useContext } from 'react';
import Card from './Card';
import { Info } from '../../context/info';
import styles from '../../styles/ResultadoDaSimulacao/ResultadoDaSimulacao.module.scss';

const ResultadoDaSimulacao = () => {
  const { info } = useContext(Info);

  return (
    <div className={styles.container}>
      <h2>Resultado da Simulação</h2>

      <section className={styles.cardsContainer}>
        <Card titulo="Valor Final Bruto" valor="R$ 15.509,27" />
      </section>

      <section className={styles.graphContainer}>
        <h3>Projeção de Valores</h3>
      </section>
    </div>
  );
};

export default ResultadoDaSimulacao;
