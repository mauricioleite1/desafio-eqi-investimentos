import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';
import { getData } from '../context/helpers';

const Input = ({ type = 'text', id, codigo }) => {
  const { info, setInfo } = useContext(Info);

  const [inputValue, setInputValue] = useState(null);
  const [indicador, setIndicador] = useState('');
  
  useEffect(() => {
    if (codigo === 'cdi' || codigo === 'ipca') {
      getData(info, setInfo);
    }
  }, [setInfo, codigo]);

  const handleChange = ({ target: { defaultValue, value } }) => {
    if (indicador) setIndicador(value)
    setInfo({ ...info, [codigo]: value })
  };

  return (
    <>
      <input
        type={type}
        id={codigo}
        name={codigo}
        onChange={handleChange}
        value={ info[codigo] !== 0 ? info[codigo] : '' }
      />
    </>
  );
};

export default Input;
