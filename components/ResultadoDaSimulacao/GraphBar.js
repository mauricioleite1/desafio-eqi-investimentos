import React, { useState } from 'react';
import { formatCurrency } from '../../context/helpers';

const GraphBar = ({ index, maiorValor, valor, tipo }) => {
  const [tooltip, setTooltip] = useState(false);

  const multiplier = () => {
    if (tipo === 'com aporte') return 5;
    return 1;
  }

  return (
    <>
      <div
        key={index}
        onMouseOver={() => setTooltip(!tooltip)}
        onMouseOut={() => setTooltip(!tooltip)}
        style={{
          height: (valor / maiorValor) * 40 * multiplier(),
          backgroundColor: tipo === 'com aporte' && '#ed8e53',
        }}
      />
      {tooltip && (
        <span className='tooltip'>
          <h7>{formatCurrency.format(valor.toFixed(2))}</h7>
        </span>
      )}
    </>
  );
};

export default GraphBar;
