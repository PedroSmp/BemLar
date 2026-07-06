export function Chamada() {
    return (
        <section className="w-full flex justify-center mb-24 mt-8">
            <div classNAme="bg-white border border-gray-100 shadow-md rounded-xl p-10 w-full max-w-4xl flex flex-col items-center text-center">
                <h2 className="text-xl md:text-2xl font-bold text-[#2F3A56] mb-3">
                    Tem vontade de se juntar a nós nessa missão?
                </h2>
                <p className="text-gray-600 font-medium text-sm md:text-base mb-8">
                    Nos mande seu currículo, seu portfólio e se cominique conosco!
                </p>

                <button className="px-8 py-3 bg-[#369BE9] text-white font-bold rounded-md hover:bg-blue-600 transition-colors shadow-sm">
                    Ir para a página de carreiras
                </button>
            </div>
        </section>
    )
}