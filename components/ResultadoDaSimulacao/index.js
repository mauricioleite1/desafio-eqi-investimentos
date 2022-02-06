import React, { useContext } from 'react';
import Card from './Card';
import { Info } from '../../context/info';
import { Simulacao } from '../../context/simulacao';
import styles from '../../styles/ResultadoDaSimulacao/ResultadoDaSimulacao.module.scss';

const ResultadoDaSimulacao = () => {
  const { info } = useContext(Info);
  const { simulacaoData } = useContext(Simulacao);

  return (
    <div className={styles.container}>
      <h2>Resultado da Simulação</h2>

      <section className={styles.cardsContainer}>
        {simulacaoData && (
          <>
            <Card
              titulo='Valor Final Bruto'
              valor={`R$ ${simulacaoData.valorFinalBruto}`}
            />
            <Card
              titulo='Alíquota do IR'
              valor={`${simulacaoData.aliquotaIR}%`}
            />
            <Card
              titulo='Valor Pago em IR'
              valor={`R$ ${simulacaoData.valorPagoIR}`}
            />
            <Card
              titulo='Valor Final Líquido'
              valor={`R$ ${simulacaoData.valorFinalLiquido}`}
            />
            <Card
              titulo='Valor Total Investido'
              valor={`R$ ${simulacaoData.valorTotalInvestido}`}
            />
            <Card
              titulo='Ganho Líquido'
              valor={`R$ ${simulacaoData.ganhoLiquido}`}
            />
          </>
        )}
      </section>

      <section className={styles.graphContainer}>
        <h3>Projeção de Valores</h3>
      </section>
    </div>
  );
};

export default ResultadoDaSimulacao;
