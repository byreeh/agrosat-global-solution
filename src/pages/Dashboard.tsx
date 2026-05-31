import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

interface Plantacao {
  id: number
  nome: string
  area: string
  status: string
  umidade: number
  temperatura: number
  risco: 'baixo' | 'médio' | 'alto'
}

export default function Dashboard() {
  const plantacoes: Plantacao[] = [
    { id: 1, nome: "Soja - Setor A", area: "150 ha", status: "Saudável", umidade: 72, temperatura: 24, risco: "baixo" },
    { id: 2, nome: "Milho - Setor B", area: "80 ha", status: "Atenção", umidade: 45, temperatura: 31, risco: "médio" },
    { id: 3, nome: "Café - Setor C", area: "60 ha", status: "Crítico", umidade: 28, temperatura: 36, risco: "alto" },
    { id: 4, nome: "Trigo - Setor D", area: "200 ha", status: "Saudável", umidade: 68, temperatura: 22, risco: "baixo" },
  ]

  const corRisco = {
    baixo: "text-green-400 bg-green-900/30",
    médio: "text-yellow-400 bg-yellow-900/30",
    alto: "text-red-400 bg-red-900/30"
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
        <Navbar />

        <section className="py-16 px-6 border-b border-gray-800 bg-gradient-to-br from-green-900/20 to-gray-900">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">Dashboard</h1>
            <p className="text-lg text-gray-400">Monitoramento em tempo real das suas plantações via satélite.</p>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Total de Área</p>
              <p className="text-3xl font-bold text-green-400">490 ha</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Plantações Monitoradas</p>
              <p className="text-3xl font-bold text-green-400">4</p>
            </div>
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <p className="text-gray-400 text-sm mb-1">Alertas Ativos</p>
              <p className="text-3xl font-bold text-red-400">1</p>
            </div>
          </div>

          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">Plantações</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {plantacoes.map((p) => (
                <Link
                  to={`/monitoramento/${p.id}`}
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
                  <div className="flex gap-6">
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
                </Link>
              ))}
            </div>
          </div>
        </section>
        < Footer/>
      </div>
    )
}