import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { QuemSomosPage } from './pages/QuemSomosPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Home />} />
        
        <Route path="/quem-somos" element={<QuemSomosPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App