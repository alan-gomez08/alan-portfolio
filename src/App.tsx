import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Methodology } from './components/sections/Methodology';
import { Experience } from './components/sections/Experience';
import { ImpactfulProducts } from './components/sections/ImpactfulProducts';
import { TheLaboratory } from './components/sections/TheLaboratory';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

// Importamos el layout y tu nuevo caso de estudio
import { CaseStudyLayout } from './components/layout/CaseStudyLayout';
import { NuxioRescue } from './components/pages/NuxioRescue';

function App() {
  // Estado para controlar qué caso de estudio está abierto
  const [activeCaseStudy, setActiveCaseStudy] = useState<string | null>(null);

  // Funciones para manejar la navegación con scroll top automático (UX Trick)
  const handleOpenCaseStudy = (id: string) => {
    window.scrollTo(0, 0);
    setActiveCaseStudy(id);
  };

  const handleCloseCaseStudy = () => {
    window.scrollTo(0, 0);
    setActiveCaseStudy(null);
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-gray-200 font-sans flex flex-col items-center overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-400">
        
        <AnimatePresence mode="wait">
          {activeCaseStudy === 'nuxio' ? (
            <CaseStudyLayout key="case-study-nuxio" onBack={handleCloseCaseStudy}>
              <NuxioRescue />
            </CaseStudyLayout>
          ) : (
            <motion.div 
              key="home-page"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full flex flex-col items-center"
            >
              <Navbar />
              <main className="w-full max-w-[1533px] flex flex-col relative pt-14"> 
                <Hero />
                <TechStack />
                {/* Le pasamos la función al componente para que la gatille */}
                <ImpactfulProducts onOpenCaseStudy={handleOpenCaseStudy} />
                <TheLaboratory />
                <Methodology />
                <Experience />
                <About />
                <Contact />
              </main>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </LanguageProvider>
  );
}

export default App;