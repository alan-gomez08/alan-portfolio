import { motion } from 'framer-motion';

export function InfoBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-slate-900 rounded-3xl shadow-[0px_0px_60px_-20px_rgba(0,225,217,0.08)] border border-slate-800 overflow-hidden font-['Poppins']"
    >
      <div className="flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-800">
        
        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 lg:py-11">
          <div className="size-11 bg-gray-900 rounded-full border border-slate-800 flex justify-center items-center">
            <div className="size-5 relative overflow-hidden">
              <div className="w-3 h-[5px] left-[1.67px] top-[12.50px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="size-1.5 left-[4.17px] top-[2.50px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="w-[5px] h-[3.33px] left-[13.33px] top-[7.50px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
            </div>
          </div>
          <span className="text-gray-400 text-base font-medium tracking-wide">ROLE</span>
          <span className="text-white text-base font-normal text-center">UX/UI Lead</span>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 lg:py-11">
          <div className="size-11 bg-gray-900 rounded-full border border-slate-800 flex justify-center items-center">
            <div className="size-5 relative overflow-hidden">
              <div className="w-1.5 h-2 left-[2.50px] top-[2.50px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="w-1.5 h-1 left-[11.67px] top-[2.50px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="w-1.5 h-2 left-[11.67px] top-[10px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="w-1.5 h-1 left-[2.50px] top-[13.33px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
            </div>
          </div>
          <span className="text-gray-400 text-base font-medium tracking-wide">PLATFORM</span>
          <span className="text-white text-base font-normal text-center">Web App / SaaS B2B</span>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 lg:py-11">
          <div className="size-11 bg-gray-900 rounded-full border border-slate-800 flex justify-center items-center">
            <div className="size-5 relative overflow-hidden">
              <div className="w-[3.33px] h-1.5 left-[15px] top-[6.67px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="w-[3.33px] h-1.5 left-[1.67px] top-[6.67px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
              <div className="w-1 h-3.5 left-[7.92px] top-[3.33px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
            </div>
          </div>
          <span className="text-gray-400 text-base font-medium tracking-wide uppercase">STACK & TOOLS</span>
          <span className="text-white text-base font-normal text-center">Figma / React</span>
        </div>

        <div className="flex-1 flex flex-col justify-center items-center gap-4 p-8 lg:py-11">
          <div className="size-11 bg-gray-900 rounded-full border border-slate-800 flex justify-center items-center">
            <div className="size-5 relative overflow-hidden">
              <div className="size-4 left-[2.50px] top-[1.66px] absolute outline outline-[1.25px] outline-offset-[-0.63px] outline-cyan-400" />
            </div>
          </div>
          <span className="text-gray-400 text-base font-medium tracking-wide text-center">CRITICAL TIMELINE</span>
          <span className="text-white text-base font-normal text-center">14 Days (Rescue)</span>
        </div>

      </div>
    </motion.div>
  );
}