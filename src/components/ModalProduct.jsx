import InputData from "./InputData.jsx"
import SelectMonthly from "./SelectMonthly.jsx"

export function ModalProduct() {
    return (
        <div className="bg-zinc-800 absolute inset-0 m-auto w-[500px] h-xl border border-zinc-600 rounded-2xl p-8 flex-1">
            <span className="text-xl font-semibold text-white">Adicionar assinaturas</span>
            <div className="flex mt-3 gap-4">
                <InputData
                placeholder={"Nome"} />
                <InputData
                placeholder={"Preço"} />
                <SelectMonthly />
                
            </div>
        </div>
    )
}