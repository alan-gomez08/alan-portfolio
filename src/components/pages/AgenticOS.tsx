import { motion } from 'framer-motion';
import { AgenticHero } from './AgenticOS/AgenticHero';
import { AgenticContext } from './AgenticOS/AgenticContext';
import { AtomicDesign } from './AgenticOS/AtomicDesign';
import { Workflow } from './AgenticOS/Workflow';

export function AgenticOS() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Fondo ultra oscuro (#0A0A0A) general de la página
      className="w-full flex justify-center bg-[#0A0A0A] min-h-screen font-['Geist',_sans-serif] antialiased overflow-x-hidden"
    >
      {/* Contenedor central con max-width */}
      <div className="w-full max-w-[1265px] px-4 md:px-8 py-12 flex flex-col gap-24 md:gap-32 [&>*]:!my-0">
        
        {/* SECCIÓN 1: Hero */}
        <AgenticHero />
        
        {/* SECCIÓN 2: Contexto (Problema y Solución) */}
        <AgenticContext />
        
        {/* SECCIÓN 3: Atomic Design */}
        <AtomicDesign />

        {/* SECCIÓN 4: Workflow (Figma a Storybook) */}
        <Workflow />
        
        {/* Próximas secciones irán aquí */}
        
      </div>
    </motion.div>
  );
}