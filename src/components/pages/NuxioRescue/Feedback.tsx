import { motion } from 'framer-motion';

export function Feedback() {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mb-24 font-['Poppins']"
    >
      <div className="w-full bg-[#F5F5F5] rounded-[32px] p-8 md:p-12 lg:p-16 border border-gray-200 flex flex-col gap-10 md:gap-12">
        
        {/* Cabecera del Feedback */}
        <div className="flex flex-col gap-5 max-w-[1000px]">
          <div className="w-fit px-3 py-1 bg-gray-200/80 rounded-md border border-gray-200">
            <span className="text-gray-900 text-xs font-bold font-mono uppercase tracking-wide">FEEDBACK</span>
          </div>
          
          <h2 className="text-slate-900 text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight">
            Real Impact on the Business
          </h2>
          
          <p className="text-gray-500 text-base md:text-[17px] font-normal leading-relaxed">
            The biggest learning was verifying that technical restrictions enhance creativity. Working with the strict rule of "don't touch the code architecture" forced me to do reverse engineering. I discovered that a good Design System doesn't need 100 perfect components; You need the right 10 pieces that restore customer trust and streamline developers' work.
          </p>
        </div>

        {/* Tarjetas de Testimonios */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Tarjeta 1 - Pedro */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col gap-6">
            <div className="flex justify-start">
              {/* Comillas Celeste */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-cyan-400" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h2v-4h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a8 8 0 0 1 -8 8z" />
                <path d="M18 21h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h2v-4h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a8 8 0 0 1 -8 8z" />
              </svg>
            </div>
            
            <p className="text-gray-900 text-sm md:text-[15px] font-medium font-mono leading-relaxed tracking-tight flex-1">
              "The change was radical. We went from an interface that gave us doubts to a premium product that we are proud to show. Visual order resolved 80% of our friction."
            </p>
            
            <div className="flex flex-col gap-0.5 pt-4">
              <span className="text-gray-900 text-sm font-bold">Pedro Gonzalez</span>
              <span className="text-gray-400 text-xs font-normal">Stakeholder / Cliente Final</span>
            </div>
          </div>

          {/* Tarjeta 2 - Brenda */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col gap-6">
            <div className="flex justify-start">
              {/* Comillas Azul */}
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-blue-600" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 21h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h2v-4h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a8 8 0 0 1 -8 8z" />
                <path d="M18 21h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h2v-4h-4a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v10a8 8 0 0 1 -8 8z" />
              </svg>
            </div>
            
            <p className="text-gray-900 text-sm md:text-[15px] font-medium font-mono leading-relaxed tracking-tight flex-1">
              "MVP's rescue was a total success. The ability to sort out the chaos by standardizing components without making us rewrite the front-end saved us months of development."
            </p>
            
            <div className="flex flex-col gap-0.5 pt-4">
              <span className="text-gray-900 text-sm font-bold">Brenda Rangel</span>
              <span className="text-gray-400 text-xs font-normal">CEO, Nuxio</span>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}