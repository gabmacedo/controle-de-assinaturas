import { Navigate } from "react-router-dom"
import { useAuth } from "./AuthContext"

// proteger rotas que precisam de autenticação
export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen w-screen flex items-center justify-center bg-zinc-900">
        <div className="text-white text-xl">Carregando...</div>
      </div>
    )
  }

  // se não ta logado redireciona para login
  return user ? children : <Navigate to="/" />
}
