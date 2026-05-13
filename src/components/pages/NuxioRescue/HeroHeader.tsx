import { motion } from 'framer-motion';

export function HeroHeader() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-4 mt-16 md:mt-24 mb-24 antialiased"
    >
      {/* Contenedor principal */}
      <div className="w-full max-w-[1206px] min-h-[611px] bg-[#0B121C] rounded-[32px] overflow-hidden relative border border-white/5 shadow-2xl flex flex-col xl:flex-row items-stretch">
        
        {/* =========================================
            COLUMNA IZQUIERDA: Textos y KPIs
            ========================================= */}
        {/* Bajamos un poco el ancho a 55% para darle más aire a la imagen */}
        <div className="w-full xl:w-[55%] p-8 md:p-10 xl:p-14 flex flex-col gap-8 z-10 relative shrink-0">
          
          {/* Logo Original */}
          <div className="flex items-center gap-4">
            <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.6" d="M14.5 1.44444L25.7778 7.22222V18.7778L14.5 24.5556L3.22223 18.7778V7.22222L14.5 1.44444Z" stroke="#00E1D9" strokeWidth="1.22222"/>
              <path d="M8.05554 17.3333V8.66667L14.5 14.4444L20.9444 8.66667V17.3333" stroke="white" strokeWidth="1.52778" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20.9444 9.38889C22.2791 9.38889 23.3611 8.41884 23.3611 7.22222C23.3611 6.02561 22.2791 5.05556 20.9444 5.05556C19.6097 5.05556 18.5278 6.02561 18.5278 7.22222C18.5278 8.41884 19.6097 9.38889 20.9444 9.38889Z" fill="#00E1D9"/>
            </svg>
            <span className="text-white text-2xl font-bold font-['Poppins'] leading-8">
              PrintFlow
            </span>
          </div>
          
          <div className="flex flex-col gap-6">
            <h1 className="w-full text-4xl md:text-5xl xl:text-[48px] font-semibold text-white leading-[1.15] xl:leading-[52px] tracking-tight font-['Poppins']">
              Rescue, Standardization and <br className="hidden xl:block" />
              B2B SaaS Evolution.
            </h1>
            <p className="text-gray-400 text-lg xl:text-xl font-light font-['Poppins'] leading-relaxed">
              PrintFlow Pro is a comprehensive management and logistics software for printing chains, developed internally at Nuxio.
            </p>
            <p className="text-gray-400 text-lg xl:text-xl font-light font-['Poppins'] leading-relaxed">
              As a UX/UI Lead, I executed an emergency critical redesign to save an MVP on the verge of being rejected. By reverse engineering and creating a Design System adapted to Tailwind, we transformed an inefficient design into a premium product without discarding the frontend code in production.
            </p>
          </div>

          {/* KPIs */}
          <div className="flex flex-col md:flex-row flex-wrap gap-8 xl:gap-12 mt-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-baseline gap-2">
                <span className="text-white text-5xl font-semibold font-['Poppins'] leading-none">14</span>
                <span className="text-white text-3xl font-bold font-['Poppins'] leading-none">Days</span>
              </div>
              <span className="text-white text-lg xl:text-xl font-light font-['Poppins'] mt-2">Critical Redesign</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-end h-[48px] pb-1">
                <span className="text-white text-5xl font-semibold font-['Poppins'] leading-none">100%</span>
              </div>
              <span className="text-white text-lg xl:text-xl font-light font-['Poppins'] mt-2">Approval of Customer</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 h-[48px] pb-1">
                <span className="text-white text-5xl font-semibold font-['Poppins'] leading-none">0</span>
                <span className="text-white text-4xl font-normal font-mono leading-none mb-1">→</span>
                <span className="text-white text-5xl font-semibold font-['Poppins'] leading-none">1</span>
              </div>
              <span className="text-white text-lg xl:text-xl font-light font-['Poppins'] mt-2">Design System Created</span>
            </div>
          </div>
        </div>

        {/* =========================================
            COLUMNA DERECHA: Dashboard SVG
            ========================================= */}
        {/* Subimos el ancho a 45% */}
        <div className="w-full xl:w-[45%] relative min-h-[300px] xl:min-h-0 flex items-center">
          
          {/* Desktop: 
              - xl:-left-32: Mueve la imagen 128px hacia la izquierda.
              - w-[900px]: La hacemos un poquito más grande para que gane protagonismo.
          */}
          <div className="hidden xl:block absolute xl:-left-32 w-[900px] pointer-events-none">
            <img 
              src="/NuxioRescueimg/dashboard-hero.svg" 
              alt="PrintFlow Dashboard" 
              className="w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            />
          </div>

          {/* Mobile: Imagen centrada debajo del texto */}
          <div className="xl:hidden w-full p-8 pt-0">
             <img 
              src="/NuxioRescueimg/dashboard-hero.svg" 
              alt="PrintFlow Dashboard" 
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>

      </div>
    </motion.section>
  );
}