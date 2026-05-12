import { motion } from 'framer-motion';

export function HeroHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[#0B121C] rounded-[32px] overflow-hidden flex flex-col xl:flex-row relative border border-white/5"
    >
      {/* =========================================
          COLUMNA IZQUIERDA: Textos y KPIs
          ========================================= */}
      <div className="w-full xl:w-[52%] p-8 md:p-12 lg:p-16 flex flex-col gap-8 z-10 shrink-0 justify-center">
        <div className="flex items-center gap-3">
          <div className="size-6 border border-cyan-400 rounded-sm flex items-center justify-center bg-transparent relative shrink-0">
             <div className="w-3 h-2 border-b-[1.5px] border-r-[1.5px] border-white transform rotate-45 mb-0.5" />
             <div className="absolute top-1 right-1 w-1 h-1 bg-cyan-400 rounded-full" />
          </div>
          <span className="text-white text-2xl font-bold font-sans tracking-wide">
            PrintFlow
          </span>
        </div>
        
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-semibold text-white leading-[1.1] tracking-tight">
            Rescue, Standardization and B2B SaaS Evolution.
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            PrintFlow Pro is a comprehensive management and logistics software for printing chains, developed internally at Nuxio.
          </p>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed">
            As a UX/UI Lead, I executed an emergency critical redesign to save an MVP on the verge of being rejected. By reverse engineering and creating a Design System adapted to Tailwind, we transformed an inefficient design into a premium product without discarding the frontend code in production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mt-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-semibold text-white font-mono">14</span>
              <span className="text-4xl font-bold text-white font-mono">Days</span>
            </div>
            <span className="text-white text-xl font-light mt-2">Critical Redesign</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-semibold text-white font-mono">100%</span>
            </div>
            <span className="text-white text-xl font-light mt-2">Approval of Customer</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-5xl font-semibold text-white font-mono">0</span>
              <span className="text-4xl text-white font-mono leading-none mt-1">→</span>
              <span className="text-5xl font-semibold text-white font-mono">1</span>
            </div>
            <span className="text-white text-xl font-light mt-2">Design System Created</span>
          </div>
        </div>
      </div>

      {/* =========================================
          COLUMNA DERECHA: Dashboard Codeado
          ========================================= */}
      <div className="w-full xl:w-[48%] relative flex items-center justify-center xl:justify-start min-h-[400px] xl:min-h-0">
        
        {/* Contenedor con escala. En desktop nace a la izquierda (origin-left) y se desborda hacia la derecha */}
        <div className="absolute xl:relative left-1/2 xl:left-0 top-1/2 xl:top-auto -translate-x-1/2 xl:-translate-x-0 -translate-y-1/2 xl:-translate-y-0 origin-center xl:origin-left scale-[0.55] sm:scale-[0.7] md:scale-[0.85] lg:scale-[1] xl:scale-[0.95] w-[747.5px] h-[432px]">
          
          <div className="w-full h-full rounded-2xl shadow-[0_24px_80px_rgba(0,0,0,0.25)] overflow-hidden flex flex-col bg-white">
            
            {/* Barra Navegador */}
            <div className="w-full h-12 bg-gray-200 px-4 flex items-center gap-3 border-b border-gray-300 shrink-0">
              <div className="flex gap-1.5 shrink-0">
                <div className="size-2.5 rounded-full bg-red-400" />
                <div className="size-2.5 rounded-full bg-amber-400" />
                <div className="size-2.5 rounded-full bg-green-500" />
              </div>
              <div className="w-full max-w-[200px] h-7 bg-white rounded-md border border-gray-300 flex items-center px-3 gap-1.5 shrink-0">
                <div className="size-1.5 bg-green-500 rounded-sm shrink-0" />
                <span className="text-gray-400 text-[11px] font-['Poppins'] truncate">app.saas.io/dashboard</span>
              </div>
            </div>

            {/* Area del Dashboard */}
            <div className="w-full flex-1 bg-gray-100 flex relative overflow-hidden">
              
              {/* Sidebar Oscura */}
              <div className="w-11 h-full bg-gray-900 shrink-0 relative">
                <div className="size-5 left-[11px] top-[14px] absolute inline-flex flex-col justify-start items-start">
                  <div className="self-stretch h-5 relative overflow-hidden">
                    <div className="w-4 h-5 left-[2.44px] top-[1.22px] absolute opacity-60 outline outline-[1.22px] outline-offset-[-0.61px] outline-cyan-400" />
                    <div className="w-2.5 h-2 left-[6.11px] top-[7.33px] absolute outline outline-[1.53px] outline-offset-[-0.76px] outline-white" />
                    <div className="size-1 left-[14.06px] top-[4.28px] absolute bg-cyan-400" />
                  </div>
                </div>
                <div className="size-6 px-1.5 left-[9px] top-[54px] absolute rounded-lg inline-flex justify-center items-center">
                  <div className="size-3 opacity-70 bg-gray-600 rounded-[3px]" />
                </div>
                <div className="size-6 px-1.5 left-[9px] top-[86px] absolute bg-cyan-400/20 rounded-lg inline-flex justify-center items-center">
                  <div className="size-3 bg-cyan-400 rounded-[3px]" />
                </div>
                <div className="size-6 px-1.5 left-[9px] top-[118px] absolute rounded-lg inline-flex justify-center items-center">
                  <div className="size-3 opacity-70 bg-gray-600 rounded-[3px]" />
                </div>
                <div className="size-6 px-1.5 left-[9px] top-[150px] absolute rounded-lg inline-flex justify-center items-center">
                  <div className="size-3 opacity-70 bg-gray-600 rounded-[3px]" />
                </div>
                <div className="size-6 px-1.5 left-[9px] top-[182px] absolute rounded-lg inline-flex justify-center items-center">
                  <div className="size-3 opacity-70 bg-gray-600 rounded-[3px]" />
                </div>
              </div>

              {/* Contenido Principal (Usando Posicionamiento Absoluto Exacto de Figma) */}
              <div className="flex-1 h-full relative font-['Poppins']">
                
                {/* Banner Azul */}
                <div className="absolute left-[10px] top-[10px] w-[683.5px] h-14 bg-gradient-to-r from-sky-950 via-sky-700 via-55% to-sky-500 rounded-[10px] overflow-hidden flex flex-col justify-center px-5">
                  <span className="text-white text-xs font-bold leading-4 z-10">¡Bienvenido de vuelta, Usuario01!</span>
                  <span className="text-blue-100 text-[9px] font-normal leading-3 z-10 mt-0.5">Aquí tienes un resumen de tu desempeño de ventas</span>
                  <div className="size-20 absolute right-[-10px] top-[-20px] bg-cyan-400/20 rounded-full" />
                </div>
                
                {/* Tabs */}
                <div className="absolute left-[10px] top-[74.5px] w-[683.5px] h-5 flex items-center gap-2">
                  <div className="px-3 h-full bg-cyan-900 rounded-[10px] flex items-center justify-center">
                    <span className="text-white text-[9px] font-semibold leading-none">Ventas por Día</span>
                  </div>
                  <div className="px-2 h-full flex items-center justify-center">
                    <span className="text-gray-400 text-[9px] font-normal leading-none">Ventas Comparativas</span>
                  </div>
                </div>

                {/* Grafico Ventas */}
                <div className="absolute left-[10px] top-[102px] w-[683.5px] h-[160px] bg-white rounded-[10px] outline outline-1 outline-offset-[-1px] outline-gray-100 p-3 flex flex-col">
                  <div className="flex justify-between items-start w-full px-1">
                    <div className="flex flex-col gap-0.5">
                        <span className="text-gray-800 text-[10px] font-bold leading-[1]">Ventas por Día</span>
                        <span className="text-gray-400 text-[8px] font-normal leading-[1]">11/9/25 – Hoy</span>
                    </div>
                    <div className="flex justify-center items-center gap-1.5 px-2 h-5 border border-gray-200 rounded-sm shrink-0">
                      <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Corte Actual</span>
                      <span className="text-gray-500 text-[7px] font-normal leading-none">▾</span>
                    </div>
                  </div>

                  <div className="w-full h-24 border-b border-gray-100 mt-2 flex items-end gap-4 px-2 pb-1 relative">
                      <div className="absolute w-[645.5px] border-t border-gray-100 bottom-[22px] left-1" />
                      <div className="absolute w-[645.5px] border-t border-gray-100 bottom-[45px] left-1" />
                      <div className="absolute w-[645.5px] border-t border-gray-100 bottom-[68px] left-1" />

                      <div className="w-1.5 h-16 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-12 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-9 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-16 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-12 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-12 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-16 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-9 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-20 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-9 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-20 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-12 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-20 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-12 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />
                      <div className="w-1.5 h-20 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md relative z-10" />

                      <div className="absolute right-[215px] top-[-5px] px-[6px] py-[3px] bg-white rounded shadow-sm border border-gray-200 z-20">
                          <span className="text-slate-500 text-[7px] font-normal leading-none block">5995$</span>
                      </div>

                      <div className="absolute w-20 h-16 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md bottom-1 right-[190px]" />
                      <div className="absolute w-20 h-14 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md bottom-1 right-[100px]" />
                      <div className="absolute w-20 h-20 bg-gradient-to-b from-sky-500 to-sky-500/5 rounded-md bottom-1 right-[10px]" />
                  </div>
                  
                  <div className="w-[620px] flex justify-between items-center px-4 pt-1.5">
                      <span className="text-gray-400 text-[7px] font-normal leading-none">L01</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">M02</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">X03</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">J04</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">V05</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">L08</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">M09</span>
                      <span className="text-gray-400 text-[7px] font-normal leading-none">X10</span>
                  </div>
                </div>

                {/* Tarjeta 1 - Indicadores (Con Flexbox Perfecto) */}
                <div className="absolute left-[10px] top-[276.5px] w-[320px] h-[96px] bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100 p-[11px] flex flex-col justify-between">
                    <span className="text-slate-900 text-[9px] font-bold leading-none mb-1">Indicadores de Ventas</span>
                    
                    <div className="flex flex-col w-full h-full justify-evenly pt-1">
                        <div className="flex justify-between items-center w-full border-b border-gray-50 pb-1">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 bg-blue-100 rounded-[3px] shrink-0" />
                                <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Ticket Prom.</span>
                            </div>
                            <span className="text-slate-900 text-[8px] font-bold leading-none">$173,730</span>
                        </div>

                        <div className="flex justify-between items-center w-full border-b border-gray-50 pb-1">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 bg-green-100 rounded-[3px] shrink-0" />
                                <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Total Ventas</span>
                            </div>
                            <span className="text-slate-900 text-[8px] font-bold leading-none">$145,280</span>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 bg-red-100 rounded-[3px] shrink-0" />
                                <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Costo Total</span>
                            </div>
                            <span className="text-slate-900 text-[8px] font-bold leading-none">$1,240</span>
                        </div>
                    </div>
                </div>

                {/* Tarjeta 2 - Resumen (Con Flexbox Perfecto) */}
                <div className="absolute left-[355.75px] top-[276.5px] w-[320px] h-[96px] bg-white rounded-lg outline outline-1 outline-offset-[-1px] outline-gray-100 p-[11px] flex flex-col justify-between">
                    <span className="text-slate-900 text-[9px] font-bold leading-none mb-1">Resumen Financiero</span>
                    
                    <div className="flex flex-col w-full h-full justify-evenly pt-1">
                        <div className="flex justify-between items-center w-full border-b border-gray-50 pb-1">
                            <div className="flex items-center gap-1.5">
                                <div className="w-[10px] h-[10px] bg-sky-100 rounded-[2px] shrink-0" />
                                <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Total Ingresos</span>
                            </div>
                            <span className="text-slate-900 text-[8px] font-bold leading-none">$173,730</span>
                        </div>

                        <div className="flex justify-between items-center w-full border-b border-gray-50 pb-1">
                            <div className="flex items-center gap-1.5">
                                <div className="w-[10px] h-[10px] bg-red-100 rounded-[2px] shrink-0" />
                                <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Total Gastos</span>
                            </div>
                            <span className="text-slate-900 text-[8px] font-bold leading-none">$28,450</span>
                        </div>

                        <div className="flex justify-between items-center w-full">
                            <div className="flex items-center gap-1.5">
                                <div className="w-[10px] h-[10px] bg-green-100 rounded-[2px] shrink-0" />
                                <span className="text-gray-500 text-[8px] font-normal leading-none whitespace-nowrap">Total Neto</span>
                            </div>
                            <span className="text-slate-900 text-[8px] font-bold leading-none">$8,920</span>
                        </div>
                    </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}