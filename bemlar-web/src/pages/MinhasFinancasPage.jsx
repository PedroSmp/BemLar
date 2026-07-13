import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { GraficoDonut } from '../components/GraficoDonut'
import { categoriasGastos, totalDoMes, historicoDepositos } from '../data/financas'

export function MinhasFinancasPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
      <Header />

      <main className="flex-1 px-8 md:px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">

          {/* Card esquerdo: Controle de gastos */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-extrabold text-[#1A3B5C]">
              Controle de gastos
            </h2>
            <p className="text-gray-500 mb-6">Março - visão geral</p>

            <div className="flex items-center gap-8 flex-wrap">
              {/* Gráfico com o total escrito no centro */}
              <div className="relative shrink-0">
                <GraficoDonut categorias={categoriasGastos} total={totalDoMes} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-extrabold text-[#1A3B5C]">
                    R${totalDoMes.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500">Este mês</span>
                </div>
              </div>

              {/* Legenda (as "caixinhas" coloridas) */}
              <div className="flex-1 flex flex-col gap-3 min-w-[220px]">
                {categoriasGastos.map((categoria) => (
                  <div
                    key={categoria.id}
                    className="flex items-center justify-between px-5 py-3 rounded-lg"
                    style={{ backgroundColor: `${categoria.cor}33` }} // cor com transparência
                  >
                    <span className="font-medium" style={{ color: categoria.cor }}>
                      {categoria.label}
                    </span>
                    <span className="font-bold text-[#1A3B5C]">
                      R${categoria.valor}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card direito: Histórico de depósitos */}
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8">
            <h2 className="text-xl font-extrabold text-[#1A3B5C]">
              Históricos de depósitos
            </h2>
            <p className="text-gray-500 mb-6">
              Movimentação dos últimos depósitos
            </p>

            <div className="flex flex-col">
              {historicoDepositos.map((deposito, index) => (
                <div
                  key={deposito.id}
                  className={`flex items-center justify-between py-4 ${
                    index !== historicoDepositos.length - 1
                      ? 'border-b border-gray-100'
                      : ''
                  }`}
                >
                  <div>
                    <p className="font-bold text-[#1A3B5C]">{deposito.nome}</p>
                    <p className="text-sm text-gray-500">
                      {deposito.tempo} . {deposito.servico}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-1 ${
                        deposito.status === 'PAGO'
                          ? 'bg-emerald-100 text-emerald-700'
                          : 'bg-amber-100 text-amber-700'
                      }`}
                    >
                      {deposito.status}
                    </span>
                    {deposito.valor && (
                      <p className="font-bold text-emerald-600">
                        +R$ {deposito.valor}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right mt-4">
              <button className="text-[#369BE9] font-semibold underline">
                Ver todos
              </button>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  )
}