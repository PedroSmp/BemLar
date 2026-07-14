import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dadosServicos } from '../data/servicos'
import iconLimpezaPesada from '../assets/limpeza-pesada.svg'
import iconJanela from '../assets/janela.svg'
import iconRoupas from '../assets/roupas.svg'
import iconLocalizacao from '../assets/localizacao.svg'

// Dados das estatísticas do topo (depois isso pode vir de uma API)
const dadosStats = [
  { id: 1, valor: '10', tendencia: '↑', label: 'Serviços este mês' },
  { id: 2, valor: 'R$ 2.000', tendencia: '↑', label: 'Ganhos do mês' },
  { id: 3, valor: '4.0', tendencia: '⭐', label: 'Sua avaliação média' },
  { id: 4, valor: '2', tendencia: '🕐', label: 'Aguardando...' },
]

const iconesPorCategoria = {
  Pesada: iconLimpezaPesada,
  Vidros: iconJanela,
  Roupas: iconRoupas,
}

// Categorias das abas
const categorias = ['Pesada', 'Vidros', 'Roupas']

export function Dashboard() {
  const [categoriaAtiva, setCategoriaAtiva] = useState('Pesada')

  // Filtra os serviços pela categoria selecionada na aba
  const servicosFiltrados = dadosServicos.filter(
    (s) => s.categoria === categoriaAtiva
  )

  return (
    <div className="w-full">
      {/* Cards de estatísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 mb-10">
        {dadosStats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white border border-gray-200 rounded-xl p-5"
          >
            <div className="flex items-center gap-2 text-2xl font-extrabold text-[#1A3B5C]">
              {stat.valor}
              <span className="text-lg">{stat.tendencia}</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Título da seção */}
      <h2 className="text-2xl font-extrabold text-[#1A3B5C] mb-6">
        Serviços disponíveis
      </h2>

      {/* Abas de categoria */}
      <div className="inline-flex bg-gray-200 rounded-full p-1 mb-8">
        {categorias.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoriaAtiva(cat)}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${
              categoriaAtiva === cat
                ? 'bg-white text-[#1A3B5C] shadow-sm'
                : 'text-gray-600 hover:text-[#1A3B5C]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de serviços */}
      <div className="flex flex-col gap-6 pb-16">
        {servicosFiltrados.length === 0 && (
          <p className="text-gray-500">
            Nenhum serviço disponível nessa categoria no momento.
          </p>
        )}

        {servicosFiltrados.map((servico) => (
          <div
            key={servico.id}
            className="flex flex-col md:flex-row gap-6 bg-white border border-gray-200 rounded-xl p-4"
          >
            {/* Imagem (placeholder cinza por enquanto) */}
            <div className="w-full md:w-64 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm shrink-0">
              Foto do serviço
            </div>

            {/* Informações */}
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-[#1A3B5C]">
                    {servico.titulo}
                  </h3>
                  <div className="text-right">
                    <span className="text-lg font-bold text-[#1A3B5C]">
                      {servico.preco}
                    </span>
                    <span className="text-sm text-gray-400 ml-1">
                      {servico.periodo}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                  📍 {servico.local}
                </p>

                <p className="text-gray-600 mt-3">{servico.descricaoCurta}</p>
              </div>

              <div className="flex items-center justify-between mt-4">
                <img
                    src={iconesPorCategoria[servico.categoria]}
                    alt={servico.categoria}
                    className="w-9 h-9"/>
                {/* Link (não button!) porque isso deve abrir uma PÁGINA nova, não um modal */}
                <Link
                  to={`/servico/${servico.id}`}//pega o id do serviço e coloca na URL la dos dados mockados
                  className="px-5 py-2 border border-[#369BE9] text-[#369BE9] rounded-md font-semibold text-sm hover:bg-[#369BE9] hover:text-white transition-colors"
                >
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}