export default function({placeholder}) {
    return  (
        <div className="bg-zinc-900 border border-zinc-500 rounded-xl flex items-center p-3.5 gap-4 text-white mt-2">
        <input
          className="outline-0 placeholder:text-zinc-400 flex-1 bg-transparent text-sm"
          placeholder={placeholder}
        />
      </div>
    )
}