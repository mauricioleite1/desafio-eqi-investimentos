import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';

const Button = ({ codigo, titulo }) => {
  const [selected, setSelected] = useState(false);
  const { rendimento, indexacao, setInfo } = useContext(Info);

  useEffect(() => {
    console.log('renderizei');
    if (codigo === rendimento || codigo === indexacao) {
      setSelected(!selected);
    }
  }, []);

  const handleClick = () => {
    console.log(codigo);
  };

  return (
    <button
      className={`btn btn-choice ${selected && 'selected'}`}
      onClick={handleClick}
    >
      {titulo}
    </button>
  );
};

export default Button;
