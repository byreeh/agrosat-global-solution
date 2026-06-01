import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { getPlantacao } from '../services/api'
import type { Plantacao } from '../types/index'

export default function Monitoramento() {
  const { id } = useParams()
  const [plantacao, setPlantacao] = useState<Plantacao | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      getPlantacao(Number(id)).then((data) => {
        setPlantacao(data)
        setLoading(false)
      })
    }, [id])

  const corRisco: Record<string, string> = {
    baixo: "text-green-400 bg-green-900/30",
    médio: "text-yellow-400 bg-yellow-900/30",
    alto: "text-red-400 bg-red-900/30"
  }

  if (loading) return (
    <div className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
      Carregando...
    </div>
  )

  if (!plantacao) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <section className="flex flex-col items-center justify-center py-32">
        <h1 className="text-4xl text-red-400 font-bold mb-4">
          Plantação não encontrada
        </h1>
        <Link to="/dashboard" className="text-green-400 hover:underline">
          ← Voltar ao Dashboard
        </Link>
      </section>
    </div>
  )
}
    return (
      <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />

        <section className="py-16 px-6 border-b border-gray-800 bg-gradient-to-br from-green-900/20 to-gray-900">
          <div className="max-w-4xl mx-auto flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold text-green-400 mb-2">{plantacao.nome}</h1>
              <p className="text-gray-400">Área: {plantacao.area} | Satélite: {plantacao.satelite}</p>
            </div>
            <span className={`text-sm px-4 py-2 rounded-full font-semibold ${corRisco[plantacao.risco]}`}>
              {plantacao.risco.toUpperCase()}
            </span>
          </div>
        </section>

        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-1">Umidade</p>
                <p className="text-3xl font-bold text-green-400">{plantacao.umidade}%</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-1">Temperatura</p>
                <p className="text-3xl font-bold text-green-400">{plantacao.temperatura}°C</p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-1">Status</p>
                <p className="text-3xl font-bold text-green-400">{plantacao.status}</p>
              </div>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-bold text-white mb-3">Análise via Satélite</h2>
              <p className="text-gray-400">{plantacao.descricao}</p>
            </div>

            <Link to="/dashboard" className="text-green-400 hover:underline">
              ← Voltar ao Dashboard
            </Link>
          </div>
        </section>
        < Footer/>
      </div>
      )
}