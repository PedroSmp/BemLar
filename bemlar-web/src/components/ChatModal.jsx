import { useState } from 'react'

export function ChatModal({ aberto, aoFechar, cliente, mensagensIniciais = [] }) {
  const [mensagens, setMensagens] = useState(mensagensIniciais)
  const [textoDigitado, setTextoDigitado] = useState('')

  // Se "aberto" for false, o componente não renderiza nada (fica invisível)
  if (!aberto) return null

  function enviarMensagem() {
    // Não deixa enviar mensagem vazia
    if (textoDigitado.trim() === '') return

    setMensagens((mensagensAnteriores) => [
      ...mensagensAnteriores,
      { autor: 'eu', texto: textoDigitado },
    ])
    setTextoDigitado('')
  }

  function aoPressionarTecla(evento) {
    // Envia a mensagem quando aperta Enter
    if (evento.key === 'Enter') {
      enviarMensagem()
    }
  }

  return (
    // Fundo escuro semi-transparente que cobre a tela toda
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={aoFechar}
    >
      {/* Caixa do modal — o onClick aqui com stopPropagation evita que
          clicar DENTRO do modal feche ele (só clicar fora fecha) */}
      <div
        onClick={(evento) => evento.stopPropagation()}
        className="bg-[#FDFBF7] rounded-2xl w-full max-w-2xl h-[80vh] flex flex-col overflow-hidden shadow-xl"
      >
        {/* Cabeçalho do chat */}
        <div className="flex items-center gap-4 px-6 py-4 border-b border-gray-200">
          <button
            onClick={aoFechar}
            className="text-2xl text-[#1A3B5C]"
            title="Fechar"
          >
            ‹
          </button>
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-xl shrink-0">
            🙂
          </div>
          <h2 className="text-lg font-bold text-[#1A3B5C] flex-1">
            {cliente.nome}
          </h2>
          <button className="text-2xl text-[#1A3B5C]" title="Mais opções">
            ⋮
          </button>
        </div>

        {/* Corpo da conversa (mensagens) */}
        <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col gap-4">
          {mensagens.map((mensagem, index) => (
            <div
              key={index}
              className={`max-w-[75%] px-5 py-3 rounded-2xl ${
                mensagem.autor === 'eu'
                  ? 'bg-[#BCE0FD] self-end'
                  : 'bg-[#C8F5D8] self-start'
              }`}
            >
              <p className="text-[#1A3B5C] whitespace-pre-line">
                {mensagem.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Campo de digitar mensagem */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center gap-3 bg-white border border-gray-300 rounded-full px-5 py-3">
            <span className="text-xl text-[#1A3B5C]">+</span>
            <input
              type="text"
              value={textoDigitado}
              onChange={(evento) => setTextoDigitado(evento.target.value)}
              onKeyDown={aoPressionarTecla}
              placeholder="Digite aqui..."
              className="flex-1 outline-none bg-transparent text-[#1A3B5C]"
            />
            <button onClick={enviarMensagem} className="text-xl text-[#1A3B5C]">
              🎤
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}