import Navbar from "../components/Navbar"

interface TeamMember {
  id: number
  nome: string
  rm: string
  turma: string
  foto: string
  linkedin: string
  github: string
  email: string
}

export default function Integrantes() {
  const integrantes: TeamMember[] = [
    {
      id: 1,
      nome: "nome",
      rm: "568233",
      turma: "1TDSPA",
      foto: "https://avatars.githubusercontent.com/u/144123734?v=4",
      linkedin: "https://linkedin.com/in/ildaafonso",
      github: "https://github.com/ildaafonso",
      email: "afonso.ildaa@mail.com"
    },
    {
      id: 2,
      nome: "nome",
      rm: "568510",
      turma: "1TDSPR",
      foto: "https://avatars.githubusercontent.com/u/104004837?v=4",
      linkedin: "https://linkedin.com/in/reehlessa",
      github: "https://github.com/byreeh",
      email: "lessarenata@outlook.com"
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="py-16 px-6 border-b border-gray-800 bg-gradient-to-br from-green-900/20 to-gray-900">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">Nosso Time</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Conheça os integrantes responsáveis pelo desenvolvimento do AgroSat.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="w-full max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {integrantes.map((membro) => (
              <div
                key={membro.id}
                className="group w-full rounded-xl border border-gray-800 bg-gray-900 overflow-hidden hover:shadow-xl hover:border-green-500/50 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-gray-800">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-1">{membro.nome}</h3>
                  <p className="text-sm text-gray-400 mb-5">
                    RM: {membro.rm} | Turma: {membro.turma}
                  </p>

                  <div className="flex gap-3 mb-4">
                    
                      <a href={membro.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-600 hover:text-white transition-colors text-sm"
                    >
                      LinkedIn
                    </a>
                    
                      <a href={membro.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-600 hover:text-white transition-colors text-sm"
                    >
                      GitHub
                    </a>
                    
                      <a href={`mailto:${membro.email}`}
                      className="px-4 py-2 rounded-lg bg-green-900/30 text-green-400 hover:bg-green-600 hover:text-white transition-colors text-sm"
                    >
                      Email
                    </a>
                  </div>

                  <p className="text-sm text-gray-400">{membro.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}