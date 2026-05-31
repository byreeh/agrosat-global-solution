import Navbar from '../components/Navbar'
import { useState } from 'react'

interface FAQItem {
  id: number
  pergunta: string
  resposta: string
}

export default function FAQ() {
  const [aberto, setAberto] = useState<number | null>(null)

  const faqs: FAQItem[] = [
    {
      id: 1,
      pergunta: "O que é o AgroSat?",
      resposta: "O AgroSat é uma plataforma de monitoramento agrícola que utiliza dados de satélites para ajudar agricultores a tomar decisões mais inteligentes sobre suas plantações."
    },
    {
      id: 2,
      pergunta: "Como os dados de satélite são utilizados?",
      resposta: "Utilizamos dados orbitais para monitorar condições climáticas, umidade do solo, índice de vegetação e prever possíveis riscos para as lavouras."
    },
    {
      id: 3,
      pergunta: "Para quem é destinado o AgroSat?",
      resposta: "O AgroSat é destinado a pequenos e médios agricultores brasileiros que buscam tecnologia acessível para otimizar sua produção."
    },
    {
      id: 4,
      pergunta: "O sistema funciona em tempo real?",
      resposta: "Sim! Os dados são atualizados constantemente com base nas informações coletadas pelos satélites em órbita."
    },
    {
      id: 5,
      pergunta: "Como o AgroSat se conecta à economia espacial?",
      resposta: "O AgroSat utiliza infraestrutura espacial como satélites de observação da Terra para gerar valor econômico no agronegócio brasileiro."
    }
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <section className="py-16 px-6 border-b border-gray-800 bg-gradient-to-br from-green-900/20 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-4">Perguntas Frequentes</h1>
          <p className="text-lg text-gray-400">Tire suas dúvidas sobre o AgroSat.</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-800 bg-gray-900 rounded-xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-gray-800 transition"
                onClick={() => setAberto(aberto === faq.id ? null : faq.id)}
              >
                <span className="font-semibold text-white">{faq.pergunta}</span>
                <span className="text-green-400 text-xl">{aberto === faq.id ? '−' : '+'}</span>
              </button>
              {aberto === faq.id && (
                <div className="px-6 py-4 text-gray-400 border-t border-gray-800">
                  {faq.resposta}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}