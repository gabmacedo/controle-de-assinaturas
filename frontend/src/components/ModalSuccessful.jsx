import PrimaryButton from "./PrimaryButton"
import { CircleCheck, ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"

export default function ModalSuccessful({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-[400px] text-white flex flex-col items-center gap-3">
        <h2 className="text-xl font-semibold text-center flex justify-center items-center  gap-2">
          <CircleCheck size={24} />
          Cadastro realizado com sucesso!
        </h2>

        <Link to="/">
          <PrimaryButton
            onClick={onClose}
            value={"Realizar Login"}
            rightIcon={<ArrowUpRight size={22} />}
          />
        </Link>
      </div>
    </div>
  )
}
