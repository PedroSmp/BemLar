export function Valores() {
  return (
    <section className="w-full my-12">
      {/* Bloco principal com fundo azul claro e cantos arredondados */}
      <div className="bg-[#BCE0FD]/60 rounded-2xl p-8 md:p-12 flex flex-col items-center">
        
        {/* Título e Subtítulo da Seção */}
        <div className="text-center max-w-2xl mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#1A3B5C] mb-3">
            Nossos valores
          </h2>
          <p className="text-[#1A3B5C]/90 font-medium text-sm md:text-base">
            Buscamos mentes inquietas que queiram usar a tecnologia para dar voz e segurança a milhares de lares brasileiros.
          </p>
        </div>

        {/* Grid com os 3 Pilares */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          
          {/* Pilar 1 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-[#1A3B5C]">
              1. Não projetamos para nós mesmos
            </h3>
            <p className="text-sm text-[#1A3B5C]/80 leading-relaxed font-medium">
              Projetamos para a Lúcia, para a Suely, para a Dona Bento. Trabalhar na BemLar significa ter a sensibilidade de entender as dores reais de quem está na ponta e transformar isso em soluções humanas.
            </p>
          </div>

          {/* Pilar 2 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-[#1A3B5C]">
              2. Confiança é a base
            </h3>
            <p className="text-sm text-[#1A3B5C]/80 leading-relaxed font-medium">
              Acreditamos que a confiança é a base de qualquer conexão. Oferecemos segurança interna, verificação minuciosa de perfis e comunicação aberta e transparente para que todos trabalhem tranquilos.
            </p>
          </div>

          {/* Pilar 3 */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-[#1A3B5C]">
              3. Resolver problemas complexos
            </h3>
            <p className="text-sm text-[#1A3B5C]/80 leading-relaxed font-medium">
              Resolver a logística com interfaces simples e intuitivas é o nosso maior desafio e orgulho. Valorizamos quem consegue simplificar o difícil para incluir e acolher o utilizador.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}