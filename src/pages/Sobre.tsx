import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Sobre() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-green-400 mb-6">Sobre o AgroSat</h1>
        <p className="text-gray-300 text-lg mb-6">
          O AgroSat é uma plataforma inovadora que utiliza dados de satélites para 
          auxiliar agricultores brasileiros a monitorar suas plantações, prever 
          condições climáticas e tomar decisões mais inteligentes no campo.
        </p>
        <p className="text-gray-300 text-lg mb-6">
          Desenvolvido como parte da Global Solution 2026 da FIAP, o projeto conecta 
          a economia espacial com problemas reais do agronegócio brasileiro.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="flex justify-center text-green-400 text-xl font-bold mb-2">
              <img src="/icons/satellite-svgrepo-com.svg" alt="Icone de satélites" className="w-12 h-7" />
              Satélites</h2>
            <p className="text-gray-400">Dados orbitais em tempo real para monitoramento preciso das lavouras.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="flex justify-center text-green-400 text-xl font-bold mb-2">
              <img src="/icons/wheat-paddy-farm-agriculture-svgrepo-com.svg" alt="Icone de Agricultura" className="w-12 h-8" />
              Agricultura</h2>
            <p className="text-gray-400">Soluções tecnológicas acessíveis para pequenos e médios agricultores.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h2 className="flex justify-center text-green-400 text-xl font-bold mb-2">
              <img src="/icons/graphic-growing-svgrepo-com.svg" alt="Icone de Dados" className="w-12 h-6 mt-1" />
              Dados</h2>
            <p className="text-gray-400">Análise inteligente de dados para previsão de clima e produtividade.</p>
          </div>
        </div>
      </main>
      < Footer/>
    </div>
  )
}