import { useState } from 'react'

export function Carrossel({ imagens, aoClicarImagem }) {
  const [indiceAtual, setIndiceAtual] = useState(0)

  function irParaAnterior(evento) {
    // stopPropagation evita que o clique na seta também dispare o clique da imagem (abrir zoom)
    evento.stopPropagation()
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === 0 ? imagens.length - 1 : indiceAnterior - 1
    )
  }

  function irParaProxima(evento) {
    evento.stopPropagation()
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === imagens.length - 1 ? 0 : indiceAnterior + 1
    )
  }

  return (
    <div className="relative w-full h-72 rounded-xl overflow-hidden mb-8 group">
      {/* Imagem atual — clicável pra abrir o zoom */}
      <img
        src={imagens[indiceAtual]}
        alt={`Foto do serviço ${indiceAtual + 1}`}
        onClick={() => aoClicarImagem(indiceAtual)}
        className="w-full h-full object-cover cursor-zoom-in"
      />

      {/* Seta esquerda — só aparece se tiver mais de 1 imagem */}
      {imagens.length > 1 && (
        <>
          <button
            onClick={irParaAnterior}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#57C78E] text-white hover:bg-emerald-500 transition-colors shadow-md"
            title="Foto anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={irParaProxima}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-[#57C78E] text-white hover:bg-emerald-500 transition-colors shadow-md"
            title="Próxima foto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Bolinhas indicando qual foto está ativa */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {imagens.map((_, index) => (
              <button
                key={index}
                onClick={(evento) => {
                  evento.stopPropagation()
                  setIndiceAtual(index)
                }}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === indiceAtual ? 'bg-white' : 'bg-white/50'
                }`}
                title={`Ir para foto ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}