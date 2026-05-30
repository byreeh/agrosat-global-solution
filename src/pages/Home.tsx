import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-6 py-20 text-center">
        <h1 className="text-5xl font-bold text-green-400 mb-4">AgroSat</h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Plataforma de monitoramento agrícola via satélite. 
          Transformando dados orbitais em decisões inteligentes para o campo.
        </p>
        <div className="flex gap-4">
          <a href="/dashboard" className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition">
            Ver Dashboard
          </a>
          <a href="/sobre" className="border border-green-600 hover:bg-green-900 text-white px-6 py-3 rounded-lg font-semibold transition">
            Saiba Mais
          </a>
        </div>
      </main>
    </div>
  )
}