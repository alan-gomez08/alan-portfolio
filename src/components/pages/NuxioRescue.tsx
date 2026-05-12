import { motion } from 'framer-motion';
import { HeroHeader } from './NuxioRescue/HeroHeader';
import { InfoBanner } from './NuxioRescue/InfoBanner';
import { DesignPrinciples } from './NuxioRescue/DesignPrinciples';
import { TimelineSprints } from './NuxioRescue/TimelineSprints';
import { DesignOps } from './NuxioRescue/DesignOps';
import { AtomicComponents } from './NuxioRescue/AtomicComponents';
import { GovernanceHandoff } from './NuxioRescue/GovernanceHandoff';
import { CognitiveComplexity } from './NuxioRescue/CognitiveComplexity'; 
import { Feedback } from './NuxioRescue/Feedback'; // <-- IMPORTAMOS EL FEEDBACK
import { Retrospective } from './NuxioRescue/Retrospective'; // <-- IMPORTAMOS LA RETROSPECTIVA

export function NuxioRescue() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center bg-white font-['Poppins']"
    >
      <div className="w-full max-w-[1265px] px-4 md:px-8 py-12 flex flex-col gap-12">
        <HeroHeader />
        <InfoBanner />
        <DesignPrinciples />
        <TimelineSprints />
        <DesignOps />
        <AtomicComponents />
        <GovernanceHandoff />
        <CognitiveComplexity /> 
        <Retrospective /> {/* <-- AGREGAMOS LA RETROSPECTIVA AL FINAL DE TODO */}
        <Feedback /> {/* <-- AGREGAMOS EL FEEDBACK */}
      </div>
    </motion.div>
  );
}