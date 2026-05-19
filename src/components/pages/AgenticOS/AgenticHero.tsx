import { motion } from 'framer-motion';

export function AgenticHero() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex justify-center px-4 mt-12 md:mt-24 mb-16 md:mb-24 overflow-hidden antialiased"
    >
      <div className="w-full max-w-[1206px] flex flex-col items-center gap-12">
        
        {/* =========================================
            1. TEXTOS Y TÍTULOS (Centrados)
            ========================================= */}
        <div className="flex flex-col items-center text-center gap-6 max-w-[1017px] w-full relative z-10 px-4">
          
          {/* Título Principal */}
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-[1.1] md:leading-[1.2] lg:leading-[106px] tracking-tight m-0">
            Agentic OS: <br className="hidden sm:block" />
            <span className="text-[#A1A1AA] font-normal">From 0 to 1 in the AI ecosystem</span>
          </h1>
          
          {/* Descripción */}
          <p className="text-[#A1A1AA] text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[1.6] lg:leading-[28px] max-w-[900px] m-0">
            Design of a scalable MVP and UI Kit for a B2D (Business to Developer) platform aimed at managing Artificial Intelligence Agents.
          </p>

          {/* Badges / Tags (Responsive: envuelven en móvil, en línea en desktop) */}
          <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-4 md:gap-x-9 mt-4">
            
            {/* Tag 1: Role */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.6666 14V12.6667C12.6666 11.9594 12.3856 11.2811 11.8855 10.781C11.3854 10.281 10.7072 10 9.99992 10H5.99992C5.29267 10 4.6144 10.281 4.1143 10.781C3.6142 11.2811 3.33325 11.9594 3.33325 12.6667V14" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99992 7.33333C9.47268 7.33333 10.6666 6.13943 10.6666 4.66667C10.6666 3.19391 9.47268 2 7.99992 2C6.52716 2 5.33325 3.19391 5.33325 4.66667C5.33325 6.13943 6.52716 7.33333 7.99992 7.33333Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#D4D4D8] text-[13px] md:text-[14px] font-medium leading-5">Lead Product Designer</span>
            </div>

            {/* Separador (Oculto en móviles chicos) */}
            <div className="hidden sm:block w-[1px] h-4 bg-[#262626]"></div>

            {/* Tag 2: Duration */}
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5.3335 1.33334V4.00001" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10.6665 1.33334V4.00001" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.6667 2.66666H3.33333C2.59695 2.66666 2 3.26361 2 3.99999V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V3.99999C14 3.26361 13.403 2.66666 12.6667 2.66666Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 6.66666H14" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M8.55315 1.45334C8.37944 1.3741 8.19074 1.3331 7.99981 1.3331C7.80889 1.3331 7.62019 1.3741 7.44648 1.45334L1.73315 4.05334C1.61485 4.1055 1.51427 4.19094 1.44366 4.29924C1.37304 4.40755 1.33545 4.53405 1.33545 4.66334C1.33545 4.79263 1.37304 4.91913 1.44366 5.02743C1.51427 5.13574 1.61485 5.22117 1.73315 5.27334L7.45315 7.88C7.62686 7.95924 7.81555 8.00024 8.00648 8.00024C8.19741 8.00024 8.38611 7.95924 8.55981 7.88L14.2798 5.28C14.3981 5.22784 14.4987 5.14241 14.5693 5.0341C14.6399 4.92579 14.6775 4.79929 14.6775 4.67C14.6775 4.54071 14.6399 4.41421 14.5693 4.30591C14.4987 4.1976 14.3981 4.11217 14.2798 4.06L8.55315 1.45334Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.3335 8C1.33318 8.12751 1.36944 8.25244 1.43798 8.35997C1.50651 8.46749 1.60444 8.55311 1.72016 8.60667L7.4535 11.2133C7.6263 11.2916 7.81381 11.3321 8.0035 11.3321C8.19319 11.3321 8.3807 11.2916 8.5535 11.2133L14.2735 8.61333C14.3915 8.56029 14.4915 8.47406 14.5614 8.36516C14.6312 8.25625 14.6679 8.12937 14.6668 8" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1.3335 11.3333C1.33318 11.4609 1.36944 11.5858 1.43798 11.6933C1.50651 11.8008 1.60444 11.8865 1.72016 11.94L7.4535 14.5467C7.6263 14.6249 7.81381 14.6654 8.0035 14.6654C8.19319 14.6654 8.3807 14.6249 8.5535 14.5467L14.2735 11.9467C14.3915 11.8936 14.4915 11.8074 14.5614 11.6985C14.6312 11.5896 14.6679 11.4627 14.6668 11.3333" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
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
                  <path d="M8.00016 14.6667C11.6821 14.6667 14.6668 11.6819 14.6668 8.00001C14.6668 4.31811 11.6821 1.33334 8.00016 1.33334C4.31826 1.33334 1.3335 4.31811 1.3335 8.00001C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.99984 9.33332C8.73622 9.33332 9.33317 8.73637 9.33317 7.99999C9.33317 7.26361 8.73622 6.66666 7.99984 6.66666C7.26346 6.66666 6.6665 7.26361 6.6665 7.99999C6.6665 8.73637 7.26346 9.33332 7.99984 9.33332Z" stroke="#737373" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[#D4D4D8] text-[13px] md:text-[14px] font-medium leading-5">Web App / SaaS B2B</span>
            </div>

          </div>

        </div>

        {/* =========================================
            2. MOCKUP DASHBOARD CON GLOW RESPONSIVE
            ========================================= */}
        <div className="relative w-full flex justify-center mt-8 md:mt-16">
          
          {/* EL GLOW CYAN DE FONDO: 
              Creado con CSS, se adapta al tamaño del dashboard sin pesar 1kb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] bg-[#06B6D4] opacity-20 blur-[80px] md:blur-[120px] rounded-[100%] pointer-events-none mix-blend-screen" />
          
          {/* MOCKUP DASHBOARD (Levantamos el SVG que exportaste) */}
          <img 
            src="/AgenticOsimg/Dashboard-Hero.svg" 
            alt="Agentic OS Dashboard Interface"
            className="relative z-10 w-full max-w-[1200px] h-auto object-contain drop-shadow-[0_0_40px_rgba(6,182,212,0.15)]"
          />
          
        </div>

      </div>
    </motion.section>
  );
}