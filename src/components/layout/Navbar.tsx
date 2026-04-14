import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Bloqueamos el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  // Definimos las rutas y las keys del diccionario para el nav
  const navItems = [
    { key: 'products', href: '#impactful-products' },
    { key: 'methodology', href: '#methodology' },
    { key: 'experience', href: '#experience' },
    { key: 'about', href: '#about' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[9999] flex flex-col items-center transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen ? 'h-screen bg-zinc-950' : 'h-14 bg-zinc-950/90 backdrop-blur-md border-b border-white/5'
      }`}
    >
      {/* BARRA SUPERIOR (Siempre visible) */}
      <div className="w-full max-w-[1533px] px-6 md:px-40 min-h-[3.5rem] flex items-center justify-between relative">
        
        {/* Logo */}
        <div className="text-gray-200 text-xs font-bold font-sans uppercase leading-5 tracking-widest cursor-pointer">
          Alan.Design
        </div>

        {/* Links de Navegación (Desktop) */}
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-max">
          {navItems.map((item) => (
            <a 
              key={item.key} 
              href={item.href} 
              className="text-gray-500 hover:text-gray-200 text-xs font-normal font-sans leading-5 tracking-tight transition-colors"
            >
              {t('nav', item.key)}
            </a>
          ))}
        </nav>

        {/* Controles (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* SWITCH IDIOMA DESKTOP */}
          <div 
            onClick={toggleLanguage}
            className="p-[3px] bg-white/5 rounded-full outline outline-1 outline-white/10 flex items-center gap-0.5 cursor-pointer"
          >
            <button className={`px-2.5 py-1 rounded-full text-xs font-mono leading-4 tracking-wide transition-colors ${language === 'en' ? 'bg-white/10 text-gray-200 font-medium' : 'text-neutral-700 hover:text-neutral-400 font-normal'}`}>EN</button>
            <button className={`px-2.5 py-1 rounded-full text-xs font-mono leading-4 tracking-wide transition-colors ${language === 'es' ? 'bg-white/10 text-gray-200 font-medium' : 'text-neutral-700 hover:text-neutral-400 font-normal'}`}>ES</button>
          </div>

          {/* BOTÓN CV DESKTOP */}
          <button className="h-8 px-3.5 bg-zinc-950 hover:bg-zinc-900 rounded-md shadow-[0px_0px_10px_0px_rgba(99,102,241,0.07)] shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.05)] border border-transparent hover:border-white/5 outline outline-1 outline-white/10 flex justify-center items-center gap-2 transition-all group">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-200 group-hover:-translate-y-0.5 transition-transform">
              <path d="M5 0.833374V7.50004M5 7.50004L2.08333 4.58337M5 7.50004L7.91667 4.58337"/>
              <path d="M1.66667 9.16663H8.33333"/>
            </svg>
            <span className="text-gray-200 text-xs font-medium font-sans leading-4 tracking-tight">
              {t('nav', 'cv')}
            </span>
          </button>
        </div>

        {/* Botón Menú Hamburguesa (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
        >
          <span className={`block w-5 h-0.5 bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-gray-200 rounded-full transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span className={`block w-5 h-0.5 bg-gray-200 rounded-full transition-transform duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* CONTENIDO DEL MENÚ MOBILE */}
      <div 
        className={`w-full flex-1 flex flex-col px-8 pt-16 lg:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible'
        }`}
      >
        <nav className="flex flex-col gap-6 items-start w-full">
          {navItems.map((item) => (
            <a 
              key={item.key} 
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white text-3xl font-bold font-sans tracking-tight transition-colors w-full border-b border-white/5 pb-4"
            >
              {t('nav', item.key)}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-8 mt-12 w-full items-start">
            
            {/* SWITCH IDIOMA MOBILE */}
            <div 
              onClick={toggleLanguage}
              className="p-1 bg-white/5 rounded-full outline outline-1 outline-white/10 flex items-center gap-1 w-full max-w-[200px] cursor-pointer"
            >
              <button className={`flex-1 py-2 rounded-full text-sm font-mono tracking-wide ${language === 'en' ? 'bg-white/10 text-gray-200 font-medium' : 'text-neutral-500 font-normal'}`}>EN</button>
              <button className={`flex-1 py-2 rounded-full text-sm font-mono tracking-wide ${language === 'es' ? 'bg-white/10 text-gray-200 font-medium' : 'text-neutral-500 font-normal'}`}>ES</button>
            </div>

            {/* BOTÓN CV MOBILE */}
            <button className="w-full h-14 bg-gray-200 hover:bg-white text-zinc-950 rounded-md font-bold text-sm flex justify-center items-center gap-2 transition-colors">
              <svg width="16" height="16" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 0.833374V7.50004M5 7.50004L2.08333 4.58337M5 7.50004L7.91667 4.58337"/>
                <path d="M1.66667 9.16663H8.33333"/>
              </svg>
              <span>{t('nav', 'cv')}</span>
            </button>
        </div>
      </div>

    </header>
  );
}