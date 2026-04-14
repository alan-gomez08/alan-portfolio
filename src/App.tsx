import React from 'react';
import { LanguageProvider } from './context/LanguageContext'; // <-- Importar esto
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { TechStack } from './components/sections/TechStack';
import { Methodology } from './components/sections/Methodology';
import { Experience } from './components/sections/Experience';
import { ImpactfulProducts } from './components/sections/ImpactfulProducts';
import { TheLaboratory } from './components/sections/TheLaboratory';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    // 👇 ABRAZAMOS TODO CON EL PROVIDER 👇
    <LanguageProvider>
      <div className="min-h-screen bg-zinc-950 text-gray-200 font-sans flex flex-col items-center overflow-x-hidden selection:bg-emerald-500/30 selection:text-emerald-400">
        
        <Navbar />

        <main className="w-full max-w-[1533px] flex flex-col relative pt-14"> 
          <Hero />
          <TechStack />
          <ImpactfulProducts />
          <TheLaboratory />
          <Methodology />
          <Experience />
          <About />
          <Contact />
        </main>

      </div>
    </LanguageProvider>
  );
}

export default App;