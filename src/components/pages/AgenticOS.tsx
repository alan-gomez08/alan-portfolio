import { motion } from 'framer-motion';
import { AgenticHero } from './AgenticOS/AgenticHero';
import { AgenticContext } from './AgenticOS/AgenticContext';
import { AtomicDesign } from './AgenticOS/AtomicDesign';
import { Workflow } from './AgenticOS/Workflow';
import { CoreWorkflow } from './AgenticOS/CoreWorkflow';
import { OutcomesImpact } from './AgenticOS/OutcomesImpact'; 

export function AgenticOS() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // Fondo oscuro global de tu página
      className="w-full flex justify-center bg-[#0A0A0A] min-h-screen font-['Geist',_sans-serif] antialiased overflow-x-hidden"
    >
      {/* Contenedor central - GAP REDUCIDO AQUÍ (gap-16 md:gap-20) */}
      <div className="w-full max-w-[1265px] px-4 md:px-8 py-12 flex flex-col gap-16 md:gap-20 [&>*]:!my-0">
        
        {/* SECCIÓN 1: Hero */}
        <AgenticHero />
        
        {/* SECCIÓN 2: El Contexto / Problema */}
        <AgenticContext />
        
        {/* SECCIÓN 3: Escalabilidad Base */}
        <AtomicDesign />

        {/* SECCIÓN 4: Workflow en cascada (Figma -> Cursor -> Storybook) */}
        <Workflow />

        {/* SECCIÓN 5: Core Workflows (El Dashboard) */}
        <CoreWorkflow />

        {/* SECCIÓN 6: Cierre, impacto y siguientes pasos */}
        <OutcomesImpact />
        
      </div>
    </motion.div>
  );
}