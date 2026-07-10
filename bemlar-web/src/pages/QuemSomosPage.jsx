import { Header } from '../components/Header'
import { QuemSomos } from '../components/QuemSomos'
import { Footer } from '../components/Footer'

export function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
      <Header />
      
      {/* O main segura o conteúdo no meio da tela */}
      <main className="flex-1 px-8 md:px-20 mt-10">
        <QuemSomos />
      </main>
      
      <Footer />
    </div>
  )
}