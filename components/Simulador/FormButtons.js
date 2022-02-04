import React from 'react';
import styles from '../../styles/Simulador/FormButtons.module.scss';

const FormButtons = () => {
  return (
    <div className={styles.container}>
      <button className='btn btn-form'>
        Limpar campos
      </button>

      <button className='btn btn-form' disabled>
        Simular
      </button>
    </div>
  );
};

export default FormButtons;
