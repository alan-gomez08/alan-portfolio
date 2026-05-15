import { motion } from 'framer-motion';
import { HeroHeader } from './NuxioRescue/HeroHeader';
import { InfoBanner } from './NuxioRescue/InfoBanner';
import { DesignPrinciples } from './NuxioRescue/DesignPrinciples';
import { TimelineSprints } from './NuxioRescue/TimelineSprints';
import { DesignOps } from './NuxioRescue/DesignOps';
import { AtomicComponents } from './NuxioRescue/AtomicComponents';
import { GovernanceHandoff } from './NuxioRescue/GovernanceHandoff';
import { CognitiveComplexity } from './NuxioRescue/CognitiveComplexity'; 
import { Feedback } from './NuxioRescue/Feedback'; 
import { Retrospective } from './NuxioRescue/Retrospective'; 

export function NuxioRescue() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center bg-white font-['Poppins']"
    >
      {/* EL TRUCO EXPERTO:
          [&>*]:!my-0 -> Fuerza a todos los componentes hijos a tener margin-top y margin-bottom en 0.
          gap-12 md:gap-16 -> Crea un "ritmo vertical" suave, idéntico y parejo entre todas las piezas.
      */}
      <div className="w-full max-w-[1265px] px-4 md:px-8 py-12 flex flex-col gap-12 md:gap-16 [&>*]:!my-0">
        <HeroHeader />
        <InfoBanner />
        <DesignPrinciples />
        <TimelineSprints />
        <DesignOps />
        <AtomicComponents />
        <GovernanceHandoff />
        <CognitiveComplexity /> 
        <Retrospective />
        <Feedback />
      </div>
    </motion.div>
  );
}