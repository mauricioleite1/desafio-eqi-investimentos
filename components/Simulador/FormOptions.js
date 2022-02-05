import React, { useState, useContext } from 'react';
import Button from '../Button';

const FormOptions = ({ data }) => { 
  return (
    <div>
      { data.map(({ id, codigo, titulo, type }) => (
        <Button key={ id } codigo={ codigo } titulo={ titulo } type={ type } />
      ))}
    </div>
  );
};

export default FormOptions;
