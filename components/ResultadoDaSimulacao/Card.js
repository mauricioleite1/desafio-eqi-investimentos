import React from 'react';
import styles from '../../styles/ResultadoDaSimulacao/Card.module.scss';

const Card = ({ titulo, valor }) => {
  return (
    <div className={styles.container}>
      <h3>{ titulo }</h3>

      <h4>{ valor }</h4>
    </div>
  );
};

export default Card;
