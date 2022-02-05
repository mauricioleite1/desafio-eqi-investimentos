import React from 'react';
import FormInputs from './FormInputs';
import FormOptions from './FormOptions';
import styles from '../../styles/Simulador.module.scss';

const Form = ({ titulo, inputs, opcoes }) => {
  return (
    <form>
      <div className={styles.choice}>
        <div>
          <h4>{titulo}</h4>
          <span id={styles.info}>
            <h4>i</h4>
          </span>
        </div>

        <FormOptions data={opcoes} />
      </div>

      <FormInputs data={inputs} />
    </form>
  );
};

export default Form;
