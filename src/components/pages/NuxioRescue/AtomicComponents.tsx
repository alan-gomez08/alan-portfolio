import { motion } from 'framer-motion';

export function AtomicComponents() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 md:mt-32 mb-24 font-['Poppins']"
    >
      <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 px-4 md:px-8 relative z-10">
        
        {/* Columna Izquierda: Texto Descriptivo */}
        <div className="w-full lg:w-[33%] flex flex-col gap-6 pt-4 bg-white pr-4 shrink-0 relative">
          <h3 className="text-slate-900 text-2xl md:text-3xl font-bold uppercase">Atomic Components</h3>
          <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
            We defined the fundamental pieces (color, typography, buttons) to guarantee visual consistency and reduce technical debt. By reverse-engineering existing classes, we ensured they were immediately useful.
          </p>
        </div>
        
        {/* Columna Derecha: La Imagen */}
        <div className="w-full lg:w-[67%] flex justify-center p-2 rounded-2xl border border-gray-100 bg-white drop-shadow-xl overflow-hidden">
          <img 
            src="/NuxioRescueimg/AtomicComponets.png" 
            alt="Nuxio Atomic Components Design System" 
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

      </div>
    </motion.section>
  );
}