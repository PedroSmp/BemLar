// Dados mockados dos serviços.
import casaImagem1 from '../assets/02-casa.jpg'
import casaImagem2 from '../assets/03-casa.jpg'
import casaImagem3 from '../assets/04-casa.jpg'

import vidroImagem1 from '../assets/vidro-sujo-1.jpg'
import vidroImagem2 from '../assets/vidro-sujo-2.jpg'
import vidroImagem3 from '../assets/vidro-sujo-3.jpg'

export const dadosServicos = [
  {
    id: 1,
    categoria: 'Pesada',
    titulo: 'Faxina completa',
    local: 'Vila Madalena, SP',
    preco: 'R$350',
    periodo: '/diária',
    imagens: [casaImagem1, casaImagem2, casaImagem3],
    descricaoCurta:
      'Preciso de alguém que faça uma limpeza nos vidros da minha sala...',
    descricaoCompleta:
      'Preciso de alguém que faça uma faxina completa no apartamento, incluindo cozinha, banheiros, quartos e sala. Tenho os produtos de limpeza em casa, só precisa trazer disposição!',
    quantidade: '3 comodos',
    tempo: '~4h',
    cliente: {
      nome: 'Roberto Silva',
      local: 'Vila Madalena, SP',
      verificado: true,
      nota: 4.6,
      contratacoes: 3,
      membroDesde: 2023,
    },
    avaliacoes: [
      { texto: 'Ótimo cliente, tudo organizado!', nota: 5, data: 'Fev 2026' },
    ],
  },
  {
    id: 2,
    categoria: 'Vidros',
    titulo: 'Limpeza de vidros - Pinheiros, SP',
    local: 'Pinheiros, SP',
    preco: 'R$200',
    periodo: '/diária',
    imagens: [vidroImagem1, vidroImagem2, vidroImagem3],
    descricaoCurta:
      'Preciso de alguem que faça uma limpeza completa de vidros com muita sujeira acumulada...',
    descricaoCompleta:
      'Preciso de alguem que faça uma limpeza completa de vidros com muita sujeira acumulada, como gordura, manchas de água e fuligem. Deixo tudo limpo e sem marcas, seja janela, box de banheiro ou porta de vidro.',
    quantidade: '4 comodos',
    tempo: '~5h',
    cliente: {
      nome: 'Carla Justos',
      local: 'Pinheiros, SP',
      verificado: true,
      nota: 4.8,
      contratacoes: 6,
      membroDesde: 2024,
    },
    avaliacoes: [
      {
        texto: 'Carla é ótima cliente! Apartamento organizado, muito educada. Recomendo!',
        nota: 5,
        data: 'Mar 2026',
      },
      {
        texto: 'Muito boa de negociação, e tem muito carisma, uma boa pessoa para trabalhar.',
        nota: 4,
        data: 'Jan 2026',
      },
    ],
  },
]

// Função auxiliar pra buscar 1 serviço pelo id (usada na página de detalhe)
export function getServicoPorId(id) {
  return dadosServicos.find((servico) => String(servico.id) === String(id))
}