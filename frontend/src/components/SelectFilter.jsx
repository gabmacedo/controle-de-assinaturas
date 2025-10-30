import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function SelectFilter({
  options = [],
  defaultValue = "Selecione...",
}) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <div className="relative w-full">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full bg-zinc-900 border border-zinc-500 rounded-xl px-4 py-3.5 text-white text-sm hover:bg-zinc-800 focus:outline-none transition-colors"
      >
        <span className="text-sm text-zinc-200 truncate">{selected}</span>
        <ChevronDown size={18} className="text-zinc-400" />
      </button>

      {open && (
        <div className="absolute mt-1 w-full bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className={`px-4 py-2 cursor-pointer text-sm text-white hover:bg-zinc-800 ${
                selected === option ? "bg-zinc-800" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
