import React from 'react';
import styles from '../../styles/Simulador/ButtonsContainer.module.scss';

const ButtonsContainer = () => {
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

export default ButtonsContainer;
