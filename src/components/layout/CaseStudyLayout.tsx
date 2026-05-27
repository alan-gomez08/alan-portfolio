import { motion } from 'framer-motion';
// Importamos el nuevo Navbar camaleónico (Asegurate de que la ruta sea correcta)
import { Navbar } from './Navbar'; 

interface CaseStudyLayoutProps {
  children: React.ReactNode;
  onBack: () => void;
  theme?: 'dark' | 'light'; // Agregamos la propiedad theme
}

export function CaseStudyLayout({ children, onBack, theme = 'dark' }: CaseStudyLayoutProps) {
  
  // Definimos el fondo dinámico del contenedor principal
  // Si es light (Nuxio) fondo blanco. Si es dark (Agentic/Lab) fondo súper oscuro.
  const bgClass = theme === 'light' ? 'bg-white text-gray-900' : 'bg-[#0A0A0A] text-gray-200';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`min-h-screen ${bgClass} font-sans flex flex-col items-center overflow-x-hidden w-full absolute top-0 left-0 z-50`}
    >
      {/* Acá llamamos al Navbar maestro pasándole las propiedades.
        Se adaptará automáticamente a la vista de Case Study y al color del tema.
      */}
      <Navbar isCaseStudy={true} onBack={onBack} theme={theme} />

      {/* Contenedor sin márgenes extra para que tu diseño ocupe lo que deba ocupar */}
      <main className="w-full flex flex-col items-center pt-24 pb-24">
        {children}
      </main>
    </motion.div>
  );
}