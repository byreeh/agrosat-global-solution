export interface Plantacao {
  id: number
  nome: string
  area: string
  status: string
  umidade: number
  temperatura: number
  risco: 'baixo' | 'médio' | 'alto'
  descricao?: string
  satelite?: string
}

export interface Integrante {
  id: number
  nome: string
  rm: string
  turma: string
  foto: string
  linkedin: string
  github: string
  email: string
}

export interface FAQItem {
  id: number
  pergunta: string
  resposta: string
}