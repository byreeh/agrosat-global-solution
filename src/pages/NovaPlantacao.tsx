import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { criarPlantacao } from '../services/api'

export default function NovaPlantacao() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    nome: '',
    area: '',
    status: '',
    umidade: '',
    temperatura: '',
    risco: 'baixo',
    descricao: '',
    satelite: ''
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await criarPlantacao({
      ...form,
      umidade: Number(form.umidade),
      temperatura: Number(form.temperatura)
    })
    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />

      <section className="py-16 px-6 border-b border-gray-800 bg-gradient-to-br from-green-900/20 to-gray-900">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-green-400 mb-2">Nova Plantação</h1>
          <p className="text-gray-400">Cadastre uma nova plantação para monitoramento.</p>
        </div>
      </section>

      <section className="py-16 px-6 flex-1">
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            
            <div>
              <label className="text-gray-400 text-sm mb-1 block">Nome</label>
              <input
                name="nome"
                value={form.nome}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                placeholder="Ex: Soja - Setor A"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-1 block">Área</label>
              <input
                name="area"
                value={form.area}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                placeholder="Ex: 150 ha"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Umidade (%)</label>
                <input
                  name="umidade"
                  type="number"
                  value={form.umidade}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                  placeholder="Ex: 72"
                />
              </div>
              <div>
                <label className="text-gray-400 text-sm mb-1 block">Temperatura (°C)</label>
                <input
                  name="temperatura"
                  type="number"
                  value={form.temperatura}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                  placeholder="Ex: 24"
                />
              </div>
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-1 block">Status</label>
              <input
                name="status"
                value={form.status}
                onChange={handleChange}
                required
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                placeholder="Ex: Saudável"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-1 block">Risco</label>
              <select
                name="risco"
                value={form.risco}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
              >
                <option value="baixo">Baixo</option>
                <option value="médio">Médio</option>
                <option value="alto">Alto</option>
              </select>
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-1 block">Satélite</label>
              <input
                name="satelite"
                value={form.satelite}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                placeholder="Ex: Sentinel-2"
              />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-1 block">Descrição</label>
              <textarea
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                rows={3}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-500"
                placeholder="Descrição da situação da plantação..."
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Cadastrar
              </button>
              <button
                type="button"
                onClick={() => navigate('/dashboard')}
                className="border border-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Cancelar
              </button>
            </div>

          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}