import React, { useState } from 'react';
import FormInputs from './FormInputs';
import FormOptions from './FormOptions';
import styles from '../../styles/Simulador/Simulador.module.scss';

const Form = ({ titulo, inputs, opcoes }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <form>
      <div className={styles.choice}>        
        <FormOptions titulo={titulo} data={opcoes} />
      </div>

      <FormInputs data={inputs} />
    </form>
  );
};

export default Form;
