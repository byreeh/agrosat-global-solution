import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import type { Plantacao } from '../types/index'
import { getPlantacoes, deletarPlantacao } from '../services/api'

export default function Dashboard() {
  const [plantacoes, setPlantacoes] = useState<Plantacao[]>([])
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    getPlantacoes().then((data) => {
      setPlantacoes(data)
      setLoading(false)
    })
  }, [])

  async function handleDeletar(id: number) {
    if (confirm('Deseja excluir esta plantação?')) {
      await deletarPlantacao(id)
      setPlantacoes(plantacoes.filter(p => p.id !== id))
    }
  }

  const corRisco: Record<string, string> = {
    baixo: "text-green-400 bg-green-900/30",
    médio: "text-yellow-400 bg-yellow-900/30",
    alto: "text-red-400 bg-red-900/30"
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />

        <section className="relative py-16 px-6 border-b border-gray-800 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/satelite-agricultura.png" alt="Plantação" className="w-full h-full object-cover"/>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/95 to-transparent"></div>
          <div className="relative max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">Dashboard</h1>
            <p className="text-lg text-gray-300">Monitoramento em tempo real das suas plantações via satélite.</p>
          </div>
          <Link
            to="/dashboard/nova"
            className="bg-green-600 hover:bg-green-500 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            + Nova Plantação
          </Link>
          </div>
        </section>

        <section className="py-10 px-6 flex-1">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Total de Área</p>
              <p className="text-3xl font-bold text-green-400">{plantacoes.reduce((total, p) => total + parseInt(p.area), 0)} h</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Plantações Monitoradas</p>
              <p className="text-3xl font-bold text-green-400">{plantacoes.length}</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Alertas Ativos</p>
              <p className="text-3xl font-bold text-red-400">{plantacoes.filter(p => p.risco === 'alto').length}</p>
            </div>
          </div>

          {loading ? (
          <p className="text-center text-gray-400">Carregando...</p>
        ) : (
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Plantações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plantacoes.map((p) => (
                <div
                  key={p.id}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold text-white">{p.nome}</h3>
                    <span className={`text-xs px-3 py-1 rounded-full font-semibold ${corRisco[p.risco]}`}>
                      {p.risco.toUpperCase()}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">Área: {p.area}</p>
                  <div className="flex gap-6 mb-4">
                    <div>
                      <p className="text-gray-400 text-xs">Umidade</p>
                      <p className="text-white font-semibold">{p.umidade}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Temperatura</p>
                      <p className="text-white font-semibold">{p.temperatura}°C</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs">Status</p>
                      <p className="text-white font-semibold">{p.status}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Link
                      to={`/monitoramento/${p.id}`}
                      className="text-sm px-3 py-1 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-600 hover:text-white transition"
                    >
                      Ver
                    </Link>
                    <Link
                      to={`/dashboard/editar/${p.id}`}
                      className="text-sm px-3 py-1 rounded-lg bg-yellow-900/30 text-yellow-400 hover:bg-yellow-600 hover:text-white transition"
                    >
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDeletar(p.id)}
                      className="text-sm px-3 py-1 rounded-lg bg-red-900/30 text-red-400 hover:bg-red-600 hover:text-white transition"
                    >
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          )}
        </section>
        < Footer/>
      </div>
    )
}