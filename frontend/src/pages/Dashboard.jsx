import { LogOut, CirclePlus, Loader } from "lucide-react"
import SelectFilter from "../components/SelectFilter"
import SearchBar from "../components/SearchBar"
import PrimaryButton from "../components/PrimaryButton"
import ProductCard from "../components/ProductCard"
import { ModalProduct } from "../components/ModalProduct"
import { useState, useEffect } from "react"
import { signOut } from "firebase/auth"
import { auth } from "../firebase/firebase.js"
import { useNavigate } from "react-router-dom"
import {
  criarAssinatura,
  buscarAssinaturas,
  deletarAssinatura,
} from "../firebase/firebaseUtils.js"
import { useAuth } from "../Context/AuthContext.jsx"

export default function Dashboard() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [assinaturas, setAssinaturas] = useState([])
  const [loadingAssinaturas, setLoadingAssinaturas] = useState(true)
  const [buttonLoad, setButtonLoad] = useState("Deslogar")

  async function handleLogout() {
    setButtonLoad(<Loader className="animate-spin" />)
    setTimeout(async () => {
      try {
        await signOut(auth)
        navigate("/")
      } catch (error) {
        console.error("erro ao sair:", error.message)
      }
    }, 1500)
  }

  async function handleCriarAssinatura(dados) {
    try {
      const nova = await criarAssinatura(user.uid, dados)
      setAssinaturas((prev) => [nova, ...prev])
      setIsModalOpen(false)
    } catch (error) {
      console.error("erro ao criar:", error.code, error.message)
    }
  }

  async function handleDeletarAssinaturas(id) {
    try {
      await deletarAssinatura(id)
      const novoArray = assinaturas.filter((a) => a.id !== id)
      setAssinaturas(novoArray)
    } catch (error) {
      console.error("erro ao deletar:", error.message)
    }
  }

  function mostrarTotal() {
    return assinaturas
      .filter((assinatura) => assinatura.status === "Ativa")
      .reduce((total, a) => total + (a.preco || 0), 0)
      .toFixed(2)
  }

  function mostrarAtivos() {
    return assinaturas.filter((assinatura) => assinatura.status === "Ativa")
      .length
  }

  useEffect(() => {
    async function carregarAssinaturas() {
      if (!user?.uid) return

      try {
        const data = await buscarAssinaturas(user.uid)
        setAssinaturas(data)
      } catch (error) {
        console.error("erro ao carregar assinaturas", error.message)
      } finally {
        setLoadingAssinaturas(false)
      }
    }
    carregarAssinaturas()
  }, [user])

  return (
    <section className="min-h-screen w-screen bg-zinc-900 p-10 font-inter">
      {/* header */}
      <header className="flex justify-between items-center">
        <img src="./src/assets/logo.png" alt="Logo" className="h-10" />
        <div
          className="flex border border-zinc-500 text-white items-center 
          justify-center gap-3 p-3 rounded-2xl cursor-pointer w-36 hover:bg-zinc-800
          font-semibold"
          onClick={handleLogout}
        >
          <LogOut size={18} />
          <button onClick={handleLogout} className="cursor-pointer">
            {buttonLoad}
          </button>
        </div>
      </header>

      {/* container principal */}
      <div className="flex justify-between mt-10 gap-6 h-[70vh] relative">
        {/* painel de assinaturas */}
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
            {loadingAssinaturas ? (
              <p className="text-zinc-400">Carregando assinaturas...</p>
            ) : Array.isArray(assinaturas) && assinaturas.length > 0 ? (
              assinaturas.map((item) => (
                <ProductCard
                  key={item.id}
                  prodName={item.nome}
                  prodDesc={item.observacoes || "Sem descrição"}
                  prodDate={item.vencimento || "-"}
                  prodPayment={`Cobrança ${item.tipo.toLowerCase()}`}
                  prodStatus={item.status}
                  prodPrice={item.preco ? item.preco.toFixed(2) : "0.00"}
                  onDelete={() => handleDeletarAssinaturas(item.id)}
                />
              ))
            ) : (
              <p className="text-zinc-400">
                Nenhuma assinatura cadastrada ainda.
              </p>
            )}
          </div>
        </div>

        {/* painel de resumo */}
        <div className="bg-zinc-800 border border-zinc-500 rounded-lg p-5 w-1/2 flex flex-col justify-between h-[70vh]">
          <div>
            <h4 className="text-white text-2xl font-semibold mb-2">Resumo</h4>
            <p className="text-zinc-400 mb-4">Visão rápida dos seus gastos.</p>

            <div className="text-zinc-300 text-sm space-y-2">
              <p>
                <span className="font-semibold">Mensal (somado):</span>
                {" R$ "}
                {mostrarTotal()}
              </p>
              <p>
                <span className="font-semibold">Assinaturas ativas:</span>{" "}
                {mostrarAtivos()}
              </p>
              <p>
                <span className="font-semibold">Gasto anual estimado:</span> Em
                breve
              </p>
            </div>
          </div>

          <div className="text-zinc-400 text-sm mt-4">
            <p className="font-semibold text-white mb-2">
              Próximos pagamentos:
            </p>
            <p>Em breve</p>
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
