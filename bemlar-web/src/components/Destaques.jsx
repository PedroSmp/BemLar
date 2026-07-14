import iconCalculadora from '../assets/calculadora.svg'
import iconSeguranca from '../assets/seguranca.svg'
import iconLocalizacao from '../assets/localizacao.svg'
import iconCofre from '../assets/cofre.svg'


const dadosDestaques = [
    {
        id: 1,
        icon: iconCalculadora,
        title: "Planeje seu mês com clareza.",
        text: "Use nossos quadros diários para colocar em um gráfico ou painel os seus rendimentos sem complicação."
    },
    {
        id: 2,
        icon: iconSeguranca,
        title: "Sua segurança em primeiro lugar.",
        text: "Só trabalhamos com clientes verificados e oferecemos um botão de ajuda durante todo o atendimento."
    },
    {
        id: 3,
        icon: iconLocalizacao,
        title: "Escolha onde e quando trabalhar.",
        text: "Filtre as vagas por região ou linha de metrô e economize tempo no transporte para ficar mais com os filhos."
    },
    {
        id: 4,
        icon: iconCofre,
        title: "Dinheiro na mão, sem burocracia.",
        text: "O pagamento é garantido pela plataforma e liberado na sua carteira digital assim que você finaliza a faxina."
    }
];

export function Destaques(){
    return(
        <section id="servicos" className="w-full py-16 flex flex-col items-center">
            {/*titulo*/}
            <div className="text-center max-w-2xl mb-12">
                <h2 className="text-3xl font-extrabold text-[#2F3A56] mb-4">Destaques</h2>
                <p className="text-gray-600 font-medium">
                    Veja alguns de nossos serviços que no fim irão te ajudar ainda mais no seu dia a dia.
                </p>
            </div>
            {/*cards*/}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
                {dadosDestaques.map((item) => (
                    <div key={item.id}
                    className="bg-[#BCE0FD] p-6 rounded-lg flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
                    <img src={item.icon} alt="icone de destaques da BemLar" className="w-14 h-14 mb-4" />
                    <h3 className="text-[#1A3B5C] font-bold text-lg mb-3 leading-snug">{item.title}</h3>
                    <p className=" text-[#1A3B5C]/80 text-sm font-medium leading-relaxed">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}