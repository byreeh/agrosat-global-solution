import NavbarHome from '../components/NavbarHome'

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="relative z-30">
        <NavbarHome />
      </div>

       <img
        src="/images/agro.jpg"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 z-10 
        bg-gradient-to-b 
        from-black/70 
        via-black/50 
        to-green-900/70">
      </div>

      <main className="relative z-20 flex flex-col items-center justify-center px-6 py-20 text-center min-h-screen">
        <h1 className="text-8xl font-bold text-green-400 mb-4">AgroSat</h1>

        <p className="text-xl text-gray-300 max-w-2xl mb-9">
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