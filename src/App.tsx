import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Integrantes from './pages/Integrantes'
import FAQ from './pages/FAQ'
import Dashboard from './pages/Dashboard'
import Monitoramento from './pages/Monitoramento'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/monitoramento/:id" element={<Monitoramento />} />
      </Routes>
    </BrowserRouter>
    )
}

export default App
