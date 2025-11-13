import { LogOut, CirclePlus } from "lucide-react"
import SelectFilter from "../components/SelectFilter"
import SearchBar from "../components/SearchBar"
import PrimaryButton from "../components/PrimaryButton"
import ProductCard from "../components/ProductCard"
import { ModalProduct } from "../components/ModalProduct"
import { useState } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.js"
import { useNavigate } from "react-router-dom"
import { criarAssinatura } from "../firebase/firebaseUtils.js"
import { useAuth } from "../Context/AuthContext.jsx"

export default function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function handleLogout() {
    try {
      await signOut(auth)
      navigate("/")
    } catch (error) {
      console.error("erro ao sair:", error.message)
    }
  }

  async function handleCriarAssinatura(dados) {
    try {
      await criarAssinatura(user.uid, dados)
      console.log("assinatura criada")
      setIsModalOpen(false)
    } catch (error) {
      console.error("erro ao criar:", error.code, error.message)
    }
  }

  return (
    <section className="min-h-screen w-screen bg-zinc-900 p-10 font-inter">
      {/* Header */}
      <header className="flex justify-between items-center">
        <img src="./src/assets/logo.png" alt="Logo" className="h-10" />
        <div
          className="flex border border-zinc-500 text-white items-center 
          justify-center gap-3 p-3 rounded-2xl cursor-pointer w-36 hover:bg-zinc-800
          font-semibold"
        >
          <LogOut size={18} />
          <button onClick={handleLogout} className="cursor-pointer">
            Deslogar
          </button>
        </div>
      </header>

      {/* Container principal */}
      <div className="flex justify-between mt-10 gap-6 h-[70vh] relative">
        {/* 🟩 Painel de assinaturas */}
        <div className="bg-zinc-800 border border-zinc-500 rounded-lg p-4 flex flex-col w-11/12">
          {/* filtros e pesquisa - FIXOS */}
          <div className="flex gap-2 mb-4 shrink-0 w-full">
            <SelectFilter options={["Todas", "Ativas", "Pausadas"]} />
            <SearchBar />
            <PrimaryButton
              value={"Criar Assinatura"}
              heigth={"full"}
              width={96}
              textInputSize={"sm"}
              icon={<CirclePlus size={"18"} />}
              onClick={() => setIsModalOpen(true)}
            />
          </div>

          {/* lista de produtos com SCROLL */}
          <div className="flex-1 overflow-y-auto pr-2 custom-scroll">
            <ProductCard
              prodName="Netflix"
              prodDesc="Plano Padrão"
              prodDate="12"
              prodPayment="Cobrança mensal"
              prodStatus="Ativa"
              prodPrice="29,90"
            />
          </div>
        </div>

        {/* 🟦 Painel de resumo */}
        <div className="bg-zinc-800 border border-zinc-500 rounded-lg p-5 w-1/2 flex flex-col justify-between h-[70vh]">
          <div>
            <h4 className="text-white text-2xl font-semibold mb-2">Resumo</h4>
            <p className="text-zinc-400 mb-4">Visão rápida dos seus gastos.</p>

            <div className="text-zinc-300 text-sm space-y-2">
              <p>
                <span className="font-semibold">Mensal (somado):</span> R$ 46,80
              </p>
              <p>
                <span className="font-semibold">Gasto anual estimado:</span> R$
                561,60
              </p>
              <p>
                <span className="font-semibold">Assinaturas ativas:</span> 2
              </p>
            </div>
          </div>

          <div className="text-zinc-400 text-sm mt-4">
            <p className="font-semibold text-white mb-2">
              Próximos pagamentos:
            </p>
            <p>Netflix — 5 dias</p>
          </div>
        </div>
      </div>
      <ModalProduct
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleCriarAssinatura}
      />
    </section>
  )
}
