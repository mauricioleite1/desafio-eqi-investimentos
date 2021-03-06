import React, { useState, useContext, useEffect } from 'react';
import { Info } from '../context/info';
import { getData } from '../context/helpers';
import { Simulacao } from '../context/simulacao';
import { Error } from '../context/error';

const Input = ({ type = 'text', titulo, id, codigo }) => {
  const { info, setInfo } = useContext(Info);
  const { setSimulacaoData } = useContext(Simulacao);
  const { error, setError } = useContext(Error);

  useEffect(() => {
    if (codigo === 'cdi' || codigo === 'ipca') {
      getData(info, setInfo);
    }
  }, [setInfo, codigo]);

  const handleChange = ({ target: { value } }) => {

    // setInfo({ ...info, [codigo]: e.target.value });

    setSimulacaoData(null);
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

  const rs = ['aporteinicial', 'aportemensal'];

  return (
    <>
      <label htmlFor={codigo} data-cy="label">
        <h4 style={{ color: error.codigos.includes(codigo) && 'red ' }}>
          {titulo}
        </h4>
      </label>
      <div className='input-box'
                style={{
                  borderBottom: error.codigos.includes(codigo) && '1px solid red',
                }}
                >
        {rs.includes(codigo) ? (
            <span>
              <h4>R$</h4>
            </span>
          ) : codigo !== 'prazo' && (
            <span style={{ position: 'absolute', right: 0 }}>
              <h4>%</h4>
            </span>
          ) }
        <input
          autoComplete='off'
          data-cy="input"
          type={type}
          id={codigo}
          name={codigo}
          onChange={handleChange}
          value={info[codigo]}
        />
      </div>
      <h4 className='error-message'>
        {error.codigos.includes(codigo) &&
          `${errorTitle[0]} deve ser um n??mero`}
      </h4>
    </>
  );
};

export default Input;
