export function QuemSomos() {
  return (
    // O id="quem-somos" é o alvo do clique lá do Header!
    <section id="quem-somos" className="w-full py-16 flex flex-col items-center">
      
      {/* Container alinhado à esquerda como no seu design */}
      <div className="w-full max-w-5xl flex flex-col items-start px-4 md:px-0">
        
        {/* Título */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#2F3A56] mb-6">
          Nossa história e nosso propósito
        </h2>

        {/* Card Azul Claro com o Texto */}
        <div className="bg-[#D9EAFD] p-8 md:p-12 rounded-xl w-full shadow-sm">
          <p className="text-[#1A3B5C] font-medium text-base md:text-lg leading-relaxed">
            A BemLar nasceu de uma ideia que surgiu do cotidiano. Através do convívio do nosso criador, Pedro, com sua família e conhecidos, ele percebeu o quão necessária era uma ferramenta que ajudasse essas pessoas que são tão ocupadas durante todos os dias da semana. Foi então que a BemLar foi criada, com a proposta de não ser apenas uma plataforma focada em dinheiro, mas sim um verdadeiro ambiente onde o(a) diarista possa ser acolhido(a) e reconhecer o seu valor. O objetivo é que também sejam cuidados(as), afinal, são essas pessoas que fazem do cuidado a sua profissão.
          </p>
        </div>

      </div>

    </section>
  )
}