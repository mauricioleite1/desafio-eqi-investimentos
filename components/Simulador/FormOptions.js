import React, { useState, useContext } from 'react';
import Button from '../Button';

const FormOptions = ({ data }) => { 
  return (
    <div>
      { data.map(({ id, codigo, titulo }) => (
        <Button key={ id } codigo={ codigo } titulo={ titulo } />
      ))}
    </div>
  );
};

export default FormOptions;
