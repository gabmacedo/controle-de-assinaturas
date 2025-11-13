import InputData from "./InputData.jsx"
import SelectFilter from "./SelectFilter.jsx"
import PrimaryButton from "./PrimaryButton.jsx"
import { useState } from "react"

export function ModalProduct({ isOpen, onClose, onSave }) {
  const [nome, setNome] = useState("")
  const [preco, setPreco] = useState("")
  const [tipo, setTipo] = useState("Mensal")
  const [status, setStatus] = useState("Ativa")
  const [vencimento, setVencimento] = useState("")
  const [observacoes, setObservacoes] = useState("")

  if (!isOpen) return null

  function handleSalvar() {
    const dados = {
      nome,
      preco: parseFloat(preco.replace(",", ".")),
      tipo,
      status,
      vencimento,
      observacoes,
    }

    onSave(dados)
  }

  return (
    <section>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-[400px] text-white">
          {/* título */}
          <h2 className="text-xl font-semibold text-white mb-6 text-left">
            Nova assinatura
          </h2>

          {/* grid de inputs */}
          <div className="grid grid-cols-2 gap-4">
            <InputData
              placeholder="Nome (ex: Netflix)"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
            <InputData
              placeholder="Preço mensal"
              value={preco}
              onChange={(e) => setPreco(e.target.value)}
            />

            <SelectFilter
              options={["Mensal"]}
              defaultValue={tipo}
              onChange={(e) => setTipo(e.target.value)}
            />
            <SelectFilter
              options={["Ativa", "Pausada"]}
              defaultValue={status}
              onChange={(e) => setStatus(e.target.value)}
            />

            <InputData
              placeholder="Data de cobrança"
              value={vencimento}
              onChange={(e) => setVencimento(e.target.value)}
            />
            <InputData
              placeholder="Observações..."
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
            />
          </div>

          {/* botões */}
          <div className="flex justify-end gap-2 mt-6">
            <PrimaryButton
              value="Salvar"
              width="28"
              heigth="11"
              textInputSize="sm"
              onClick={handleSalvar}
            />
            <button
              onClick={onClose}
              className="bg-zinc-900 border border-zinc-600 text-white rounded-lg w-28 h-11 p-3.5 text-center text-sm hover:bg-zinc-800 flex items-center justify-center cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
