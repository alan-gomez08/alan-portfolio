import { motion } from 'framer-motion';

export function AgenticContext() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full flex flex-col items-center gap-12 md:gap-16 pt-16 pb-8 px-4"
    >
      {/* =========================================
          HEADER DE LA SECCIÓN
          ========================================= */}
      <div className="flex flex-col items-center text-center gap-4 w-full max-w-3xl">
        <span className="text-[#22D3EE] text-xs md:text-sm font-bold font-['Geist_Mono',_monospace] uppercase tracking-[0.2em]">
          02 — CONTEXT
        </span>
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight m-0">
          The Challenge and the Solution
        </h2>
      </div>

      {/* =========================================
          GRILLA DE TARJETAS (Responsive)
          ========================================= */}
      <div className="w-full max-w-[1100px] grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* TARJETA 1: THE PROBLEM */}
        <div className="flex flex-col items-start gap-4 p-8 md:p-10 bg-[#111113] rounded-[16px] border border-[#27272A] hover:bg-[#141417] transition-colors duration-300">
          {/* Icono Problem */}
          <div className="w-11 h-11 bg-red-500/10 rounded-lg border border-red-500/20 flex justify-center items-center mb-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.1083 15L11.4416 3.33332C11.2962 3.07682 11.0854 2.86347 10.8307 2.71504C10.576 2.56661 10.2864 2.4884 9.99161 2.4884C9.69678 2.4884 9.40724 2.56661 9.1525 2.71504C8.89777 2.86347 8.68697 3.07682 8.54161 3.33332L1.87494 15C1.72801 15.2544 1.65096 15.5432 1.65162 15.8371C1.65227 16.1309 1.73059 16.4194 1.87865 16.6732C2.0267 16.927 2.23923 17.1371 2.49469 17.2823C2.75014 17.4275 3.03945 17.5026 3.33327 17.5H16.6666C16.959 17.4997 17.2462 17.4225 17.4993 17.2761C17.7525 17.1297 17.9626 16.9192 18.1087 16.6659C18.2548 16.4126 18.3316 16.1253 18.3316 15.8329C18.3315 15.5405 18.2545 15.2532 18.1083 15Z" stroke="#F87171" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 7.5V10.8333" stroke="#F87171" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 14.1666H10.0083" stroke="#F87171" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <span className="text-[#71717A] text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em]">
            THE PROBLEM
          </span>
          <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight m-0">
            Cognitive Density vs. Efficiency
          </h3>
          <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed m-0">
            Designing for AI engineers requires absolute precision. The challenge was to manage a massive volume of raw data (token consumption, real-time logs, latency and costs of multiple LLMs) without generating visual fatigue. Traditional technical tools often sacrifice usability for functionality, resulting in overwhelming interfaces.
          </p>
        </div>

        {/* TARJETA 2: THE SOLUTION */}
        <div className="flex flex-col items-start gap-4 p-8 md:p-10 bg-[#111113] rounded-[16px] border border-[#27272A] hover:bg-[#141417] transition-colors duration-300">
          {/* Icono Solution */}
          <div className="w-11 h-11 bg-teal-500/10 rounded-lg border border-teal-500/20 flex justify-center items-center mb-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.75016 13.75C2.50016 14.8 2.0835 17.9167 2.0835 17.9167C2.0835 17.9167 5.20016 17.5 6.25016 16.25C6.84183 15.55 6.8335 14.475 6.17516 13.825C5.85125 13.5159 5.42457 13.3372 4.97702 13.3234C4.52946 13.3095 4.09256 13.4615 3.75016 13.75Z" stroke="#2DD4BF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5L7.5 10C7.94345 8.84957 8.50184 7.74676 9.16667 6.70838C10.1377 5.15587 11.4897 3.87758 13.0942 2.99512C14.6986 2.11266 16.5022 1.65535 18.3333 1.66671C18.3333 3.93338 17.6833 7.91671 13.3333 10.8334C12.2807 11.499 11.164 12.0573 10 12.5Z" stroke="#2DD4BF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.50016 10.0001H3.3335C3.3335 10.0001 3.79183 7.47506 5.00016 6.66672C6.35016 5.76672 9.16683 6.66672 9.16683 6.66672" stroke="#2DD4BF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5V16.6667C10 16.6667 12.525 16.2084 13.3333 15C14.2333 13.65 13.3333 10.8334 13.3333 10.8334" stroke="#2DD4BF" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          <span className="text-[#71717A] text-[11px] md:text-xs font-semibold uppercase tracking-[0.15em]">
            THE SOLUTION
          </span>
          <h3 className="text-white text-2xl md:text-3xl font-semibold leading-tight m-0">
            Modular and Native Ecosystem
          </h3>
          <p className="text-[#A1A1AA] text-sm md:text-base leading-relaxed m-0">
            We developed an MVP supported by an atomic UI Kit and a deep Dark Mode, designed to reduce glare and eye strain. We prioritize typographic contrast and hierarchy in Data Tables, allowing the engineering team to iterate and scale new functionality quickly without breaking visual coherence.
          </p>
        </div>

      </div>
    </motion.section>
  );
}