import { Eye } from "lucide-react";
import { useState } from "react";

export default function AuthInput({
  label,
  type,
  placeholder,
  icon,
  onChange,
  value,
}) {
  const [typeInput, setTypeInput] = useState(type);
  return (
    <div className="">
      <label htmlFor="input" className="text-white">
        {label}
      </label>
      <div className="bg-zinc-800 border border-zinc-500 rounded-xl flex items-center w-96 h-16 p-3.5 gap-4 text-white mt-2">
        {icon}
        <input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={typeInput}
          className="outline-0 placeholder:text-zinc-400 flex-1 bg-transparent"
        />
        {type === "password" && (
          <Eye
            className="cursor-pointer"
            onClick={() =>
              typeInput === "password"
                ? setTypeInput("text")
                : setTypeInput("password")
            }
          />
        )}
      </div>
    </div>
  );
}
