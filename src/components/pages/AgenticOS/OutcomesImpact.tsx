import { motion } from 'framer-motion';

export function OutcomesImpact() {
  return (
    <section className="relative w-full flex flex-col items-center pt-24 pb-32 px-4 font-['Geist',_sans-serif]">
      
      {/* HEADER DE LA SECCIÓN */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center text-center gap-6 w-full max-w-[800px] z-10 mb-16 lg:mb-24"
      >
        <span className="text-cyan-400 text-xs md:text-sm font-bold font-['Geist_Mono',_monospace] tracking-[2.64px] uppercase">
          06 — OUTCOMES & IMPACT
        </span>
        <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-semibold leading-tight tracking-tight m-0">
          Results and Team Validation
        </h2>
      </motion.div>

      {/* --- GRID PRINCIPAL --- */}
      <div className="w-full max-w-[1152px] grid grid-cols-1 lg:grid-cols-2 gap-6 z-10">
        
        {/* COLUMNA IZQUIERDA: Métricas */}
        <div className="flex flex-col gap-6">
          {/* Card 60% */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex-1 bg-neutral-900 rounded-2xl border border-zinc-800 p-8 md:p-10 flex flex-col justify-center"
          >
            <h3 className="text-cyan-400 text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight mb-4 leading-none">
              60%
            </h3>
            <h4 className="text-white text-xl md:text-2xl font-medium mb-2 tracking-tight">
              Handoff acceleration
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Reduction of time to code by automating base components.
            </p>
          </motion.div>

          {/* Card 100% */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 bg-neutral-900 rounded-2xl border border-zinc-800 p-8 md:p-10 flex flex-col justify-center"
          >
            <h3 className="text-cyan-400 text-5xl md:text-6xl lg:text-[64px] font-semibold tracking-tight mb-4 leading-none">
              100%
            </h3>
            <h4 className="text-white text-xl md:text-2xl font-medium mb-2 tracking-tight">
              Visual Consistency
            </h4>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed">
              Full fidelity guarantee between the atomic design in Figma and the final implementation in Storybook.
            </p>
          </motion.div>
        </div>

        {/* COLUMNA DERECHA: Testimonial */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-full bg-neutral-950 rounded-2xl border border-zinc-800 p-8 md:p-12 flex flex-col shadow-[0_40px_80px_-30px_rgba(0,0,0,0.80),_0_0_80px_-30px_rgba(45,212,191,0.15)] relative overflow-hidden"
        >
          {/* Comilla gigante decorativa */}
          <div className="text-cyan-400 text-[80px] md:text-[120px] leading-none font-['Georgia',_serif] absolute top-6 left-8 md:left-12 opacity-90 select-none">
            “
          </div>
          
          <p className="text-white text-xl md:text-2xl lg:text-[28px] font-normal font-['Georgia',_serif] italic leading-relaxed mt-16 md:mt-24 mb-12 flex-1">
            Alan has a technical insight rarely seen in UX. Their AI handoff flow saved us weeks of layout. The screens arrive ready to integrate.
          </p>
          
          <div className="w-full h-px bg-zinc-800 mb-6" />
          
          <div className="flex flex-col gap-1">
            <span className="text-white text-sm font-semibold font-['Inter',_sans-serif]">
              Tech Lead Frontend
            </span>
            <span className="text-cyan-400 text-xs font-['Geist_Mono',_monospace] tracking-wide">
              @ Agnetic
            </span>
          </div>
        </motion.div>

      </div>

      {/* --- FOOTER: NEXT STEPS --- */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full max-w-[1152px] mt-24 pt-8 md:pt-12 border-t border-zinc-800 flex flex-col md:flex-row gap-6 md:gap-12 items-start"
      >
        <span className="text-cyan-400 text-xs font-['Geist_Mono',_monospace] font-bold tracking-widest whitespace-nowrap mt-1">
          NEXT STEPS →
        </span>
        <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-[800px]">
          Building publicly and sharing technical workflow with the community — documenting the modular design process, layout tricks, and AI integration in short formats for designers and developers.
        </p>
      </motion.div>

    </section>
  );
}