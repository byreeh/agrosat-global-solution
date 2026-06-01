export default function Footer() {
  return (
    <footer className="w-full mt-auto bg-green-900/40 border-t border-green-800/40 text-gray-400 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="flex text-white font-bold text-lg">
            <img src="/icons/AgroSat.svg" alt="AgroSat Logo" className="w-10 h-8" />
            AgroSat</p>
          <p className="text-sm mt-2">Monitoramento agrícola via satélite.</p>
        </div>
        <div className="text-sm text-center">
          <p>Global Solution 2026 — FIAP</p>
          <p>1º Ano — Análise e Desenvolvimento de Sistemas</p>
        </div>
        <div className="text-sm text-right">
          <p>© 2026 AgroSat</p>
          <p>Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}