import axios from 'axios';

export const getData = async (info, setInfo) => {
  const { data } = await axios.get('http://localhost:3000/indicadores');
  setInfo({ ...info, cdi: data[0].valor, ipca: data[1].valor });
};

export const getSimulacao = async (tipoRendimento, tipoIndexacao) => {
  const { data } = await axios.get(
    `http://localhost:3000/simulacoes?tipoIndexacao=${tipoIndexacao}&tipoRendimento=${tipoRendimento}`
  );

  return data;
};

export const formatCurrency = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
