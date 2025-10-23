import { Lock, Mail } from "lucide-react"
import AuthInput from "../components/AuthInput"
import PrimaryButton from "../components/PrimaryButton"
import { Link } from "react-router-dom"

export default function Login() {
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
        <div className="w-full max-w-md px-10 text-white flex flex-col">
          <h2 className="text-5xl font-semibold mb-8 text-left">Login</h2>

          <div className="flex flex-col gap-6">
            <AuthInput
              type="email"
              label="E-mail"
              placeholder="email@exemplo.com"
              icon={<Mail size={20} />}
            />
            <AuthInput
              type="password"
              label="Senha"
              placeholder="********"
              icon={<Lock size={20} />}
            />

            <PrimaryButton value={"Entrar"} heigth={16} width={96} />
          </div>
          <p className="text-center mt-2">
            Ainda nao tem uma conta?
            <Link
              to="/registro"
              className="text-blue-600 font-semibold ml-1 underline"
            >
              Registrar-se
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
