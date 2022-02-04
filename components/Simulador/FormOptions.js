import React from 'react';

const FormOptions = ({ data }) => {
  return (
    <div>
      { data.map(({ id, codigo, titulo }) => (
        <button key={ id } className='btn btn-choice'>{ titulo }</button>
      ))}
    </div>
  );
};

export default FormOptions;
