const BASE_URL = 'https://agrosat-api.onrender.com'

export async function getPlantacoes() {
  const response = await fetch(`${BASE_URL}/plantacoes`)
  return response.json()
}

export async function getPlantacao(id: number) {
  const response = await fetch(`${BASE_URL}/plantacoes/${id}`)
  return response.json()
}

export async function criarPlantacao(dados: object) {
  const todas = await getPlantacoes()
  const novoId = todas.length + 1
  const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
  const setor = `Setor ${letras[todas.length]}`

  const response = await fetch(`${BASE_URL}/plantacoes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id: novoId, setor, ...dados })
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