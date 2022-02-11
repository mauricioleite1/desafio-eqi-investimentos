import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';

const Button = ({ codigo, titulo, type }) => {
  const { info, setInfo } = useContext(Info);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const values = Object.values(info);

    if (values.includes(codigo)) return setSelected(true);
    return setSelected(false);
  }, [info, codigo]);
  
  const handleClick = (event) => {
    event.preventDefault();
    setInfo({ ...info, [type]: codigo });
  };

  console.log(type);

  return (
    <button
      className={`btn btn-choice ${selected && 'selected'}`}
      onClick={handleClick}
      data-cy={ type === 'rendimento' ? "options-btn-rendimento" : "options-btn-indexacao" }
    >
     <span><h4>{ selected && '✓' }</h4>{titulo}</span>
    </button>
  );
};

export default Button;
