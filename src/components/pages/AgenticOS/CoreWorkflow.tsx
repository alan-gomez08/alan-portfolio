import { motion } from 'framer-motion';

export function CoreWorkflow() {
  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 px-4 font-['Geist',_sans-serif]">
      
      {/* HEADER DE LA SECCIÓN */}
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-[800px] z-10 mb-16">
        <span className="text-cyan-400 text-xs md:text-sm font-bold font-['Geist_Mono',_monospace] tracking-[2.64px] uppercase">
          05 — Core Workflows
        </span>
        <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight m-0">
          Agentic OS: The Core Experience
        </h2>
        <p className="text-slate-400 text-lg md:text-xl lg:text-2xl font-normal leading-relaxed max-w-[768px]">
          We visualize the complete platform, orchestrating high-density data and agent control in a unified and efficient dashboard.
        </p>
      </div>

      {/* --- DESKTOP / TABLET VIEW (Single SVG) --- */}
      <div className="hidden md:flex justify-center w-full max-w-[1200px] z-10">
        <motion.img 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          src="/AgenticOsimg/Core workflow.svg" 
          alt="Agentic OS Core Workflow Dashboard" 
          className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]" 
        />
      </div>

      {/* --- MOBILE VIEW (Stacked SVGs) --- */}
      <div className="md:hidden w-full max-w-[500px] flex flex-col items-center gap-8 z-10">
        
        {/* Mobile Mockup 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img 
            src="/AgenticOsimg/Table mockup 1.svg" 
            alt="Dashboard View 1" 
            className="w-full drop-shadow-2xl rounded-lg" 
          />
        </motion.div>

        {/* Mobile Mockup 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full"
        >
          <img 
            src="/AgenticOsimg/Table mockup 2.svg" 
            alt="Dashboard View 2" 
            className="w-full drop-shadow-2xl rounded-lg" 
          />
        </motion.div>

      </div>

    </section>
  );
}