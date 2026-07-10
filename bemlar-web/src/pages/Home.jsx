import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Destaques } from '../components/Destaques'
import { Relatos } from '../components/Relatos'
import { Valores } from '../components/Valores'
import { Chamada } from '../components/Chamada'
import { Footer } from '../components/Footer'

export function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 px-8 md:px-20">
        <Hero />
        <Destaques />
        <Relatos />
        <Valores />
        <Chamada />
      </main>
      
      <Footer />
    </div>
  )
}