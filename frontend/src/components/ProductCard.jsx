import { Pencil, Play, Trash2 } from "lucide-react"

export default function ProductCard({
  prodName,
  prodDesc,
  prodDate,
  prodPayment,
  prodStatus,
  prodPrice,
}) {
  return (
    <div className="flex justify-between items-center bg-zinc-900 border border-zinc-700 rounded-xl p-4 mb-3 w-full hover:bg-zinc-800 transition">
      {/* infos */}
      <div className="flex items-center gap-3">
        <div className="bg-zinc-200 text-zinc-900 font-bold rounded-lg w-10 h-10 flex items-center justify-center">
          {prodName.slice(0, 2).toUpperCase()}
        </div>

        {/* botoes e preco */}
        <div>
          <h3 className="text-white font-semibold">{prodName}</h3>
          <p className="text-zinc-400 text-sm">{prodDesc}</p>
          <p className="text-zinc-500 text-xs mt-1">
            Venc.: {prodDate} · {prodPayment} · {prodStatus}
          </p>
        </div>
      </div>

      {/* Lado direito */}
      <div className="flex flex-col items-end gap-3">
        <span className="text-white font-semibold">R$ {prodPrice}</span>

        {/* Botões */}
        <div className="flex items-center gap-2">
          <button className="border border-zinc-700 hover:bg-zinc-500 text-white p-2 rounded-md cursor-pointer">
            <Pencil size={16} />
          </button>
          <button className="border border-zinc-700 hover:bg-zinc-500 text-white p-2 rounded-md cursor-pointer">
            <Play size={16} />
          </button>
          <button className="bg-red-500 border hover:bg-red-600 text-red-950 p-2 rounded-md cursor-pointer">
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
