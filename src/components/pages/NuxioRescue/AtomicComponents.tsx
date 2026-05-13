import { motion } from 'framer-motion';

export function AtomicComponents() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-24 mb-24 font-['Poppins'] px-4"
    >
      <div className="w-full xl:w-fit mx-auto bg-gray-50 rounded-[32px] shadow-md px-8 py-12 flex flex-col xl:flex-row items-start justify-center gap-16">
        
        {/* Columna Visual (Imagen): 
            - order-2 (en mobile se va para abajo)
            - xl:order-1 (en desktop vuelve a ser primero/izquierda)
        */}
        <div className="w-full xl:w-[614px] shrink-0 flex items-center order-2 xl:order-1">
          <img 
            src="/NuxioRescueimg/AtomicComponets.png" 
            alt="Nuxio Atomic Components" 
            className="w-full h-auto object-contain rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.04)]" 
          />
        </div>

        {/* Columna de Texto: 
            - order-1 (en mobile se pone primero/arriba)
            - xl:order-2 (en desktop se pone segundo/derecha)
        */}
        <div className="w-full xl:w-[460px] flex flex-col justify-start items-start gap-6 shrink-0 order-1 xl:order-2">
          
          <div className="px-2 py-1 bg-blue-50 rounded-sm flex justify-center items-center gap-2.5">
            <span className="text-blue-600 text-xs font-bold font-mono uppercase leading-4 tracking-wide">
              ATOMIC COMPONENTS
            </span>
          </div>
          
          <h3 className="w-full text-gray-900 text-4xl font-bold leading-[48px]">
            Hierarchy of Actions and States
          </h3>
          
          <div className="relative">
            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1C0 0.447715 0.447715 0 1 0H39C39.5523 0 40 0.447715 40 1C40 1.55228 39.5523 2 39 2H0.999999C0.447714 2 0 1.55228 0 1Z" fill="#006690"/>
            </svg>
          </div>
          
          <p className="w-full text-gray-500 text-base font-normal leading-6">
            Definition of primary and secondary buttons with clear states (default, hover, disabled) to avoid operational errors. We prioritize visual contrast and semiotic semantics to guide the user, ensuring that complementary actions never visually compete with the main 'Happy Path'.
          </p>

          <div className="w-full flex flex-wrap items-center gap-3 pt-2">
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex items-center gap-1.5 h-6">
              <span className="text-gray-500 text-[10px] opacity-60">▲</span>
              <span className="text-gray-500 text-xs font-mono tracking-wide">2 variants</span>
            </div>
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex items-center gap-1.5 h-6">
              <span className="text-gray-500 text-[10px] opacity-60">◎</span>
              <span className="text-gray-500 text-xs font-mono tracking-wide">3 states</span>
            </div>
            <div className="px-2 py-1 bg-white rounded-lg border border-gray-200 flex items-center gap-1.5 h-6">
              <span className="text-gray-500 text-[10px] opacity-60">⬡</span>
              <span className="text-gray-500 text-xs font-mono tracking-wide">10px radius</span>
            </div>
          </div>

          <div className="w-full flex flex-col gap-3 pt-2">
            <span className="text-gray-400 text-[10px] font-bold font-mono uppercase tracking-wide">Color tokens</span>
            
            <div className="w-full flex flex-col gap-2">
              <div className="flex items-center justify-between w-full h-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-[#006690] rounded-[4px]" />
                  <span className="text-gray-700 text-xs font-mono">brand-primary</span>
                </div>
                <span className="text-gray-400 text-xs font-medium font-mono">#006690</span>
              </div>
              
              <div className="flex items-center justify-between w-full h-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-[#00445A] rounded-[4px]" />
                  <span className="text-gray-700 text-xs font-mono">brand-hover</span>
                </div>
                <span className="text-gray-400 text-xs font-medium font-mono">#00445A</span>
              </div>
              
              <div className="flex items-center justify-between w-full h-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-4 h-4 bg-[#E2E2E2] rounded-[4px] border border-gray-200" />
                  <span className="text-gray-700 text-xs font-mono">state-disabled</span>
                </div>
                <span className="text-gray-400 text-xs font-mono">#E2E2E2</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  );
}