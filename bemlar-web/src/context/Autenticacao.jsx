import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  // Lê do localStorage pra manter o login mesmo se recarregar a página
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('bemlar_logado') === 'true'
  )

  useEffect(() => {
    localStorage.setItem('bemlar_logado', isLoggedIn)
  }, [isLoggedIn])

  function login() {
    setIsLoggedIn(true)
  }

  function logout() {
    setIsLoggedIn(false)
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

// Hook pra usar em qualquer componente: const { isLoggedIn, login, logout } = useAuth()
export function useAuth() {
  return useContext(AuthContext)
}