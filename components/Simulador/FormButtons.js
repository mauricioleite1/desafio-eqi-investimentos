import React, { useContext } from 'react';
import { Info } from '../../context/info';
import styles from '../../styles/Simulador/FormButtons.module.scss';

const FormButtons = () => {
  const { info } = useContext(Info);

  return (
    <div className={styles.container}>
      <button className='btn btn-form'>Limpar campos</button>

      <button
        className='btn btn-form btn-simular'
        disabled={Object.values(info).some(
          (info) => info == 0 || !info || info === ''
        )}
      >
        Simular
      </button>
    </div>
  );
};

export default FormButtons;
