import React, { useState } from 'react';
import Button from '../Button';
import styles from '../../styles/Simulador/FormOptions.module.scss';
import { infoIndexacao, infoRendimentos } from '../../context/auxiliarData';

const FormOptions = ({ titulo, data }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <>
      <div>
        <h4>{titulo}</h4>
        <span
          onMouseOver={() => setShowMoreInfo(true)}
          onMouseOut={() => setShowMoreInfo(false)}
          id={styles.info}
        >
          <h4>i</h4>
          {showMoreInfo && (
            <div>
              {titulo === 'Rendimento' ? infoRendimentos : infoIndexacao}
            </div>
          )}
        </span>
      </div>
      <div className={styles.container}>
        {data.map(({ id, codigo, titulo, type }) => (
          <Button key={id} codigo={codigo} titulo={titulo} type={type} />
        ))}
      </div>
    </>
  );
};

export default FormOptions;
