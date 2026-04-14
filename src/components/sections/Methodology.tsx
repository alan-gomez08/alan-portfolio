import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext'; // <-- Importamos el hook

export function Methodology() {
  const { t } = useLanguage(); // <-- Inicializamos el traductor

  // Movemos el array adentro para que pueda usar la función t()
  const methods = [
    { 
      num: "01", 
      title: t('methodology', 'm1_title'), 
      description: t('methodology', 'm1_desc'), 
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>) 
    },
    { 
      num: "02", 
      title: t('methodology', 'm2_title'), 
      description: t('methodology', 'm2_desc'), 
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>) 
    },
    { 
      num: "03", 
      title: t('methodology', 'm3_title'), 
      description: t('methodology', 'm3_desc'), 
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>) 
    }
  ];

  return (
    <section id="methodology" className="w-full flex justify-center pt-10 pb-24 border-t border-white/5 scroll-mt-14">
      <div className="w-full max-w-[1533px] px-6 md:px-40 flex flex-col gap-12">
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} className="flex flex-col gap-3">
          <span className="text-zinc-500 text-[10px] font-mono uppercase tracking-[0.2em]">
            {t('methodology', 'badge')}
          </span>
          <h2 className="text-gray-200 text-4xl md:text-5xl font-semibold font-sans leading-none">
            {t('methodology', 'title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
          {methods.map((method, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.15 }} className="group flex flex-col gap-6 p-9 bg-zinc-950/60 rounded-xs outline outline-1 outline-white/5 hover:outline-white/20 transition-all duration-300">
              <div className="w-full flex justify-between items-center">
                <div className="text-emerald-700 group-hover:text-emerald-400 transition-colors">{method.icon}</div>
                <span className="text-zinc-600 text-[10px] font-mono tracking-wider">{method.num}</span>
              </div>
              <h3 className="text-gray-200 text-lg font-semibold font-sans">{method.title}</h3>
              <div className="w-full h-px bg-white/5 group-hover:bg-white/10" />
              <p className="text-zinc-400 text-sm leading-relaxed font-sans group-hover:text-zinc-300">{method.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}