// Array com os depoimentos para deixar o código limpo
const dadosRelatos = [
  {
    id: 1,
    texto: "No começo tive medo de não saber mexer no app, mas é tudo muito simples. Agora consigo escolher faxinas perto de casa e chegar a tempo de buscar meus filhos na escola.",
    autor: "— Lúcia H., 40 anos",
    detalhe: "(Zona Leste - SP)"
  },
  {
    id: 2,
    texto: "O que eu mais gosto é a segurança. Saber que o cliente é verificado me dá paz para trabalhar tranquila. E o pagamento cai na hora, sem eu precisar cobrar ninguém!",
    autor: "Suely M., 50 anos",
    detalhe: "(Especialista)"
  }
];

export function Relatos() {
  return (
    <section className="w-full py-16 flex flex-col items-center">
      
      {/* Título e Subtítulo */}
      <div className="text-center max-w-2xl mb-16">
        <h2 className="text-3xl font-extrabold text-[#2F3A56] mb-4">Relatos</h2>
        <p className="text-gray-600 font-medium">
          Aqui estão alguns relatos de pessoas que usaram o nossos serviços.
        </p>
      </div>

      {/* Container dos Depoimentos */}
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-5xl mb-20 px-4">
        
        {/* Depoimento 1 (Lúcia) - Aspas na esquerda */}
        <div className="flex-1 flex gap-4 items-start">
          <span className="text-6xl text-[#57C78E] font-serif leading-none mt-2">“</span>
          <div>
            <p className="text-[#2F3A56] font-medium italic mb-6 leading-relaxed">
              {dadosRelatos[0].texto}
            </p>
            <div className="font-bold text-[#2F3A56]">
              {dadosRelatos[0].autor} <br />
              <span className="font-normal text-sm">{dadosRelatos[0].detalhe}</span>
            </div>
          </div>
        </div>

        {/* Depoimento 2 (Suely) - Aspas na direita para replicar seu design */}
        <div className="flex-1 flex gap-4 items-start text-right md:text-left justify-end md:justify-start">
          <div className="md:order-1 order-2">
            <p className="text-[#2F3A56] font-medium italic mb-6 leading-relaxed">
              {dadosRelatos[1].texto}
            </p>
            <div className="font-bold text-[#2F3A56]">
              {dadosRelatos[1].autor} <br />
              <span className="font-normal text-sm">{dadosRelatos[1].detalhe}</span>
            </div>
          </div>
          <span className="text-6xl text-[#57C78E] font-serif leading-none mt-2 md:order-2 order-1">”</span>
        </div>

      </div>

      {/* Card de Captura (Formulário) */}
      <div className="bg-white border border-gray-100 shadow-md rounded-xl p-8 w-full max-w-3xl flex flex-col items-center text-center">
        <h3 className="text-xl font-bold text-[#2F3A56] mb-2">
          Está gostando da gente?
        </h3>
        <p className="text-gray-600 text-sm mb-6">
          Então não perca tempo, venha se juntar a nossa equipe de colaboradores!
        </p>
        
        {/* Container dos inputs e botão */}
        <form className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="w-full md:w-1/3 flex flex-col items-start">
            <label className="text-xs text-gray-500 mb-1 ml-1">Insira seu nome aqui</label>
            <input 
              type="text" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#369BE9] bg-[#FDFBF7]"
            />
          </div>
          
          <div className="w-full md:w-1/3 flex flex-col items-start">
            <label className="text-xs text-gray-500 mb-1 ml-1">Insira seu e-mail</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#369BE9] bg-[#FDFBF7]"
            />
          </div>

          {/* Botão alinhado na parte inferior dos inputs */}
          <button 
            type="button" 
            className="w-full md:w-auto px-8 py-2 mt-auto bg-[#369BE9] text-white font-semibold rounded-md hover:bg-blue-600 transition-colors shadow-sm"
          >
            Enviar
          </button>
        </form>
      </div>

    </section>
  )
}