import { motion } from 'framer-motion';

export function GovernanceHandoff() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-24 mb-24 font-['Poppins'] px-4"
    >
      {/* Contenedor principal alineado arriba */}
      <div className="w-full xl:w-fit mx-auto bg-gray-50 rounded-[32px] shadow-md px-8 py-12 flex flex-col xl:flex-row items-start justify-center gap-16">
        
        {/* Columna Izquierda: Texto */}
        <div className="w-full xl:w-[460px] flex flex-col justify-start items-start gap-6 shrink-0">
          
          <div className="px-2 py-1 bg-pink-100 rounded-sm flex justify-center items-center gap-2.5">
            <span className="text-pink-600 text-xs font-bold font-mono uppercase leading-4 tracking-wide">
              GOVERNANCE & HANDOFF
            </span>
          </div>
          
          <h3 className="w-full text-gray-900 text-4xl font-bold leading-[48px]">
            GOVERNANCE & HANDOFF
          </h3>
          
          <div className="relative">
            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1C0 0.447715 0.447715 0 1 0H39C39.5523 0 40 0.447715 40 1C40 1.55228 39.5523 2 39 2H0.999999C0.447714 2 0 1.55228 0 1Z" fill="#FF4785"/>
            </svg>
          </div>
          
          <p className="w-full text-gray-500 text-base font-normal leading-6">
            To avoid discrepancies between Figma and production, we implemented Storybook as our single source of truth. This allowed us to isolate the development environment, test React components in all their states, and provide live documentation of Tailwind classes for the engineering team.
          </p>

          <div className="w-full flex flex-col gap-3 pt-1">
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-[10px] w-3 flex justify-center pt-1">⬡</span>
              <span className="text-gray-500 text-sm font-normal leading-5">Components isolated from the global context</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-[10px] w-3 flex justify-center pt-1">◎</span>
              <span className="text-gray-500 text-sm font-normal leading-5">Visual testing of all states</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-pink-500 text-[10px] w-3 flex justify-center pt-1">▲</span>
              <span className="text-gray-500 text-sm font-normal leading-5">Live documentation exportable to the computer</span>
            </div>
          </div>

          {/* Etiquetas del Tech Stack - ACTUALIZADAS (gap-6 y px-2 py-1) */}
          <div className="w-full flex flex-wrap items-center gap-6 pt-4">
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex justify-center items-center">
              <span className="text-gray-500 text-xs font-bold font-mono leading-4 tracking-wide">Storybook 7.x</span>
            </div>
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex justify-center items-center">
              <span className="text-gray-500 text-xs font-bold font-mono leading-4 tracking-wide">React 18</span>
            </div>
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex justify-center items-center">
              <span className="text-gray-500 text-xs font-bold font-mono leading-4 tracking-wide">Tailwind CSS</span>
            </div>
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex justify-center items-center">
              <span className="text-gray-500 text-xs font-bold font-mono leading-4 tracking-wide">Figma Plugin</span>
            </div>
          </div>

        </div>

        {/* Columna Derecha: Imagen */}
        <div className="w-full xl:w-[614px] shrink-0">
          <img 
            src="/NuxioRescueimg/StorybookMockup.png" 
            alt="Governance and Handoff with Storybook" 
            className="w-full h-auto object-contain rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.04)]" 
          />
        </div>

      </div>
    </motion.section>
  );
}