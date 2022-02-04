import React from 'react';
import styles from '../styles/Simulador.module.scss';

const Simulacao = () => {
  return (
    <div className={styles.container}>
      <h2>Simulador</h2>

      <div className={styles.formsContainer}>
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

        <form>
          <div className={styles.choice}>
            <div>
              <h4>TIpos de indexação</h4>
              <span>
                <h4>i</h4>
              </span>
            </div>

            <div>
              <button className='btn btn-choice'>PRÉ</button>
              <button className='btn btn-choice'>PÓS</button>
              <button className='btn btn-choice'>FIXADO</button>
            </div>
          </div>

          <div className={styles.inputsContainer}>
            <label htmlFor='aporte-mensal'>
              <h4>Aporte Mensal</h4>
            </label>
            <input type='text' id='aporte-mensal' />

            <label htmlFor='rentabilidade'>
              <h4>Rentabilidade</h4>
            </label>
            <input type='text' id='rentabilidade' />

            <label htmlFor='cdi'>
              <h4>CDI (ao ano)</h4>
            </label>
            <input type='text' id='cdi' />
          </div>
        </form>
      </div>

      <div className={styles.buttonsContainer}>
        <button className="btn btn-form">Limpar campos</button>
        <button className="btn btn-form" disabled>Simular</button>
      </div>
    </div>
  );
};

export default Simulacao;
