import { motion } from 'framer-motion';

export function HeroHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-4 mt-12 md:mt-24 mb-16 md:mb-24 overflow-hidden antialiased"
    >
      <div className="w-full max-w-[1206px] flex justify-center">
        
        {/* Contenedor principal: fluido en móvil (flex-col), rígido a 1206x650 en desktop (block) */}
        <div 
          className="hero-scale relative bg-[#0B121C] rounded-[32px] overflow-hidden shrink-0 shadow-2xl border border-white/5 w-full lg:w-[1206px] h-auto lg:h-[650px] flex flex-col lg:block"
          style={{ fontFamily: "'Geist', 'Poppins', sans-serif" }}
        >
          
          {/* =========================================
              COLUMNA IZQUIERDA: Textos y KPIs
              Fluido en móvil (relative, p-8), rígido en desktop (absolute, w-600)
              ========================================= */}
          <div className="relative lg:absolute z-10 flex flex-col justify-between w-full lg:w-[600px] p-6 sm:p-10 lg:p-0 lg:left-[48px] lg:top-[48px] lg:bottom-[48px] gap-10 lg:gap-0">
            
            {/* Bloque superior: Logo + Título + Párrafos */}
            <div className="flex flex-col gap-6">
              
              {/* Logo PrintFlow */}
              <div className="flex items-center gap-3">
                <div className="w-[24px] h-[22px] lg:w-[29px] lg:h-[26px] relative flex justify-center items-center shrink-0">
                  <svg width="100%" height="100%" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6" d="M14.5 1.44446L25.7778 7.22224V18.7778L14.5 24.5556L3.22223 18.7778V7.22224L14.5 1.44446Z" stroke="#00E1D9" strokeWidth="1.22222"/>
                    <path d="M8.05554 17.3334V8.66669L14.5 14.4445L20.9444 8.66669V17.3334" stroke="white" strokeWidth="1.52778" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9444 9.38888C22.2791 9.38888 23.3611 8.41883 23.3611 7.22221C23.3611 6.02559 22.2791 5.05554 20.9444 5.05554C19.6097 5.05554 18.5278 6.02559 18.5278 7.22221C18.5278 8.41883 19.6097 9.38888 20.9444 9.38888Z" fill="#00E1D9"/>
                  </svg>
                </div>
                <div className="text-white text-[20px] lg:text-[24px] font-bold leading-none tracking-tight">
                  PrintFlow
                </div>
              </div>
              
              {/* Título Principal */}
              <h1 className="text-white text-[32px] sm:text-[40px] lg:text-[42px] font-semibold leading-[1.2] lg:leading-[50px] tracking-tight m-0 lg:pr-4">
                Rescue, Standardization and <br className="hidden lg:block"/>B2B SaaS Evolution.
              </h1>
              
              {/* Descripción */}
              <div className="flex flex-col gap-4 text-[#9CA3AF] text-[16px] lg:text-[18px] font-light leading-[1.6] lg:leading-[30px] lg:pr-8">
                <p className="m-0">
                  PrintFlow Pro is a comprehensive management and logistics software for printing chains, developed internally at Nuxio.
                </p>
                <p className="m-0">
                  As a UX/UI Lead, I executed an emergency critical redesign to save an MVP on the verge of being rejected. By reverse engineering and creating a Design System adapted to Tailwind, we transformed an inefficient design into a premium product without discarding the frontend code in production.
                </p>
              </div>
            </div>

            {/* Bloque inferior: KPIs
                En móvil se envuelven (flex-wrap), en desktop quedan en línea recta (flex-nowrap) */}
            <div className="flex flex-wrap lg:flex-nowrap items-start justify-start gap-6 lg:gap-8 w-full mt-2 lg:mt-auto">
              
              {/* KPI 1 */}
              <div className="flex flex-col gap-1 w-[40%] lg:w-[140px]">
                <div className="flex items-center gap-2 h-[32px] lg:h-[36px]">
                  <span className="text-white text-[28px] lg:text-[34px] font-semibold leading-none">14</span>
                  <span className="text-white text-[18px] lg:text-[22px] font-bold leading-none mt-1">Days</span>
                </div>
                <span className="text-[#9CA3AF] text-[14px] lg:text-[15px] font-light leading-snug whitespace-normal lg:whitespace-nowrap">
                  Critical Redesign
                </span>
              </div>
              
              {/* KPI 2 */}
              <div className="flex flex-col gap-1 w-[50%] lg:w-[180px]">
                <div className="flex items-center h-[32px] lg:h-[36px]">
                  <span className="text-white text-[28px] lg:text-[34px] font-semibold leading-none">100%</span>
                </div>
                <span className="text-[#9CA3AF] text-[14px] lg:text-[15px] font-light leading-snug whitespace-normal lg:whitespace-nowrap">
                  Approval of the Customer
                </span>
              </div>
              
              {/* KPI 3 */}
              <div className="flex flex-col gap-1 w-full sm:w-[45%] lg:w-[160px] mt-2 lg:mt-0">
                <div className="flex items-center gap-2 h-[32px] lg:h-[36px]">
                  <span className="text-white text-[28px] lg:text-[34px] font-semibold leading-none">0</span>
                  <div className="flex items-center justify-center pt-1">
                    <svg width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13.6667H25.3333M13.6667 25.3333L25.3333 13.6667L13.6667 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-[28px] lg:text-[34px] font-semibold leading-none">1</span>
                </div>
                <span className="text-[#9CA3AF] text-[14px] lg:text-[15px] font-light leading-snug whitespace-normal lg:whitespace-nowrap">
                  Design System Created
                </span>
              </div>

            </div>

          </div>

          {/* =========================================
              MOCKUP DASHBOARD
              Móvil: relative, entra en el flujo, tiene padding para no chocar y se ve 100% completo.
              Desktop: absolute, clavado a la derecha abajo con sus 480px fijos.
              ========================================= */}
          <div className="relative lg:absolute z-0 pointer-events-none drop-shadow-[-20px_20px_60px_rgba(0,0,0,0.5)] w-full lg:w-[480px] self-center lg:self-end lg:right-0 lg:bottom-0 p-6 lg:p-0 mt-4 lg:mt-0">
            <img 
              src="/NuxioRescueimg/dashboard-hero.svg" 
              alt="PrintFlow Dashboard"
              className="w-full h-auto object-contain object-center lg:object-right-bottom" 
            />
          </div>

        </div>

        {/* CSS: El hack de escalado solo funciona en pantallas grandes, para no pisar la fluidez del móvil */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1240px) and (min-width: 1024px) {
            .hero-scale {
              transform: scale(calc((100vw - 32px) / 1206));
              transform-origin: top center;
              margin-bottom: calc(-650px * (1 - ((100vw - 32px) / 1206)));
            }
          }
        `}} />
      </div>
    </motion.section>
  );
}