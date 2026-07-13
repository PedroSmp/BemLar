import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/Autenticacao'

export function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { isLoggedIn, login, logout } = useAuth()

  function handleLogin() {
    login()
    navigate('/dashboard')
  }

  function handleLogout() {
    logout()
    navigate('/')
  }

  const linkBase = "font-medium text-sm transition-colors"
  const linkAtivo = "px-4 py-1.5 bg-blue-200 text-blue-900 rounded-full font-semibold"
  const linkInativo = "text-slate-600 hover:text-blue-600"

  return (
    <header className="flex justify-between items-center w-full px-8 py-4 bg-[#FDFBF7]">

      {/* 1. Lado Esquerdo: Logo */}
      <Link to="/" className="flex items-center gap-2 cursor-pointer">
        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-md text-emerald-600 font-bold">
          🏡
        </div>
        <span className="text-xl font-bold text-slate-800">BemLar</span>
      </Link>

      {/* 2. Centro: Links de Navegação (mudam conforme o login) */}
      {isLoggedIn ? (
        <nav className="hidden md:flex items-center gap-6">
          <Link
            to="/"
            className={`${linkBase} ${location.pathname === '/' ? linkAtivo : linkInativo}`}
          >
            Página inicial
          </Link>
          <Link
            to="/dashboard"
            className={`${linkBase} ${location.pathname === '/dashboard' ? linkAtivo : linkInativo}`}
          >
            Serviços
          </Link>
          <Link to="/minhas-financas" className={`${linkBase} ${linkInativo}`}>
            Minhas finanças
          </Link>
          <Link to="/agenda" className={`${linkBase} ${linkInativo}`}>
            Agenda
          </Link>
        </nav>
      ) : (
        <nav className="hidden md:flex items-center gap-6">
          
            <a href="/#servicos"
            className={`${linkBase} ${location.pathname === '/' ? linkAtivo : linkInativo}`}
          >
            Nossos serviços
          </a>
          <a href="/#valores" className={`${linkBase} ${linkInativo}`}>
            Nossos valores
          </a>
          <Link
            to="/quem-somos"
            className={`${linkBase} ${location.pathname === '/quem-somos' ? linkAtivo : linkInativo}`}
          >
            Quem somos
          </Link>
        </nav>
      )}

      {/* 3. Lado Direito: muda conforme o login */}
      {isLoggedIn ? (
        <div className="flex items-center gap-4">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 transition-colors text-lg"
            title="Configurações"
          >
            ⚙️
          </button>
          <button
            onClick={handleLogout}
            className="w-9 h-9 flex items-center justify-center rounded-full bg-[#369BE9] text-white hover:bg-blue-600 transition-colors"
            title="Sair"
          >
            👤
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <button className="px-5 py-2 bg-[#369BE9] text-white rounded-md font-semibold text-sm hover:bg-blue-600 transition-colors shadow-sm">
            Quero me juntar
          </button>
          <button
            onClick={handleLogin}
            className="px-6 py-2 bg-[#57C78E] text-white rounded-md font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-sm"
          >
            Entrar
          </button>
        </div>
      )}

    </header>
  )
}