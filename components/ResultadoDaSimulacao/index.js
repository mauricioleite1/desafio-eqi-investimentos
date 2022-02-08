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
          <div className={styles.cardsContainer}>
            <h2>Resultado da Simulação</h2>
            <Card
              titulo='Valor Final Bruto'
              valor={formatCurrency.format(simulacaoData.valorFinalBruto)}
              destaque={false}
            />
            <Card
              titulo='Alíquota do IR'
              valor={`${simulacaoData.aliquotaIR}%`}
              destaque={false}
            />
            <Card
              titulo='Valor Pago em IR'
              valor={formatCurrency.format(simulacaoData.valorPagoIR)}
              destaque={false}
            />
            <Card
              titulo='Valor Final Líquido'
              valor={formatCurrency.format(simulacaoData.valorFinalLiquido)}
              destaque
            />
            <Card
              titulo='Valor Total Investido'
              valor={formatCurrency.format(simulacaoData.valorTotalInvestido)}
              destaque={false}
            />
            <Card
              titulo='Ganho Líquido'
              valor={formatCurrency.format(simulacaoData.ganhoLiquido)}
              destaque
            />
          </div>

          <div className={styles.graphContainer}>
            <h3>Projeção de Valores</h3>

            <Graph />
          </div>
        </>
      )}
    </div>
  );
};

export default ResultadoDaSimulacao;
