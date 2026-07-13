// Dados "mock" da página de finanças — depois vem de uma API/banco de dados de verdade.

// Categorias que aparecem no gráfico de rosca + na legenda
export const categoriasGastos = [
  { id: 1, label: 'Limpeza geral', valor: 800, cor: '#5CA8E0' },   // azul
  { id: 2, label: 'Limpeza pesada', valor: 800, cor: '#6FCB9F' },  // verde
  { id: 3, label: 'Diaria completa', valor: 300, cor: '#F4D35E' }, // amarelo
  { id: 4, label: 'Despesas', valor: 100, cor: '#EF6F6C' },        // vermelho
]

// Soma total (usada no centro do gráfico)
export const totalDoMes = categoriasGastos.reduce(
  (soma, categoria) => soma + categoria.valor,
  0
)

// Histórico de depósitos
export const historicoDepositos = [
  {
    id: 1,
    nome: 'Carla Justos',
    tempo: 'Hoje',
    servico: 'limpeza de vidros',
    status: 'PAGO',
    valor: 280,
  },
  {
    id: 2,
    nome: 'André Marquês',
    tempo: 'Há uma semana',
    servico: 'limpeza pesada',
    status: 'PENDENTE',
    valor: null, // ainda não recebeu, por isso não mostramos valor
  },
  {
    id: 3,
    nome: 'Marcos Rubens',
    tempo: 'Há uma semana',
    servico: 'diaria completa',
    status: 'PAGO',
    valor: 1000,
  },
  {
    id: 4,
    nome: 'Mônica Poplavski',
    tempo: 'Há um mês',
    servico: 'lavar roupas',
    status: 'PAGO',
    valor: 850,
  },
]