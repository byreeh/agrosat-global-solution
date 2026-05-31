import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

interface Plantacao {
  id: number
  nome: string
  area: string
  status: string
  umidade: number
  temperatura: number
  risco: 'baixo' | 'médio' | 'alto'
  descricao: string
  satelite: string
}

export default function Monitoramento() {
  const { id } = useParams()

  const plantacoes: Plantacao[] = [
    { id: 1, nome: "Soja - Setor A", area: "150 ha", status: "Saudável", umidade: 72, temperatura: 24, risco: "baixo", descricao: "Plantação em ótimas condições. Índice de vegetação elevado e umidade ideal.", satelite: "Sentinel-2" },
    { id: 2, nome: "Milho - Setor B", area: "80 ha", status: "Atenção", umidade: 45, temperatura: 31, risco: "médio", descricao: "Umidade abaixo do ideal. Recomenda-se irrigação nas próximas 48 horas.", satelite: "Landsat-8" },
    { id: 3, nome: "Café - Setor C", area: "60 ha", status: "Crítico", umidade: 28, temperatura: 36, risco: "alto", descricao: "Situação crítica. Temperatura elevada e umidade muito baixa. Irrigação urgente.", satelite: "CBERS-4A" },
    { id: 4, nome: "Trigo - Setor D", area: "200 ha", status: "Saudável", umidade: 68, temperatura: 22, risco: "baixo", descricao: "Condições favoráveis. Previsão de colheita dentro do prazo esperado.", satelite: "Sentinel-2" },
  ]

  const plantacao = plantacoes.find(p => p.id === Number(id))

  const corRisco = {
    baixo: "text-green-400 bg-green-900/30",
    médio: "text-yellow-400 bg-yellow-900/30",
    alto: "text-red-400 bg-red-900/30"
  }

  if (!plantacao) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <section className="py-16 px-6 text-center">
        <h1 className="text-3xl text-red-400 font-bold mb-4">
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