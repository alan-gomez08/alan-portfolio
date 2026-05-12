import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  onBack: () => void;
}

export function CaseStudyLayout({ children, onBack }: CaseStudyLayoutProps) {
  const { language } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-white text-gray-900 font-sans flex flex-col items-center overflow-x-hidden w-full absolute top-0 left-0 z-50"
    >
      {/* Navbar Clara para el Case Study */}
      <nav className="w-full h-16 fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 flex justify-center items-center">
        <div className="w-full max-w-[1265px] px-6 md:px-8 flex items-center justify-between">
          <div className="text-gray-900 text-xs font-bold font-sans uppercase leading-5 tracking-widest">
            Alan.Design
          </div>
          
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors cursor-pointer group"
          >
            <span className="text-gray-600 group-hover:text-gray-900 transition-transform group-hover:-translate-x-1">←</span>
            <span className="text-gray-600 group-hover:text-gray-900 text-[10px] font-bold font-sans tracking-tight">
              {language === 'es' ? 'VOLVER AL INICIO' : 'BACK HOME'}
            </span>
          </button>
        </div>
      </nav>

      {/* Contenedor sin márgenes extra para que tu diseño ocupe lo que deba ocupar */}
      <main className="w-full flex flex-col items-center pt-24 pb-24">
        {children}
      </main>
    </motion.div>
  );
}