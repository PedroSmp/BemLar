import { Destaques } from './components/Destaques'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Relatos } from './components/Relatos'
import { Valores } from './components/Valores'
import { Chamada } from './components/Chamada'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans">
      <Header />

      <main className="flex-1 px-8 md:px-20">
        <Hero/>
        <Destaques/>
        <Relatos/>
        <Valores/>
        <Chamada/>
      </main>

      <Footer/>
    </div>
  )
}

export default App