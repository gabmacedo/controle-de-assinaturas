import InputData from "./InputData.jsx";
import SelectFilter from "./SelectFilter.jsx";
import PrimaryButton from "./PrimaryButton.jsx";

export function ModalProduct({ isOpen, onClose }) {
  if (!isOpen) return null;

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
            <InputData placeholder="Nome (ex: Netflix)" />
            <InputData placeholder="Preço mensal" />

            <SelectFilter options={["Mensal", "Anual"]} defaultValue="Mensal" />
            <SelectFilter options={["Ativa", "Pausada"]} defaultValue="Ativa" />

            <InputData placeholder="Data de vencimento" />
            <InputData placeholder="Observações..." />
          </div>

          {/* botões */}
          <div className="flex justify-end gap-2 mt-6">
            <PrimaryButton
              value="Salvar"
              width="28"
              heigth="11"
              textInputSize="sm"
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
  );
}
