import { motion } from 'framer-motion';

export function Retrospective() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mb-24 font-['Poppins']"
    >
      <div className="w-full bg-gray-50/80 rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-200">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-center lg:items-stretch">
          
          {/* COLUMNA IZQUIERDA: Tarjetas (Ocupa 5 columnas en desktop) */}
          <div className="w-full lg:col-span-5 flex flex-col gap-4">
            
            {/* Tarjeta 1 */}
            <div className="w-full bg-[#1C2433] rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm border border-gray-800">
              <div className="size-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <svg className="size-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <p className="text-white text-sm md:text-[15px] leading-snug font-mono tracking-tight">
                Technical restrictions enhance creativity.
              </p>
            </div>

            {/* Tarjeta 2 */}
            <div className="w-full bg-[#1C2433] rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm border border-gray-800">
              <div className="size-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <svg className="size-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.611c-.47.47-1.088.706-1.705.706s-1.233-.235-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.611-1.611c.25-.25.616-.36.968-.275.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.611c.47-.47 1.088-.706 1.705-.706s1.233.235 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"/>
                </svg>
              </div>
              <p className="text-white text-sm md:text-[15px] leading-snug font-mono tracking-tight">
                Standardizing the basics reduces 80% of the cognitive load.
              </p>
            </div>

            {/* Tarjeta 3 */}
            <div className="w-full bg-[#1C2433] rounded-2xl p-4 md:p-5 flex items-center gap-4 shadow-sm border border-gray-800">
              <div className="size-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                <svg className="size-5 text-slate-800" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m11 17 2 2a1 1 0 1 0 3-3" />
                  <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06 7.06l-1.27 1.27" />
                  <path d="m12.12 11.88-1.55-1.55a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 0 3 3l.88-.88" />
                </svg>
              </div>
              <p className="text-white text-sm md:text-[15px] leading-snug font-mono tracking-tight">
                Design is useless if you don't speak the development language.
              </p>
            </div>

          </div>

          {/* COLUMNA DERECHA: Textos (Ocupa 7 columnas en desktop) */}
          <div className="w-full lg:col-span-7 flex flex-col justify-center gap-6">
            <div className="flex items-center">
              <span className="text-gray-900 text-xs md:text-sm font-bold font-mono uppercase tracking-widest">
                Retrospective
              </span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-slate-900 leading-[1.15] tracking-tight">
              Think like an Engineer,<br className="hidden lg:block" /> Design for Humans
            </h2>
            
            <p className="text-gray-500 text-base md:text-lg font-normal leading-relaxed">
              The biggest challenge was not visual, it was technical. Working with the strict restriction of "don't touch the code architecture" forced me to audit Tailwind classes in the browser and reverse engineer them. I learned that a Design System does not need 100 perfect components to provide value; you need 10 atomic components that developers really want and can use without friction.
            </p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}