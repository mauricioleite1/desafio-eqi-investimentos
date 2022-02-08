import React, { useContext, useState } from 'react';
import Input from '../Input';
import styles from '../../styles/Simulador/FormInputs.module.scss';
import { Error } from '../../context/error';

const FormInputs = ({ data }) => (
  <div className={styles.container}>
    {data.map(({ id, codigo, titulo }) => (
      <div key={id}>
        <Input titulo={titulo} codigo={codigo} />
      </div>
    ))}
  </div>
);

export default FormInputs;
