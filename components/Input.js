import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';
import { getData } from '../context/helpers';
import { Error } from '../context/error';

const Input = ({ type = 'text', titulo, id, codigo }) => {
  const { info, setInfo } = useContext(Info);
  const { error, setError } = useContext(Error);

  const [inputValue, setInputValue] = useState('');
  const [indicador, setIndicador] = useState('');

  useEffect(() => {
    if (codigo === 'cdi' || codigo === 'ipca') {
      getData(info, setInfo);
    }
  }, [setInfo, codigo]);

  const handleChange = ({ target: { value } }) => {
    if (!Number.isNaN(+value)) {
      setError({ codigos: error.codigos.filter((cod) => cod !== codigo) });
      return setInfo({ ...info, [codigo]: +value });
    }
    if (!error.codigos.includes(codigo)) {
      return setError({ codigos: [...error.codigos, codigo] });
    }
    setError({ codigos: [...error.codigos] });
    return setInfo({ ...info, [codigo]: value });
  };

  const errorTitle = titulo.split(' ', 3);

  return (
    <>
      <label htmlFor={codigo}>
        <h4 style={{ color: error.codigos.includes(codigo) && 'red ' }}>{titulo}</h4>
      </label>
      <input
        autoComplete='off'
        type={type}
        id={codigo}
        name={codigo}
        onChange={handleChange}
        value={info[codigo]}
        style={{
          borderBottom: error.codigos.includes(codigo) && '1px solid red',
        }}
      />
      <h4 className='error-message'>
        {error.codigos.includes(codigo) &&
          `${errorTitle[0]} deve ser um número`}
      </h4>
    </>
  );
};

export default Input;
