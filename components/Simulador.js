import React from 'react';
import styles from '../styles/Simulador.module.scss';

const Simulacao = () => {
  return (
    <div className={styles.container}>
      <h2>Simulador</h2>

      <h4>Rendimento</h4>

      <div className={styles.choiceButtons}>
        <button className="btn btn-choice">Bruto</button>
        <button className="btn btn-choice">Líquido</button>
      </div>

    </div>
  );
};

export default Simulacao;
