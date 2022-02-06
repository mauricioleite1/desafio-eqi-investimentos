import React, { useContext } from 'react';
import Card from './Card';
import Graph from './Graph';
import { Simulacao } from '../../context/simulacao';
import { formatCurrency } from '../../context/helpers';
import styles from '../../styles/ResultadoDaSimulacao/ResultadoDaSimulacao.module.scss';

const ResultadoDaSimulacao = () => {
  const { simulacaoData } = useContext(Simulacao);

  return (
    <div className={styles.container}>
      {simulacaoData && (
        <>
          <h2>Resultado da Simulação</h2>

          <section className={styles.cardsContainer}>
            <Card
              titulo='Valor Final Bruto'
              valor={formatCurrency.format(simulacaoData.valorFinalBruto)}
            />
            <Card
              titulo='Alíquota do IR'
              valor={`${simulacaoData.aliquotaIR}%`}
            />
            <Card
              titulo='Valor Pago em IR'
              valor={formatCurrency.format(simulacaoData.valorPagoIR)}
            />
            <Card
              titulo='Valor Final Líquido'
              valor={formatCurrency.format(simulacaoData.valorFinalLiquido)}
            />
            <Card
              titulo='Valor Total Investido'
              valor={formatCurrency.format(simulacaoData.valorTotalInvestido)}
            />
            <Card
              titulo='Ganho Líquido'
              valor={formatCurrency.format(simulacaoData.ganhoLiquido)}
            />
          </section>
        </>
      )}

      <section className={styles.graphContainer}>
        <h3>Projeção de Valores</h3>

        { simulacaoData && <Graph /> }
      </section>
    </div>
  );
};

export default ResultadoDaSimulacao;
