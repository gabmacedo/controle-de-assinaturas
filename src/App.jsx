import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Registro from "./pages/Registro.jsx"
import PrimaryButton from "./components/PrimaryButton.jsx"
import AuthInput from "./components/AuthInput.jsx"
import { Mail } from "lucide-react"
import { Lock } from "lucide-react"

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </div>
  )
}
