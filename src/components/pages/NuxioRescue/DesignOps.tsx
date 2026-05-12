import { motion } from 'framer-motion';

export function DesignOps() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-32 mb-24 font-['Poppins']"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 px-4 md:px-8 relative z-10">
        
        {/* Columna Izquierda: Textos y Métricas limpios sin paddings falsos */}
        <div className="w-full lg:w-1/2 flex flex-col gap-5 bg-white relative">
          
          <span className="text-blue-500 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-blue-50 w-fit px-2.5 py-1 rounded-sm">
            DESIGN OPS
          </span>
          
          <h3 className="text-slate-900 text-3xl md:text-4xl lg:text-[42px] font-bold leading-[1.15] tracking-tight">
            Reverse Engineering<br className="hidden lg:block"/>and Atomic System
          </h3>
          
          <div className="w-12 h-1 bg-blue-600 rounded-full my-1" />
          
          <p className="text-gray-500 text-base md:text-[17px] font-normal leading-relaxed pr-4 lg:pr-8">
            Standardization of interactive components mapped directly to Tailwind CSS classes. We eliminated layout shifts by unifying borders at 1px and improved the accessibility of the error state following WCAG regulations, all without rewriting the code base.
          </p>

          {/* Métricas / Stats */}
          <div className="flex items-center gap-8 md:gap-12 mt-4">
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl md:text-3xl font-bold text-slate-900">48+</span>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase">Components</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl md:text-3xl font-bold text-slate-900">120+</span>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase">Tokens</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-2xl md:text-3xl font-bold text-slate-900">AA</span>
              <span className="text-[10px] md:text-xs text-gray-400 font-medium tracking-widest uppercase">WCAG Level</span>
            </div>
          </div>

        </div>
        
        {/* Columna Derecha: Imagen ajustada al 50% para emparejar la altura */}
        <div className="w-full lg:w-1/2 flex justify-end drop-shadow-2xl">
          <img 
            src="/NuxioRescueimg/DesignOps.png" 
            alt="Nuxio Design Ops Component States" 
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

      </div>
    </motion.section>
  );
}