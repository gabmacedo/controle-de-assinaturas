import { useState } from "react"
import { Link } from "react-router-dom"
import { registerUser } from "../firebase/firebase"
import { Lock, Mail, User, Loader } from "lucide-react"
import AuthInput from "../components/AuthInput"
import PrimaryButton from "../components/PrimaryButton"
import ModalSuccessful from "../components/ModalSuccessful"

export default function Registro() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [buttonLoad, setButtonLoad] = useState("Criar Conta")
  const [isModalOpen, setIsModalOpen] = useState(false)

  async function handleRegistro(e) {
    e.preventDefault()

    try {
      if (!nome || !email || !password) {
        return
      }

      if (nome.length >= 2) {
        alert("Insira um nome válido.")
      }

      setButtonLoad(<Loader className="animate-spin" />)
      const userCredential = await registerUser(email, password, nome)
      console.log("Usuário criado:", userCredential.user.displayName)
      setNome("")
      setEmail("")
      setPassword("")
      setIsModalOpen(true)
    } catch (error) {
      setButtonLoad("Criar Conta")
      console.error("Erro no cadastro:", error.code, error.message)
    }
  }

  return (
    <section className="min-h-screen w-screen flex font-inter">
      {/* Lado esquerdo */}
      <div className="bg-blue-600 w-1/2 flex flex-col justify-center px-20 text-white relative">
        <div
          className="h-96 w-full bg-white absolute bottom-0 left-0"
          style={{ clipPath: "ellipse(50% 50% at 50% 100%)" }}
        ></div>
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Controle seus pequenos gastos.
          </h1>
          <p className="text-lg text-zinc-300 mb-8">
            Veja, controle e analise suas assinaturas e gastos mensais. Organize
            suas finanças e descubra para onde vai o seu dinheiro.
          </p>
        </div>
      </div>
      {/* Lado direito */}
      <div className="bg-zinc-900 w-1/2 flex items-center justify-center">
        <form onSubmit={handleRegistro}>
          <div className="w-full max-w-md px-10 text-white flex flex-col">
            <h2 className="text-5xl font-semibold mb-8 text-left">
              Registre-se
            </h2>

            <div className="flex flex-col gap-6">
              <AuthInput
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                type="text"
                label="Nome Completo"
                placeholder="John Doe"
                icon={<User size={20} />}
              />
              <AuthInput
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                label="E-mail"
                placeholder="email@exemplo.com"
                icon={<Mail size={20} />}
              />
              <AuthInput
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                label="Senha"
                placeholder="********"
                icon={<Lock size={20} />}
              />

              <ul className="list-disc ml-5">
                <li
                  className={
                    password.length > 6 ? "text-green-300" : "text-red-300"
                  }
                >
                  Minimo de 6 caracteres.
                </li>
              </ul>

              <PrimaryButton value={buttonLoad} heigth={16} width={96} />
            </div>
            <p className="text-center mt-2">
              Já possui acesso?
              <Link
                to="/"
                className="text-blue-600 font-semibold ml-1 underline"
              >
                Entrar
              </Link>
            </p>
          </div>
        </form>
      </div>
      <ModalSuccessful
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}
