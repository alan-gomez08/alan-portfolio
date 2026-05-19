import { motion } from 'framer-motion';
import { AgenticHero } from './AgenticOS/AgenticHero';

export function AgenticOS() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Fondo ultra oscuro (#030712) para que resalte el glow cyan
      className="w-full flex justify-center bg-[#0B121C] min-h-screen font-['Geist',_sans-serif] antialiased overflow-x-hidden"
    >
      <div className="w-full max-w-[1265px] px-4 md:px-8 py-12 flex flex-col gap-16 md:gap-24 [&>*]:!my-0">
        
        {/* SECCIÓN 1: Hero */}
        <AgenticHero />
        
        {/* Acá iremos metiendo las demás secciones */}
        
      </div>
    </motion.div>
  );
}