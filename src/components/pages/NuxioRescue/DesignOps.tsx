import { motion } from 'framer-motion';

export function DesignOps() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-24 mb-24 font-['Poppins'] px-4"
    >
      <div className="w-full xl:w-fit mx-auto bg-gray-50 rounded-[32px] shadow-md px-8 py-12 flex flex-col xl:flex-row items-center gap-16">
        
        {/* Columna Izquierda */}
        <div className="w-full xl:w-[460px] flex flex-col justify-start items-start gap-6 shrink-0">
          
          <div className="px-2 py-1 bg-blue-50 rounded-sm flex justify-center items-center gap-2.5">
            <span className="text-blue-600 text-xs font-bold font-['Geist_Mono'] uppercase leading-4 tracking-wide">
              DESIGN OPS
            </span>
          </div>
          
          <h3 className="w-full xl:w-[460px] text-gray-900 text-4xl font-bold leading-[48px]">
            Reverse Engineering and Atomic System
          </h3>
          
          <div className="relative">
            <svg width="40" height="2" viewBox="0 0 40 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1C0 0.447715 0.447715 0 1 0H39C39.5523 0 40 0.447715 40 1C40 1.55228 39.5523 2 39 2H0.999999C0.447714 2 0 1.55228 0 1Z" fill="#2563EB"/>
            </svg>
          </div>
          
          <p className="w-full xl:w-[460px] text-gray-500 text-base font-normal leading-6">
            Standardization of interactive components mapped directly to Tailwind CSS classes. We eliminated layout shifts by unifying borders at 1px and improved the accessibility of the error state following WCAG regulations, all without rewriting the code base.
          </p>

          {/* Bloque de métricas: Sin tipografía mono, usando flex-1 para que respiren parejo */}
          <div className="w-full xl:w-[460px] pt-2 flex justify-start items-start gap-6">
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <span className="text-gray-900 text-3xl font-bold leading-8">48+</span>
              <span className="text-gray-400 text-xs font-normal uppercase leading-4 tracking-wide">Components</span>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <span className="text-gray-900 text-3xl font-bold leading-8">120+</span>
              <span className="text-gray-400 text-xs font-normal uppercase leading-4 tracking-wide">Tokens</span>
            </div>
            <div className="flex-1 flex flex-col justify-start items-start gap-1">
              <span className="text-gray-900 text-3xl font-bold leading-8">AA</span>
              <span className="text-gray-400 text-xs font-normal uppercase leading-4 tracking-wide">WCAG Level</span>
            </div>
          </div>

        </div>
        
        {/* Columna Derecha */}
        <div className="w-full xl:w-[614px] shrink-0">
          <img 
            src="/NuxioRescueimg/DesignOps.png" 
            alt="Nuxio Design Ops Component States" 
            className="w-full h-auto object-contain rounded-3xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_4px_16px_0px_rgba(0,0,0,0.06),0px_1px_3px_0px_rgba(0,0,0,0.04)]" 
          />
        </div>

      </div>
    </motion.section>
  );
}