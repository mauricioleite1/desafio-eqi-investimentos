import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';
import { getData } from '../context/helpers';

const Input = ({ type = 'text', id, codigo }) => {
  const { info, setInfo } = useContext(Info);
  const [content, setContent] = useState('');
  const [indicador, setIndicador] = useState('');
  
  useEffect(() => {
    if (codigo === 'cdi' || codigo === 'ipca') {
      getData(setIndicador, codigo);
    }
  }, [codigo]);

  const handleChange = ({ target: { value } }) => {
    if (indicador) setIndicador(value)
    setContent(value);

    setInfo({ ...info, [codigo]: value })
  };

  return (
    <input
      type={type}
      id={codigo}
      name={codigo}
      onChange={handleChange}
      value={indicador ? indicador : content}
    />
  );
};

export default Input;
