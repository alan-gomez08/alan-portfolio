import { motion } from 'framer-motion';

export function TimelineSprints() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-24 font-['Poppins']"
    >
      <div className="w-full bg-white rounded-3xl shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.08)] border border-gray-100 flex flex-col overflow-hidden">
        
        {/* Cabecera */}
        <div className="w-full px-6 md:px-10 py-8 border-b border-gray-100 flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="size-2 bg-indigo-500 rounded-full" />
            <span className="text-gray-400 text-sm md:text-base font-normal tracking-wide uppercase">Project Planning</span>
          </div>
          <h2 className="text-gray-900 text-2xl md:text-3xl font-semibold">Timeline Sprints</h2>
        </div>

        {/* Grilla del Timeline - 4 Columnas sin scroll */}
        <div className="w-full p-6 md:px-8 lg:px-6 xl:px-10 md:py-8">
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-gray-100 lg:min-h-[380px]">
            
            {/* SPRINT 1 */}
            <div className="flex flex-col lg:px-4 xl:px-6 min-w-0">
              <div className="flex flex-col mb-1 justify-start">
                <span className="text-gray-700 text-sm font-semibold">SPRINT 1</span>
                <span className="text-gray-400 text-[10px] uppercase tracking-wide">WEEK 1</span>
              </div>
              
              {/* Tarjeta Píldora SPRINT 1 */}
              <div className="mt-3 lg:mt-4 relative flex items-center gap-2.5 bg-amber-50 rounded-2xl shadow-sm border border-amber-200 p-1.5 pr-3 w-full hover:-translate-y-1 transition-transform group">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-amber-500 opacity-70 rounded-r-full" />
                
                <div className="size-9 shrink-0 ml-1.5 bg-amber-300 rounded-full flex items-center justify-center text-amber-800 shadow-[0_2px_6px_rgba(252,211,77,0.5)]">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                </div>
                
                <div className="flex flex-col flex-1 min-w-0 justify-center">
                  <span className="text-gray-900 text-xs xl:text-sm font-semibold leading-tight truncate">Audit and Triage</span>
                  <span className="text-gray-500 text-[9px] xl:text-[10px] leading-tight mt-0.5 truncate">Diagnosis & stabilization</span>
                </div>
                
                <div className="px-2 py-0.5 bg-amber-300 rounded-full shrink-0 flex items-center justify-center">
                  <span className="text-amber-800 text-[9px] font-bold uppercase tracking-tight">W1</span>
                </div>
              </div>
            </div>

            {/* SPRINT 2 */}
            <div className="flex flex-col lg:px-4 xl:px-6 min-w-0">
              <div className="flex flex-col mb-1 justify-start">
                <span className="text-gray-700 text-sm font-semibold">SPRINT 2</span>
                <span className="text-gray-400 text-[10px] uppercase tracking-wide">WEEK 2</span>
              </div>
              
              {/* Tarjeta Píldora SPRINT 2 */}
              <div className="mt-3 lg:mt-24 relative flex items-center gap-2.5 bg-rose-50 rounded-2xl shadow-sm border border-rose-200 p-1.5 pr-3 w-full hover:-translate-y-1 transition-transform group">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-rose-500 opacity-70 rounded-r-full" />
                
                <div className="size-9 shrink-0 ml-1.5 bg-rose-200 rounded-full flex items-center justify-center text-rose-800 shadow-[0_2px_6px_rgba(254,205,211,0.5)]">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                </div>
                
                <div className="flex flex-col flex-1 min-w-0 justify-center">
                  <span className="text-gray-900 text-xs xl:text-sm font-semibold leading-tight truncate">Standardization</span>
                  <span className="text-gray-500 text-[9px] xl:text-[10px] leading-tight mt-0.5 truncate">Tailwind without rewrite</span>
                </div>
                
                <div className="px-2 py-0.5 bg-rose-200 rounded-full shrink-0 flex items-center justify-center">
                  <span className="text-rose-800 text-[9px] font-bold uppercase tracking-tight">W2</span>
                </div>
              </div>
            </div>

            {/* SPRINT 3 */}
            <div className="flex flex-col lg:px-4 xl:px-6 min-w-0">
              <div className="flex flex-col mb-1 justify-start">
                <span className="text-gray-700 text-sm font-semibold">SPRINT 3</span>
                <span className="text-gray-400 text-[10px] uppercase tracking-wide">WEEK 3-4</span>
              </div>
              
              {/* Tarjeta Píldora SPRINT 3 */}
              <div className="mt-3 lg:mt-48 relative flex items-center gap-2.5 bg-blue-50 rounded-2xl shadow-sm border border-blue-200 p-1.5 pr-3 w-full hover:-translate-y-1 transition-transform group">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-blue-500 opacity-70 rounded-r-full" />
                
                <div className="size-9 shrink-0 ml-1.5 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 shadow-[0_2px_6px_rgba(191,219,254,0.5)]">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                </div>
                
                <div className="flex flex-col flex-1 min-w-0 justify-center">
                  <span className="text-gray-900 text-xs xl:text-sm font-semibold leading-tight truncate">Re-architecture</span>
                  <span className="text-gray-500 text-[9px] xl:text-[10px] leading-tight mt-0.5 truncate">Pages into modals</span>
                </div>
                
                <div className="px-2 py-0.5 bg-blue-200 rounded-full shrink-0 flex items-center justify-center">
                  <span className="text-blue-800 text-[9px] font-bold uppercase tracking-tight">W3</span>
                </div>
              </div>
            </div>

            {/* SPRINT 4 */}
            <div className="flex flex-col lg:pl-4 xl:pl-6 min-w-0">
              <div className="flex flex-col mb-1 justify-start">
                <span className="text-gray-700 text-sm font-semibold">SPRINT 4</span>
                <span className="text-gray-400 text-[10px] uppercase tracking-wide">WEEK 5-6</span>
              </div>
              
              {/* Tarjeta Píldora SPRINT 4 */}
              <div className="mt-3 lg:mt-[270px] relative flex items-center gap-2.5 bg-emerald-50 rounded-2xl shadow-sm border border-emerald-200 p-1.5 pr-3 w-full hover:-translate-y-1 transition-transform group">
                <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-emerald-500 opacity-70 rounded-r-full" />
                
                <div className="size-9 shrink-0 ml-1.5 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-800 shadow-[0_2px_6px_rgba(167,243,208,0.5)]">
                  <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                </div>
                
                <div className="flex flex-col flex-1 min-w-0 justify-center">
                  <span className="text-gray-900 text-xs xl:text-sm font-semibold leading-tight truncate">Handoff & QA</span>
                  <span className="text-gray-500 text-[9px] xl:text-[10px] leading-tight mt-0.5 truncate">Storybook documentation</span>
                </div>
                
                <div className="px-2 py-0.5 bg-emerald-200 rounded-full shrink-0 flex items-center justify-center">
                  <span className="text-emerald-800 text-[9px] font-bold uppercase tracking-tight">W4</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Leyenda Inferior */}
        <div className="w-full bg-gray-50/50 px-6 md:px-10 py-6 border-t border-gray-100 flex flex-wrap items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-2">
            <div className="size-2 bg-amber-500 rounded-full shrink-0" />
            <span className="text-gray-600 text-[10px] md:text-xs">UI Audit and Rescue</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 bg-rose-500 rounded-full shrink-0" />
            <span className="text-gray-600 text-[10px] md:text-xs">Standardization and MVP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 bg-blue-500 rounded-full shrink-0" />
            <span className="text-gray-600 text-[10px] md:text-xs">Re-architecture of UX Flows</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-2 bg-emerald-500 rounded-full shrink-0" />
            <span className="text-gray-600 text-[10px] md:text-xs">Handoff and Technical QA</span>
          </div>
        </div>

      </div>
    </motion.section>
  );
}