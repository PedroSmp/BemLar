import { useState } from 'react'

export function ImagemZoomModal({ aberto, aoFechar, imagens, indiceInicial = 0 }) {
  const [indiceAtual, setIndiceAtual] = useState(indiceInicial)
  const [comZoom, setComZoom] = useState(false)

  if (!aberto) return null

  function irParaAnterior(evento) {
    evento.stopPropagation()
    setComZoom(false) // ao trocar de foto, volta o zoom padrão
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === 0 ? imagens.length - 1 : indiceAnterior - 1
    )
  }

  function irParaProxima(evento) {
    evento.stopPropagation()
    setComZoom(false)
    setIndiceAtual((indiceAnterior) =>
      indiceAnterior === imagens.length - 1 ? 0 : indiceAnterior + 1
    )
  }

  return (
    <div
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={aoFechar}
    >
      {/* Botão fechar */}
      <button
        onClick={aoFechar}
        className="absolute top-5 right-6 text-white text-4xl leading-none hover:opacity-70 transition-opacity"
        title="Fechar"
      >
        ×
      </button>

      {/* Área da imagem — clicar nela alterna o zoom, sem fechar o modal */}
      <div
        className="max-w-5xl max-h-[85vh] overflow-auto"
        onClick={(evento) => evento.stopPropagation()}
      >
        <img
          src={imagens[indiceAtual]}
          alt={`Foto do serviço ${indiceAtual + 1} ampliada`}
          onClick={() => setComZoom((valorAnterior) => !valorAnterior)}
          className={`transition-transform duration-300 ${
            comZoom
              ? 'scale-150 cursor-zoom-out'
              : 'max-w-full max-h-[85vh] object-contain cursor-zoom-in'
          }`}
        />
      </div>

      {/* Setas de navegação, se tiver mais de 1 imagem */}
      {imagens.length > 1 && (
        <>
          <button
            onClick={irParaAnterior}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[#57C78E] text-white hover:bg-emerald-500 transition-colors shadow-md"
            title="Foto anterior"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-[#57C78E] text-white hover:bg-emerald-500 transition-colors shadow-md"
            title="Próxima foto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}

      {/* Dica de uso */}
      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-sm">
        Clique na imagem para {comZoom ? 'diminuir' : 'ampliar'}
      </p>
    </div>
  )
}