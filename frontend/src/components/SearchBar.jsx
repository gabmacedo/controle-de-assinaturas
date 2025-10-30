import { Search } from "lucide-react"

export default function SearchBar() {
  return (
    <div className="flex items-center justify-between bg-zinc-900 border border-zinc-700 text-white px-3 py-2 rounded-lg text-sm">
      <Search size={18} />
      <input
        type="text"
        placeholder="Pesquisar..."
        className="outline-0 ml-3"
      />
    </div>
  )
}
