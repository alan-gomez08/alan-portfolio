import { motion } from 'framer-motion';

export function DesignPrinciples() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center gap-12 mt-16 md:mt-24 font-['Poppins']"
    >
      {/* Título de la Sección */}
      <div className="w-full text-center">
        <h2 className="text-gray-900 text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight">
          Design Principles
        </h2>
      </div>

      {/* Grilla de Principios (Responsive: 1 columna en móvil, 2 en desktop) */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Tarjeta 1: Zero Rewrite */}
        <div className="bg-gray-50 p-8 md:p-10 flex flex-col gap-8 rounded-2xl md:rounded-tl-[40px] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="size-12 rounded-full bg-cyan-100/50 flex items-center justify-center text-cyan-600">
            {/* Ícono de Código */}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">Zero Rewrite (Technical Synergy)</h3>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Design thinking strictly about the limitations of the existing code and the React + Tailwind stack.
            </p>
          </div>
        </div>

        {/* Tarjeta 2: Reduced Cognitive Load */}
        <div className="bg-gray-50 p-8 md:p-10 flex flex-col gap-8 rounded-2xl md:rounded-tr-[40px] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="size-12 rounded-full bg-indigo-100/50 flex items-center justify-center text-indigo-600">
            {/* Ícono de Cerebro / Simplificación */}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">Reduced Cognitive Load</h3>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Simplify data density for operators who use the platform 8 hours a day.
            </p>
          </div>
        </div>

        {/* Tarjeta 3: Error Prevention */}
        <div className="bg-gray-50 p-8 md:p-10 flex flex-col gap-8 rounded-2xl md:rounded-bl-[40px] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="size-12 rounded-full bg-emerald-100/50 flex items-center justify-center text-emerald-600">
            {/* Ícono de Escudo / Seguridad */}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">Error Prevention</h3>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Hide destructive actions and create operational failsafe flows.
            </p>
          </div>
        </div>

        {/* Tarjeta 4: Modular Scalability */}
        <div className="bg-gray-50 p-8 md:p-10 flex flex-col gap-8 rounded-2xl md:rounded-br-[40px] border border-gray-100 hover:shadow-lg transition-shadow duration-300">
          <div className="size-12 rounded-full bg-purple-100/50 flex items-center justify-center text-purple-600">
            {/* Ícono de Cubo / Modularidad */}
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
            </svg>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-gray-900 text-xl md:text-2xl font-semibold">Modular Scalability</h3>
            <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
              Think in atomic components so that future screens are put together like Lego pieces.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}