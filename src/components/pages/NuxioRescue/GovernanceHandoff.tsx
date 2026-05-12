import { motion } from 'framer-motion';

export function GovernanceHandoff() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-24 mb-24 font-['Poppins']"
    >
      <div className="w-full bg-gray-50 rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-200 overflow-hidden">
        
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* COLUMNA IZQUIERDA: Textos y Explicación */}
          <div className="flex flex-col gap-6 w-full min-w-0 py-1">
            
            <div className="px-2.5 py-1 bg-pink-100 rounded-sm w-fit border border-pink-200">
              <span className="text-pink-600 text-xs font-bold font-mono uppercase tracking-wide">GOVERNANCE & HANDOFF</span>
            </div>
            
            <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.1] tracking-tight uppercase">
              GOVERNANCE & HANDOFF
            </h2>
            
            <div className="w-10 h-0.5 bg-pink-500 rounded-sm" />
            
            <p className="text-gray-500 text-base lg:text-lg font-normal leading-relaxed">
              To avoid discrepancies between Figma and production, we implemented Storybook as our single source of truth. This allowed us to isolate the development environment, test React components in all their states, and provide live documentation of Tailwind classes for the engineering team.
            </p>
            
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-sm mt-0.5">⬡</span>
                <span className="text-gray-500 text-sm md:text-base font-normal">Components isolated from the global context</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-sm mt-0.5">◎</span>
                <span className="text-gray-500 text-sm md:text-base font-normal">Visual testing of all states</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-pink-500 text-sm mt-0.5">▲</span>
                <span className="text-gray-500 text-sm md:text-base font-normal">Live documentation exportable to the computer</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-gray-200/60">
              <div className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                <span className="text-gray-500 text-xs font-bold tracking-wide">Storybook 7.x</span>
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                <span className="text-gray-500 text-xs font-bold tracking-wide">React 18</span>
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                <span className="text-gray-500 text-xs font-bold tracking-wide">Tailwind CSS</span>
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center">
                <span className="text-gray-500 text-xs font-bold tracking-wide">Figma Plugin</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: Imagen Storybook */}
          <div className="w-full flex justify-center shrink-0">
            <img 
              src="/NuxioRescueimg/StorybookMockup.png" 
              alt="Storybook Implementation Mockup" 
              className="w-full h-auto object-contain rounded-2xl drop-shadow-xl"
            />
          </div>

        </div>
      </div>
    </motion.section>
  );
}