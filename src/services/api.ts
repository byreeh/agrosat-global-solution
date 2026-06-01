const BASE_URL = 'http://localhost:3001'

export async function getPlantacoes() {
  const response = await fetch(`${BASE_URL}/plantacoes`)
  return response.json()
}

export async function getPlantacao(id: number) {
  const response = await fetch(`${BASE_URL}/plantacoes/${id}`)
  return response.json()
}

export async function criarPlantacao(dados: object) {
  const response = await fetch(`${BASE_URL}/plantacoes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return response.json()
}

export async function atualizarPlantacao(id: number, dados: object) {
  const response = await fetch(`${BASE_URL}/plantacoes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados)
  })
  return response.json()
}

export async function deletarPlantacao(id: number) {
  const response = await fetch(`${BASE_URL}/plantacoes/${id}`, {
    method: 'DELETE'
  })
  return response.json()
}