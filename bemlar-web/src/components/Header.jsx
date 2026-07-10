export function Header() {
  // Container principal: bg claro, padding lateral e Flexbox para separar as 3 áreas
  return (
    <header className="flex justify-between items-center w-full px-8 py-4 bg-[#FDFBF7]">
      
      {/* 1. Lado Esquerdo: Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        {/* Placeholder para a imagem do seu logo */}
        <div className="flex items-center justify-center w-8 h-8 bg-blue-100 rounded-md text-emerald-600 font-bold">
          🏡
        </div>
        <span className="text-xl font-bold text-slate-800">BemLar</span>
      </div>

      {/* 2. Centro: Links de Navegação */}
      <nav className="hidden md:flex items-center gap-6">
        <a href="#servicos" className="px-4 py-1.5 bg-blue-200 text-blue-900 rounded-full font-semibold text-sm">
          Nossos serviços
        </a>
        <a href="#valores" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
          Nossos valores
        </a>
        <a href="#" className="text-slate-600 hover:text-blue-600 font-medium text-sm transition-colors">
          Quem somos
        </a>
      </nav>

      {/* 3. Lado Direito: Botões de Ação */}
      <div className="flex items-center gap-4">
        <button className="px-5 py-2 bg-[#369BE9] text-white rounded-md font-semibold text-sm hover:bg-blue-600 transition-colors shadow-sm">
          Quero me juntar
        </button>
        <button className="px-6 py-2 bg-[#57C78E] text-white rounded-md font-semibold text-sm hover:bg-emerald-500 transition-colors shadow-sm">
          Entrar
        </button>
      </div>

    </header>
  )
}