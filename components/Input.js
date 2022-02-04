import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Input = ({ type = 'text', id, codigo }) => {
  const [content, setContent] = useState('');
  const [indicador, setIndicador] = useState('');
  
  useEffect(() => {    
    const getData = async () => {
      const { data } = await axios.get('http://localhost:3000/indicadores');
      const { valor } = data.find((indicador) => indicador.nome === codigo);
  
      setIndicador(`${valor}%`);
    };

    if (codigo === 'cdi' || codigo === 'ipca') {
      getData();
    }
  }, [codigo]);

  const handleChange = ({ target }) => {
    setContent(target.value);
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
