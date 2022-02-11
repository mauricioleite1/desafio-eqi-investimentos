import React from 'react';
import styles from '../../styles/ResultadoDaSimulacao/Card.module.scss';

const Card = ({ titulo, valor, destaque }) => {
  return (
    <div className={styles.container} data-cy="card">
      <h3>{ titulo }</h3>

      <h4 style={{ color: destaque && '#3ec12a' }}>{ valor }</h4>
    </div>
  );
};

export default Card;
