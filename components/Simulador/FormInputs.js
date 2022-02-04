import React from 'react';
import styles from '../../styles/Simulador/InputsContainer.module.scss';

const FormInputs = ({ data }) => {
  return (
    <div className={styles.container}>
      { data.map(({ id, codigo, titulo }) => (
        <>
          <label htmlFor={ codigo }>
            <h4>{ titulo }</h4>
          </label>
          <input type='text' id={ codigo } />
        </>
      ))}
    </div>
  );
};

export default FormInputs;

  {/* <div className={styles.inputsContainer}>
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
    <input type='text' id='ipca' value={`${indicador.ipca}%`} />
  </div> */}