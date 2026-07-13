import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { QuemSomosPage } from './pages/QuemSomosPage'
import { DashboardPage } from './pages/DashboardPage'
import { ServicoDetalhePage } from './pages/ServicoDetalhePage'
import { MinhasFinancasPage } from './pages/MinhasFinancasPage'
import { AuthProvider } from './context/Autenticacao'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          
          <Route path="/" element={<Home />} />
          
          <Route path="/quem-somos" element={<QuemSomosPage />} />

          <Route path="/dashboard" element={<DashboardPage />} />

          <Route path="/servico/:id" element={<ServicoDetalhePage />} />

          <Route path="/minhas-financas" element={<MinhasFinancasPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App