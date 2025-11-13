import { Routes, Route } from "react-router-dom"
import Login from "./pages/Login.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Registro from "./pages/Registro.jsx"
import PrivateRoute from "./Context/PrivateRoute.jsx"
import AuthProvider from "./Context/AuthContext.jsx"

export default function App() {
  return (
    <div>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  )
}
