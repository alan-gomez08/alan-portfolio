import { motion } from 'framer-motion';

export function AgenticHero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center mt-12 md:mt-24 mb-16 md:mb-24 antialiased"
    >
      {/* Contenedor principal limpio, sin bordes ni fondos */}
      <div className="w-full max-w-[1233px] flex flex-col items-center pt-8 md:pt-16">
        
        {/* =========================================
            1. TEXTOS Y TÍTULOS (Centrados)
            ========================================= */}
        <div className="flex flex-col items-center text-center gap-6 md:gap-10 max-w-[1017px] w-full relative z-10 px-6">
          
          {/* Título Principal */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] lg:leading-[106px] tracking-tight m-0">
            Agentic OS: <br className="hidden sm:block" />
            <span className="text-[#A1A1AA] font-normal">From 0 to 1 in the AI ecosystem</span>
          </h1>
          
          {/* Descripción */}
          <p className="text-[#A1A1AA] text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[1.6] lg:leading-[28px] max-w-[900px] m-0">
            Design of a scalable MVP and UI Kit for a B2D (Business to Developer) platform aimed at managing Artificial Intelligence Agents.
          </p>

          {/* =========================================
              BADGES / TAGS DE METADATOS
              ========================================= */}
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-4 md:gap-x-9 mt-4">
            
            {/* Tag 1: Role */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6668 14V12.6667C12.6668 11.9594 12.3859 11.2811 11.8858 10.781C11.3857 10.281 10.7074 10 10.0002 10H6.00016C5.29292 10 4.61464 10.281 4.11454 10.781C3.61445 11.2811 3.3335 11.9594 3.3335 12.6667V14" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.00016 7.33333C9.47292 7.33333 10.6668 6.13943 10.6668 4.66667C10.6668 3.19391 9.47292 2 8.00016 2C6.5274 2 5.3335 3.19391 5.3335 4.66667C5.3335 6.13943 6.5274 7.33333 8.00016 7.33333Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#D4D4D8] text-[13px] md:text-[14px] font-medium leading-5">Lead Product Designer</span>
            </div>

            {/* Separador */}
            <div className="hidden sm:block w-[1px] h-4 bg-[#262626]"></div>

            {/* Tag 2: Duration */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.3335 1.33331V3.99998" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6665 1.33331V3.99998" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.6667 2.66669H3.33333C2.59695 2.66669 2 3.26364 2 4.00002V13.3334C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3334V4.00002C14 3.26364 13.403 2.66669 12.6667 2.66669Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 6.66669H14" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#D4D4D8] text-[13px] md:text-[14px] font-medium leading-5">8 weeks</span>
            </div>

            {/* Separador */}
            <div className="hidden md:block w-[1px] h-4 bg-[#262626]"></div>

            {/* Tag 3: Type */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.55315 1.45331C8.37944 1.37407 8.19074 1.33307 7.99981 1.33307C7.80889 1.33307 7.62019 1.37407 7.44648 1.45331L1.73315 4.05331C1.61485 4.10547 1.51427 4.19091 1.44366 4.29921C1.37304 4.40752 1.33545 4.53402 1.33545 4.66331C1.33545 4.7926 1.37304 4.9191 1.44366 5.0274C1.51427 5.13571 1.61485 5.22114 1.73315 5.27331L7.45315 7.87997C7.62686 7.95921 7.81555 8.00021 8.00648 8.00021C8.19741 8.00021 8.38611 7.95921 8.55981 7.87997L14.2798 5.27997C14.3981 5.22781 14.4987 5.14237 14.5693 5.03407C14.6399 4.92576 14.6775 4.79926 14.6775 4.66997C14.6775 4.54068 14.6399 4.41418 14.5693 4.30588C14.4987 4.19757 14.3981 4.11214 14.2798 4.05997L8.55315 1.45331Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.3335 8C1.33318 8.12751 1.36944 8.25244 1.43798 8.35997C1.50651 8.46749 1.60444 8.55311 1.72016 8.60667L7.4535 11.2133C7.6263 11.2916 7.81381 11.3321 8.0035 11.3321C8.19319 11.3321 8.3807 11.2916 8.5535 11.2133L14.2735 8.61333C14.3915 8.56029 14.4915 8.47406 14.5614 8.36516C14.6312 8.25625 14.6679 8.12937 14.6668 8" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.3335 11.3333C1.33318 11.4608 1.36944 11.5858 1.43798 11.6933C1.50651 11.8008 1.60444 11.8864 1.72016 11.94L7.4535 14.5466C7.6263 14.6249 7.81381 14.6654 8.0035 14.6654C8.19319 14.6654 8.3807 14.6249 8.5535 14.5466L14.2735 11.9466C14.3915 11.8936 14.4915 11.8074 14.5614 11.6985C14.6312 11.5896 14.6679 11.4627 14.6668 11.3333" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#D4D4D8] text-[13px] md:text-[14px] font-medium leading-5">Project 0 to 1</span>
            </div>

            {/* Separador */}
            <div className="hidden sm:block w-[1px] h-4 bg-[#262626]"></div>

            {/* Tag 4: Platform */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.00016 14.6666C11.6821 14.6666 14.6668 11.6819 14.6668 7.99998C14.6668 4.31808 11.6821 1.33331 8.00016 1.33331C4.31826 1.33331 1.3335 4.31808 1.3335 7.99998C1.3335 11.6819 4.31826 14.6666 8.00016 14.6666Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99984 9.33335C8.73622 9.33335 9.33317 8.7364 9.33317 8.00002C9.33317 7.26364 8.73622 6.66669 7.99984 6.66669C7.26346 6.66669 6.6665 7.26364 6.6665 8.00002C6.6665 8.7364 7.26346 9.33335 7.99984 9.33335Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#D4D4D8] text-[13px] md:text-[14px] font-medium leading-5">Web App / SaaS B2B</span>
            </div>

          </div>

        </div>

        {/* =========================================
            2. MOCKUP DASHBOARD
            Ahora sin traslaciones extrañas, simplemente flotando
            suavemente sobre el fondo de la página.
            ========================================= */}
        <div className="relative w-full flex justify-center mt-12 md:mt-20 px-4 md:px-12 pb-0">
          
          {/* EL GLOW CYAN DE FONDO */}
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[70%] h-[70%] bg-[#06B6D4] opacity-20 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
          
          {/* MOCKUP DASHBOARD */}
          <img 
            src="/AgenticOsimg/Dashboard-Hero.svg" 
            alt="Agentic OS Dashboard Interface"
            className="relative z-10 w-full max-w-[1050px] h-auto object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.15)]"
          />
          
        </div>

      </div>
    </motion.section>
  );
}