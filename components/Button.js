import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';

const Button = ({ codigo, titulo, type }) => {
  const [selected, setSelected] = useState(false);
  const { info, setInfo } = useContext(Info);

  useEffect(() => {
    const values = Object.values(info);

    if (values.includes(codigo)) {
      setSelected(true);  
      console.log(codigo);
    } else {
      setSelected(false);
    }
  }, [info, codigo]);
  
  const handleClick = (event) => {
    event.preventDefault();
    setInfo({ ...info, [type]: codigo });
  };

  return (
    <button
      className={`btn btn-choice ${selected && 'selected'}`}
      onClick={handleClick}
    >
     <span><h4>{ selected && '✓' }</h4>{titulo}</span>
    </button>
  );
};

export default Button;
