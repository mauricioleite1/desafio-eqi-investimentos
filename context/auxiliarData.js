export const opcoesRendimento = [
  {
    id: 1,
    codigo: 'bruto',
    titulo: 'Bruto',
    type: 'rendimento',
  },
  {
    id: 2,
    codigo: 'liquido',
    titulo: 'Líquido',
    type: 'rendimento',
  }
];

export const opcoesIndexacao = [
  {
    id: 1,
    codigo: 'pre',
    titulo: 'PRÉ',
    type: 'indexacao',
  },
  {
    id: 2,
    codigo: 'pos',
    titulo: 'PÓS',
    type: 'indexacao',
  },
  {
    id: 3,
    codigo: 'ipca',
    titulo: 'FIXADO',
    type: 'indexacao',
  },
]

export const inputsRendimento = [
  {
    id: 1,
    codigo: 'aporteinicial',
    titulo: 'Aporte Inicial',
  },
  {
    id: 2,
    codigo: 'prazo',
    titulo: 'Prazo (em meses)',
  },
  {
    id: 3,
    codigo: 'ipca',
    titulo: 'IPCA (ao ano)',
  },
]

export const inputsIndexacao = [
  {
    id: 1,
    codigo: 'aportemensal',
    titulo: 'Aporte Mensal',
  },
  {
    id: 2,
    codigo: 'rentabilidade',
    titulo: 'Rentabilidade',
  },
  {
    id: 3,
    codigo: 'cdi',
    titulo: 'CDI (ao ano)',
  },
]

export const infoRendimentos = `Bruto: não possui descontos, taxas e/ou impostos.
Líquido: possui descontos, taxas e/ou impostos.`

export const infoIndexacao = `A política econômica de alterar o preço dos produtos e serviços com base em índices.
Determinados itens sofrerão o reajuste de acordo com a alíquota
ou taxa do indexador econômico escolhido.`