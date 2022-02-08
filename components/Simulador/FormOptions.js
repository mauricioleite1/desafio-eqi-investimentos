import React from 'react';
import Button from '../Button';
import styles from '../../styles/Simulador/FormOptions.module.scss';

const FormOptions = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map(({ id, codigo, titulo, type }) => (
        <Button
          key={id} 
          codigo={codigo} 
          titulo={titulo} 
          type={type}
        />
      ))}
    </div>
  );
};

export default FormOptions;
