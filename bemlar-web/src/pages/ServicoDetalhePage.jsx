import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ChatModal } from '../components/ChatModal'
import { getServicoPorId } from '../data/servicos'

export function ServicoDetalhePage() {
  // useParams() lê o ":id" que veio na URL (ex: /servico/2 -> id = "2")
  const { id } = useParams()
  const servico = getServicoPorId(id)

  // Controla se o modal de conversa está aberto ou fechado
  const [chatAberto, setChatAberto] = useState(false)

  // Se o id não existir na nossa lista, mostramos uma mensagem em vez de quebrar a página
  if (!servico) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
        <Header />
        <main className="flex-1 px-8 md:px-20 py-16 text-center">
          <p className="text-gray-500 mb-4">Serviço não encontrado.</p>
          <Link to="/dashboard" className="text-[#369BE9] font-semibold">
            Voltar para os serviços
          </Link>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
      <Header />

      <main className="flex-1 px-8 md:px-20 py-8 max-w-4xl mx-auto w-full">
        {/* Botão de voltar */}
        <Link
          to="/dashboard"
          className="inline-flex items-center text-[#1A3B5C] text-2xl mb-6"
        >
          ‹
        </Link>

        {/* Imagem de capa (placeholder por enquanto) */}
        <div className="w-full h-72 bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 mb-8">
          Foto do serviço
        </div>

        {/* Título */}
        <h1 className="text-3xl font-extrabold text-[#1A3B5C] mb-8">
          {servico.titulo}
        </h1>

        {/* Descrição */}
        <h2 className="text-xl font-bold text-[#1A3B5C] mb-3">
          Descrição do serviço:
        </h2>
        <div className="bg-slate-400/60 text-white rounded-xl p-6 mb-10">
          {servico.descricaoCompleta}
        </div>

        {/* Detalhes (valor / quantidade / tempo) */}
        <h2 className="text-xl font-bold text-[#1A3B5C] mb-4">Detalhes</h2>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="bg-amber-200 rounded-xl px-8 py-4 text-center">
            <p className="text-xl font-extrabold text-[#1A3B5C]">
              {servico.preco}
            </p>
            <p className="text-sm text-[#1A3B5C]/70">Valor</p>
          </div>
          <div className="bg-sky-200 rounded-xl px-8 py-4 text-center">
            <p className="text-xl font-extrabold text-[#1A3B5C]">
              {servico.quantidade}
            </p>
            <p className="text-sm text-[#1A3B5C]/70">Quantidade</p>
          </div>
          <div className="bg-sky-200 rounded-xl px-8 py-4 text-center">
            <p className="text-xl font-extrabold text-[#1A3B5C]">
              {servico.tempo}
            </p>
            <p className="text-sm text-[#1A3B5C]/70">Tempo de trabalho</p>
          </div>
        </div>

        {/* Perfil do cliente */}
        <h2 className="text-xl font-bold text-[#1A3B5C] mb-4">
          Perfil do cliente
        </h2>
        <div className="bg-[#BCEED4] rounded-xl p-5 flex items-center gap-5 mb-10">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-2xl shrink-0">
            🙂
          </div>
          <div>
            <p className="font-bold text-[#1A3B5C] text-lg">
              {servico.cliente.nome}
            </p>
            <p className="text-sm text-[#1A3B5C]/70">{servico.cliente.local}</p>
            {servico.cliente.verificado && (
              <span className="inline-block bg-white text-[#1A3B5C] text-xs font-semibold px-3 py-1 rounded-full mt-1">
                Verificado
              </span>
            )}
            <div className="flex items-center gap-4 text-sm text-[#1A3B5C] mt-2">
              <span>⭐ {servico.cliente.nota}</span>
              <span>🧹 {servico.cliente.contratacoes} Contratações</span>
              <span>👤 Membro desde {servico.cliente.membroDesde}</span>
            </div>
          </div>
        </div>

        {/* Avaliações */}
        <h2 className="text-xl font-bold text-[#1A3B5C] mb-4">
          Avaliação do cliente
        </h2>
        <div className="flex flex-col gap-4 mb-10">
          {servico.avaliacoes.map((avaliacao, index) => (
            <div key={index} className="bg-gray-200 rounded-xl p-5">
              <p className="text-[#1A3B5C]">{avaliacao.texto}</p>
              <div className="flex items-center justify-between mt-2">
                <span className="text-amber-500">
                  {'⭐'.repeat(avaliacao.nota)}
                </span>
                <span className="text-sm text-gray-500">{avaliacao.data}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de ação */}
        <div className="flex justify-end gap-4 pb-10">
          <button className="px-6 py-2.5 bg-[#369BE9] text-white rounded-md font-semibold hover:bg-blue-600 transition-colors">
            Aceitar serviço
          </button>
          <button
            onClick={() => setChatAberto(true)}
            className="px-6 py-2.5 bg-[#57C78E] text-white rounded-md font-semibold hover:bg-emerald-500 transition-colors"
          >
            Conversar
          </button>
        </div>
      </main>

      <Footer />

      {/* Modal de conversa — só aparece quando chatAberto é true */}
      <ChatModal
        aberto={chatAberto}
        aoFechar={() => setChatAberto(false)}
        cliente={servico.cliente}
        mensagensIniciais={[
          {
            autor: 'cliente',
            texto:
              'Olá, bom dia, tudo bem?\nQueria saber se dava pra você vir cedo, aí você me avisa que eu te busco no terminal.',
          },
        ]}
      />
    </div>
  )
}