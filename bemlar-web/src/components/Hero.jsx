import heroImage from '../assets/img-hero.svg'; // Importe a imagem do Hero

export function Hero() {
  // Seção Hero: Fundo escuro, cantos arredondados, alinhamento central vertical
  return (
    <section className="relative w-full h-75 md:h-100 bg-[#111827] rounded-xl overflow-hidden flex items-center px-10 md:px-20 my-10 shadow-lg z-0">
      
   <img src={heroImage} alt="Profissional de limpeza trabalhando" className="absolute inset-0 w-full h-full object-cover opacity-50 z-0" /> 
      {/* Contêiner de Texto (z-10 para ficar acima da sobreposição) */}
      <div className="relative z-10 max-w-[500px]">
        {/* Título: Texto branco, grande, extra negrito */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          BemLar
        </h1>
        {/* Subtítulo: Texto branco, médio, negrito */}
        <p className="text-xl md:text-2xl font-bold text-white">
          Cuidando de quem faz do cuidado a sua profissão.
        </p>
      </div>

    </section>
  )
}