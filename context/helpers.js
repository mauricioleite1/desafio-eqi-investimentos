import axios from 'axios';

export const getData = async (setIndicador, codigo) => {
  const { data } = await axios.get('http://localhost:3000/indicadores');
  const { valor } = data.find((indicador) => indicador.nome === codigo);

  setIndicador(`${valor}%`);
};
