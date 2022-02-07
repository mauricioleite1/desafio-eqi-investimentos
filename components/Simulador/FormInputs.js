import React from 'react';
import Input from '../Input';
import styles from '../../styles/Simulador/FormInputs.module.scss';

const FormInputs = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map(({ id, codigo, titulo }) => (
        <div key={id}>
          <label htmlFor={codigo}>
            <h4>{titulo}</h4>
          </label>
          <Input codigo={codigo} />
        </div>
      ))}
    </div>
  );
};

export default FormInputs;
