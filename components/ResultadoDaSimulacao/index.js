import React from 'react';
import styles from '../../styles/ResultadoDaSimulacao/ResultadoDaSimulacao.module.scss';
import Card from './Card';

const ResultadoDaSimulacao = () => {
  return (
    <div className={styles.container}>
      <h2>Resultado da Simulação</h2>

      <section className={styles.cardsContainer}>
        <Card titulo="Valor Final Bruto" valor="R$ 15.509,27" />
        <Card titulo="Alíquota do IR Final Bruto" valor="20%" />
        <Card titulo="Valor Pago em IR" valor="R$ 1.509,27" />
        <Card titulo="Valor Final Líquido" valor="R$ 56.509,27" />
        <Card titulo="Valor Total Investido" valor="R$ 9.509,27" />
        <Card titulo="Ganho Líquido" valor="R$ 47.000,00" />
      </section>

      <section className={styles.graphContainer}>
        <h3>Projeção de Valores</h3>
      </section>
    </div>
  );
};

export default ResultadoDaSimulacao;
