import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Dashboard } from '../components/Dashboard'

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans flex flex-col">
      <Header />

      <main className="flex-1 px-8 md:px-20">
        <Dashboard />
      </main>

      <Footer />
    </div>
  )
}