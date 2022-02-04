import React from 'react';
import styles from '../styles/Simulador.module.scss';

const Simulacao = () => {
  return (
    <div className={styles.container}>
      <h2>Simulador</h2>

      <form>
        <div className={styles.choice}>
          <div>
            <h4>Rendimento</h4>
            <span>
              <h4>i</h4>
            </span>
          </div>

          <div>
            <button className='btn btn-choice'>Bruto</button>
            <button className='btn btn-choice'>Líquido</button>
          </div>
        </div>

        <div className={styles.inputsContainer}>
          <label htmlFor='aporte-inicial'>
            <h4>Aporte Inicial</h4>
          </label>
          <input type='text' id='aporte-inicial' />

          <label htmlFor='prazo'>
            <h4>Prazo (em meses)</h4>
          </label>
          <input type='text' id='prazo' />

          <label htmlFor='ipca'>
            <h4>IPCA (ao ano)</h4>
          </label>
          <input type='text' id='ipca' />
        </div>
      </form>
    </div>
  );
};

export default Simulacao;
