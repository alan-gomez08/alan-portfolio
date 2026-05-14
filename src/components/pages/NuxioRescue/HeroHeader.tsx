import { motion } from 'framer-motion';

export function HeroHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-4 mt-16 md:mt-24 mb-24 overflow-hidden antialiased"
    >
      {/* Contenedor wrapper para centrar y escalar automáticamente en notebooks */}
      <div className="w-full max-w-[1206px] flex justify-center">
        
        {/* El canvas exacto: 1206px de ancho x 660px de alto. 
            Flex items-stretch asegura que las columnas ocupen todo el alto */}
        <div 
          className="hero-scale relative bg-[#0B121C] rounded-[32px] overflow-hidden shrink-0 shadow-2xl border border-white/5 flex"
          style={{ width: '1206px', height: '660px', fontFamily: "'Geist', 'Poppins', sans-serif" }}
        >
          
          {/* =========================================
              COLUMNA IZQUIERDA: Textos y KPIs
              Usamos flex-col y justify-between para que los KPIs se claven al fondo y respiren
              ========================================= */}
          <div className="flex flex-col justify-between w-[680px] h-full p-[48px] z-10 relative">
            
            {/* Bloque superior: Logo + Título + Párrafos */}
            <div className="flex flex-col gap-6">
              
              {/* Logo PrintFlow */}
              <div className="flex items-center gap-3">
                <div className="w-[29px] h-[26px] relative flex justify-center items-center">
                  <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6" d="M14.5 1.44446L25.7778 7.22224V18.7778L14.5 24.5556L3.22223 18.7778V7.22224L14.5 1.44446Z" stroke="#00E1D9" strokeWidth="1.22222"/>
                    <path d="M8.05554 17.3334V8.66669L14.5 14.4445L20.9444 8.66669V17.3334" stroke="white" strokeWidth="1.52778" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20.9444 9.38888C22.2791 9.38888 23.3611 8.41883 23.3611 7.22221C23.3611 6.02559 22.2791 5.05554 20.9444 5.05554C19.6097 5.05554 18.5278 6.02559 18.5278 7.22221C18.5278 8.41883 19.6097 9.38888 20.9444 9.38888Z" fill="#00E1D9"/>
                  </svg>
                </div>
                <div className="text-white text-[26px] font-bold leading-none tracking-tight">
                  PrintFlow
                </div>
              </div>
              
              {/* Título Principal */}
              <h1 className="text-white text-[48px] font-semibold leading-[52.80px] tracking-tight m-0">
                Rescue, Standardization and <br/>B2B SaaS Evolution.
              </h1>
              
              {/* Descripción con max-width para que no choque con la imagen */}
              <div className="flex flex-col gap-4 text-[#9CA3AF] text-[20px] font-light leading-[30px] max-w-[620px]">
                <p className="m-0">
                  PrintFlow Pro is a comprehensive management and logistics software for printing chains, developed internally at Nuxio.
                </p>
                <p className="m-0">
                  As a UX/UI Lead, I executed an emergency critical redesign to save an MVP on the verge of being rejected. By reverse engineering and creating a Design System adapted to Tailwind, we transformed an inefficient design into a premium product without discarding the frontend code in production.
                </p>
              </div>
            </div>

            {/* Bloque inferior: KPIs (Se queda clavado en el padding-bottom gracias al justify-between) */}
            <div className="flex items-start gap-8 w-full mt-auto">
              
              {/* KPI 1 */}
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-2 h-[40px]">
                  <span className="text-white text-[38px] font-semibold leading-none">14</span>
                  <span className="text-white text-[28px] font-bold leading-none mt-1">Days</span>
                </div>
                <span className="text-[#9CA3AF] text-[18px] font-light leading-snug whitespace-nowrap">
                  Critical Redesign
                </span>
              </div>
              
              {/* KPI 2 */}
              <div className="flex flex-col gap-1 flex-[1.2]">
                <div className="flex items-center h-[40px]">
                  <span className="text-white text-[38px] font-semibold leading-none">100%</span>
                </div>
                <span className="text-[#9CA3AF] text-[18px] font-light leading-snug whitespace-nowrap">
                  Approval of the Customer
                </span>
              </div>
              
              {/* KPI 3 */}
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex items-center gap-3 h-[40px]">
                  <span className="text-white text-[38px] font-semibold leading-none">0</span>
                  <div className="flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 13.6667H25.3333M13.6667 25.3333L25.3333 13.6667L13.6667 2" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-white text-[38px] font-semibold leading-none">1</span>
                </div>
                <span className="text-[#9CA3AF] text-[18px] font-light leading-snug whitespace-nowrap">
                  Design System Created
                </span>
              </div>

            </div>

          </div>

          {/* =========================================
              MOCKUP DASHBOARD (Anclado a la derecha, sin tapar los textos)
              ========================================= */}
          <div className="absolute right-0 top-[55px] w-[560px] h-full pointer-events-none z-0">
            <img 
              src="/NuxioRescueimg/dashboard-hero.svg" 
              alt="PrintFlow Dashboard"
              className="w-full h-full object-cover object-left-top drop-shadow-[-20px_20px_60px_rgba(0,0,0,0.5)]" 
            />
          </div>

        </div>

        {/* CSS para escalar proporcionalmente en la notebook */}
        <style dangerouslySetInnerHTML={{__html: `
          @media (max-width: 1240px) {
            .hero-scale {
              transform: scale(calc((100vw - 32px) / 1206));
              transform-origin: top center;
              margin-bottom: calc(-660px * (1 - ((100vw - 32px) / 1206)));
            }
          }
        `}} />
      </div>
    </motion.section>
  );
}