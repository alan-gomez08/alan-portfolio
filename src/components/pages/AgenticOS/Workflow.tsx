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

      {/* --- DESKTOP / TABLET VIEW --- */}
      <div className="hidden md:block relative w-full max-w-[1100px] aspect-[1100/899] mt-16 z-10">
        
        {/* --- ANOTACIONES Y FLECHAS (Capa Superior: z-40) --- */}
        
        {/* 1. Texto y Flecha (Arriba) */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute z-40" style={{ left: '28%', top: '-2%' }}
        >
          <div className="text-white text-2xl lg:text-3xl font-normal font-['Caveat',_cursive] leading-none -rotate-3 whitespace-nowrap drop-shadow-md">
            1. Start with the atomic token
          </div>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}
          src="/AgenticOsimg/Arrow 1.svg" alt="Arrow 1" 
          className="absolute z-40 w-[14%] max-w-[150px] object-contain drop-shadow-md" style={{ left: '16%', top: '2%' }}
        />

        {/* 2. Texto y Flecha (Izquierda Abajo) */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.3 }}
          className="absolute z-40" style={{ left: '2%', top: '75%' }}
        >
          <div className="text-white text-2xl lg:text-3xl font-normal font-['Caveat',_cursive] leading-none -rotate-6 whitespace-nowrap drop-shadow-md">
            2. Let AI write the boilerplate
          </div>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
          src="/AgenticOsimg/Arrow 2.svg" alt="Arrow 2" 
          className="absolute z-40 w-[14%] max-w-[150px] object-contain drop-shadow-md" style={{ left: '22%', top: '69%' }}
        />

        {/* 3. Texto y Flecha (Centro Abajo) */}
        <motion.div 
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.4 }}
          className="absolute z-40" style={{ left: '30%', top: '94%' }}
        >
          <div className="text-white text-2xl lg:text-3xl font-normal font-['Caveat',_cursive] leading-none rotate-3 whitespace-nowrap drop-shadow-md">
            3. Auto-documented component
          </div>
        </motion.div>
        <motion.img 
          initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5 }}
          src="/AgenticOsimg/Arrow 3.svg" alt="Arrow 3" 
          className="absolute z-40 w-[12%] max-w-[130px] object-contain drop-shadow-md" style={{ left: '50%', top: '88%' }}
        />


        {/* --- SVGS MOCKUPS (Capas Intermedias: z-10, z-20, z-30) --- */}
        
        {/* Figma Token */}
        <motion.div 
          initial={{ opacity: 0, x: -30, y: -20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute z-10 group"
          style={{ left: '1.86%', top: '7.70%', width: '22%' }}
        >
          <img 
            src="/AgenticOsimg/Figma token-step1.svg" 
            alt="Figma Token" 
            className="w-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500 ease-out" 
          />
        </motion.div>

        {/* Cursor AI */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="absolute z-20 group"
          style={{ left: '20.86%', top: '16.48%', width: '58.36%' }}
        >
          <img 
            src="/AgenticOsimg/Cursor-step2.svg" 
            alt="Cursor IDE" 
            className="w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] group-hover:scale-[1.03] transition-transform duration-500 ease-out" 
          />
        </motion.div>

        {/* Storybook */}
        <motion.div 
          initial={{ opacity: 0, x: 40, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="absolute z-30 group"
          style={{ left: '37.68%', top: '46.63%', width: '54.72%' }}
        >
          <img 
            src="/AgenticOsimg/Storybook-step3.svg" 
            alt="Storybook Component" 
            className="w-full drop-shadow-[0_30px_60px_rgba(0,0,0,0.9)] group-hover:scale-[1.03] transition-transform duration-500 ease-out" 
          />
        </motion.div>

      </div>

      {/* --- MOBILE VIEW --- */}
      <div className="md:hidden w-full max-w-[400px] flex flex-col items-center gap-12 mt-16 z-10">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-4 w-full">
          <span className="text-white text-[28px] font-normal font-['Caveat',_cursive] text-center">1. Start with the atomic token</span>
          <img src="/AgenticOsimg/Arrow 1.svg" alt="Arrow" className="w-12 rotate-90 opacity-80" />
          <img src="/AgenticOsimg/Figma token-step1.svg" alt="Figma" className="w-[70%] drop-shadow-2xl z-10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-4 w-full">
          <span className="text-white text-[28px] font-normal font-['Caveat',_cursive] text-center">2. Let AI write the boilerplate</span>
          <img src="/AgenticOsimg/Arrow 2.svg" alt="Arrow" className="w-12 rotate-90 opacity-80" />
          <img src="/AgenticOsimg/Cursor-step2.svg" alt="Cursor" className="w-full drop-shadow-2xl z-10" />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col items-center gap-4 w-full">
          <span className="text-white text-[28px] font-normal font-['Caveat',_cursive] text-center">3. Auto-documented component</span>
          <img src="/AgenticOsimg/Arrow 3.svg" alt="Arrow" className="w-12 rotate-90 opacity-80" />
          <img src="/AgenticOsimg/Storybook-step3.svg" alt="Storybook" className="w-[90%] drop-shadow-2xl z-10" />
        </motion.div>

      </div>

    </section>
  );
}