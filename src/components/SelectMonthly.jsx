import { useState } from "react"
import { ChevronDown } from "lucide-react"

export default function SelectMonthly() {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState("Todas")

  const options = ["Mensal", "Anual"]

  return (
    <div className="relative w-36">
      {/* botão principal */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full h-full bg-zinc-900 border border-zinc-700 text-white px-3 py-2 rounded-lg hover:bg-zinc-800 focus:outline-none"
      >
        <span className="text-sm">{selected}</span>
        <ChevronDown size={18} />
      </button>

      {/* opções */}
      {open && (
        <div className="absolute mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option)
                setOpen(false)
              }}
              className={`px-3 py-2 cursor-pointer text-sm text-white hover:bg-zinc-800 ${
                selected === option ? "bg-zinc-800" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
