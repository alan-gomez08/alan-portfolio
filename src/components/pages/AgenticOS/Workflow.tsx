import { motion } from 'framer-motion';

export function Workflow() {
  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 px-4 font-['Geist',_sans-serif]">
      
      {/* Fondo Radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] max-w-[1400px] h-[1035px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-800/0 to-transparent pointer-events-none -z-10" />

      {/* HEADER DE LA SECCIÓN */}
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-[768px] z-10">
        <span className="text-[#2DD4BF] text-xs md:text-sm font-bold font-['Geist_Mono',_monospace] tracking-[2.64px]">
          04 — WORKFLOW
        </span>
        <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight m-0">
          From Figma to Storybook
        </h2>
      </div>

      {/* --- DESKTOP / TABLET VIEW (Layout Consolidado) --- */}
      <div className="hidden md:flex justify-center w-full max-w-[1100px] mt-16 z-10">
        <motion.img 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/AgenticOsimg/Workflow.svg" 
          alt="Workflow from Figma to Storybook" 
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
        />
      </div>

      {/* --- MOBILE VIEW (Cascada individual) --- */}
      <div className="md:hidden w-full max-w-[400px] flex flex-col items-center gap-16 mt-16 z-10">
        
        {/* Mobile Step 1 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-6 w-full">
          <img src="/AgenticOsimg/Text 1.svg" alt="Step 1 Text" className="w-[80%] max-w-[250px] object-contain drop-shadow-md" />
          <img src="/AgenticOsimg/Figma token-step1.svg" alt="Figma" className="w-[70%] drop-shadow-2xl z-10" />
        </motion.div>

        {/* Mobile Step 2 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-6 w-full">
          <img src="/AgenticOsimg/Text 2.svg" alt="Step 2 Text" className="w-[80%] max-w-[250px] object-contain drop-shadow-md" />
          <img src="/AgenticOsimg/Cursor-step2.svg" alt="Cursor" className="w-full drop-shadow-2xl z-10" />
        </motion.div>

        {/* Mobile Step 3 */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-6 w-full">
          <img src="/AgenticOsimg/Text 3.svg" alt="Step 3 Text" className="w-[80%] max-w-[250px] object-contain drop-shadow-md" />
          <img src="/AgenticOsimg/Storybook-step3.svg" alt="Storybook" className="w-[90%] drop-shadow-2xl z-10" />
        </motion.div>

      </div>

    </section>
  );
}