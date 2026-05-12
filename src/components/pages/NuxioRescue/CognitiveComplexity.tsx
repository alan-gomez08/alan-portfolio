import { motion } from 'framer-motion';

export function CognitiveComplexity() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-32 mb-32 font-['Poppins']"
    >
      <div className="w-full flex flex-col items-center">
        
        {/* Cabecera de la Sección */}
        <div className="text-center max-w-4xl mx-auto px-4 mb-16 md:mb-24 flex flex-col gap-4">
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight uppercase">
            Reduction of Cognitive Complexity
          </h2>
          <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed mt-2">
            We transform a heavy, error-prone workflow into a modular experience. We prioritize the retention of the user's visual context, strictly respecting the technical restriction of not rewriting the Front-end.
          </p>
        </div>

        {/* Contenedor de la Línea de Tiempo */}
        <div className="w-full max-w-[1200px] relative flex flex-col gap-24 lg:gap-32 px-4 md:px-8">
          
          {/* LÍNEA CORREGIDA: Ahora empieza desde arriba (top-0) y recorre toda la sección */}
          <div className="hidden lg:block absolute left-[33%] top-0 bottom-0 w-[2px] bg-gradient-to-b from-gray-200 via-sky-300 to-sky-700 z-0" />

          {/* ==================== PASO 01 / THE PROBLEM ==================== */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 relative z-10 bg-white pr-4">
              <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">01 / The Problem</h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                The user lost context when being redirected to a new page to edit data. The wall of inputs caused eye strain and the exposed destructive action button was a critical risk.
              </p>
            </div>
            
            <div className="w-full lg:w-[67%] relative z-10 flex justify-center">
              <img 
                src="/NuxioRescueimg/step1-problem.png" 
                alt="The Problem Mockup" 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl border border-gray-100"
              />
            </div>
          </div>

          {/* ==================== PASO 02 / WIREFRAMES ==================== */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 relative z-10 bg-white pr-4">
              <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">02 / Wireframes</h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                We ruled out cleaning the entire page, since rewriting that code violated our 14-day deadline. We sketched an overlay-based skeleton to reuse existing components.
              </p>
            </div>
            
            <div className="w-full lg:w-[67%] relative z-10 flex justify-center">
              <img 
                src="/NuxioRescueimg/step2-wireframe.png" 
                alt="Wireframes Mockup" 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl border border-gray-100"
              />
            </div>
          </div>

          {/* ==================== PASO 03 / THE SOLUTION ==================== */}
          <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 relative">
            <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 relative z-10 bg-white pr-4">
              <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">03 / The Solution</h3>
              <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                We migrate editing to contextual modals with progressive disclosure (accordions). The user never leaves the main table, friction disappears and deployment time is reduced to zero.
              </p>
            </div>
            
            <div className="w-full lg:w-[67%] relative z-10 flex justify-center">
              <img 
                src="/NuxioRescueimg/step3-solution.png" 
                alt="The Solution Mockup" 
                className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl border border-gray-100"
              />
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}