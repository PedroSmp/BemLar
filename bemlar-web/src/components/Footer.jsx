import iconYoutube from '../assets/yt.svg'
import iconTiktok from '../assets/tkk.svg'
import iconInstagram from '../assets/insta.svg'
import logoBemLar from '../assets/logo.svg'

export function Footer() {
  // Background azul claro esticado de ponta a ponta
  return (
    <footer className="w-full bg-[#BCE0FD] pt-12 pb-6 px-8 md:px-20">
      
      {/* Container Principal: Divide em blocos (Logo, Endereço, Redes) */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 border-b border-[#1A3B5C]/10 pb-8 mb-8">
        
        {/* Lado Esquerdo: Logo */}
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 h-10 bg-white rounded-md text-emerald-600 font-bold shadow-sm">
            <img src={logoBemLar} alt="Logo da BemLar"/>
          </div>
          <span className="text-xl font-bold text-[#1A3B5C]">BemLar</span>
        </div>

        {/* Centro: Endereço */}
        <div className="text-[#1A3B5C] text-sm font-medium">
          <p className="font-bold mb-1">Nossa Localização:</p>
          <p>Av. Jorge Luiz, 548, São Paulo, SP</p>
          <p>CEP 00000-000</p>
        </div>

        {/* Lado Direito: Redes Sociais */}
        <div>
          <p className="font-bold text-[#1A3B5C] mb-3 text-sm">Nossas redes sociais:</p>
          <div className="flex gap-4">
            {/* Ícones provisórios */}
          <a href="#" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={iconYoutube} alt="icone do YouTube" className="w-10 h-10" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={iconTiktok} alt="icone do tiktok" className="w-10 h-10" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" className="hover:opacity-80 transition-opacity">
              <img src={iconInstagram} alt="icone do instagram" className="w-10 h-10" />
          </a>
          </div>
        </div>

      </div>

      {/* Parte Inferior: Links e Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-end gap-8">
        
        {/* Colunas de Links */}
        <div className="flex gap-16 text-sm text-[#1A3B5C] font-medium">
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Suporte</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Ajuda</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Contato</a></li>
          </ul>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="hover:text-blue-600 transition-colors">Legal</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Política de privacidade</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Termos e condições</a></li>
            <li><a href="#" className="hover:text-blue-600 transition-colors">Cookies</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[#1A3B5C]/70 font-semibold mt-8 md:mt-0">
          © 2026 BemLar - Feito por Pedro Gonçalves
        </div>
        
      </div>
    </footer>
  )
}